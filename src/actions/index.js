import axios from 'axios';
import API_KEY from '../../api_key';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, nl`;
  const request = axios.get(url);

  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}