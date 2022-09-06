import React, { useEffect, useState } from "react";
import {
  addVisitedCountry,
  initializeCountries,
  initializeVisitedCountries,
} from "../reducer/countryReducer";
import {
  StyledSpan,
  MainBody,
  StyledCard,
  StyledLink,
  StyledInput,
  StyledHeart,
} from "./styled/components";
import Button from "react-bootstrap/Button";
import millify from "millify";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../reducer/filterReducer";
import countryService from "../services/countryService";
import GlobalStyle from "./styled/globalStyles";
import Heart from "./Heart";

const SingleCountry = ({ country }) => {
  const languages = country.languages
    ? Object.values(country.languages).slice(0, 2).join(", ")
    : "no data";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((curr) => curr.name)
        .join(", ")
    : "no data";
  const population = country.population;

  return (
    <StyledCard>
      <StyledCard.Img
        style={{ boxShadow: "0 2px 1px black" }}
        src={country.flags.svg}
        alt="#"
      />
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
      <Heart country={country} />
    </StyledCard>
  );
};

const CountryList = () => {
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
    if (window.location.href.slice(-9) !== "countries") {
      return (
        <p>
          It's time to travel.{" "}
          <a href="https://www.skyscanner.com">Book a trip.</a>
        </p>
      );
    } else {
      return <p>Loading countries...</p>;
    }
  }

  return (
    <MainBody>
      <GlobalStyle />
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
