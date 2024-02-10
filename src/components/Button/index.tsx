import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as ButtonStyle, ContentLoading } from "./styles";

import { SpinnerLoading } from "../SpinnerLoading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  backgroundButton: string;
  colorText: string;
  loading?: boolean;
}

export const Button = ({
  children,
  backgroundButton,
  colorText,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      backgroundbutton={backgroundButton}
      colortext={colorText}
      {...props}
      disabled={loading}
    >
      {loading ? (
        <ContentLoading>
          <SpinnerLoading />
        </ContentLoading>
      ) : (
        children
      )}
    </ButtonStyle>
  );
};
