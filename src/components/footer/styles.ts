import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacings.xsmall};

  span {
    &:first-child {
      font-weight: ${theme.font.bold};
    }

    &:last-child {
      font-size: ${theme.font.sizes.xxxxsmall};
    }
  }
`;
