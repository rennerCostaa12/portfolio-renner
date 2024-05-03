import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import {
  Container,
  Content,
  ContentSocialMedia,
  NameDev,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <ContentSocialMedia>
          <div>
            <a
              href="https://www.linkedin.com/in/renner-costa-098a101a0/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href="https://github.com/rennerCostaa12" target="_blank">
              <FaGithub />
            </a>
          </div>
        </ContentSocialMedia>
        <NameDev>Renner Costa</NameDev>
      </Content>
    </Container>
  );
};
