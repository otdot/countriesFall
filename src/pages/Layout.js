import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { StyledHero } from "../components/styled/components";

const Layout = () => {
  return (
    <div>
      <Header />
      <StyledHero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
