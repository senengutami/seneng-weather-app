import { TiWeatherPartlySunny } from "react-icons/ti";
import WeatherIcon from "./WeatherIcon";

export default function ForecastItem(props) {
  function maxTemperature() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="text-center">
      <div>{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div>
        <span>
          {maxTemperature()}
          {/* <sup>•</sup> */}
        </span>
        <span>
          {minTemperature()}
          {/* <sup>•</sup> */}
        </span>
      </div>
    </div>
  );
}
