import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  h1 {
    margin-bottom: 20px;
  }
`;

export const List = styled.div`

`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const User = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const UserText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: ${theme.font.semibold};
`;
export const Email = styled.span`
  font-size: 12px;
`;

export const Amaunt = styled.span`
  font-weight: ${theme.font.semibold};
`;
