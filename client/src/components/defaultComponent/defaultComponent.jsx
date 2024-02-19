import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './defaultComponent.scss'
import { Row } from "reactstrap";

const DefaultComponent = ({ children }) => {
  return (
    <div id="main-wrapper" className="main-wrapper">
      <Header />
      <div className="container">
        <div style={{backgroundColor:'#fff', marginBottom:'20px'}}>
        {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultComponent;
