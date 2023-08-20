import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&display=swap');

  * {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html {
    font-size: 62.5%; // 1rem = 10px
  } */
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
  width: 250px;
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.softbg};
`;

export const ContentContainer = styled.div`
  padding: 5px 20px;
  width: 100%;
`;
