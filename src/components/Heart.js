import React from "react";
import { useDispatch } from "react-redux";
import { addVisitedCountry } from "../reducer/countryReducer";
import { StyledHeart } from "./styled/components";

const Heart = ({ country }) => {
  const dispatch = useDispatch();

  const addCountryVisit = (e) => {
    const target = e.currentTarget;
    target.classList.add("animation");
    setTimeout(() => {
      target.classList.remove("animation");
    }, 2000);
    dispatch(addVisitedCountry(country));
  };

  return (
    <>
      <StyledHeart fontSize="large" onClick={addCountryVisit} />
    </>
  );
};

export default Heart;
