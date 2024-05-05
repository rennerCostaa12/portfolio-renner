import styled from "styled-components";
import { theme } from "./theme/colors";

export const SectionApresentation = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 875px) {
    flex-direction: column;
  }
`;

export const ContentTitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleSection = styled.h2`
  text-align: center;
  margin: 2rem 0;
  font-size: 40px;

  border-bottom: 2px solid ${theme.primary};

  padding-bottom: 0.5rem;

  @media (max-width: 1100px) {
    font-size: 30px;
  }

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

export const ContentInformations = styled.div``;

export const TitleApresentation = styled.h1`
  width: 600px;
  font-size: 45px;
  margin: 1rem 0;

  @media (max-width: 1100px) {
    font-size: 30px;
  }

  @media (max-width: 875px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 30px;
  width: 600px;

  @media (max-width: 1100px) {
    font-size: 14px;
    line-height: 25px;
  }

  @media (max-width: 875px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ContentImgProfile = styled.div`
  > img {
    width: 100%;
    background: linear-gradient(to top, #cfcfcf 20%, transparent 40%);
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 875px) {
    > img {
      max-width: 300px;
      min-width: 275px;
      width: 100%;
      background: linear-gradient(to top, #cfcfcf 20%, transparent 40%);
      border-radius: 0 0 20px 20px;
    }
  }
`;

export const ContentButtonConection = styled.div`
  margin: 1rem 0;

  @media (max-width: 875px) {
    text-align: center;
  }
`;

export const SectionSkills = styled.section`
  margin: 2rem 0;
  overflow: hidden;
`;

export const ContentIconSkills = styled.div`
  max-width: 1350px;
  width: 100%;
  overflow: auto;
  font-size: 70px;
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 0 1rem 1rem 1rem;

  @media (max-width: 1100px) {
    font-size: 40px;
    gap: 1rem;
  }
`;

export const ContentCardSkills = styled.div`
  border: 1px solid ${theme.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all ease 0.3s;
    background-color: #e4e4e48c;
  }
`;

export const SectionProjects = styled.section`
  margin: 2rem 0;
`;

export const ContentProject = styled.div`
  display: flex;
  gap: 2rem;
  border-top: 1px solid ${theme.color_gray};
  margin: 1rem 0;
  padding: 1rem 0;
  flex-direction: column;
  align-items: center;
`;

export const ContentImgProject = styled.div`
  max-width: 700px;
  height: 500px;
  width: 100%;
  overflow-x: hidden;

  > img {
    width: 100%;
    border: 1px solid ${theme.color_gray};
    padding: 0.5rem;
    border-radius: 5px;
  }

  @media (max-width: 768px){
    height: 100%;
    max-height: 300px;
  }
`;

export const ContentInformationsProject = styled.div``;

export const TitleProject = styled.h3`
  font-size: 26px;

  @media (max-width: 875px) {
    font-size: 22px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const DescriptionProject = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 1rem 0;

  @media (max-width: 875px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const ContentBtnViewMoreProject = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

export const TitleTechs = styled.h3`
  margin: 1rem 0;

  @media (max-width: 875px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const SectionContactMe = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin: 2rem 0;

  @media (max-width: 875px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BannerContactMe = styled.div`
  > img {
    width: 400px;
    height: 500px;
  }

  @media (max-width: 875px) {
    > img {
      width: 300px;
      height: 400px;
    }
  }
`;

export const ContactMeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;

  > h2 {
    font-size: 45px;
    font-weight: bold;
  }

  @media (max-width: 1100px) {
    > h2 {
      font-size: 30px;
      font-weight: bold;
    }
  }

  @media (max-width: 875px) {
    > h2 {
      font-size: 30px;
      text-align: center;
    }
  }

  @media (max-width: 425px) {
    > h2 {
      font-size: 25px;
      font-weight: bold;
    }
  }
`;

export const ContentInformationsContact = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 18px;

    > div:nth-child(1) {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: normal;
    gap: 1rem;
  }

  @media (max-width: 875px) {
    align-items: center;
  }

  @media (max-width: 425px) {
    > div {
      font-size: 14px;
    }
  }
`;

export const ContentInput = styled.div`
  margin: 1rem 0;
`;

export const ContentButtonSendEmail = styled.div`
  @media (max-width: 875px) {
    text-align: center;
  }
`;
