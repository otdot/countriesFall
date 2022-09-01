import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { StyledImg, StyledLink, StyledSingleCard } from "./styled/components";
import millify from "millify";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeWeather } from "../reducer/weatherReducer";
import { setCountry } from "../reducer/countryReducer";
import { LinkContainer } from "react-router-bootstrap";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const Country = () => {
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather);
  const location = useLocation();
  let country = useSelector(({ countries }) => countries.country);

  let cca3;
  if (location.state.cca3) {
    cca3 = location.state.cca3;
    country = location.state;
  } else {
    cca3 = location.state.border;
  }

  const getCountry = useSelector(({ countries }) =>
    countries.countries.find((singCountry) => singCountry.cca3 === cca3)
  );

  useEffect(() => {
    dispatch(initializeWeather(getCountry.latlng.join("_")));
    if (!country.name || getCountry.name.common !== country.name.common) {
      dispatch(setCountry(getCountry));
    }
  }, [cca3]);

  if (country.cca3 !== getCountry.cca3) {
    return <p>Loading</p>;
  }

  return (
    <StyledSingleCard>
      <div className="image">
        <StyledImg src={country.flags?.svg} alt="#" />
        <h1>test from countrycomponent</h1>
      </div>
      <div className="content">
        <div>
          <Card.Title>{country.name?.common}</Card.Title>
          <p>{country.name?.official}</p>
        </div>
        <Card.Title>
          Language(s):{" "}
          {country.languages && Object.values(country.languages).join(", ")}
        </Card.Title>
        <Card.Title>
          Currencie(s):
          {country.currencies &&
            Object.values(country.currencies).map((curr, i) => (
              <span key={i}>{(i ? ", " : " ") + curr.name}</span>
            ))}
        </Card.Title>
        <Card.Title>Population: {millify(country.population)}</Card.Title>
        {weather && (
          <Card.Title>
            Weather in {country.capital[0]}:{" "}
            {(weather.main?.temp - 273.15).toFixed(1)}°C
          </Card.Title>
        )}
        <Card.Title>Bordering countries: </Card.Title>
        <div>
          {country.borders
            ? country.borders.map((border) => (
                <LinkContainer
                  key={border}
                  state={{ border }}
                  style={{ display: "inline-block", color: "black" }}
                  to={`/countries/${border}`}
                >
                  <Nav.Link>{border}</Nav.Link>
                </LinkContainer>
              ))
            : "No bordering countries"}
          <FavoriteBorder />
        </div>
      </div>
    </StyledSingleCard>
  );
};

export default Country;
