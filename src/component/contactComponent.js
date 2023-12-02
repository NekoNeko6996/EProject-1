import { toast } from "react-toastify";

// css
import "../css/contact.css";

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
    const promise = new Promise((resolve) => setTimeout(resolve, 2000));
    promise.then(() => {
      sendBtn.disabled = false;
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
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.70521845631!2d-67.16190268434902!3d18.243964062884068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02b1d0a1e25f01%3A0x1c8fe2616b87a58a!2sAlberto%20%26%20Co!5e0!3m2!1svi!2s!4v1701484952222!5m2!1svi!2s"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        id="contact-map"
      ></iframe>
    </div>
  );
}

export default ContactComponent;
