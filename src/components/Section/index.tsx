import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface SectionProps {
  children: ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
