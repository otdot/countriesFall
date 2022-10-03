import axios from "axios";

//Change baseUrl depending where the website is being used.
//in netlify:
// const baseUrl = "/.netlify/functions/api/countries";
//locally:
const baseUrl = "/api/countries";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const filterCountries = (filter, countries) => {
  const result = countries.filter((country) => {
    if (country.name.common.toLowerCase().includes(filter)) {
      return country;
    } else if (country.name.official.toLowerCase().includes(filter)) {
      return country;
    } else if (
      country.capital &&
      country.capital[0]?.toLowerCase().includes(filter)
    ) {
      return country;
    } else if (
      country.continents &&
      country.continents[0]?.toLowerCase().includes(filter)
    ) {
      return country;
    } else if (
      country.currencies &&
      country.continents[0]?.toLowerCase().includes(filter)
    ) {
      return country;
    } else if (country.region.toLowerCase().includes(filter)) {
      return country;
    } else if (
      country.subregion &&
      country.subregion.toLowerCase().includes(filter)
    ) {
      return country;
    }
  });
  return result;
};

const updateLocalStorage = (state) => {
  const visited = {
    ...state.countries.visitedCountries.reduce(
      (wholeObject, object) => ({
        ...wholeObject,
        [object.name.common]: object,
      }),
      {}
    ),
  };

  window.localStorage.setItem("visitedCountries", JSON.stringify(visited));
};

export default { getAll, filterCountries, updateLocalStorage };
