import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
    </React.StrictMode>
  </BrowserRouter>
);

//reportWebVitals();
