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
                Products can be returned and refunded within 3 months.
              </p>
              <p className="content">The product has a manufacturer defect.</p>
             
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
              <p className="content">(your shipping method here)</p>
              <p className="content">(your shipping method here)</p>
              <p className="content">(your shipping method here)</p>
              <p className="content-title">Upon receiving the product</p>
              <p className="content">
                Check the product before receiving the goods
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
