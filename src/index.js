import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './GlobalComponents/ThemeProvider';
import { CartProvider } from 'react-use-cart';
import "./i18n/i18next"

render(

    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
, document.getElementById('root'));