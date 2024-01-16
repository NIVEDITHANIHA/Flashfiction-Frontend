import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Contextshared from './context/Contextshared';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contextshared>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Contextshared>
   
  </React.StrictMode>
);

