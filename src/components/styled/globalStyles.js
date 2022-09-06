import { createGlobalStyle, keyframes } from "styled-components";

const addVisitAnimation = keyframes`
0%
{
  transform: scale( .75 );
}
20%
{
  transform: scale( 1.1 );
  color: red;
}
40%
{
  transform: scale( .75 );
}
60%
{
  transform: scale( 1.1 );
  color: red;
}
80%
{
  transform: scale( .75 );
}
100%
{
  transform: scale( .75 );
  color: black;
}
`;

const GlobalStyle = createGlobalStyle`
 body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .animation {
    animation: ${addVisitAnimation} 2s linear 1;
  }
`;

export default GlobalStyle;
