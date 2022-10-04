import React, { useEffect } from "react";
import { initializeCountries, removeVisited } from "../reducer/countryReducer";
import {
  StyledSpan,
  MainBody,
  StyledCard,
  StyledLink,
  RemoveButton,
} from "./styled/components";
import Button from "react-bootstrap/Button";
import millify from "millify";
import { useSelector, useDispatch } from "react-redux";
import countryService from "../services/countryService";
import GlobalStyle from "./styled/globalStyles";
import Heart from "./Heart";

export const SingleCountry = ({ country }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const languages = country.languages
    ? Object.values(country.languages).slice(0, 2).join(", ")
    : "no data";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((curr) => curr.name)
        .join(", ")
    : "no data";
  const population = country.population;
  const visitPage = window.location.href.slice(-9) !== "countries";

  const handleRemove = () => {
    dispatch(removeVisited(country));
  };

  useEffect(() => {
    countryService.updateLocalStorage(state);
  }, [state]);

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
      {visitPage ? (
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      ) : (
        <Heart country={country} />
      )}
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
    <>
      <GlobalStyle />
      <MainBody>
        {countries.length > 0 ? (
          countries.map((country) => {
            return (
              <SingleCountry key={country.name.common} country={country} />
            );
          })
        ) : (
          <p>No results with these keywords</p>
        )}
      </MainBody>
    </>
  );
};

export default CountryList;
