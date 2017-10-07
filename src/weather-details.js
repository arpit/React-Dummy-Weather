import React, { Component } from 'react';

class WeatherDetails extends Component{
  render(){
    return ( <div className="weather-details">
                <h3>{this.props.city}</h3>
                <p><span>High: {this.props.high}  </span> <span> Low: {this.props.low} </span></p>
              </div>
            )
  }
}

export default WeatherDetails;
