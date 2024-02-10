import { ToastContainer, toast } from "react-toastify";
import { FormEvent, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Footer } from "./components/Footer";

import {
  SectionApresentation,
  Description,
  TitleApresentation,
  ContentButtonConection,
  ContentImgProfile,
  ContentInformations,
  SectionSkills,
  ContentIconSkills,
  SectionProjects,
  ContentProject,
  ContentInformationsProject,
  ContentImgProject,
  ContentBtnViewMoreProject,
  TitleProject,
  SectionContactMe,
  BannerContactMe,
  ContactMeForm,
  ContentInput,
  ContentButtonSendEmail,
  ContentInformationsContact,
  ContentTitleSection,
  TitleSection,
  ContentCardSkills,
} from "./styles";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme/colors";

import pathUser from "../src/assets/profile-2.png";
import pathBannerContact from "../src/assets/banner-contact.jpg";
import pathImgProjectLdPageBank from "../src/assets/project-landing-page-bank.png";
import pathImgProjectLdPageFylo from "../src/assets/project-landing-page-fylo.png";

import { Typewriter } from "./components/TypeWriter";

export const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const refFormContact = useRef<any>(null);
  const refInputFullName = useRef<HTMLInputElement | undefined>(undefined);
  const refInputEmail = useRef<HTMLInputElement | undefined>(undefined);
  const refInputMessage = useRef<HTMLInputElement | undefined>(undefined);

  const handleSendEmail = async (event: FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          to_name: "Renner",
          from_name: refInputFullName.current?.value,
          message: refInputMessage.current?.value,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      toast.success("Email enviado com sucesso!", {
        position: "top-right",
      });

      if (refInputFullName.current) {
        refInputFullName.current.value = "";
      }

      if (refInputEmail.current) {
        refInputEmail.current.value = "";
      }

      if (refInputMessage.current) {
        refInputMessage.current.value = "";
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar email!", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRedirectPage = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <main>
      <ToastContainer />
      <GlobalStyles />
      <Header />
      <Section>
        <SectionApresentation id="aprensentacao">
          <ContentInformations>
            <TitleApresentation>
              <Typewriter
                text="Desenvolvedor Frontend & Mobile com Foco em React e React Native"
                delay={50}
              />
            </TitleApresentation>
            <Description>
              Desenvolvedor frontend e mobile, especializado em ReactJS, React
              Native, NestJS. Destaco-me pela comunicação eficaz, trabalho em
              equipe e organização. Experiência em novas implementações e
              correção de bugs em aplicações web e mobile, demonstrando domínio
              tanto no frontend quanto no backend.
            </Description>

            <ContentButtonConection>
              <Button
                backgroundButton={theme.primary}
                colorText={theme.color_white}
              >
                ENTRE EM CONTATO
              </Button>
            </ContentButtonConection>
          </ContentInformations>
          <ContentImgProfile>
            <img src={pathUser} alt="" />
          </ContentImgProfile>
        </SectionApresentation>
      </Section>

      <Section>
        <SectionSkills id="skills">
          <ContentTitleSection>
            <TitleSection>Habilidades</TitleSection>
          </ContentTitleSection>
          <ContentIconSkills>
            <ContentCardSkills>
              <i className="devicon-html5-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-css3-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-javascript-plain colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-typescript-plain colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-nextjs-original-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-react-original-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-redux-original colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-materialui-plain colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-tailwindcss-original-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-docker-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-laravel-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-cakephp-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-nestjs-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-git-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-github-original-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-gitlab-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-ubuntu-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-mysql-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-postgresql-plain-wordmark colored"></i>
            </ContentCardSkills>

            <ContentCardSkills>
              <i className="devicon-npm-original-wordmark colored"></i>
            </ContentCardSkills>
          </ContentIconSkills>
        </SectionSkills>
      </Section>

      <Section>
        <SectionProjects id="projetos">
          <ContentTitleSection>
            <TitleSection>Projetos</TitleSection>
          </ContentTitleSection>

          <ContentProject>
            <ContentImgProject>
              <img src={pathImgProjectLdPageBank} alt="project-thumb" />
            </ContentImgProject>

            <ContentInformationsProject>
              <TitleProject>Easybank - Landing Page</TitleProject>
              <ContentBtnViewMoreProject>
                <Button
                  backgroundButton={theme.primary}
                  colorText={theme.color_white}
                  onClick={() =>
                    handleRedirectPage(
                      "https://landing-page-bank-nine.vercel.app/"
                    )
                  }
                >
                  Visitar Site
                </Button>
              </ContentBtnViewMoreProject>
            </ContentInformationsProject>
          </ContentProject>

          <ContentProject>
            <ContentImgProject>
              <img src={pathImgProjectLdPageFylo} alt="project-thumb" />
            </ContentImgProject>

            <ContentInformationsProject>
              <TitleProject>Fylo - Landing Page</TitleProject>
              <ContentBtnViewMoreProject>
                <Button
                  backgroundButton={theme.primary}
                  colorText={theme.color_white}
                  onClick={() =>
                    handleRedirectPage(
                      "https://landing-page-fylo-dqa5.vercel.app/"
                    )
                  }
                >
                  Visitar Site
                </Button>
              </ContentBtnViewMoreProject>
            </ContentInformationsProject>
          </ContentProject>
        </SectionProjects>
      </Section>

      <Section>
        <SectionContactMe id="contato">
          <BannerContactMe>
            <img src={pathBannerContact} alt="banner-with-phone" />
          </BannerContactMe>

          <ContactMeForm onSubmit={handleSendEmail} ref={refFormContact}>
            <h2>Entre em contato hoje mesmo para agendar sua ligação</h2>

            <ContentInformationsContact>
              <div>
                <div>
                  <MdEmail />
                </div>
                <span>ozielrennerc.rodrigues@gmail.com</span>
              </div>
              <div>
                <div>
                  <FaPhoneAlt />
                </div>
                <span>+55 85 99183-5772</span>
              </div>
            </ContentInformationsContact>

            <div>
              <ContentInput>
                <Input
                  label="Nome completo"
                  type="text"
                  refInput={refInputFullName}
                />
              </ContentInput>
              <ContentInput>
                <Input
                  label="Mensagem"
                  type="text"
                  refInput={refInputMessage}
                />
              </ContentInput>
            </div>

            <ContentButtonSendEmail>
              <Button
                type="submit"
                backgroundButton={theme.primary}
                colorText={theme.color_white}
                loading={loading}
              >
                ENVIAR AGORA
              </Button>
            </ContentButtonSendEmail>
          </ContactMeForm>
        </SectionContactMe>
      </Section>
      <Footer />
    </main>
  );
};
