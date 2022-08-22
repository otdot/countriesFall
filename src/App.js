import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryList from "./components/CountryList";
import Country from "./components/Country";
import { StyledLayout } from "./components/styled/components";

function App() {
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
