import React from "react";
import { StyledLink } from "./styled/components";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <NavBar>
      <Container>
        <Nav>
          <Nav.Link>
            <StyledLink to="/">Home</StyledLink>
          </Nav.Link>
          <Nav.Link>
            <StyledLink to="/countries">Countries</StyledLink>
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Navigation;
