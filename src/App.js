import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./pages/Layout";
import CountryList from "./components/CountryList";
import Country from "./components/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountryList />} />
        <Route path="/countries/:name" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default App;
