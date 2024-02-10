import styled from "styled-components";
import { theme } from "../../theme/colors";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.color_gray};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  width: 100%;
  padding: 0 1.5rem;
  border-left: 1px solid ${theme.color_gray};
  border-right: 1px solid ${theme.color_gray};
`;

export const ContentLogo = styled.div`
  > img {
    width: 100px;
  }

  @media (max-width: 1100px) {
    > img {
      width: 70px;
    }
  }
`;

export const Nav = styled.nav`
  > ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;

    > li {
      font-size: 20px;

      a {
        color: ${theme.color_black};
        text-decoration: none;

        &:hover {
          transition: 0.3s;
          color: ${theme.primary};
        }
      }

      &:hover {
        transition: all ease 0.2s;
        transform: translateY(-0.2rem);
      }
    }
  }

  @media (max-width: 1100px) {
    > ul {
      > li {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 875px) {
    display: none;
  }
`;

export const ContentEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-size: 20px;
    border-bottom: 1px solid ${theme.color_gray};
  }

  @media (max-width: 1100px) {
    > span {
      font-size: 14px;
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ContentIconEmail = styled.div`
  font-size: 20px;
  border: 1px solid ${theme.color_gray};
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`;
