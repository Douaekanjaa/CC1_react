import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './compenants/dark_light/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/cc1_react'>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </BrowserRouter>
);

reportWebVitals();
