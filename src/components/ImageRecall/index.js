import React, { Component } from 'react';
import './ImageRecall.css';

const images = ["./images/1.png", "./images/2.png", "./images/3.png", "./images/4.png", "./images/5.png", 
          "./images/6.png", "./images/7.png", "./images/8.png", "./images/9.png", "./images/10.png", 
          "./images/11.png", "./images/12.png", "./images/13.png", "./images/14.png", "./images/15.png"]

const hey = images.map(image => <img alt="flag" href={image} />)

class ImageRecall extends Component {
  state = {
    score: 0,
  }

  flagClick = () => {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div className="IR">
        <header className="IR-header">
          <h1 className="IR-title">Image Recall</h1>
          <h2 className="IR-status">Your current score: {this.state.score}</h2>
        </header>
        
        <p className="IR-intro">
          Click on each flag once, but only once. Select all 15 before repeating and you win!
        </p>
        {hey}
        <img alt="flag" href="/images/1.png" />
        <br />
        <button onClick={this.flagClick}>
            Increment
          </button>
      </div>
    );
  }
}

export default ImageRecall;