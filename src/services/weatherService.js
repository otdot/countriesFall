import axios from "axios";
const baseUrl = "/.netlify/functions/api/weather";

const getWeather = async (latlng) => {
  const weather = await axios.get(`${baseUrl}/${latlng}`);
  return weather.data;
};

export default { getWeather };
