import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages

import Home from '../src/Pages/Home/Home'
import Page404 from '../src/Pages/404/404'
import Store from './Pages/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

