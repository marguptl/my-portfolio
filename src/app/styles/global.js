"use client"

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Your Chosen Font', sans-serif;
    background-color: #2d2d2d;
    color: white;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #5ff542;
  }
  a:hover {
    color: #28a745;
  }
`;
export default GlobalStyle;
