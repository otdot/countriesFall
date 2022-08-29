import axios from "axios";
const baseUrl = "/api/countries";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const filterCountries = (filter, countries) => {
  //capital[0], continets[0], Object.values(currencies).name <- array, region, name.common, name.official, subregion, Object.values(languages) <-- arra
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

export default { getAll, filterCountries };

// else if (
//   country.currencies &&
//   Object.values(country.currencies).filter((curr) =>
//     curr.name.toLowerCase().includes(filter)
//   )
// ) {
//   return country;
// } else if (
//   country.languages &&
//   Object.values(country.languages).filter((lang) =>
//     lang.name.toLowerCase().includes(filter)
//   )
// ) {
//   return country;
// }
