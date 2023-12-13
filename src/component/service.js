import React, { useRef } from "react";

// css
import "../css/service.css";

// resource
import returnPolicyIcon from "../resource/icon/exchange.png";
import repairIcon from "../resource/icon/icons8-repair-100.png";
import shippingIcon from "../resource/icon/delivery.png";

//
function ServiceComponent() {
  const checkbox = useRef([]);

  const onLabelClick = (index) => {
    checkbox.current.forEach((element, idx) => {
      if (index === idx) {
        element.checked = true;
      } else element.checked = false;
    });
  };

  const onContactUsClick = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <div id="service-page">
        <div id="service-card-container">
          <div id="left-box" className="service-info-container">
            <input
              type="checkbox"
              id="checkbox1"
              ref={(element) => (checkbox.current[0] = element)}
            />
            <label
              htmlFor="box1"
              className="service-title-box"
              onClick={() => onLabelClick(0)}
              id="label1"
            >
              <img src={returnPolicyIcon} alt="return policy icon" />
              <p>Return Policy</p>
            </label>
            <div className="service-info-box" id="box1">
              <p className="content-title">About return policy</p>
              <p className="content">
                - We have a 14-day return policy, which means you have 14 days
                after receiving your item to request a return.
              </p>
              <br />
              <p className="content">
                - To be eligible for a return, your item must be in the same
                condition that you received it, unworn or unused, with tags, and
                in its original packaging. You’ll also need the receipt or proof
                of purchase. You will be eligible for an exchange of the product
                or a store credit.
              </p>
              <br />
              <p className="content">
                - Alternatively, you may return your purchased item in the
                store. Please make sure to bring receipt or proof of purchase.
              </p>
            </div>
          </div>

          <div id="center-box" className="service-info-container">
            <input
              type="checkbox"
              id="checkbox2"
              ref={(element) => (checkbox.current[1] = element)}
              checked
            />
            <label
              htmlFor="box2"
              className="service-title-box"
              onClick={() => onLabelClick(1)}
              id="label2"
            >
              <img src={repairIcon} alt="repair icon" />
              <p>Product Warranty</p>
            </label>
            <div className="service-info-box" id="box2">
              <p className="content-title">
                Addresses of warranty centers around the world
              </p>
              <p className="content">(Add your warranty center address here)</p>
              <p className="content">(Add your warranty center address here)</p>
              <p className="content">(Add your warranty center address here)</p>

              <p className="content-title">
                Product warranty conditions and period
              </p>
              <p className="content">
                The warranty period for any product is X years.
              </p>
              <p className="content">
                The product is not damaged more than Y%.
              </p>
            </div>
          </div>

          <div id="right-box" className="service-info-container">
            <input
              type="checkbox"
              id="checkbox3"
              ref={(element) => (checkbox.current[2] = element)}
            />
            <label
              htmlFor="box3"
              className="service-title-box"
              onClick={() => onLabelClick(2)}
              id="label3"
            >
              <img src={shippingIcon} alt="shipping icon" />
              <p>Shipping And Delivery</p>
            </label>
            <div className="service-info-box" id="box3">
              <p className="content-title">About transportation method</p>
              <p className="content">
                - We offer FREE Standard Shipping on all PR orders over 2
                million VND. We also offer FREE Curbside Pickup for online
                orders.
              </p>
              <br />
              <p className="content">
                - Please note that shipping times are approximated from the time
                your purchase leaves our warehouse and are not guarantee. Please
                allow 3 to 5 business days from the date of purchase for your
                order to ship (unless otherwise noted). We try to group all of
                your orders together so that you receive a single package,
                though sometimes your orders may arrive in separate packages.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="other-service-container">
        <h2>Are you having difficulty? Contact us now.</h2>
        <button className="black-hover-btn" onClick={onContactUsClick}>
          Contact Us
        </button>
      </div>
    </>
  );
}

export default React.memo(ServiceComponent);
