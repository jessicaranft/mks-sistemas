import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: #F9F9F9;
    color: #2c2c2c;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body, input, textarea, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }

  button {
    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.8)
  }
`
