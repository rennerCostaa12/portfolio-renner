import { createGlobalStyle } from "styled-components";
import { theme } from "./theme/colors";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.color_white};
    }

    ::-webkit-scrollbar-thumb {
      background: ${theme.primary};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.color_gray};
    }
  }
`;
