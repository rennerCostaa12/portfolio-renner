import styled from "styled-components";

interface ButtonProps {
  backgroundbutton: string;
  colortext: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.8rem 2rem;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({ backgroundbutton }) => backgroundbutton};
  color: ${({ colortext }) => colortext};
  border: none;
  cursor: pointer;
  border-radius: 2rem;

  transform: scale(0.9);

  &:hover {
    transition: all ease 0.3s;
    transform: scale(1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
    transform: scale(0.9);
  }
`;

export const ContentLoading = styled.div`
  padding: 0 4rem;
`;
