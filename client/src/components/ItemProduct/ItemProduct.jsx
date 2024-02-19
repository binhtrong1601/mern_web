import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./ItemProduct.scss";
import { Rate } from "antd";

const ItemProduct = ({ image, name, price, rating, discount,selled,maxLength }) => {
  const [truncatedText, setTruncatedText] = useState(name);
  useEffect(() => {
    if (name.length > maxLength) {
      setTruncatedText(name.substring(0, maxLength) + '...');
    }
  }, [name, maxLength]);

  return (
    <div to="/product-detail" className="item-product">
      <Link to="/product-detail" class="">
        <div
          class="card"
          style={{
            width: "18rem",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          <img src={image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title">{truncatedText}</h6>
            <Rate style={{fontSize:'12px'}} disabled defaultValue={rating} /> {selled? <span style={{fontSize:'12px'}}>| Đã bán : {selled}</span>:<></>}
            <div class="card-price">
              <p>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(price)}
              </p>
              {discount ? (
                <div class="card-price-discount">-{discount}%</div>
              ) : (
                <></>
              )}
            </div>
            {/* <a href="#" class="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemProduct;
