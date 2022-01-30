import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './App';
import { GameContextProvider } from './components/store/GameContextProvider';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// FIXME:

//! asdasd
// TODO: add two themes - for mobile and desktop
ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
