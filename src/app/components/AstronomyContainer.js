import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {

  constructor() {
    super();

    this.state = {
      astronomy: []
    }

  }

  componentDidMount() {
    const API_KEY = '0tjRPGRRpf8EdmZnB0apuBlRBkVDmhN79aNPASvb';
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(END_POINT+API_KEY)
      .then(response => {
        console.log(response)
        this.setState({
					astronomy: response.data
				})
      })
      .catch( error => {
        console.log(error, 'failed to fetch data')
      });
  }

  render() {
    const {astronomy} = this.state;
    return (
      <AstronomyCard data={astronomy} / >
    )
  }
}

export default AstronomyContainer;
