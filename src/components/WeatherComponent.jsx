import React, { useState } from "react";
import { fetchWeatherByCity } from "../api/api_weather";
import CityInput from "./CityInput/CityInput";
import { WeatherDisplay } from "./WeatherDisplay/WeatherDisplay";
import Forecast from "./WeatherDisplay/Forecast";
import Skeleton from "./Skeleton/Skeleton";


const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCitySubmit = async (cityName) => {
    if (cityName.trim() === "") {
      setError("Please enter your City Name");
      setWeatherData(null);
      return;
    }
    
    
    setLoading(true);

    try {
    
      await new Promise(resolve => setTimeout(resolve, 4000));

      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("City is not Found");
      setWeatherData(null);
    } finally {
    
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-10">
      <CityInput onSubmit={handleCitySubmit} />
      
      {loading && <Skeleton/>}
      
      {!loading && <WeatherDisplay weatherData={weatherData} error={error} />}
      
      {!loading && weatherData && <Forecast cityName={weatherData.name} />}
    </div>
  );
};

export default WeatherComponent;
