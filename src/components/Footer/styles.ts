import styled from "styled-components";
import { theme } from "../../theme/colors";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${theme.color_black};
  color: ${theme.color_white};
  padding: 2rem 0;
`;

export const Content = styled.div`
  max-width: 1350px;
  width: 100%;
`;

export const TextFollow = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

export const ContentSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  font-size: 30px;

  > div {
    cursor: pointer;
    transform: scale(0.9);

    > a {
      color: ${theme.color_white};

      &:hover {
        transition: all ease-in 0.3s;
        color: ${theme.primary};
      }
    }

    &:hover {
      transition: all ease-in 0.3s;
      transform: scale(1);
    }
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const NameDev = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
