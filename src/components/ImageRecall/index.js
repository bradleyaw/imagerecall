import React, { Component } from 'react';
import './ImageRecall.css';
import images from "./images.json";


class ImageRecall extends Component {
  state = {
    clicked: []
  }

  flagClick = imageID => {
    const clicked = this.state.clicked
    if (clicked.length === 15) {
      this.setState({clicked:[]})
      alert("you win");
    } else if (clicked.includes(imageID)) {
      this.setState({clicked:[]})
      alert("you lose");
    } else {
      clicked.push(imageID)
      alert("yes");
      console.log(clicked);
    }
}

  render() {
    return (
      <div className="IR">
        <header className="IR-header">
          <h1 className="IR-title">Image Recall</h1>
          <h2 className="IR-status">Your current score: {this.state.clicked.length}</h2>
        </header>
        
        <p className="IR-intro">
          Click on each flag once, but only once. Select all 15 before repeating and you win!
        </p>
        {images.map(image => <img key={image.id} alt="flag" src={image.image} onClick={this.flagClick}/>)}
        <br />
      </div>
    );
  }
}

export default ImageRecall;