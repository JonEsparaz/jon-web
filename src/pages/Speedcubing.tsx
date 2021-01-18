import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
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
    if (isMobile) {
      window.location.href = `https://www.youtube.com/watch?v=${data}`;
    } else {
      setVideo(data);
    }
  };

  const videoModal = () => {
    return (
      <Modal
        open={Boolean(video)}
        onClose={() => setVideo('')}
        className="custom-modal"
      >
        <iframe
          className="videoPlayer"
          title="Video Player"
          src={`https://www.youtube.com/embed/${video}?autoplay=1`}
          frameBorder="0"
        />
      </Modal>
    );
  };

  return (
    <div className="page-wrapper">
      <Menu mode="dark" />
      <div className="center-wrapper page-body">
        <div className="CubingContainer">
          {videoModal()}
          <h2 className="Header2 Big">Speedcubing</h2>
          <div className="Text1 SpeedcubingText">
            For the past {new Date().getFullYear() - 2013} years, I have
            competed in World Cube Association competitions. In 2018, I broke
            the North American Record for solving the Rubik&apos;s Cube
            one-handed with a time of 7.57 seconds. At the time, this ranked me
            second in the world. Today, I organize and officiate competitions as
            a Junior Delegate for the World Cube Association.
          </div>
          <h2 className="Header2">Highlight Reel</h2>
          <div className="YTgrid">
            {videoData.map((item) => {
              return (
                <div className="SpeedcubingItem" key={item.id}>
                  <button
                    type="button"
                    aria-label={`Open video: ${item.text}`}
                    className="imageContainer"
                    onClick={() => {
                      handleOpen(item.id);
                    }}
                  >
                    <img
                      className="YTimage"
                      alt="YouTube thumbnail"
                      src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                    />
                    <img
                      className="playArrow"
                      src="/svg/play_arrow-white.svg"
                      alt=""
                    />
                  </button>
                  <div className="YTtitle">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
