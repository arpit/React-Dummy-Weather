import React, { Component } from 'react'

class CitiesList extends Component{

  constructor(){
    super()
    this.onCityClicked = this.onCityClicked.bind(this)
  }

  onCityClicked(city){
    this.props.onCityChange(city)
  }

  render(){
    let cities = this.props.cities
    let nodes = []

    // for (var i = 0; i < cities.length; i++) {
    //    let city = cities[i]
    //    nodes.push(<li key={city} onClick={ () => { this.onCityClicked(city) }     }>{city}</li>)
    // }

    cities.forEach( (city) => {
      nodes.push(<li key={city} onClick={ () => { this.onCityClicked(city) }     }>{city}</li>)

    } )

    return ( <div>
                <ul>
                  {nodes}
                </ul>
            </div>)
  }

}

export default CitiesList
