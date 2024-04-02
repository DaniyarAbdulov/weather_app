import React from "react";
import "./WeatherDisplay.css";

export const WeatherDisplay = ({ weatherData, error }) => {
  let icons;

  switch (weatherData?.weather[0]?.main) {
    case "Clouds":
      icons = "https://openweathermap.org/img/wn/03d@2x.png";
      break;
      case "Smoke":
      icons = "https://openweathermap.org/img/wn/03d@2x.png";
      break;
    case "Clear":
      icons = "https://openweathermap.org/img/wn/01d@2x.png";
      break;
    case "Drizzle":
      icons = "https://openweathermap.org/img/wn/04d@2x.png";
      break;
    case "Mist":
      icons = "https://openweathermap.org/img/wn/50d@2x.png";
      break;
      case "Fog":
      icons = "https://openweathermap.org/img/wn/50d@2x.png";
      break;
      case "Haze":
      icons = "https://openweathermap.org/img/wn/50d@2x.png";
      break;
    case "Rain":
      icons = "https://openweathermap.org/img/wn/10d@2x.png";
      break;
    case "Thunderstorm":
      icons = "https://openweathermap.org/img/wn/11d@2x.png";
      break;
    case "Snow":
      icons = "https://openweathermap.org/img/wn/13d@2x.png";
      break;
    default:
      icons = "";
  }

  const wrapperClass =
    "flex flex-col justify-center items-center gap-4 slide-right-phone";
  const hoverClass =
    "hover:scale-100 duration-300 text-xl xl:text-2xl 2xl:text-4xl whitespace-nowrap font-sans font-extrabold rounded-md px-5 py-2 pl-3 bg-stone-300 bg-opacity-20 text-left";
  const hoverTransformClass = "hover:-translate-y-3 duration-300";

  return (
    <div>
      {error && (
        <div>
          <div className="flex flex-col justify-center items-center rounded-lg border px-2 py-2 duration-150 slide-right-phone">
            <p>Whooops! Something went wrong</p>
            <p>😥 {error} 😥</p>
            <p>Try again</p>
          </div>
        </div>
      )}
      {weatherData && (
        <div className={wrapperClass}>
          <div className={hoverTransformClass}>
            <img src={icons} alt="icon" className="w-full" />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-4 ">
            <h2 className={`${hoverClass} ${hoverTransformClass}`}>
              📍 {weatherData.name}, {weatherData.sys.country}
            </h2>
            <h2 className={`${hoverClass} ${hoverTransformClass}`}>
              🌡️ {Math.floor(weatherData.main.temp)} °C
            </h2>

            <p className={`${hoverClass} ${hoverTransformClass}`}>
              🍃 {weatherData.weather[0].main}
            </p>
            <p className={`${hoverClass} ${hoverTransformClass}`}>
              🌬️ {Math.floor(weatherData.wind.speed)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
