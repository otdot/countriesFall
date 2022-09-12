import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { StyledInput, StyledNavbar } from "./styled/components";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducer/filterReducer";

const Navigation = () => {
  const dispatch = useDispatch();
  const visitedcountrieslen = useSelector(
    (state) => state.countries.visitedCountries
  ).length;

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
            <Nav.Link>Visited Countries ({visitedcountrieslen}) </Nav.Link>
          </LinkContainer>
          <StyledInput
            onChange={(e) => {
              dispatch(setFilter(e.target.value));
            }}
            placeholder="Search for a country"
          />
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Navigation;
