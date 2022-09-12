import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryList from "./components/CountryList";
import Country from "./components/Country";
import { StyledLayout } from "./components/styled/components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeVisitedCountries } from "./reducer/countryReducer";

function App() {
  const dispatch = useDispatch();

  const getVisitedCountries = () => {
    const visitedCountries = window.localStorage.getItem("visitedCountries");
    if (!visitedCountries) {
      return;
    }
    dispatch(
      initializeVisitedCountries(Object.values(JSON.parse(visitedCountries)))
    );
  };

  useEffect(() => {
    getVisitedCountries();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<StyledLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:name" element={<Country />} />
        <Route path="/visited" element={<CountryList />} />
      </Route>
    </Routes>
  );
}

export default App;
