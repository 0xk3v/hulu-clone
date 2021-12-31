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

//   return (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </>
//   );
// };

// App.propTypes = {
//   Component: PropTypes.node.isRequired,
//   pageProps: PropTypes.node.isRequired,
// };

export default MyApp;
