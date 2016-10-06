import axios from 'axios';

// Open Weather API Config
const APIKEY = '5c92330805a277655d20d4e67ba39ea8';
const APIVERSION = '2.5';
const URL = 'http://api.openweathermap.org/data/';
const CURRENT = '/weather';
const FORECAST = '/forecast/daily';

const api = {
  getCurrentWeather(city) {
    const currentUrl = URL.concat(APIVERSION, CURRENT);
    const config = {
      params: {
        q: city,
        type: 'accurate',
        units: 'imperial',
        APPID: APIKEY,
      },
    };
    return axios.get(currentUrl, config)
         .then((res) => res.data)
         .catch((err) => {
           console.warn(`Error in getCurrentWeather:  ${err}`);
         });
  },
  getForecastWeather(city, numDays) {
    const forcastUrl = URL.concat(APIVERSION, FORECAST);
    const config = {
      params: {
        q: city,
        cnt: numDays,
        type: 'accurate',
        units: 'imperial',
        APPID: APIKEY,
      },
    };
    return axios.get(forcastUrl, config)
       .then((res) => res.data)
       .catch((err) => {
         console.warn(`Error in getCurrentWeather: ${err}`);
       });
  },
};

export default api;

