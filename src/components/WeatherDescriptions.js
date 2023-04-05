import React, { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
// import FormattedDate from "./FormattedDate";
import axios from "axios";
const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
import WeatherIcon from "./WeatherIcon";
export default function WeatherDescriptions(props) {
  function time() {
    let date = new Date(props.data.date);
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  }
  return (
    <div className="flex flex-col md:flex-row mt-10 mb-24 justify-between pr-24">
      <div>
        <p className="text-5xl py-2 tracking-wide font-medium">
          {props.data.city}
        </p>
        <p className="text-gray-400">
          <span className="text-orange">{time()}</span>,{props.data.description}
        </p>
        <p className="text-gray-400">
          Humidity:
          <span className="text-orange">{props.data.humidity}</span> Wind:
          <span className="text-orange">{props.data.wind} km/h </span>
        </p>
      </div>
      <div className="flex p-5">
        {/* <TiWeatherPartlySunny className="text-8xl" /> */}
        <WeatherIcon code={props.data.icon} size={36} />
        <span>
          {Math.round(props.data.temperature)}
          <sup>•C</sup>
        </span>
      </div>
    </div>
  );
}
