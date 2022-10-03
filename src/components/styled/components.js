import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Layout from "../../pages/Layout";
import NavBar from "react-bootstrap/NavBar";
import Form from "react-bootstrap/Form";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "react-bootstrap/Button";

export const StyledClearButton = styled(Button)`
  display: flex;
  position: absolute;
  bottom: 20%;
  right: 0%;
  transform: translate(-50%, -50%);
  width: 13rem;
  margin: 0 2rem;
`;

export const RemoveButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 6rem;
`;

export const StyledHeart = styled(FavoriteIcon)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  font-size: large;
`;

export const StyledInput = styled(Form.Control)`
  width: 30rem;
  margin: 0 2rem;

  @media (max-width: 600px) {
    position: absolute;
    top: 5rem;
    width: 70vw;
  } ;
`;

export const StyledHome = styled.div`
  font-family: "Bad Script", cursive;
  font-size: 1.3rem;
  display: flex;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  background: linear-gradient(to bottom, grey 1, white);
`;

export const StyledHero = styled.div`
  max-height: 92vh;
  height: 50rem;
  min-height: 40rem;
  width: 100%;
  background-image: url("../../../assets/bgPic.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 100px 150px rgba(0, 0, 0, 0.15);
`;

export const StyledNavbar = styled(NavBar)`
  box-shadow: inset 0 20px 30px rgba(0, 0, 0, 0.1);
  background-color: white;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
`;

export const MainBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-auto-flow: row;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const StyledSingleCard = styled(Card)`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  min-width: 60rem;
  top: 30%;
  left: 5%;
  width: 90vw;
  background: linear-gradient(#c3c5c7, #fff);
  padding: 1rem;
  box-shadow: 1px 2px 2px black;

  .content {
    flex: 1;
  }

  .image {
    flex: 1;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const StyledCard = styled(Card)`
  width: 20rem;
  margin: 1rem;
  margin: 1rem auto;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);
  img {
    max-height: 10rem;
    object-fit: cover;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledSpan = styled.span`
  display: block;
`;

export const StyledLayout = styled(Layout)`
  background-color: blue;
`;
