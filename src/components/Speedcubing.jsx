import React from 'react';
import { Modal } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import './Speedcubing.scss';

class Speedcubing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      video: null
    }
    this.videoData = [
      {id:"E5h2XIfgcow", text:"North American Record: 7.57 3x3 One-Handed Solve"},
      {id:"U5x6YN1k6T8", text:"First Place @ Newmarket Open 2019: 7.39 3x3 Rubik's Cube Average"}, 
      {id:"aJKcaV2tP_o", text:"Second Place @ Canadian Championship 2019: 12.94 3x3 One-Handed Average"},
      {id:"ZBUJCEsVhmo", text:"Personal Record: 5.52 3x3 Rubik's Cube Solve"}
    ]
  }

  handleOpen(data) {
    if (isMobile) {
      window.location.href = `https://www.youtube.com/watch?v=${data}`;
    } else {
      this.setState({
        modal: true,
        video: data
      })
    }
  };

  handleClose = () => {
    this.setState({
      modal: false
    })
  };

  videoModal() {
    return (
      <Modal
        open={this.state.modal}
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
      <div className="CubingContainer">
        {this.videoModal()}
        <div className="YTgrid">
        <div className="SpeedcubingCard LongCard">
          <div className="SpeedcubingH1">Speedcubing</div>
          <div className="SpeedcubingText"> I have been competing in World Cube Association competitions for the past {new Date().getFullYear()-2013} years. Back in 2018, I broke the North American Record for solving the Rubik's Cube one-handed with a time of 7.57 seconds. At the time, this ranked me second in the world. 
          Today, I organize and officiate competitions as a Junior Delegate for the World Cube Association. Check out some of my speedcubing career highlights.</div>
        </div>

          {this.videoData.map(item => {
              return (
                <div className="SpeedcubingCard Video" onClick={()=>{this.handleOpen(item.id)}}>
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
    )
  }

}

export default Speedcubing;
