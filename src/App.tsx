import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

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
import { names_icons_skills } from "./utils/constants";

import pathUser from "../src/assets/profile-2.png";
import pathBannerContact from "../src/assets/banner-contact.jpg";
import pathImgProjectLdPageBank from "../src/assets/project-landing-page-bank.png";
import pathImgProjectLdPageFylo from "../src/assets/project-landing-page-fylo.png";
import pathImgProjectLdPageRoom from "../src/assets/project-room-homepage.png";
import pathImgProjectIpAddressTracker from "../src/assets/project-ip-address.png";

import { Typewriter } from "./components/TypeWriter";

const SchemaFormContactMe = yup
  .object({
    full_name: yup.string().required("Campo obrigatório"),
    message: yup.string().required("Campo obrigatório"),
  })
  .required();

type SchemaFormContactMeProps = yup.InferType<typeof SchemaFormContactMe>;

export const App = () => {
  const {
    resetField,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<SchemaFormContactMeProps>({
    resolver: yupResolver(SchemaFormContactMe),
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSendEmail = async (event: SchemaFormContactMeProps) => {
    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          to_name: "Renner",
          from_name: event.full_name,
          message: event.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      toast.success("Email enviado com sucesso!", {
        position: "top-right",
      });

      resetField("full_name");
      resetField("message");
    } catch (error) {
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
            {names_icons_skills.map((value, index) => {
              return (
                <ContentCardSkills key={index}>
                  <i className={value}></i>
                </ContentCardSkills>
              );
            })}
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
              <img
                src={pathImgProjectLdPageBank}
                alt="project-thumb-easybank"
              />
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
              <img src={pathImgProjectLdPageFylo} alt="project-thumb-fylo" />
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

          <ContentProject>
            <ContentImgProject>
              <img
                src={pathImgProjectLdPageRoom}
                alt="project-thumb-romm-homepage"
              />
            </ContentImgProject>

            <ContentInformationsProject>
              <TitleProject>Room Homepage</TitleProject>
              <ContentBtnViewMoreProject>
                <Button
                  backgroundButton={theme.primary}
                  colorText={theme.color_white}
                  onClick={() =>
                    handleRedirectPage(
                      "https://room-homepage-lemon.vercel.app/"
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
              <img
                src={pathImgProjectIpAddressTracker}
                alt="project-thumb-ip-address-tracker"
              />
            </ContentImgProject>

            <ContentInformationsProject>
              <TitleProject>IP Address Tracker</TitleProject>
              <ContentBtnViewMoreProject>
                <Button
                  backgroundButton={theme.primary}
                  colorText={theme.color_white}
                  onClick={() =>
                    handleRedirectPage(
                      "https://ip-address-tracker-gray-six.vercel.app/"
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

          <ContactMeForm onSubmit={handleSubmit(handleSendEmail)}>
            <h2>Preencha o formulário para entrar em contato comigo</h2>

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
              <Controller
                control={control}
                name="full_name"
                render={({ field: { onChange, value = "" } }) => (
                  <ContentInput>
                    <Input
                      label="Nome completo"
                      type="text"
                      error={Boolean(errors.full_name?.message)}
                      textError={errors.full_name?.message}
                      onChange={onChange}
                      value={value}
                    />
                  </ContentInput>
                )}
              />

              <Controller
                control={control}
                name="message"
                render={({ field: { onChange, value = "" } }) => (
                  <ContentInput>
                    <Input
                      label="Mensagem"
                      type="text"
                      error={Boolean(errors.message?.message)}
                      textError={errors.message?.message}
                      onChange={onChange}
                      value={value}
                    />
                  </ContentInput>
                )}
              />
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
