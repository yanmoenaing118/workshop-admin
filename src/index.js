import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Login from './routes/login';
import Songs from './routes/songs';
import Dramas from './routes/dramas';

ReactDOM.render(
  <BrowserRouter>

    <Routes>


      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='dramas' element={<Dramas />} />
        <Route path='songs' element={<Songs />} />
      </Route>

      <Route path='/login' element={<Login />} />

    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);
