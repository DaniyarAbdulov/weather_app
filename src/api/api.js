import axios from "axios";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '268d87076e7e1349e78a3a1ee2a74304';

export const fetchWeatherByCity = async (cityName) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                q: cityName,
                appid: API_KEY,
                units: 'metric',
            },
        });
        return response.data;

    }
    catch (error) {
        console.error('API Error', error);
        throw error;
    }
};
