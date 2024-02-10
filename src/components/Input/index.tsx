import { InputHTMLAttributes, MutableRefObject } from "react";

import { Input as InputStyle, Container, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  refInput?: MutableRefObject<HTMLInputElement | undefined>;
}

export const Input = ({ label, refInput, ...props }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle type="text" {...props} ref={refInput as any} />
    </Container>
  );
};
