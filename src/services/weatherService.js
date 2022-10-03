import axios from "axios";
//Change baseUrl depending where the website is being used.
//in netlify:
const baseUrl = "/.netlify/functions/api/weather";
//locally:
// const baseUrl = "/api/weather";

const getWeather = async (latlng) => {
  const weather = await axios.get(`${baseUrl}/${latlng}`);
  return weather.data;
};

export default { getWeather };
