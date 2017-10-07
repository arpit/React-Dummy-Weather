import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherDetails from './weather-details'
import CitiesList from './cities-list'

class App extends Component{

  constructor(){
    super()
    this.onCityChange = this.onCityChange.bind(this)
    this.cities = [ "Philly", "Agra", "Georgia" ]
    this.state = { "current_city" : this.cities[0], "current_high":88, "current_low":77 }

  }

  onCityChange(city){
    this.setState({"current_city":city, "current_high":Math.random(), "current_low":Math.random()})
  }

  render(){

    return ( <div className="main">
              <h1>Weather App</h1>
              <p> Welcome to the best weather app</p>
              <WeatherDetails city={this.state.current_city} high={this.state.current_high} low={this.state.current_low} />
              <CitiesList cities={this.cities} onCityChange={this.onCityChange} />
            </div> )
  }

}

export default App;
