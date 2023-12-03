import { useEffect } from "react";
import { useParams } from "react-router-dom";

// component
import ProductContainerLoader from "./productContainer";

// css
import "../css/productComponent.css";

function ProductComponent() {
  const productId = useParams().productId;

  const productCallback = () => {};

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
          <div id="watch-img">Watch Img</div>
          <div id="more-watch-img">
            <div>More Watch Img</div>
            <div>More Watch Img</div>
            <div>More Watch Img</div>
          </div>
        </div>
        <div id="info-product-buy-container">
          <div id="swatch">SWATCH</div>
          <div id="sku">SKU: YMA301</div>
          <div id="name">Name of Watch</div>
          <div id="rating">
            <span>★★★★★</span>
            <p>(320 people rated it)</p>
          </div>
          <div id="detail">
            <div className="product-detail-child">
              <p>Collection</p>
              <p>Classic</p>
            </div>
            <div className="product-detail-child">
              <p>Movement</p>
              <p>Quartz</p>
            </div>
            <div className="product-detail-child">
              <p>Case Color</p>
              <p>Black Stainless Steel</p>
            </div>
            <div className="product-detail-child">
              <p>Dial Color</p>
              <p>Black Dial</p>
            </div>
            <div className="product-detail-child">
              <p>Sdivap</p>
              <p>Red Leather Sdivap</p>
            </div>
            <div className="product-detail-child">
              <p>Water Resistant</p>
              <p>30 meters</p>
            </div>
            <div className="product-detail-child">
              <p>Warranty</p>
              <p>2 years</p>
            </div>
          </div>
          <div id="quantity">
            <p>Qty</p>
            <input type="number" id="qty" min="1" />
            <div id="price">$1920.00</div>
          </div>
          <div id="buttons">
            <button id="add-to-cart" className="black-hover-btn">
              Add to cart
            </button>
            <button id="buy-now" className="black-hover-btn">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <h2 id="your-also-like-title">YOUR ALSO LIKE</h2>
      <div id="your-also-like-container">
        <ProductContainerLoader
          limit={5}
          page={1}
          sort={{ action: "", value: "" }}
          callback={productCallback}
        />
      </div>
    </>
  );
}

export default ProductComponent;
