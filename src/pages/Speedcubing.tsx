import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { isMobile } from 'react-device-detect';
import Page from '../components/Page';
import './Speedcubing.scss';

export default function Speedcubing(): JSX.Element {
  const [video, setVideo] = useState('');
  const videoData = [
    {
      id: 'E5h2XIfgcow',
      text: 'North American Record: 7.57 3x3 One-Handed Solve',
    },
    {
      id: 'U5x6YN1k6T8',
      text: "1st Place @ Newmarket Open 2019: 7.39 3x3 Rubik's Cube Average",
    },
    {
      id: 'aJKcaV2tP_o',
      text:
        '2nd Place @ Canadian Championship 2019: 12.94 3x3 One-Handed Average',
    },
  ];

  const handleOpen = (data: string) => {
    if (isMobile || window.innerWidth < 768) {
      window.location.assign(`https://www.youtube.com/watch?v=${data}`);
    } else {
      setVideo(data);
    }
  };

  const videoModal = () => {
    return (
      <Modal isOpen={Boolean(video)} className="modal-custom">
        <ModalHeader toggle={() => setVideo('')} />
        <ModalBody className="modal-body-custom">
          <iframe
            // Reactstrap's ModalBody will not allow keyboard focus by default
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="video-player"
            title="Video Player"
            src={`https://www.youtube.com/embed/${video}?autoplay=1&&origin=https://jonesparaz.ca`}
          />
        </ModalBody>
      </Modal>
    );
  };

  return (
    <Page mode="dark">
      {videoModal()}
      <div className="container">
        <h1 className="text-center text-uppercase">Speedcubing</h1>
        <p className="mx-2">
          For the past {new Date().getFullYear() - 2013} years, I have competed
          in World Cube Association competitions. In 2018, I broke the North
          American Record for solving the Rubik&apos;s Cube one-handed with a
          time of 7.57 seconds. At the time, this ranked me second in the world.
          Today, I organize and officiate competitions as a Junior Delegate for
          the World Cube Association.
        </p>
        <h2 className="mt-5 mb-4 text-center text-uppercase">Highlight Reel</h2>
        <div className="row">
          {videoData.map((item) => {
            return (
              <div className="col-lg-4 d-flex" key={item.id}>
                <Card className="mx-lg-1 mx-md-5 mb-4 rounded-0">
                  <CardBody className="d-flex flex-column">
                    <button
                      type="button"
                      aria-label={`Open video: ${item.text}`}
                      className="image-container"
                      onClick={() => {
                        handleOpen(item.id);
                      }}
                    >
                      <CardImg
                        className="yt-image rounded-0"
                        src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                        alt="YouTube thumbnail"
                      />
                      <img
                        className="play-arrow"
                        src="/svg/play_arrow-white.svg"
                        alt=""
                      />
                    </button>
                    <CardText className="flex-grow-1">{item.text}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
}
