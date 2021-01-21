import React, { useEffect, useState } from 'react';
import * as Sentry from '@sentry/react';
import { AmplifySignIn, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Auth from '@aws-amplify/auth';
import { Modal } from 'reactstrap';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { listCourses } from '../graphql/queries';
import { createCourse, updateCourse, deleteCourse } from '../graphql/mutations';
import {
  CreateCourseInput,
  DeleteCourseInput,
  ListCoursesQuery,
  UpdateCourseInput,
} from '../API';
import awsmobile from '../aws-exports';
import './Lectures.scss';

type Courses = NonNullable<
  NonNullable<ListCoursesQuery['listCourses']>['items']
>;

Auth.configure(awsmobile);

export default function Lectures(): JSX.Element {
  const [courses, setCourses] = useState<Courses>([]);
  const [courseName, setCourseName] = useState('');
  const [courseToDelete, setCourseToDelete] = useState('');
  const [numberOfLectures, setNumberOfLectures] = useState('');
  const [modal, setModal] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      if (
        user?.signInUserSession?.accessToken?.payload?.[
          'cognito:groups'
        ]?.includes('Admin')
      ) {
        setIsAdmin(true);
      }
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  const getCourses = async () => {
    try {
      const json = (await API.graphql({
        query: listCourses,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListCoursesQuery>;

      setCourses(json.data?.listCourses?.items ?? []);
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    getCourses();
  }, [isAdmin]);

  const addCoruse = async () => {
    if (courseName && numberOfLectures) {
      try {
        const lectures = [];

        for (let i = 1; i < parseInt(numberOfLectures, 10) + 1; i += 1) {
          lectures.push({ viewed: false, number: i.toString() });
        }

        const input: CreateCourseInput = {
          id: courseName,
          lectures,
        };
        await API.graphql({
          query: createCourse,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        setModal('');
        setCourseName('');
        setNumberOfLectures('');
        getCourses();
      } catch (e) {
        Sentry.captureException(e);
      }
    }
  };

  const removeCourse = async () => {
    if (courseToDelete) {
      try {
        const input: DeleteCourseInput = {
          id: courseToDelete,
        };
        await API.graphql({
          query: deleteCourse,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });

        setModal('');
        setCourseToDelete('');
        getCourses();
      } catch (e) {
        Sentry.captureException(e);
      }
    }
  };

  const setLectureViewed = async (
    courseId: string,
    courseIndex: number,
    lectureIndex: number,
    newState: boolean,
  ) => {
    try {
      const courseLectures = courses[courseIndex]?.lectures;
      if (courseLectures) {
        const lectures = [];
        const updatedLectures = [];

        for (let i = 0; i < courseLectures.length; i += 1) {
          if (i === lectureIndex) {
            updatedLectures.push({
              ...courseLectures[i],
              viewed: newState,
              number: (i + 1).toString(),
            });
            lectures.push({ viewed: newState, number: (i + 1).toString() });
          } else {
            updatedLectures.push({
              ...courseLectures[i],
              viewed: courseLectures[i].viewed,
              number: (i + 1).toString(),
            });
            lectures.push({
              viewed: courseLectures[i].viewed,
              number: (i + 1).toString(),
            });
          }
        }

        const allCourses = [...courses];
        const modifiedLecture = courses[courseIndex];

        if (modifiedLecture) {
          modifiedLecture.lectures = updatedLectures;
          allCourses[courseIndex] = modifiedLecture;
          setCourses(allCourses);
        }

        const input: UpdateCourseInput = {
          id: courseId,
          lectures,
        };

        await API.graphql({
          query: updateCourse,
          variables: { input },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
      }
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        slot="sign-in"
        hideSignUp
        handleAuthStateChange={checkUser}
      />
      {isAdmin ? (
        <div className="tracker-wrapper">
          <h1>Jon&apos;s Weekly Lecture Tracker</h1>
          <Modal isOpen={modal === 'delete'}>
            <div className="add-course-modal">
              <input
                value={courseToDelete}
                onChange={(e) => setCourseToDelete(e.target.value)}
                placeholder="Course code"
              />
              <button
                type="submit"
                onClick={removeCourse}
                className="modal-btn red"
              >
                Delete
              </button>
              <button
                type="submit"
                onClick={() => {
                  setModal('');
                  setCourseToDelete('');
                }}
                className="modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
          <Modal isOpen={modal === 'add'}>
            <div className="add-course-modal">
              <input
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Course code"
              />
              <input
                value={numberOfLectures}
                onChange={(e) => setNumberOfLectures(e.target.value)}
                placeholder="Number of lectures"
              />
              <button
                type="submit"
                onClick={addCoruse}
                className="modal-btn green"
              >
                Save
              </button>
              <button
                type="submit"
                onClick={() => {
                  setModal('');
                  setNumberOfLectures('');
                  setCourseName('');
                }}
                className="modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
          <div className="courses-wrapper-desktop">
            {courses?.map((course, courseIndex) => {
              return (
                <div key={course?.id} className="course-wrapper">
                  <div className="course-code">{course?.id}</div>
                  {course?.lectures?.map((lecture, lectureIndex) => {
                    return (
                      <button
                        key={lecture?.number + course?.id}
                        aria-label={`set status for ${course.id}, lecture ${lecture?.number}`}
                        type="button"
                        className={`lecture-btn ${
                          lecture?.viewed ? 'green' : 'red'
                        }`}
                        onClick={() =>
                          setLectureViewed(
                            course.id,
                            courseIndex,
                            lectureIndex,
                            !lecture?.viewed,
                          )
                        }
                      >
                        Lecture {lecture?.number}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="menu-btns">
            <button
              type="button"
              onClick={() => setModal('add')}
              style={{ background: 'royalblue', color: 'white' }}
            >
              Add Course
            </button>
            <button
              type="button"
              onClick={() => setModal('delete')}
              style={{ background: 'crimson', color: 'white' }}
            >
              Delete Course
            </button>
            <button
              type="button"
              onClick={() => Auth.signOut()}
              style={{ background: 'orange', color: 'white' }}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>You&apos;re not supposed to be here!</div>
      )}
    </AmplifyAuthenticator>
  );
}
