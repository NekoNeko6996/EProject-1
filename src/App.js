import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

// css
import "./css/app.css";
import "react-toastify/dist/ReactToastify.css";
//

// Resource
import logo from "./resource/logo/Logo.png";
import iconFacebook from "./resource/icon/icons8-facebook-50.png";
import iconInstagram from "./resource/icon/icons8-instagram-50.png";
import iconTwitter from "./resource/icon/icons8-twitter-50.png";

//
function App() {
  const [cartAmount, setCartAmount] = useState(0);
  const CartDataSession = window.sessionStorage.getItem("productAdd");

  useEffect(() => {
    let CartData;

    // convert data from sessionStorage to ID array
    if (CartDataSession) {
      CartData = CartDataSession.split(",").map(Number);
      setCartAmount(CartData.length);
    }
  }, [CartDataSession]);

  const onLogout = () => {
    window.sessionStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div id="App">
      <header id="home-header">
        <a href="/">
          <img src={logo} alt="Logo" id="logo" />
        </a>
        <a href="/" id="hone-name-shop-header">
          <h1>AlBERTO</h1>
        </a>
        <div id="home-account-box">
          <div id="user-container">
            {window.sessionStorage.getItem("user") ? (
              <p id="home-account-p" onClick={onLogout}>Logout</p>
            ) : (
              <a href="/login">
                <p id="home-account-p">Login</p>
              </a>
            )}
          </div>
          <a href="/cart">
            <p id="home-cart-p">Cart ({cartAmount})</p>
          </a>
        </div>
      </header>
      <nav id="home-nav">
        <a href="/">
          <span className="span-nav-option">
            <p className="text-hover-animate">HOME</p>
          </span>
        </a>

        <span id="span-tech" className="span-nav-option">
          <p className="text-hover-animate">TECHNOLOGY</p>
          <div className="hidden-option">
            <ul>
              <a href="/">
                <li>Mechanical</li>
              </a>
              <a href="/">
                <li>Quartz</li>
              </a>
            </ul>
          </div>
        </span>
        <span id="span-product" className="span-nav-option">
          <p className="text-hover-animate">PRODUCT</p>
          <div className="hidden-option">
            <ul>
              <a href="/">
                <li>New Watch</li>
              </a>
              <a href="/">
                <li>Hot Watch</li>
              </a>
            </ul>
          </div>
        </span>

        <span id="span-gifts" className="span-nav-option">
          <p className="text-hover-animate">GIFTS</p>
          <div className="hidden-option">
            <ul>
              <a href="/">
                <li>For Her</li>
              </a>
              <a href="/">
                <li>For Him</li>
              </a>
              <a href="/">
                <li>For Kids</li>
              </a>
              <a href="/">
                <li>Personalized Gifts</li>
              </a>
            </ul>
          </div>
        </span>

        <a href="/sale/0">
          <span className="span-nav-option">
            <p className="text-hover-animate">SALES</p>
          </span>
        </a>

        <a href="/">
          <span className="span-nav-option">
            <p className="text-hover-animate">SERVICE</p>
          </span>
        </a>

        <a href="/contact">
          <span className="span-nav-option">
            <p className="text-hover-animate">CONTACT US</p>
          </span>
        </a>
      </nav>
      <Outlet></Outlet>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <footer id="home-footer">
        <div id="footer-about">
          <h4>ABOUT THE SHOP</h4>
          <p>
            Alberto & Co is a family owned business in Mayaguez and Isabela,
            Puerto Rico.
          </p>
          <p>Phone: (787)265-6370</p>
          <p>Email: sales@shopalbertopr.com</p>
          <div id="footer-contact-icon-box">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={iconFacebook}
                alt="facebook icon"
                id="footer-facebook-icon"
              />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img
                src={iconInstagram}
                alt="instagram icon"
                id="footer-instagram-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={iconTwitter}
                alt="twitter icon"
                id="footer-twitter-icon"
              />
            </a>
          </div>
          <p>© ALBERTO & CO</p>
          <p>Powered by Team 3</p>
        </div>
        <div id="footer-policies">
          <h4>POLICIES</h4>
          <a href="/">Shipping Policy</a>
          <a href="/">Return Policy</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div id="footer-create-new-account">
          <h4>NEW MEMBER</h4>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <button id="footer-register-btn" className="black-hover-btn">
            REGISTER NOW
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
