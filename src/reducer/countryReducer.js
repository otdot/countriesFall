import { createSlice } from "@reduxjs/toolkit";
import countryService from "../services/countryService";

const countryReducer = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    country: {},
    visitedCountries: [],
  },
  reducers: {
    setCountries(state, action) {
      return { ...state, countries: action.payload };
    },
    setCountry(state, action) {
      return { ...state, country: action.payload };
    },
    addVisited(state, action) {
      if (
        state.visitedCountries.some(
          (country) => country.name.common === action.payload.name.common
        )
      ) {
        return state;
      }

      return {
        ...state,
        visitedCountries: state.visitedCountries.concat(action.payload),
      };
    },
    removeVisited(state, action) {
      return {
        ...state,
        visitedCountries: state.visitedCountries.filter(
          (c) => c.name.common !== action.payload.name.common
        ),
      };
    },
    initializeVisitedCountries(state, action) {
      return { ...state, visitedCountries: action.payload };
    },
  },
});

export const {
  setCountries,
  setCountry,
  initializeVisitedCountries,
  removeVisitedCountry,
  addVisited,
  removeVisited,
} = countryReducer.actions;

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(setCountries(countries));
  };
};

export default countryReducer.reducer;
