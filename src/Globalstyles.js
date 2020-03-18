import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        @font-face {
          font-family: 'SF';
          src: url('/fonts/SF-Pro-Display-Regular.otf');
        }

        @font-face {
          font-family: 'SF italic';
          src: url('/fonts/SF-Pro-Display-RegularItalic.otf');
        }

        body {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          margin: 0;
          background-color: ${theme.colors.bgPrimary};
          height: 100vh;
          color: ${theme.colors.textPrimary};
          font-family: SF;
        }
      `}
    />
  );
}

export default GlobalStyles;
