import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { AnimatePresence } from "framer-motion";
import { Player } from "../Components/PlayerOn";
function MyApp({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith("/playeron/")) {
    console.log(router.pathname, "should appear");
    return (
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Player>
            <Component key={router.route} {...pageProps} />
          </Player>
        </AnimatePresence>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
export default MyApp;
