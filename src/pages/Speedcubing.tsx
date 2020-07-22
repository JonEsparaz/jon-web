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
      { id: "ZBUJCEsVhmo", text: "Personal Record: 5.52 3x3 Rubik's Cube Solve" }
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
        <Menu mode='light' />
        <div className="CubingContainer">
          {this.videoModal()}
          <div className="YTgrid">
            <div className="SpeedcubingCard LongCard">
              <div className="SpeedcubingH1">Speedcubing</div>
              <div className="SpeedcubingText"> I have been competing in World Cube Association competitions for the past {new Date().getFullYear() - 2013} years. Back in 2018, I broke the North American Record for solving the Rubik's Cube one-handed with a time of 7.57 seconds. At the time, this ranked me second in the world.
          Today, I organize and officiate competitions as a Junior Delegate for the World Cube Association. Check out some of my speedcubing career highlights.</div>
            </div>

            {this.videoData.map(item => {
              return (
                <div className="SpeedcubingCard Video" onClick={() => { this.handleOpen(item.id) }}>
                  <div className="imageContainer">
                    <img className="YTimage" alt="youtube thumbnail" src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}></img>
                    <img className="playArrow" src='/svg/play_arrow-white.svg' alt=""></img>
                  </div>
                  <div className="YTtitle">{item.text}</div>
                </div>
              )
            }
            )}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default Speedcubing;