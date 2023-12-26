import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import swal from "sweetalert";

// css
import "../css/app.css";
import "react-toastify/dist/ReactToastify.css";

// Resource
import logo from "../resource/logo/Logo.png";
import iconFacebook from "../resource/icon/icons8-facebook-50.png";
import upArrow from "../resource/icon/icons8-double-up-50.png";
import iconCart from "../resource/icon/icons8-cart-64.png";

// component
import ClockComponent from "../components/clockComponent";

// number access
import { numberAccess } from "../database/data";

// path on the navigation bar
const pathArray = [
  "",
  "tech",
  "product_",
  "gift",
  "sale",
  "service",
  "contact",
];


//
function App() {
  const [cartAmount, setCartAmount] = useState(0);
  const [userStatus, setUserStatus] = useState(null);
  const [navSelectedElement, setNavSelectedElement] = useState(
    new Array(pathArray.length).fill(false)
  );
  const pathLocation = useLocation();

  //
  const CartDataSession = window.sessionStorage.getItem("cart");

  // get user account and cart
  useEffect(() => {
    if (window.sessionStorage.getItem("user")) {
      let CartData;
      // convert data from sessionStorage to ID array
      if (CartDataSession) {
        CartData = CartDataSession.split(",").map(Number);
        setCartAmount(CartData.length);
      }

      // get user account
      setUserStatus(window.sessionStorage.getItem("user"));
    }
  }, [CartDataSession]);

  // when pressing log out
  const onLogout = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to sign out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((logout) => {
      if (logout) {
        window.sessionStorage.removeItem("user");
        toast.success("Logout Success");
        setUserStatus(null);
        window.location.href = "/";
      }
    });
  };

  //  when pressing register in footer
  const onRegisterClick = () => {
    if (window.sessionStorage.getItem("user")) {
      toast.warn("You are logged in");
      return;
    }
    window.location.href = "/signup";
  };

  // nav
  const onHideNavBtnClick = () => {
    const nav = document.getElementById("home-nav");
    const hiddenLayer = document.getElementById("hidden-layer-nav");
    if (nav.className === "home-nav-close") {
      nav.className = "home-nav-open";
      hiddenLayer.className = "hidden-layer-nav-on";
    } else {
      nav.className = "home-nav-close";
      hiddenLayer.className = "hidden-layer-nav-off";
    }
  };

  // scroll up
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // when click cart
  const cartPageRedirect = () => {
    if (!window.sessionStorage.getItem("user")) {
      swal({
        title: "Login required to enter cart",
        text: "Do you want to redirect to the login page?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      }).then((yes) => {
        if (yes) {
          window.location.href = "/login";
        }
      });
    } else window.location.href = "/cart";
  };

  // nav bar animation
  useEffect(() => {
    const pathName = pathLocation.pathname.split("/")[1];
    const navIndex = pathArray.indexOf(pathName);
    if (navIndex >= 0) {
      let navSelectedArray = navSelectedElement.map((boolean, index) =>
        navIndex === index ? true : false
      );
      setNavSelectedElement(navSelectedArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathLocation]);

  return (
    <div id="App">
      <div
        id="hidden-layer-nav"
        className="hidden-layer-nav-off"
        onClick={onHideNavBtnClick}
      ></div>
      <header id="home-header">
        <a href="/">
          <img src={logo} alt="Logo" id="logo" />
        </a>
        <a href="/" id="hone-name-shop-header">
          <h1>AlBERTO</h1>
        </a>
        <div id="home-account-box">
          <div id="user-container">
            {userStatus ? (
              <p id="home-account-p" onClick={onLogout}>
                Logout
              </p>
            ) : (
              <a href="/login">
                <p id="home-account-p">Login</p>
              </a>
            )}
          </div>
          <div id="cart-link-box" onClick={cartPageRedirect}>
            <img src={iconCart} alt="cart-icon" />
            <p id="home-cart-p">({cartAmount})</p>
          </div>
        </div>
        <label className="nav-hidden-btn" onClick={onHideNavBtnClick}></label>
      </header>

      <nav className="home-nav-close" id="home-nav">
        <a href="/">
          <span
            className={`span-nav-option ${
              navSelectedElement[0] ? "nav-selected" : ""
            }`}
          >
            <p className="text-hover-animate">HOME</p>
          </span>
        </a>

        <span
          id="span-tech"
          className={`span-nav-option ${
            navSelectedElement[1] ? "nav-selected" : ""
          }`}
        >
          <p className="text-hover-animate">TECHNOLOGY</p>
          <div className="hidden-option">
            <ul>
              <a href="/tech/mechanical">
                <li>Mechanical</li>
              </a>
              <a href="/tech/quartz">
                <li>Quartz</li>
              </a>
            </ul>
          </div>
        </span>

        <span
          id="span-product"
          className={`span-nav-option ${
            navSelectedElement[2] ? "nav-selected" : ""
          }`}
        >
          <p className="text-hover-animate">PRODUCTS</p>
          <div className="hidden-option">
            <ul>
              <a href="/product_/vintage">
                <li>Vintage</li>
              </a>
              <a href="/product_/luxury">
                <li>Luxury</li>
              </a>
              <a href="/product_/smart">
                <li>Smart Watches</li>
              </a>
            </ul>
          </div>
        </span>

        <span
          id="span-gifts"
          className={`span-nav-option ${
            navSelectedElement[3] ? "nav-selected" : ""
          }`}
        >
          <p className="text-hover-animate">GIFTS</p>
          <div className="hidden-option">
            <ul>
              <a href="/gift/her">
                <li>For Her</li>
              </a>
              <a href="/gift/him">
                <li>For Him</li>
              </a>
              <a href="/gift/personalized">
                <li>Personalized Gifts</li>
              </a>
            </ul>
          </div>
        </span>

        <a href="/sale/sales">
          <span
            className={`span-nav-option ${
              navSelectedElement[4] ? "nav-selected" : ""
            }`}
          >
            <p className="text-hover-animate">SALES</p>
          </span>
        </a>

        <a href="/service">
          <span
            className={`span-nav-option ${
              navSelectedElement[5] ? "nav-selected" : ""
            }`}
          >
            <p className="text-hover-animate">SERVICE</p>
          </span>
        </a>

        <a href="/contact">
          <span
            className={`span-nav-option ${
              navSelectedElement[6] ? "nav-selected" : ""
            }`}
          >
            <p className="text-hover-animate">CONTACT US</p>
          </span>
        </a>

        <label
          className="nav-hidden-btn"
          id="nav-hidden-btn-2"
          onClick={onHideNavBtnClick}
        ></label>
      </nav>
      {/* child loader */}
      <Outlet></Outlet>

      {/* message box */}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
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
              href="https://www.facebook.com/AlbertoCoPr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={iconFacebook}
                alt="facebook icon"
                id="footer-facebook-icon"
              />
            </a>
          </div>
          <p>© ALBERTO & CO</p>
          <p>Powered by Team 3</p>
        </div>
        <div id="footer-policies">
          <h4>POLICIES</h4>
          <a href="/service">Shipping Policy</a>
          <a href="/service">Return Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div id="footer-create-new-account">
          <h4>NEW MEMBER</h4>
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <button
            id="footer-register-btn"
            className="black-hover-btn"
            onClick={onRegisterClick}
          >
            REGISTER NOW
          </button>
          <p id="access-box">The Number Of Accesses: {numberAccess}</p>
          <div id="clock-container">
            <ClockComponent />
          </div>
        </div>
      </footer>
      <div id="scroll-box" onClick={scrollUp}>
        <img src={upArrow} alt="up arrow" />
      </div>
    </div>
  );
}

export default App;