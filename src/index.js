import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cursor from './Global/Cursor'
import reportWebVitals from './reportWebVitals';
import { isMobile } from 'react-device-detect';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {!isMobile && <Cursor />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
