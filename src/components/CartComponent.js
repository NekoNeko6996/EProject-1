import React, { useCallback, useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { toast } from "react-toastify";

// css
import "../css/cart.css";

// data
import { productDB } from "../database/data";
import { currency, locale } from "../database/data";

// component
import ProductContainerLoader from "./productContainer";

// resource
import emptyCart from "../resource/icon/empty-cart.png";
import emptyBox from "../resource/icon/empty-box.png";

//
function CartComponent() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartArr, setCartArray] = useState([]);
  const [cartAmountArray, setCartAmountArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [onCheckboxClick, setOnCheckboxClick] = useState(() => () => {});
  const [updateCount, setUpdateCount] = useState(0);

  const [purchasedArr, setPurchasedArr] = useState([]);
  const [quantityPurchasedArr, setQuantityPurchasedArr] = useState([]);

  const checkboxComponent = useRef([]);

  // login check
  useEffect(() => {
    if (!window.sessionStorage.getItem("user")) window.location.href = "/login";
  });

  // sessionStorage
  const SessionStorage = (action, key, value) => {
    let sessionStorage = window.sessionStorage;
    if (action === "remove") sessionStorage.removeItem(key);
    if (action === "add") sessionStorage.setItem(key, value);
    if (action === "get") return sessionStorage.getItem(key) || "";
  };

  // load cart data and purchased data
  useEffect(() => {
    const getData = (key) => {
      return SessionStorage("get", key)
        ? SessionStorage("get", key).split(",").map(Number)
        : null;
    };

    if (SessionStorage("get", "user")) {
      let cart = getData("cart");
      let cartQuantity = getData("quantityCart");
      let purchased = getData("purchased");
      let purchasedQuantity = getData("quantityPurchased");

      if (cart && cartQuantity) {
        setCartArray(cart);
        setCartAmountArray(cartQuantity);
      }
      if (purchased && purchasedQuantity) {
        setPurchasedArr(purchased);
        setQuantityPurchasedArr(purchasedQuantity);
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

  // update Amount item
  useEffect(() => {
    setUpdateCount((prev) => prev + 1);
  }, [cartAmountArray]);

  useEffect(() => {
    onCheckboxClick();
  }, [updateCount, onCheckboxClick]);

  // remove cart item
  const onRemoveClick = (index) => {
    const processRemove = () => {
      let newCart = cartArr.filter((_, idx) => !(idx === index));
      let newQuantity = cartAmountArray.filter((_, idx) => !(idx === index));

      setCartAmountArray(newQuantity);
      setCartArray(newCart);
      if (newCart.length && newQuantity.length) {
        SessionStorage("add", "cart", newCart.join(","));
        SessionStorage("add", "quantityCart", newQuantity.join(","));
      } else {
        SessionStorage("remove", "cart");
        SessionStorage("remove", "quantityCart");
      }
    };

    swal({
      title: "Are you sure?",
      text: "Remove this product from cart?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        processRemove();
      }
    });
  };

  //when clicking to buy the product
  const onPurchaseClick = (btn) => {
    btn.disabled = true;
    if (!totalQuantity) {
      toast.warn("You need to choose at least 1 item to buy!");
      btn.disabled = false;
      return;
    }

    const processPurchase = () => {
      const { current: checkboxes } = checkboxComponent;
      const cart = [];
      const cartQuantity = [];
      const purchase = [];
      const quantityPurchase = [];
      const purchased = SessionStorage("get", "purchased");
      const quantityPurchased = SessionStorage("get", "quantityPurchased");

      cartArr.forEach((value, index) => {
        if (checkboxes[index].checked) {
          purchase.push(value);
          quantityPurchase.push(cartAmountArray[index]);
        } else {
          cart.push(value);
          cartQuantity.push(cartAmountArray[index]);
        }
      });

      const updateSessionStorage = (key, value) => {
        if (!value.length) {
          SessionStorage("remove", key);
        } else {
          SessionStorage("add", key, value.join(","));
        }
      };

      updateSessionStorage("cart", cart);
      updateSessionStorage("quantityCart", cartQuantity);
      setCartArray(cart);

      SessionStorage(
        "add",
        "purchased",
        purchased ? `${purchased},${purchase.join(",")}` : purchase.join(",")
      );
      SessionStorage(
        "add",
        "quantityPurchased",
        quantityPurchased
          ? `${quantityPurchased},${quantityPurchase.join(",")}`
          : quantityPurchase.join(",")
      );
    };

    // Simulating cancellation delay
    // If you want to actually send a request to the server, modify this promise
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));
    promise.then(() => {
      swal({
        title: "Successfully Purchase",
        text: "Your order is awaiting approval",
        icon: "success",
        button: "Done",
      }).then(() => window.location.reload());

      processPurchase();
    });

    toast.promise(promise, {
      pending: "Sending purchase request...",
      success: "Done",
      error: "Purchase application was rejected",
    });
  };

  // when clicking cancel purchase order
  const onCancelOder = (index) => {
    swal({
      title: "Are you sure?",
      text: "This action will cancel your purchase!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willCancel) => {
      if (willCancel) {
        const processCancellation = () => {
          const newPurchase = purchasedArr.filter((_, idx) => idx !== index);
          const newQuantity = quantityPurchasedArr.filter(
            (_, idx) => idx !== index
          );

          setPurchasedArr(newPurchase);
          setQuantityPurchasedArr(newQuantity);

          if (newPurchase.length) {
            SessionStorage("add", "purchased", newPurchase);
            SessionStorage("add", "quantityPurchased", newQuantity);
          } else {
            SessionStorage("remove", "purchased");
            SessionStorage("remove", "quantityPurchased");
          }
        };

        // Simulating cancellation delay
        // If you want to actually send a request to the server, modify this promise
        const promise = new Promise((resolve) => setTimeout(resolve, 1000));
        promise.then(() => {
          swal({
            title: "Successfully canceled the purchase order!",
            icon: "success",
            button: "Done",
          });
          processCancellation();
        });

        toast.promise(promise, {
          pending: "Canceling purchase order...",
          success: "Success",
          error: "Error",
        });
      }
    });
  };

  return (
    <div id="cart-page">
      <h1 className="cart-title">YOUR CART</h1>
      <div id="cart-container">
        {cartArr.map((id, index) => (
          <div className="cart-items-box" key={index}>
            <div className="cart-checkbox">
              <input
                type="checkbox"
                name="cart-check"
                className="cart-checkbox f23"
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
        ))}

        {/* when there are no products in the cart */}
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
      {/* select all btn and buy btn */}
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
          <button
            className="purchase"
            onClick={(event) => onPurchaseClick(event.target)}
          >
            PURCHASE
          </button>
        </div>
      </div>

      <h1 className="cart-title">YOU BOUGHT</h1>
      <div id="purchased-product-container">
        {purchasedArr.map((id, index) => (
          <div className="cart-info-box" key={index}>
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
                  <p>{quantityPurchasedArr[index]}</p>
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
              <button className="remove" onClick={() => onCancelOder(index)}>
                CANCEL ORDER
              </button>
            </div>
          </div>
        ))}
        {purchasedArr.length ? null : (
          <div id="empty-cart-box">
            <img src={emptyBox} alt="empty box img" />
            <h1>Nothing yet...</h1>
            <button onClick={() => (window.location.href = "/")}>
              Buy Now
            </button>
          </div>
        )}
      </div>

      {/* other product */}
      <h1 className="cart-title">OTHER PRODUCTS</h1>
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
    </div>
  );
}

export default React.memo(CartComponent);
