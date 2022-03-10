import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --link: var(--gray-9)
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--surface-0);
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
