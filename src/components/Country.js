import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import { StyledImg, StyledSingleCard } from "./styled/components";
import millify from "millify";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeWeather } from "../reducer/weatherReducer";
import { addVisited, setCountry } from "../reducer/countryReducer";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "@mui/material";

const Country = () => {
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather);
  const location = useLocation();
  let country = useSelector(({ countries }) => countries.country);

  let cca3;
  if ("cca3" in location.state) {
    //i.e. when using more link
    cca3 = location.state.cca3;
    country = location.state;
  }
  if ("border" in location.state) {
    //i.e. when using border links
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
            Weather in {country.capital[0]}: {weather.main?.temp.toFixed(0)}°C
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
        </div>
        <Button onClick={() => dispatch(addVisited(country))}>
          I've been here
        </Button>
      </div>
    </StyledSingleCard>
  );
};

export default Country;
