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
      {id:"U5x6YN1k6T8", text:"First Place @ Newmarket Open 2019: 7.39 3x3 Rubik's Cube Average"}, 
      {id:"E5h2XIfgcow", text:"North American Record: 7.57 3x3 One-Handed Single"},
      {id:"aJKcaV2tP_o", text:"Second Place @ Canadian Championship 2019: 12.94 3x3 One-Handed Average"}
    ]
  }

  handleOpen(data) {
    if (isMobile) {
      window.location.href = `https://www.youtube.com/watch?v=uAAuNjNXaIM${data}`;
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
        <h1>Speedcubing</h1>
        <p>Over the past {new Date().getFullYear()-2013} years, I have competed over 50 
        World Cube Association competitions. In 2018, I broke the North American Record for solving the Rubik's Cube one-handed with a time of 7.57 seconds. 
        Today, I am a Junior Delegate for the World Cube Association and help to organize and officiate competitions. 
        Check out my WCA profile <a href="Jonathan Esparaz"> here</a>.</p>
        
        <h4>Check out some of my top solves</h4>
        <div className="YTgrid">
          {this.videoData.map(item => {
              return (
                <div classname="YTitem">
                  <img className="YTimage" src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} onClick={()=>{this.handleOpen(item.id)}}></img>
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