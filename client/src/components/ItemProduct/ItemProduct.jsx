import React from "react";
import { Link } from "react-router-dom";
// import { styles } from "./ItemProduct.css";

const ItemProduct = () => {
  return (
    <Link to='/product-detail' className="item-product">
      <div class="container">
        <div
          class="card"
          style={{
            width: "18rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemProduct;
