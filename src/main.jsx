import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop.jsx";
import Layout from "./layout.jsx";
import App from "./App.jsx";
import Contact from "@section/contact/contact.jsx";
import Mention from "@section/mentions__legales/mentions__legales.jsx"

import "@styles/global.scss";
import "@styles/animations.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Mention />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
