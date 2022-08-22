import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { StyledNavbar } from "./styled/components";

const Navigation = () => {
  return (
    <StyledNavbar>
      <Container>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/countries">
            <Nav.Link>Countries</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/visited">
            <Nav.Link>Visited Countries</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Navigation;
