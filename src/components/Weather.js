import React, { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
import axios from "axios";

import WeatherDescriptions from "./WeatherDescriptions";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defCity);

  function handleResponse(response) {
    // const cityName = response.data.name;    // console.log(response.data.name);
    console.log(response.data);
    setWeatherData({
      ...weatherData,
      ready: true,
      coords: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const searchCity = event.target.elements.search.value.trim();
    console.log(searchCity);
    if (searchCity) {
      setCity(searchCity);
    }
    search();

    return;
  }
  useEffect(() => {
    search();
  }, []);

  if (weatherData.ready) {
    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-between"
        >
          <label class="relative block flex-1">
            <FcSearch className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-2" />
            <input
              className=" w-full rounded shadow h-full  pl-12"
              placeholder="Enter a city ..."
              type="text"
              name="search"
              autoFocus="on"
            />
          </label>
          {/* */}
          <div className="flex-1 pl-5">
            <input
              type="submit"
              className="rounded border px-4 py-2 mr-5 text-white bg-orange"
              value="Search"
            />

            <button class="rounded border  px-4 py-2 text-white bg-orange">
              Current
            </button>
          </div>
        </form>

        <WeatherDescriptions weatherDesc={weatherData} />
        {/* Forecast */}
        <Forecast weatherData={weatherData} />
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
