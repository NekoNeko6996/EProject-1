import { Outlet } from "react-router-dom";

// css
import "./css/app.css";
//

// Resource
// import bannerImg from "../resource/img/home-banner.png";
import iconFacebook from "./resource/icon/icons8-facebook-50.png";
import iconInstagram from "./resource/icon/icons8-instagram-50.png";
import iconTwitter from "./resource/icon/icons8-twitter-50.png";

function App() {
  return (
    <div id="App">
      <header id="home-header">
        <img src="#" alt="Logo" id="logo" />
        <h1 id="hone-name-shop-header">AlBERTO & CO</h1>
        <div id="home-account-box">
          <a href="/">
            <p id="home-account-p">Account</p>
          </a>
          <a href="/">
            <p id="home-cart-p">
              Cart (<span id="cart-value">0</span>)
            </p>
          </a>
        </div>
      </header>
      <nav id="home-nav">
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

        <a href="/">
          <span className="span-nav-option">
            <p className="text-hover-animate">SALES</p>
          </span>
        </a>

        <a href="/">
          <span className="span-nav-option">
            <p className="text-hover-animate">SERVICE</p>
          </span>
        </a>

        <a href="/">
          <span className="span-nav-option">
            <p className="text-hover-animate">CONTACT US</p>
          </span>
        </a>

        <span
          className="span-nav-option"
          onClick={() =>
            window.scroll({
              top: 750,
              behavior: "smooth",
            })
          }
        >
          <p className="text-hover-animate">SEARCH</p>
        </span>
      </nav>
      <Outlet></Outlet>
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
          <a href="/">Contact Us</a>
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
