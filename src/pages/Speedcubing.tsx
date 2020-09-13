import React from 'react';
import { Modal } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import { EmptyProps } from '../util';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Speedcubing.scss';

type VideoData = { id: string, text: string }

interface State {
  video: string | null
}

class Speedcubing extends React.Component<EmptyProps, State> {
  videoData: VideoData[]
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      video: null
    }
    this.videoData = [
      { id: "E5h2XIfgcow", text: "North American Record: 7.57 3x3 One-Handed Solve" },
      { id: "U5x6YN1k6T8", text: "First Place @ Newmarket Open 2019: 7.39 3x3 Rubik's Cube Average" },
      { id: "aJKcaV2tP_o", text: "Second Place @ Canadian Championship 2019: 12.94 3x3 One-Handed Average" },
    ]
  }

  handleOpen(data: string) {
    if (isMobile) {
      window.location.href = `https://www.youtube.com/watch?v=${data}`;
    } else {
      this.setState({
        video: data
      })
    }
  };

  handleClose = () => {
    this.setState({
      video: null
    })
  };

  videoModal() {
    return (
      <Modal
        open={Boolean(this.state.video)}
        onClose={this.handleClose}
        className={"custom-modal"}
      >
        <iframe
          className="videoPlayer"
          title="videoPlayer"
          src={`https://www.youtube.com/embed/${this.state.video}?autoplay=1`}
          frameBorder="0"
        />
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <Menu mode='dark' />
        <div className="CubingContainer">
          {this.videoModal()}
          <h2 className="Header2 Big">Speedcubing</h2>
          <div className="Text1 SpeedcubingText"> I have been competing in World Cube Association competitions for the past {new Date().getFullYear() - 2013} years.
          In 2018, I broke the North American Record for solving the Rubik's Cube one-handed with a time of 7.57 seconds. At the time, this ranked me second in the world.
          Today, I organize and officiate competitions as a Junior Delegate for the World Cube Association.</div>

          <h2 className="Header2">Speedcubing Highlights</h2>

          <div className="YTgrid">
            {this.videoData.map(item => {
              return (
                <div className="SpeedcubingItem" key={item.id}>
                  <button className="imageContainer" onClick={() => { this.handleOpen(item.id) }}>
                    <img className="YTimage" alt="youtube thumbnail" src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}></img>
                    <img className="playArrow" src='/svg/play_arrow-white.svg' alt=""></img>
                  </button>
                  <div className="YTtitle">{item.text}</div>
                </div>
              )
            }
            )}
          </div>
        </div>
        <Footer />
      </div >
    )
  }

}

export default Speedcubing;
