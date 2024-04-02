import axios from "axios";

const base_url = "https://api.openweathermap.org/data/2.5/forecast";
const base_key = "268d87076e7e1349e78a3a1ee2a74304";

export const fetchForecastByCity = async (cityName) => {
  try {
    const response = await axios.get(base_url, {
      params: {
        q: cityName,
        appid: base_key,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.log("api Error", error);
  }
};
