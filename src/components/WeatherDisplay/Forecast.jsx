import React, { useState, useEffect } from 'react';
import { fetchForecastByCity } from '../../api/api_forecast';

const Forecast = ({ cityName }) => {
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);
    const [uniqueDates, setUniqueDates] = useState([]);
    const [icons, setIcons] = useState({});

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const data = await fetchForecastByCity(cityName);
                setForecastData(data);
                setError(null);
            } catch (error) {
                setError("Forecast data not available");
                setForecastData(null);
            }
        };

        fetchForecast();
    }, [cityName]);

    useEffect(() => {
        if (forecastData && forecastData.list) {

            const uniqueDatesArray = forecastData.list.reduce((dates, forecast) => {
                const date = forecast.dt_txt.split(' ')[0];
                if (!dates.includes(date)) {
                    return [...dates, date];
                }
                return dates;
            }, []);
            setUniqueDates(uniqueDatesArray);


            const iconsObj = {};
            uniqueDatesArray.forEach(date => {
                const forecast = forecastData.list.find(f => f.dt_txt.includes(date));
                if (forecast) {
                    switch (forecast.weather[0].main) {
                        case "Clouds":
                            iconsObj[date] = "https://openweathermap.org/img/wn/03d@2x.png";
                            break;
                        case "Clear":
                            iconsObj[date] = "https://openweathermap.org/img/wn/01d@2x.png";
                            break;
                        case "Drizzle":
                            iconsObj[date] = "https://openweathermap.org/img/wn/04d@2x.png";
                            break;
                        case "Mist":
                            iconsObj[date] = "https://openweathermap.org/img/wn/50d@2x.png";
                            break;
                        case "Rain":
                            iconsObj[date] = "https://openweathermap.org/img/wn/10d@2x.png";
                            break;
                        case "Thunderstorm":
                            iconsObj[date] = "https://openweathermap.org/img/wn/11d@2x.png";
                            break;
                        case "Snow":
                            iconsObj[date] = "https://openweathermap.org/img/wn/13d@2x.png";
                            break;
                        default:
                            iconsObj[date] = "";
                    }
                }
            });
            setIcons(iconsObj);
        }
    }, [forecastData]);

    return (
        <div>
            {error && <p>{error}</p>}
            {forecastData && (
                <div>
                    <h2 className="text-lg font-bold mb-2">Forecast for {cityName}</h2>
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:flex xl:flex-row gap-4 items-center justify-center">
                        {uniqueDates.map((date, index) => (
                            <div key={index} className='whitespace-nowrap font-sans text-center font-extrabold rounded-md  bg-stone-300 bg-opacity-20  hover:scale-110 duration-300'>
                                <div className=" whitespace-nowrap px-5 py-5 ">{date}</div>
                                <div className=" whitespace-nowrap px-5 py-5">
                                    {forecastData.list.find(f => f.dt_txt.includes(date))?.main.temp}°C
                                </div>
                                <div className=" whitespace-nowrap px-5 py-5">
                                    {icons[date] && <img src={icons[date]} alt="Weather Icon" />}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}

export default Forecast;
