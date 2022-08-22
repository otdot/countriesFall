import { createSlice } from "@reduxjs/toolkit";
import weatherService from "../services/weatherService";

const weatherReducer = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
    setWeather(state, action) {
      return action.payload;
    },
  },
});

export const { setWeather } = weatherReducer.actions;

export const initializeWeather = (latlng) => {
  return async (dispatch) => {
    const weather = await weatherService.getWeather(latlng);
    dispatch(setWeather(weather));
  };
};

export default weatherReducer.reducer;
