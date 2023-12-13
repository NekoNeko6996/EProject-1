import React, { useCallback, useEffect, useRef, useState } from "react";
import swal from "sweetalert";

// css
import "../css/cart.css";

// data
import { productDB } from "../database/data";
import { currency, locale } from "../database/data";

// component
import ProductContainerLoader from "./productContainer";

// resource
import emptyCart from "../resource/icon/empty-cart.png";

//
function CartComponent() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartArr, setCartArray] = useState([]);
  const [cartAmountArray, setCartAmountArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [onCheckboxClick, setOnCheckboxClick] = useState(() => () => {});
  const [updateCount, setUpdateCount] = useState(0);

  const checkboxComponent = useRef([]);

  // login check
  useEffect(() => {
    if (!window.sessionStorage.getItem("user")) window.location.href = "/login";
  });

  // load cart data
  useEffect(() => {
    if (window.sessionStorage.getItem("user")) {
      let sessionS = window.sessionStorage.getItem("productAdd");
      if (sessionS) {
        let stringArr = sessionS.split(",");
        let cartArr = stringArr.map(Number);
        setCartArray(cartArr);

        let amountArray = new Array(cartArr.length).fill(1);
        setCartAmountArray(amountArray);
      }
    }
  }, []);

  // Calculate total amount and total quantity
  useEffect(() => {
    const updatedCallback = () => {
      let totalP = 0;
      let totalQ = 0;
      cartArr.forEach((id, index) => {
        if (checkboxComponent.current[index].checked) {
          totalP += productDB[id].price * cartAmountArray[index];
          totalQ += cartAmountArray[index];
        }
      });
      setTotalPrice(totalP);
      setTotalQuantity(totalQ);
    };
    setOnCheckboxClick(() => updatedCallback);
  }, [cartAmountArray, cartArr]);

  // when click select all
  const onSelectAllCheckboxClick = (checked) => {
    checkboxComponent.current.map((element) => (element.checked = checked));
    onCheckboxClick();
  };

  // quantity update //
  const onQuantityClick = (operator, index) => {
    setCartAmountArray((prev) => {
      const updatedArray = [...prev];
      updatedArray[index] = operator
        ? prev[index] + 1
        : Math.max(prev[index] - 1, 1);
      return updatedArray;
    });
  };
  useEffect(() => {
    setUpdateCount((prev) => prev + 1);
  }, [cartAmountArray]);

  useEffect(() => {
    onCheckboxClick();
  }, [updateCount, onCheckboxClick]);

  // remove cart item
  const onRemoveClick = (index) => {
    swal({
      title: "Are you sure?",
      text: "Remove this product from cart?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let removeArr = cartArr.filter((_, idx) =>
          idx === index ? false : true
        );
        let sessionStorageText = removeArr.join(",");
        setCartArray(removeArr);
        if (sessionStorageText)
          window.sessionStorage.setItem("productAdd", sessionStorageText);
        else window.sessionStorage.removeItem("productAdd");
      }
    });
  };

  return (
    <>
      <h1 id="cart-title">YOUR CART</h1>
      <div id="cart-container">
        {cartArr.map((id, index) => (
          <div className="cart-items-box" key={index}>
            <div className="cart-checkbox">
              <input
                type="checkbox"
                name="cart-check"
                className="cart-checkbox"
                ref={(element) => (checkboxComponent.current[index] = element)}
                onChange={onCheckboxClick}
              />
            </div>
            <div className="cart-info-box">
              <div className="cart-info-name-box">
                <img src={productDB[id].imgUrl.no1} alt="product img" />
                <span>
                  <p className="cart-product-name">{productDB[id].name}</p>
                  <p>SKU {productDB[id].SKU}</p>
                </span>
              </div>
              <div className="price-quantity-box">
                <span>
                  <p className="items-title">PRICE</p>
                  <p className="cart-product-price">
                    {productDB[id].price.toLocaleString(locale, {
                      style: "currency",
                      currency: currency,
                    })}
                  </p>
                </span>
                <span>
                  <p className="items-title">AMOUNT</p>
                  <div className="quantity-input-container">
                    <button
                      onClick={() => onQuantityClick(false, index)}
                    ></button>
                    <p>{cartAmountArray[index]}</p>
                    <button
                      className="add-quantity-btn"
                      onClick={() => onQuantityClick(true, index)}
                    ></button>
                  </div>
                </span>
              </div>
              <div className="cart-items-btn-box">
                <button
                  onClick={() => {
                    window.location.href = `/product/${id}`;
                  }}
                >
                  RETURN TO PRODUCT PAGE
                </button>
                <button className="remove" onClick={() => onRemoveClick(index)}>
                  REMOVE FROM CART
                </button>
              </div>
            </div>
          </div>
        ))}{" "}
        {cartArr.length ? null : (
          <div id="empty-cart-box">
            <img src={emptyCart} alt="empty cart img" />
            <h1>It's so empty here...</h1>
            <button onClick={() => (window.location.href = "/")}>
              Shop Now
            </button>
          </div>
        )}
      </div>
      {/*  */}
      <div id="cart-bottom-buy-box">
        <div className="cart-checkbox-div">
          <p>Select All</p>
          <input
            type="checkbox"
            name="cart-check"
            className="cart-checkbox"
            onClick={(event) => onSelectAllCheckboxClick(event.target.checked)}
          />
        </div>

        <div>
          <p className="items-title">TOTAL PRICE</p>
          <p className="cart-product-price">
            {totalPrice.toLocaleString(locale, {
              style: "currency",
              currency: currency,
            })}
          </p>
        </div>
        <div>
          <p className="items-title">TOTAL AMOUNT</p>
          <div className="quantity-input-container">
            <p>{totalQuantity}</p>
          </div>
        </div>

        <div className="cart-purchase-btn-box">
          <button className="purchase" onClick={() => {}}>
            PURCHASE
          </button>
        </div>
      </div>
      <h1 id="other-product-box-title">OTHER PRODUCTS</h1>
      <div id="other-products-box">
        <ProductContainerLoader
          limit={12}
          page={1}
          sort={{ action: "", value: "" }}
          callback={useCallback(() => {}, [])}
          random={true}
          currency={currency}
          locale={locale}
        />
      </div>
    </>
  );
}

export default React.memo(CartComponent);
