import React from "react";

// css
import "../css/service.css";

// resource
import returnPolicyIcon from "../resource/icon/exchange.png";
import repairIcon from "../resource/icon/icons8-repair-100.png";
import shippingIcon from "../resource/icon/delivery.png";

//
function ServiceComponent() {
  const onContactUsClick = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <div id="service-page">
        <div className="service-info-box" id="box1">
          <label htmlFor="box1" className="service-title-box" id="label1">
            <img src={returnPolicyIcon} alt="return policy icon" />
            <p>Return Policy</p>
          </label>
          <p className="content-title">About return policy</p>
          <p className="content">
            We have a 14-day return policy, which means you have 14 days after
            receiving your item to request a return.
          </p>
          <br />
          <p className="content">
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You'll also need the receipt or proof of
            purchase. You will be eligible for an exchange of the product or a
            store credit.
          </p>
          <br />
          <p className="content">
            Alternatively, you may return your purchased item in the store.
            Please make sure to bring receipt or proof of purchase.
          </p>
        </div>

        <div className="service-info-box" id="box2">
          <label htmlFor="box2" className="service-title-box" id="label2">
            <img src={repairIcon} alt="repair icon" />
            <p>Product Warranty</p>
          </label>
          <p className="content-title">Addresses of warranty centers</p>
          <p className="content">
            2PMX+PRX, An Khanh Ward, Ninh Kieu, Can Tho, Vietnam
          </p>
          <p className="content">
            QJ73+86P, 809 HL2, Binh Tri Dong A, Binh Tan, Ho Chi Minh City
            100000, Vietnam
          </p>
          <p className="content">
            2RHP+PFC, Quoc Tu Giam Ward, Temple of Literature, Dong Da, Hanoi,
            Vietnam
          </p>
          <p className="content-title">
            Product warranty conditions and period
          </p>

          <p className="content">
            The warranty period for any product is 2 years.
          </p>
          <p className="content">The product is not damaged more than 15%.</p>
        </div>

        <div className="service-info-box" id="box3">
          <label htmlFor="box3" className="service-title-box" id="label3">
            <img src={shippingIcon} alt="shipping icon" />
            <p>Shipping And Delivery</p>
          </label>
          <p className="content-title">About transportation method</p>
          <p className="content">
            We offer FREE Standard Shipping on all PR orders over 2 million VND.
            We also offer FREE Curbside Pickup for online orders.
          </p>
          <br />
          <p className="content">
            Please note that shipping times are approximated from the time your
            purchase leaves our warehouse and are not guarantee. Please allow 3
            to 5 business days from the date of purchase for your order to ship
            (unless otherwise noted). We try to group all of your orders
            together so that you receive a single package, though sometimes your
            orders may arrive in separate packages.
          </p>
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
