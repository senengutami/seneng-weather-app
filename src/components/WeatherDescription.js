import React, { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import FormattedDate from "./FormattedDate";
import axios from "axios";
const apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";

export default function WeatherDescriptions(props) {
  const baseKel = 273.15;
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

  function updateTemperatureToC(fTemp) {
    return ((fTemp - 32) * 5) / 9;
  }

  console.log("wd ", props);

  return (
    <div className="flex flex-col md:flex-row mt-10 mb-24 justify-between pr-24">
      <div>
        <p className="text-5xl py-2 tracking-wide font-medium">
          {props.weatherDesc.city}
        </p>
        <p className="text-gray-400">
          {formatDate(props.weatherDesc.date).day}{" "}
          <span className="text-orange">
            {formatDate(props.weatherDesc.date).time}
          </span>
          ,{props.weatherDesc.description}
        </p>
        <p className="text-gray-400">
          Humidity:
          <span className="text-orange">{props.weatherDesc.humidity}</span>{" "}
          Wind:
          <span className="text-orange">{props.weatherDesc.wind} km/h </span>
        </p>
      </div>
      <div className="flex p-5">
        <TiWeatherPartlySunny className="text-8xl" />
        <span>
          {Math.round(updateTemperatureToC(props.weatherDesc.temperature))}
          <sup>•C</sup>
        </span>
        <span>|</span>
        <span>
          {Math.round(props.weatherDesc.temperature)}
          <sup>•F</sup>
        </span>
      </div>
    </div>
  );
}
