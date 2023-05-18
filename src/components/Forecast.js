import React, { useEffect, useState } from "react";
import ForecastItem from "./ForecastItem";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function load() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="flex flex-col md:flex-row justify-between pb-10 border-b-2 mb-5">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                <ForecastItem data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}
