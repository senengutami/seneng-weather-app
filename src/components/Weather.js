import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import axios from "axios";

import WeatherDescriptions from "./WeatherDescriptions";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchWeatherOfPosition);
  }

  function searchWeatherOfPosition(position) {
    console.log(position);
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form
          className="flex flex-col md:flex-row justify-between"
          onSubmit={handleSubmit}
        >
          <label class="relative block flex-1">
            <FcSearch className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-2 sm:w-6 sm:h-6" />
            <input
              className=" w-full rounded shadow h-full  pl-12"
              placeholder="Enter a city ..."
              type="text"
              name="search"
              autoFocus="on"
              onChange={handleCityChange}
              autoComplete="off"
            />
          </label>
          <div className="flex-1 pl-5">
            <input
              type="submit"
              className="rounded border px-4 py-2 mr-5 bg-sky-500 hover:bg-sky-700 text-white"
              value="Search"
            />

            <button
              class="rounded border  px-4 py-2 bg-sky-500 hover:bg-sky-700 text-white"
              onClick={(e) => getCurrentPosition(e)}
            >
              Current
            </button>
          </div>
        </form>

        <WeatherDescriptions data={weatherData} />
        {/* Forecast */}
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
