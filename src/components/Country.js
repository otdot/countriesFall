import React, { useEffect, useState } from "react";
import "dotenv/config";

import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { StyledImg } from "./styled/components";
import millify from "millify";
import axios from "axios";

const Country = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const country = location.state;
  const api_key = process.env.api_key;
  console.log(process.env.api_key);

  // useEffect(() => {
  //   setLoading(true);

  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}
  //   `
  //     )
  //     .then((res) => setWeather(res.data))
  //     .then(() => setLoading(false))
  //     .catch((err) => console.log("error: ", err));
  // }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <Card>
      <StyledImg src={country.flags?.svg} alt="#" />
      <div>
        <Card.Title>{country.name?.common}</Card.Title>
        <p>{country.name?.official}</p>
      </div>
      <Card.Title>
        Language(s): {country.languages && Object.values(country.languages)}
      </Card.Title>
      <Card.Title>
        Currencie(s):
        {country.currencies &&
          Object.values(country.currencies).map((curr, i) => (
            <span key={i}>{(i ? ", " : " ") + curr.name}</span>
          ))}
      </Card.Title>
      <Card.Title>Population: {millify(country.population)}</Card.Title>
    </Card>
  );
};

export default Country;
