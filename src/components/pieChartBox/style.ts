import { styled } from "styled-components";
import { theme } from "../../styles/theme/default";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: ${theme.font.sizes.xxxxsmall};
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: ${theme.borderRadius.xlg};
`;

