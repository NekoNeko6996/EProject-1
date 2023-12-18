import { toast } from "react-toastify";
import React from "react";
import swal from "sweetalert";

// css
import "../css/contact.css";

//
function ContactComponent() {
  //
  const onBtnSendProblemClick = () => {
    const sendBtn = document.getElementById("contact-send-btn");
    const contactTextarea = document.getElementById("contact-textarea");
    const contactInputEmail = document.getElementById("contact-input-email");

    // disable btn
    sendBtn.disabled = true;

    // check
    const TEXT_PATTERN = /^\w{1,}$/;
    // eslint-disable-next-line no-useless-escape
    const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!TEXT_PATTERN.test(contactTextarea.value)) {
      toast.error("Please input your Problem before send it!");
      sendBtn.disabled = false;
      return;
    }
    if (!EMAIL_PATTERN.test(contactInputEmail.value)) {
      toast.error("Please input your Email before send it!");
      sendBtn.disabled = false;
      return;
    }

    // Change this promise if you want to actually send data to the server
    const promise = new Promise((resolve) => setTimeout(resolve, 1500));
    promise.then(() => {
      sendBtn.disabled = false;
      swal({
        title: "Submitted Successfully",
        text: "We will respond to you via email soon",
        icon: "success",
        button: "Done",
      });
    });

    toast.promise(promise, {
      pending: "Sending ...",
      error: "Error",
      success: "Send success!",
    });
  };

  return (
    <div id="contact-container">
      <h1 className="contact-h" id="contact-title-h1">
        SEND US YOUR PROBLEM
      </h1>
      <textarea id="contact-textarea" placeholder="Your problem ..."></textarea>
      <div id="contact-email-input-container">
        <input
          type="email"
          name="contact-email"
          id="contact-input-email"
          placeholder="Please fill in your email so we can respond ..."
        />
        <button
          id="contact-send-btn"
          className="black-hover-btn"
          onClick={onBtnSendProblemClick}
        >
          SEND
        </button>
      </div>
      <h2 className="contact-h" id="contact-title-h2">
        OTHER CONTACT METHODS
      </h2>
      <p id="contact-p-01">
        Alberto & Co is a family owned business in Mayaguez and Isabela, Puerto
        Rico.
      </p>
      <p id="contact-p-02">Phone: (787)265-6370</p>
      <p id="contact-p-03">Email: sales@shopalbertopr.com</p>

      {/* google map */}
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.0408004350863!2d105.7792409911298!3d10.032920628106707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1svi!2s!4v1702002480414!5m2!1svi!2s"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        id="contact-map"
      ></iframe>
    </div>
  );
}

export default React.memo(ContactComponent);
