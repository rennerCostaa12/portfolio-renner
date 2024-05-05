import styled from "styled-components";
import { theme } from "../../theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 0.5rem;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Input = styled.input<{ error?: boolean }>`
  border: none;
  border-bottom: 1px solid ${({ error }) => error ? theme.red_crimson : theme.color_black};
  outline: none;
  font-size: 14px;
  background: none;

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const MessageError = styled.span`
  display: block;
  margin: 1rem 0;
  color: ${theme.red_crimson};
  font-size: 14px;
  font-style: italic;
`;
