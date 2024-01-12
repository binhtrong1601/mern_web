import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const DefaultComponent = ({ children }) => {
  return (
    <div id="main-wrapper" style={{ backgroundColor: "#f9f9f9" }}>
      <Header />
      <div className="container">
        <div style={{backgroundColor:'#fff', marginTop:'110px', marginBottom:'20px',borderRadius:'15px'}}>
        {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
