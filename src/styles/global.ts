import { createGlobalStyle } from 'styled-components';
import * as color from './colors';

export default createGlobalStyle`
html {
  background-color: ${color.uiDark1}
}

body {
  padding: 0rem;
  margin: 0;
  font-family: 'Teko', sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  color: ${color.white}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;
