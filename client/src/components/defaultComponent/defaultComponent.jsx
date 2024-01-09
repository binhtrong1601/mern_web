import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const DefaultComponent = ({ children }) => {
  return (
    <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
            {children}
            </div>
            <Footer />
        </div>
  );
};

export default DefaultComponent;
