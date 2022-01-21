import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { theme } from "../styles/themes";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
