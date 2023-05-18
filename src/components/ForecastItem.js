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
    <div className="flex flex-col justify-between  text-center pb-10 ">
      <div className="text-sky-700">{day()}</div>
      <div className="pl-[40%] md:pl-3  py-4">
        <WeatherIcon code={props.data.weather[0].icon} size={55} />
      </div>
      <div>
        <span className="text-gray-400">{maxTemperature()}</span>
        <span className="text-gray-300">{minTemperature()}</span>
      </div>
    </div>
  );
}
