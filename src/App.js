import "./css/home.css";

// Resource
import bannerImg from "./resource/img/home-banner.png";
import iconFreeShip from "./resource/icon/free_ship_icon_small.png";
import iconContact from "./resource/icon/contact_icon_small.png";
import iconPayment from "./resource/icon/payment_icon_small.png";
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
        <span id="span-tech" class="span-hidden-option">
          <p class="text-hover-animate">TECHNOLOGY</p>
          <div class="hidden-option">
            <ul>
              <li>Mechanical</li>
              <li>Quartz</li>
            </ul>
          </div>
        </span>
        <span id="span-product" class="span-hidden-option">
          <p class="text-hover-animate">PRODUCT</p>
          <div class="hidden-option">
            <ul>
              <li>New Watch</li>
              <li>Hot Watch</li>
            </ul>
          </div>
        </span>
        <span id="span-gifts" class="span-hidden-option">
          <p class="text-hover-animate">GIFTS</p>
          <div class="hidden-option">
            <ul>
              <li>For Her</li>
              <li>For Him</li>
              <li>For Kids</li>
              <li>Personalized Gifts</li>
            </ul>
          </div>
        </span>
        <p>SALES</p>
        <a href="/">SERVICE</a>
        <a href="/">CONTACT US</a>
        <a href="#home-2-nav" id="search-a-scroll">
          SEARCH
        </a>
      </nav>
      <div id="home-banner">
        <img src={bannerImg} alt="banner" />
      </div>
      <div id="home-2-banner-box">
        <div class="home-2-banner-item">
          <img
            src={iconFreeShip}
            alt="2-banner-img"
            class="home-2-banner-item-img"
          />
          <p class="home-2-banner-item-p1">Free Shipping</p>
          <p class="home-2-banner-item-p2">Fast and safe</p>
        </div>
        <div class="home-2-banner-item">
          <img
            src={iconContact}
            alt="2-banner-img"
            class="home-2-banner-item-img"
          />
          <p class="home-2-banner-item-p1">Support 24/7</p>
          <p class="home-2-banner-item-p2">Contact us 24 hrs a day</p>
        </div>
        <div class="home-2-banner-item">
          <img
            src={iconPayment}
            alt="2-banner-img"
            class="home-2-banner-item-img"
          />
          <p class="home-2-banner-item-p1">Payment secure</p>
          <p class="home-2-banner-item-p2">Strictly managed</p>
        </div>
      </div>
      <nav id="home-2-nav">
        <form action="#" id="search-box">
          <input
            type="text"
            name="search"
            id="search-input"
            placeholder="Search Watch..."
          />
          <input type="button" value="Search" id="search-btn" />
        </form>
      </nav>
      <section id="home-section">
        <aside id="home-sort-option">
          <h1 id="home-availability">Availability</h1>
          <p>
            In stock (<span>231</span>)
          </p>
          <p>
            Out stock (<span>12</span>)
          </p>
          <h1 id="home-aside-price">Price</h1>
          <div id="price-input-box">
            <p>$</p>
            <input type="number" name="price-from" id="price-input-from" />
            <p>-</p>
            <p>$</p>
            <input type="number" name="price" id="price-input-to" />
          </div>
          <button id="price-sort-btn" class="black-hover-btn">
            Sort
          </button>
        </aside>
        <section id="home-product-section"></section>
      </section>
      <footer id="home-footer">
        <div id="footer-about">
          <h3>ABOUT THE SHOP</h3>
          <p>
            Alberto & Co is a family owned business in Mayaguez and Isabela,
            Puerto Rico.
          </p>
          <p>Phone: (787)265-6370</p>
          <p>Email: sales@shopalbertopr.com</p>
          <div id="footer-contact-icon-box">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
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
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
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
          <h3>POLICIES</h3>
          <a href="/">Shipping Policy</a>
          <a href="/">Return Policy</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Contact Us</a>
        </div>
        <div id="footer-create-new-account">
          <h3>NEW MEMBER</h3>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <button id="footer-register-btn" class="black-hover-btn">
            REGISTER NOW
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
