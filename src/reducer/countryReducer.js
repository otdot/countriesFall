import { createSlice } from "@reduxjs/toolkit";
import { update } from "lodash";
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
      let visited;
      let updatedCountries;

      if (
        state.visitedCountries.every(
          (country) => country.name.common !== action.payload.name.common
        )
      ) {
        updatedCountries = state.visitedCountries.concat(action.payload);

        visited = {
          ...updatedCountries.reduce(
            (wholeObject, object) => ({
              ...wholeObject,
              [object.name.common]: object,
            }),
            {}
          ),
        };
      } else {
        if (!action.payload.remove) {
          return state;
        }
        updatedCountries = state.visitedCountries.filter(
          (c) => c.name.common !== action.payload.name.common
        );
        visited = {
          ...updatedCountries.reduce((wholeObject, object) => {
            console.log("removing country");
            return {
              ...wholeObject,
              [object.name.common]: object,
            };
          }, {}),
        };
      }

      window.localStorage.setItem("visitedCountries", JSON.stringify(visited));
      return {
        ...state,
        visitedCountries: updatedCountries,
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
