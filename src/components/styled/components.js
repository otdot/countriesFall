import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const MainBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledCard = styled(Card)`
  width: 20rem;
  margin: 1rem;
  position: relative;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  height: 10rem;
  width: 10rem;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
`;
