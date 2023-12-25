import React, { useCallback, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// component
import ProductContainerLoader from "./productContainer";

// css
import "../css/productComponent.css";

// resource
import noImgData from "../resource/img/no_img_data.png";

// data base
import { productDB } from "../database/data";

function ProductComponent() {
  const [quantity, setQuantity] = useState(1);
  const [imgZoomLayer, setImgZoomLayer] = useState(false);

  const ImgZoom = useRef(null);

  const productId = useParams().productId;
  const product = productDB[productId];

  // limit items
  const limit = 12;
  // load default page 1
  const defaultPage = 1;

  // scroll when load new product
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setQuantity(1);
  }, [productId]);

  // get user status
  const getUserLoginStatus = () => {
    let sessionS = window.sessionStorage.getItem("user");
    return sessionS ? sessionS : false;
  };

  // change img scr when click
  const onImgClick = (src) => {
    document.getElementById("watch-img").src = src;
  };

  // when clicking add to cart
  const onAddToCartClick = (btn) => {
    btn.disabled = true;

    const processAddToCart = () => {
      let prevCart = window.sessionStorage.getItem("cart"),
        prevQuantity = window.sessionStorage.getItem("quantityCart");

      window.sessionStorage.setItem(
        "cart",
        `${prevCart ? `${prevCart},${productId}` : productId}`
      );
      window.sessionStorage.setItem(
        "quantityCart",
        `${prevQuantity ? `${prevQuantity},${quantity}` : quantity}`
      );
    };

    // Check login status
    if (!getUserLoginStatus()) {
      btn.disabled = false;
      swal({
        title: "Sign in to add this product to your cart?",
        text: "Do you want to redirect to the login page?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      }).then((yes) => {
        if (yes) {
          window.location.href = "/login";
        } else return;
      });
    } else {
      // Change this promise if you want to actually send data to the server
      const promise = new Promise((resolve) => setTimeout(resolve, 1000));
      promise.then(() => {
        processAddToCart();
        btn.disabled = false;
      });

      toast.promise(promise, {
        pending: "Adding ...",
        error: "Error",
        success: "Add success!",
      });
    }
  };

  // when clicking to buy the product
  const onBuyClick = (btn) => {
    btn.disabled = true;

    const SessionStorage = (action, key, value) => {
      if (action === "get") return window.sessionStorage.getItem(key) || "";
      if (action === "add") sessionStorage.setItem(key, value);
    };

    const processPurchase = () => {
      let prevPurchased = SessionStorage("get", "purchased");
      let prevQuantityPurchased = SessionStorage("get", "quantityPurchased");
      SessionStorage(
        "add",
        "purchased",
        prevPurchased ? `${prevPurchased},${productId}` : productId
      );
      SessionStorage(
        "add",
        "quantityPurchased",
        prevQuantityPurchased
          ? `${prevQuantityPurchased},${quantity}`
          : quantity
      );
    };

    if (getUserLoginStatus()) {
      // If you want to actually send a request to the server, modify this promise
      const promise = new Promise((resolve) => setTimeout(resolve, 1000));
      promise.then(() => {
        swal({
          title: "Successfully Purchase",
          text: "Your order is awaiting approval",
          icon: "success",
          button: "Done",
        });

        // after send request //
        processPurchase();
        btn.disabled = false;
      });
      toast.promise(promise, {
        pending: "Sending purchase request...",
        success: "Done",
        error: "Purchase application was rejected",
      });
    } else {
      btn.disabled = false;
      swal({
        title: "You need to log in to purchase",
        text: "Do you want to redirect to the login page?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      }).then((yes) => {
        if (yes) {
          window.location.href = "/login";
        } else return;
      });
    }
  };

  // watch img click
  const onZoomImgClick = (src) => {
    ImgZoom.current.src = src;
    setImgZoomLayer(true);
  };

  return (
    <div id="product-page">
      <div
        id="img-zoom-box-layer"
        className={imgZoomLayer ? "img-zoom-show" : ""}
      >
        <div id="zoom-box">
          <TransformWrapper
            initialScale={1}
            minScale={0.1}
            initialPositionX={0}
            initialPositionY={0}
          >
            <TransformComponent>
              <img src={noImgData} alt="error" ref={ImgZoom} id="img-zoom" />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <button
          id="zoom-img-close-btn"
          onClick={() => setImgZoomLayer(false)}
        ></button>
      </div>
      <div id="info-product-container">
        {/* img */}
        <div id="info-product-img">
          <img
            id="watch-img"
            src={product.imgUrl.no1 || noImgData}
            alt="Watch-img"
            onError={(event) => (event.target.src = noImgData)}
            onClick={(event) => onZoomImgClick(event.target.src)}
          />
          <div id="more-watch-img">
            <img
              src={product.imgUrl.no1 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
              onError={(event) => (event.target.src = noImgData)}
            />
            <img
              src={product.imgUrl.no2 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
              onError={(event) => (event.target.src = noImgData)}
            />
            <img
              src={product.imgUrl.no3 || noImgData}
              alt="watch-img"
              onClick={(event) => onImgClick(event.target.src)}
              onError={(event) => (event.target.src = noImgData)}
            />
          </div>
        </div>

        {/* info */}
        <div id="info-product-buy-container">
          {product.availability.status ? null : (
            <p id="sold-out-box">SOLD OUT</p>
          )}
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
            <div id="price-container">
              <p id="price-discounted">
                {product.sale > 0
                  ? (
                      (product.price / (100 - product.sale)) *
                      100 *
                      quantity
                    ).toLocaleString("VN-vi", {
                      style: "currency",
                      currency: "VND",
                    })
                  : null}
              </p>
              <p id="price">
                {(product.price * quantity).toLocaleString("VN-vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          </div>

          <div id="buttons">
            <button
              id="add-to-cart"
              className={product.availability.status ? "" : "disable-btn"}
              onClick={(event) => onAddToCartClick(event.target)}
              disabled={!product.availability.status}
            >
              Add to cart
            </button>
            <button
              id="buy-now"
              className={product.availability.status ? "" : "disable-btn"}
              onClick={(event) => onBuyClick(event.target)}
              disabled={!product.availability.status}
            >
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
          callback={useCallback(() => {}, [])}
          random={true}
        />
      </div>
    </div>
  );
}

export default React.memo(ProductComponent);
