import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import './style.scss';

const Layout = ({ children }) => {
  return (
    <div className="container_app">
      <Header/>
      <main className="container_app__main">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
