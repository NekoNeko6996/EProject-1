import "../css/home.css";
//
import ProductContainerLoader from "../component/productContainer";
import SlideShow from "../component/slideShow";

// Resource
// import bannerImg from "../resource/img/home-banner.png";
import iconFreeShip from "../resource/icon/free_ship_icon_small.png";
import iconContact from "../resource/icon/contact_icon_small.png";
import iconPayment from "../resource/icon/payment_icon_small.png";
import iconFacebook from "../resource/icon/icons8-facebook-50.png";
import iconInstagram from "../resource/icon/icons8-instagram-50.png";
import iconTwitter from "../resource/icon/icons8-twitter-50.png";

const dataBanner = [
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHeuy2aOq5XfJfiRe2Nas3iy7-5mPsN4ffkzzcsAYy1dUR-PpwW-8MS18xE23CKM4KQSJ1-tNX29iQyS_qiI0LXwra4djQK3ze8Nm1-o0AGkqt6ga33tjG38K0GZfAw63Vu9ti-XZjhwviyarvRW708hFJZ6QdFZxF-zlIAT9TdS7XMqGiR_2COkkXFDzgg-P1uaaj1_gQrWGtasMaEz6l6REsYz3O0i5AZjmJcyIZ01oD9jgymYLbfk2YzI2ecWzudv6p8yN-EWTc_VwMOzVOX8YxpYuH-w3ehOt7OJ23HAtfig5mue34pPhQuVP6YJseciBoKcMuaxOO0Ei86nxfCWlVBHiFx505aZM-ElrpIQ2032_uPtHR7z_sJT4qLllaxnjPoPJE3YsQr90dMTi5GJ3lAD7_UN1aVW23AxDfFtTWUIXS0Wpx9-YVvhdX6BHxbO41H6EcvQFoPA7QA2DKgsio19TxpSGxW6y6ilZp9K3B_3aSKEHcj6lTXGLyn2AWddlRY2W-wGMz2usjzBN6Bpf2DN-yhnR8I4QJvHo6gqldfWa3Em8uCfvqxar2FWJOWGcRIGIZxU8BPRBsNYcmyJT67bRWOKBm_xWUWwa0W151m1ucxrYui9rc-aENVYkq8ArRvX_iRNi7ZowP8TSXwTOGPMlZttrDTuBlHC5FKlriWKLqRuJMRbfCWGfIYki2sM1S2evb56Qu2Zx4dgttdP8ogvRoNjjmu22vBhSbIvC6A-fIGwxtAb3GO1CFiK3b1Rb9MlF4JswaZkr5ZVy8SzyRruKB2Cfqwx0yC6sUOQI6H3rz7JcLN9OWklNHWibnX9HfTzaRuzlYiH9YSiLKqZObZvBMieOzlkyexEa9HbXZdWNN_XQ7-7TDCZFGT9WvSStFl0e09O7fPm3zni557yTwwq65BNrl5NVAU5HE-EvaSrjuypMval4iRsFe6k0oKzdworFByg9Q=w1440-h500-s-no?authuser=1",
    link: "",
  },
  {
    url: "https://lh3.googleusercontent.com/pw/ADCreHeuy2aOq5XfJfiRe2Nas3iy7-5mPsN4ffkzzcsAYy1dUR-PpwW-8MS18xE23CKM4KQSJ1-tNX29iQyS_qiI0LXwra4djQK3ze8Nm1-o0AGkqt6ga33tjG38K0GZfAw63Vu9ti-XZjhwviyarvRW708hFJZ6QdFZxF-zlIAT9TdS7XMqGiR_2COkkXFDzgg-P1uaaj1_gQrWGtasMaEz6l6REsYz3O0i5AZjmJcyIZ01oD9jgymYLbfk2YzI2ecWzudv6p8yN-EWTc_VwMOzVOX8YxpYuH-w3ehOt7OJ23HAtfig5mue34pPhQuVP6YJseciBoKcMuaxOO0Ei86nxfCWlVBHiFx505aZM-ElrpIQ2032_uPtHR7z_sJT4qLllaxnjPoPJE3YsQr90dMTi5GJ3lAD7_UN1aVW23AxDfFtTWUIXS0Wpx9-YVvhdX6BHxbO41H6EcvQFoPA7QA2DKgsio19TxpSGxW6y6ilZp9K3B_3aSKEHcj6lTXGLyn2AWddlRY2W-wGMz2usjzBN6Bpf2DN-yhnR8I4QJvHo6gqldfWa3Em8uCfvqxar2FWJOWGcRIGIZxU8BPRBsNYcmyJT67bRWOKBm_xWUWwa0W151m1ucxrYui9rc-aENVYkq8ArRvX_iRNi7ZowP8TSXwTOGPMlZttrDTuBlHC5FKlriWKLqRuJMRbfCWGfIYki2sM1S2evb56Qu2Zx4dgttdP8ogvRoNjjmu22vBhSbIvC6A-fIGwxtAb3GO1CFiK3b1Rb9MlF4JswaZkr5ZVy8SzyRruKB2Cfqwx0yC6sUOQI6H3rz7JcLN9OWklNHWibnX9HfTzaRuzlYiH9YSiLKqZObZvBMieOzlkyexEa9HbXZdWNN_XQ7-7TDCZFGT9WvSStFl0e09O7fPm3zni557yTwwq65BNrl5NVAU5HE-EvaSrjuypMval4iRsFe6k0oKzdworFByg9Q=w1440-h500-s-no?authuser=1",
    link: "",
  },
];

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
              <li>Mechanical</li>
              <li>Quartz</li>
            </ul>
          </div>
        </span>
        <span id="span-product" className="span-nav-option">
          <p className="text-hover-animate">PRODUCT</p>
          <div className="hidden-option">
            <ul>
              <li>New Watch</li>
              <li>Hot Watch</li>
            </ul>
          </div>
        </span>

        <span id="span-gifts" className="span-nav-option">
          <p className="text-hover-animate">GIFTS</p>
          <div className="hidden-option">
            <ul>
              <li>
                <a href="/">For Her</a>
              </li>
              <li>
                <a href="/">For Him</a>
              </li>
              <li>
                <a href="/">For Kids</a>
              </li>
              <li>
                <a href="/">Personalized Gifts</a>
              </li>
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

        <a href="#home-2-nav" id="search-a-scroll">
          <span className="span-nav-option">
            <p className="text-hover-animate">SEARCH</p>
          </span>
        </a>
      </nav>
      <div id="home-banner">
        {/* <img src={bannerImg} alt="banner" /> */}
        <SlideShow data={dataBanner} scrollStep={1440} />
      </div>
      <div id="home-2-banner-box">
        <div className="home-2-banner-item">
          <img
            src={iconFreeShip}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Free Shipping</p>
          <p className="home-2-banner-item-p2">Fast and safe</p>
        </div>
        <div className="home-2-banner-item">
          <img
            src={iconContact}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Support 24/7</p>
          <p className="home-2-banner-item-p2">Contact us 24 hrs a day</p>
        </div>
        <div className="home-2-banner-item">
          <img
            src={iconPayment}
            alt="2-banner-img"
            className="home-2-banner-item-img"
          />
          <p className="home-2-banner-item-p1">Payment secure</p>
          <p className="home-2-banner-item-p2">Strictly managed</p>
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
          <button id="price-sort-btn" className="black-hover-btn">
            Sort
          </button>
        </aside>
        <section id="home-product-section">
          <ProductContainerLoader />
        </section>
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
          <button id="footer-register-btn" className="black-hover-btn">
            REGISTER NOW
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
