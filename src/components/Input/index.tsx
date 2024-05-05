import { InputHTMLAttributes } from "react";

import { Input as InputStyle, Container, Label, MessageError } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  textError?: string;
}

export const Input = ({
  label,
  error,
  textError,
  ...props
}: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputStyle type="text" {...props} error={error} />
      {textError && <MessageError>{textError}</MessageError>}
    </Container>
  );
};
