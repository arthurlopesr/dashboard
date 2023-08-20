import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title{
    font-size: ${theme.font.sizes.xxxxsmall};
    font-weight: ${theme.font.small};
    color: ${theme.colors.softcolor};
  }

  .listItem{
    padding: 10px;
  }
`;

export const Item = styled.div`

`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxsmall};
  margin-bottom: ${theme.spacings.xxxsmall};

`

export const ListItemTitle = styled.span`
  margin-left: 10px;


`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.maincolor};

  &:hover{
    background-color: ${theme.colors.softbg};
    transition: all 0.3s ease-in-out;
    border-radius: ${theme.borderRadius.xlg};
  }
`;
