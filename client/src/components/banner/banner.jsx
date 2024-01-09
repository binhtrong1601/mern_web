import React from "react";
import { Container, Row, Col } from "reactstrap";

const HeaderBanner = () => {
  return (
    <div className="static-slider-head">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">Wrapkit Lite</h1>
            <h4 className="subtitle font-light">
              Powerful Reactstrap UI Kit with
              <br /> Beautiful Pre-Built Demos
            </h4>
            {/* <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link> */}
            <label for="exampleDataList" class="form-label">
              Datalist example
            </label>
            <input
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner;
