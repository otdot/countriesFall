import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducer/countryReducer";
import weatherReducer from "./reducer/weatherReducer";
import filterReducer from "./reducer/filterReducer";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    weather: weatherReducer,
    filter: filterReducer,
  },
});

store.subscribe(() => console.log("countries", store.getState()));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
