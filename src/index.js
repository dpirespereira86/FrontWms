import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/home';
import { ContextEstoque } from './Config/Context/ContextEstoque';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme/Teme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextEstoque>
        <Home />
      </ContextEstoque>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
