import React, { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import FormattedDate from "./FormattedDate";
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
    <div className="flex flex-col md:flex-row mt-10 mb-24 justify-between ">
      <div className="grow">
        <p className="text-5xl py-2 tracking-wide font-medium text-sky-300">
          {props.data.city}
        </p>
        <p className="text-gray-400">
          <span>
            <FormattedDate date={props.data.date} />,{props.data.description}
          </span>
        </p>
        <p className="text-gray-400">
          Humidity:
          <span className="text-sky-300">{props.data.humidity}</span> Wind:
          <span className="text-sky-300">{props.data.wind} km/h </span>
        </p>
      </div>
      <div className="flex flex-1 p-5">
        {/* <TiWeatherPartlySunny className="text-8xl" /> */}
        <WeatherIcon code={props.data.icon} size={36} />
        <span className="pl-3 text-gray-400">
          {Math.round(props.data.temperature)}
          <sup className="text-sky-700">•C</sup>
        </span>
      </div>
    </div>
  );
}
