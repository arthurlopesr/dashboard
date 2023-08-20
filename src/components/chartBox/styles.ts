import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const BoxInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
 div{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
  }
  `;

export const LinkChart = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.maincolor};
`;

export const ChartsInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const Chart = styled.div`
  height: 100%;
  width: 100%;
  `;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  .percentage {
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxxsmall};
  }

  .duration {
    font-size: ${theme.font.sizes.xxxxsmall};
  }
`;
