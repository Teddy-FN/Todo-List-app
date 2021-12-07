import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="container_app">
      <Header />
      <div>{children}</div>
      <div className="container_app__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
