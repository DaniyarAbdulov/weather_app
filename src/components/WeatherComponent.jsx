import React, { useState } from "react";
import { fetchWeatherByCity } from "../api/api_weather";
import CityInput from "./CityInput/CityInput";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";
import Forecast from "./WeatherDisplay/Forecast";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCitySubmit = async (cityName) => {
    if (cityName.trim() === "") {
      setError("Please enter your City Name");
      setWeatherData(null);
      return;
    }
    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("City is not Found");
      setWeatherData(null);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-10">
      <CityInput onSubmit={handleCitySubmit} />
      <WeatherDisplay weatherData={weatherData} error={error} />
      {weatherData && <Forecast cityName={weatherData.name} />}
    </div>
  );
};

export default WeatherComponent;
