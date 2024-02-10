import styled from "styled-components";
import { theme } from "../../theme/colors";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.color_gray};
`;

export const Content = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-left: 1px solid ${theme.color_gray};
  border-right: 1px solid ${theme.color_gray};
  padding: 0 1.5rem;
`;
