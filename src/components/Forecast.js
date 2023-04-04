// import React, { useEffect } from "react";
// import ForecastItem from "./ForecastItem";
// import axios from "axios";

// import ReactAnimatedWeather from "react-animated-weather";
// const weatherIcons = {
//   "01d": "CLEAR_DAY",
//   "01n": "CLEAR_NIGHT",
//   "02d": "PARTLY_CLOUDY_DAY",
//   "02n": "PARTLY_CLOUDY_NIGHT",
//   "03d": "CLOUDY",
//   "03n": "CLOUDY",
//   "04d": "CLOUDY",
//   "04n": "CLOUDY",
//   "09d": "RAIN",
//   "09n": "RAIN",
//   "10d": "RAIN",
//   "10n": "RAIN",
//   "11d": "RAIN",
//   "11n": "RAIN",
//   "13d": "SNOW",
//   "13n": "SNOW",
//   "50d": "FOG",
//   "50n": "FOG",
// };
// export default function Forecast(props) {
//   // create a state to hold data of 5 days Forecast
//   // it acn be object or array
//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   function formatDate(timestamp) {
//     let date = new Date(timestamp);
//     let hours = date.getHours();
//     if (hours < 10) {
//       hours = `0${hours}`;
//     }
//     let minutes = date.getMinutes();
//     if (minutes < 10) {
//       minutes = `0${minutes}`;
//     }

//     let day = days[date.getDay()];
//     return { day: day, time: `${hours}:${minutes}` };
//   }
//   function handleResponse(response) {
//     const fri = response.data.daily[0];

//     const day = new Date(fri.dt * 1000);
//     formatDate(day);
//     console.log(formatDate(day));

//     // here you set the state for 5 days forecast
//   }
//   function dailyForecast() {
//     const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
//     let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKey}&units=imperial`;
//     axios.get(apiUrlForecast).then(handleResponse);
//   }
//   useEffect(() => {
//     dailyForecast();
//   }, []);
//   // dailyForecast();

//   return (
//     <div className="flex flex-row justify-between pb-10 border-b-2 mb-5">
//       <ForecastItem />
//       <ForecastItem />
//       <ForecastItem />
//       <ForecastItem />
//       <ForecastItem />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import ForecastItem from "./ForecastItem";
import axios from "axios";

import ReactAnimatedWeather from "react-animated-weather";

const weatherIcons = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "CLOUDY",
  "03n": "CLOUDY",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState([]);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let day = days[date.getDay()];
    return { day: day, time: `${hours}:${minutes}` };
  }

  function handleResponse(response) {
    console.log("kjkjk", response.data.daily.slice(0, 5).reverse());
    // const fri = response.data.daily[0];

    // const day = new Date(fri.dt * 1000);
    // formatDate(day);
    // // console.log(formatDate(day));

    // // set the state for 5 days forecast
    // setForecastData(response.data.daily.slice(1, 6));
  }

  function dailyForecast() {
    console.log("weateher edata", props);
    const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weatherData.coords.lat}&lon=${props.weatherData.coords.lon}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrlForecast).then(handleResponse);
  }
  // dailyForecast();

  useEffect(() => {
    dailyForecast();
  }, []);

  return (
    <div className="flex flex-row justify-between pb-10 border-b-2 mb-5">
      {forecastData.map((dailyData, index) => (
        <ForecastItem key={index} data={dailyData} />
      ))}
    </div>
  );
}
