import React, { useEffect, useState } from "react";
import {
  addVisitedCountry,
  initializeCountries,
  initializeVisitedCountries,
} from "../reducer/countryReducer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  StyledSpan,
  MainBody,
  StyledCard,
  StyledLink,
  StyledInput,
} from "./styled/components";
import Button from "react-bootstrap/Button";
import millify from "millify";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../reducer/filterReducer";
import countryService from "../services/countryService";

const SingleCountry = ({ country }) => {
  const dispatch = useDispatch();
  const languages = country.languages
    ? Object.values(country.languages).slice(0, 2).join(", ")
    : "no data";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((curr) => curr.name)
        .join(", ")
    : "no data";
  const population = country.population;

  const addCountryVisit = () => {
    dispatch(addVisitedCountry(country));
  };

  return (
    <StyledCard>
      <StyledCard.Img src={country.flags.svg} alt="#" />
      <StyledCard.Body>
        <StyledCard.Title>{country.name.common}</StyledCard.Title>
        <StyledCard.Title>{country.name.official}</StyledCard.Title>
        <StyledCard.Text>
          <StyledSpan>Languages: {languages}</StyledSpan>
          <StyledSpan>Currencies: {currencies}</StyledSpan>
          <StyledSpan>Population: {millify(population)}</StyledSpan>
        </StyledCard.Text>
        <Button>
          <StyledLink state={country} to={`/countries/${country.cca3}`}>
            More
          </StyledLink>
        </Button>
      </StyledCard.Body>
      <FavoriteBorderIcon
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        onClick={addCountryVisit}
      />
    </StyledCard>
  );
};

const CountryList = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const countries = useSelector((state) => {
    if (window.location.href.slice(-9) !== "countries") {
      return state.countries.visitedCountries;
    }
    return state.filter === ""
      ? state.countries.countries
      : countryService.filterCountries(state.filter, state.countries.countries);
  });

  useEffect(() => {
    dispatch(initializeCountries());

    const visitedCountries = window.localStorage.getItem("visitedCountries");
    if (visitedCountries) {
      dispatch(
        initializeVisitedCountries(Object.values(JSON.parse(visitedCountries)))
      );
    }
  }, [dispatch]);

  if (countries.length < 1 && !filter) {
    return <p>loading...</p>;
  }

  return (
    <MainBody>
      <StyledInput
        onChange={(e) => {
          dispatch(setFilter(e.target.value));
        }}
        placeholder="Search for a country"
      />
      {countries.length > 0 ? (
        countries.map((country) => {
          return <SingleCountry key={country.name.common} country={country} />;
        })
      ) : (
        <p>No results with these keywords</p>
      )}
    </MainBody>
  );
};

export default CountryList;
