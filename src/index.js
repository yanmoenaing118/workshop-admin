import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dramas from "./routes/dramas";
import Songs from "./routes/songs";
import Home from "./routes/home";
import Login from "./routes/login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="dramas" element={<Dramas />} />
        <Route path="songs" element={<Songs />} />
      </Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

/**
 * 
import Layout from "./components/Layout";
<Route path="/" element={<Layout><App /></Layout>} />
<Route index element={<Layout><Home /></Layout>} />
<Route path="dramas" element={<Layout><Dramas /></Layout>} />
<Route path="songs" element={<Layout><Songs /></Layout>} />

 */
