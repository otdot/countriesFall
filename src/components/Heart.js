import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVisited } from "../reducer/countryReducer";
import countryService from "../services/countryService";
import { StyledHeart } from "./styled/components";

const Heart = ({ country }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const addCountryVisit = (e) => {
    const target = e.currentTarget;
    target.classList.add("animation");
    setTimeout(() => {
      target.classList.remove("animation");
    }, 2000);
    dispatch(addVisited(country));
  };

  useEffect(() => {
    countryService.updateLocalStorage(state);
  }, [state]);

  return (
    <>
      <StyledHeart fontSize="large" onClick={addCountryVisit} />
    </>
  );
};

export default Heart;
