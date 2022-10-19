import { createGlobalStyle } from 'styled-components';
import * as color from './colors';

export default createGlobalStyle`
html {
  background-color: ${color.uiDark1}
}

body {
  padding: 0rem;
  padding-top: 102px;
  margin: 0;
  font-family: 'Teko', sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  color: ${color.white};
  margin: auto;
  width: 1200px;

  @media (max-width: 1260px) {
    width: 100%;
    padding: 2rem;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;
