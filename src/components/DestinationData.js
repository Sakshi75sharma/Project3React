import React, { Component } from 'react';
import Destination from './Destination';
import "./DestinationStyles.css";

class DestinationData extends Component{
  render() {
    return (
      <div>
        
            <div className={this.props.class}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>

                    <div className="image">
                        <img alt="img" src={this.props.img1}></img>
                        <img alt="img" src={this.props.img2}></img>
                    </div>
                </div>

        
      </div>
    )
  }
}

export default DestinationData