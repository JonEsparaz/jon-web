import React, { useEffect, useState } from 'react';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Modal } from 'reactstrap';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { listCourses } from '../graphql/queries';
import { createCourse, updateCourse } from '../graphql/mutations';
import { CreateCourseInput, ListCoursesQuery, UpdateCourseInput } from '../API';

type Courses = NonNullable<
  NonNullable<ListCoursesQuery['listCourses']>['items']
>;

function Lectures(): JSX.Element {
  const [courses, setCourses] = useState<Courses>([]);
  const [courseName, setCourseName] = useState('');
  const [numberOfLectures, setNumberOfLectures] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const json = (await API.graphql({
          query: listCourses,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<ListCoursesQuery>;

        setCourses(json.data?.listCourses?.items ?? []);
      } catch (e) {
        console.debug(e);
      }
    };

    getCourses();
  }, []);

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

        setModal(false);
      } catch (e) {
        console.debug(e);
      }
    }
  };

  const setLectureViewed = async (
    courseId: string,
    courseIndex: number,
    lectureIndex: number,
    newState: boolean,
  ) => {
    if (courseName && numberOfLectures) {
      try {
        const lectures = courses[courseIndex]?.lectures;
        if (lectures && lectures.length > lectureIndex) {
          lectures[lectureIndex] = {
            __typename: 'Lecture',
            viewed: newState,
            number: (lectureIndex + 1).toString(),
          };

          const allCourses = [...courses];
          const modifiedLecture = courses[courseIndex];

          if (modifiedLecture) {
            modifiedLecture.lectures = lectures;
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
        console.debug(e);
      }
    }
  };

  return (
    <div>
      <AmplifySignOut />
      <Modal isOpen={modal}>
        <input
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          value={numberOfLectures}
          onChange={(e) => setNumberOfLectures(e.target.value)}
        />
        <button type="submit" onClick={addCoruse}>
          Save
        </button>
      </Modal>
      <button type="button" onClick={() => setModal(true)}>
        Add Course
      </button>
      {courses?.map((course, courseIndex) => {
        return (
          <div key={course?.id}>
            <div>{course?.id}</div>
            {course?.lectures?.map((lecture, lectureIndex) => {
              return (
                <div key={lecture?.number + course?.id}>
                  <button
                    aria-label={`set status for ${course.id}, lecture ${lecture?.number}`}
                    type="button"
                    className={lecture?.viewed ? 'viewed' : 'not-viewed'}
                    onClick={() =>
                      setLectureViewed(
                        course.id,
                        courseIndex,
                        lectureIndex,
                        !lecture?.viewed,
                      )
                    }
                  />
                  <div>Lecture {lecture?.number}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default withAuthenticator(Lectures);
