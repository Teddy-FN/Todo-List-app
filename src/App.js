import React from "react";
import Layout from "./components/Main/layout";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import ErrorHandling from "./pages/404";
import { Routes, Route } from 'react-router-dom'

// Style
import './style/global.scss'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorHandling />} />
      </Routes>
    </Layout>
  );
}

export default App;
