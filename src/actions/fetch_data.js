import axios from 'axios';

export default function fetchData() {
  const API_KEY = '0tjRPGRRpf8EdmZnB0apuBlRBkVDmhN79aNPASvb'; //API KEY
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=' // API ENDPOINT
  const request = axios.get(END_POINT+API_KEY) //GET REQUEST

  return { //returm plain object with props
    type: 'FETCH_DATA', //Action type
    payload: request // Action Payload
  }
  
}
