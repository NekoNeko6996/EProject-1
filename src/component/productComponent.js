import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

// component
import ProductContainerLoader from "./productContainer";

// css
import "../css/productComponent.css";

// resource
import noImgData from "../resource/img/noImgData.png";

// data base
import { productDB } from "../database/data";

function ProductComponent() {
  const [quantity, setQuantity] = useState(1);

  const productId = useParams().productId;
  const product = productDB[productId];

  // limit items
  const limit = 12;
  // load default page 1
  const defaultPage = 1;

  const productCallback = () => {};

  // change img scr when click
  const onImgClick = (src) => {
    document.getElementById("watch-img").src = src;
  };

  const onAddToCartClick = (btn) => {
    btn.disabled = true;
    const sessionS = window.sessionStorage;
    let prevData;

    if (!sessionS.getItem("user")) {
      window.location.href = "/login";
      return;
    }
    if (sessionS.getItem("productAdd"))
      prevData = sessionS.getItem("productAdd");

    window.sessionStorage.setItem(
      "productAdd",
      `${prevData ? prevData + "," + productId : productId}`
    );
    toast.success("Add to cart successfully!");
    btn.disabled = false;
  };

  // scroll when load new product
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  return (
    <>
      <div id="info-product-container">
        <div id="info-product-img">
          <img
            id="watch-img"
            src={product.imgUrl.no1 || noImgData}
            alt="Watch-img"
          />
          <div id="more-watch-img">
            <img
              src={product.imgUrl.no1 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
            />
            <img
              src={product.imgUrl.no2 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
            />
            <img
              src={product.imgUrl.no3 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
            />
          </div>
        </div>
        <div id="info-product-buy-container">
          <p id="swatch">SWATCH</p>
          <p id="sku">SKU: {product.SKU}</p>
          <p id="name">{product.name}</p>
          <div id="rating">
            <span>
              {"★".repeat(product.rate.star)}
              {"☆".repeat(5 - product.rate.star)}
            </span>
            <p>({product.rate.amount} people rated it)</p>
          </div>
          <div id="detail">
            {/* <div id="describe">
              <p>{product.properties.describe}</p>
            </div> */}
            <div className="product-detail-child">
              <p>Movement</p>
              <p>{product.properties.movement}</p>
            </div>
            <div className="product-detail-child">
              <p>Case Color</p>
              <p>{product.properties.caseColor}</p>
            </div>
            <div className="product-detail-child">
              <p>Dial Color</p>
              <p>{product.properties.dialColor}</p>
            </div>
            <div className="product-detail-child">
              <p>Strap</p>
              <p>{product.properties.strap}</p>
            </div>
            <div className="product-detail-child">
              <p>Water Resistant</p>
              <p>{product.properties.waterResistant}</p>
            </div>
            <div className="product-detail-child">
              <p>Warranty</p>
              <p>{product.properties.warranty}</p>
            </div>
          </div>
          <div id="quantity">
            <div id="quantity-input-container">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev <= 1 ? prev : (prev -= 1)))
                }
              ></button>
              <p>{quantity}</p>
              <button
                id="add-quantity-btn"
                onClick={() => setQuantity((prev) => (prev += 1))}
              ></button>
            </div>
            <div id="price">
              {(product.price * quantity).toLocaleString("VN-vi", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div id="buttons">
            <button
              id="add-to-cart"
              className="black-hover-btn"
              onClick={(event) => onAddToCartClick(event.target)}
            >
              Add to cart
            </button>
            <button id="buy-now" className="black-hover-btn">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <h2 id="your-also-like-title">YOUR MIGHT ALSO LIKE</h2>
      <div id="your-also-like-container">
        <ProductContainerLoader
          limit={limit}
          page={defaultPage}
          sort={{ action: "", value: "" }}
          callback={productCallback}
        />
      </div>
    </>
  );
}

export default ProductComponent;
