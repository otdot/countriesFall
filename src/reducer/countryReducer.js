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
    addVisitedCountry(state, action) {
      const visited = {
        ...state.visitedCountries.concat(action.payload).reduce(
          (wholeObject, object) => ({
            ...wholeObject,
            [object.name.common]: object,
          }),
          {}
        ),
      };

      window.localStorage.setItem("visitedCountries", JSON.stringify(visited));
      return {
        ...state,
        visitedCountries: state.visitedCountries.concat(action.payload),
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
  addVisitedCountry,
  initializeVisitedCountries,
} = countryReducer.actions;

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(setCountries(countries));
  };
};

export default countryReducer.reducer;
