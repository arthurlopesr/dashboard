import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap');

  * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }
`

import { styled } from "styled-components";
import { theme } from "./theme/default";

export const Main = styled.div`
  font-family: "Inter", sans-serif;
  background-color: ${theme.colors.mainbg};
  color: ${theme.colors.maincolor};

`;

export const Container = styled.div`
  display: flex;

`;

export const MenuContainer = styled.div`

`;

export const ContentContainer = styled.div`

`;
