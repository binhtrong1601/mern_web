import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

import img1 from "../../assets/images/ui/img4.jpg";
import img2 from "../../assets/images/ui/img5.jpg";
import img3 from "../../assets/images/ui/img6.jpg";
import { HeartOutlined } from "@ant-design/icons";
import CountComponent from "../countComponent/CountComponent";

const items = [
  {
    src: img1,
    altText: "",
    caption: "",
  },
  {
    src: img2,
    altText: "",
    caption: "",
  },
  {
    src: img3,
    altText: "",
    caption: "",
  },
];

const ProductDetailComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      className="custom-tag"
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img className="w-100" src={item.src} alt={item.altText} />
      <CarouselCaption
        captionText={item.caption}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <div>
      <div className="spacer" id="carousel-cpn">
        <Container>
          <Row className="m-b-40">
            <Col md="6">
              <Carousel
                activeIndex={activeIndex}
                next={next.bind(null)}
                previous={previous.bind(null)}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex.bind(null)}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous.bind(null)}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next.bind(null)}
                />
              </Carousel>
            </Col>
            <Col md="6" className="d-flex flex-column">
              <Row>
                <div class="col-10">
                  <h2>Long Sleeves Polka Dots</h2>
                </div>
                <div class="col-2">
                  <HeartOutlined
                    style={{ fontSize: "25px", cursor: "pointer",color:'#d63031' }}
                  />
                </div>
              </Row>
              <Row>
              <div class="product-description">
                <h3 style={{color:"#d63031"}}>100.000đ</h3> 
                <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
              </div>
              </Row>
              <Row>
                <Col>
                  <CountComponent/>
                </Col>
                <Col>
                  <Button color="danger">Add to Card</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
