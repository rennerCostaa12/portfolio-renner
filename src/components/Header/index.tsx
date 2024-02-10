import { MdOutlineEmail } from "react-icons/md";

import {
  Container,
  Content,
  ContentEmail,
  Nav,
  ContentLogo,
  ContentIconEmail,
} from "./styles";

import pathImgLogo from "../../assets/logo-portfolio.png";

export const Header = () => {
  return (
    <Container>
      <Content>
        <ContentLogo>
          <img src={pathImgLogo} alt="logo-portfolio" />
        </ContentLogo>
        <Nav>
          <ul>
            <li>
              <a href="#apresentacao">Sobre mim</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </Nav>
        <ContentEmail>
          <ContentIconEmail>
            <MdOutlineEmail />
          </ContentIconEmail>
          <span>ozielrennerc.rodrigues@gmail.com</span>
        </ContentEmail>
      </Content>
    </Container>
  );
};
