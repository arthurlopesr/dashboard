import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  width: 100%;
  padding: ${theme.spacings.xxsmall};
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-weight: ${theme.font.bold};
  gap: ${theme.spacings.xxxsmall};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings.xxsmall};
`;

export const Notification = styled.div`
  position: relative;

  span {
    background-color: ${theme.colors.notification};
    color: ${theme.colors.maincolor};
    width: ${theme.spacings.xxxsmall};
    height: ${theme.spacings.xxxsmall};
    border-radius: ${theme.borderRadius.full};
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 26px;
    height: 26px;
    border-radius:${theme.borderRadius.full};
    object-fit: cover;
  }
`;
