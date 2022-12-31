import  GlobalStyles from "../styles/global"
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../styles/themes/dark";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}> 
    <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
