import React, { useEffect, useState } from "react";
import { StyledLink } from "./styled/components";
import axios from "axios";
import { StyledCard } from "./styled/components";
import { MainBody } from "./styled/components";
import millify from "millify";

const SingleCountry = ({ country }) => {
  const languages = country.languages
    ? Object.values(country.languages).slice(0, 2).join(", ")
    : "no data";
  const currencies = country.currencies
    ? Object.values(country.currencies).map((curr) => curr.name)
    : "no data";
  const population = country.population;

  return (
    <StyledCard>
      <StyledCard.Img src={country.flags.svg} alt="#" />
      <StyledCard.Body>
        <StyledCard.Title>{country.name.common}</StyledCard.Title>
        <p>{country.name.official}</p>
        <StyledCard.Text>
          <p>Languages: {languages}</p>
          <p>Currencies: {currencies}</p>
          <p>Population: {millify(population)}</p>
        </StyledCard.Text>
        <StyledCard.Link>
          <StyledLink state={country} to={`/countries/${country.name.common}`}>
            More
          </StyledLink>
        </StyledCard.Link>
      </StyledCard.Body>
    </StyledCard>
  );
};

const CountryList = () => {
  const [countries, setCounties] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCounties(res.data))
      .catch((err) => {
        console.log("error: ", err);
      });
  }, []);

  return (
    <MainBody>
      {countries.map((country) => {
        return <SingleCountry key={country.name.common} country={country} />;
      })}
    </MainBody>
  );
};

export default CountryList;
