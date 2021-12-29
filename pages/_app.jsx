import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import PropTypes from "prop-types";
import { theme } from "../styles/themes";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.node.isRequired,
};

export default App;
