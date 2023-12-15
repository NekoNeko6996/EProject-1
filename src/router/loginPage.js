import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

// css
import "../css/login.css";
import "react-toastify/dist/ReactToastify.css";

//
function LoginComponent() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/signup")
      document.getElementById("chk").checked = true;
  }, []);

  // Because this is a front-end focused project, the checking and authorization part for users will be quite sketchy
  const onLogin = (event) => {
    if (event) event.preventDefault();
    const session = window.sessionStorage;
    let userData = {
      username: session.getItem("username") || false,
      email: session.getItem("email") || false,
      password: session.getItem("password") || false,
    };

    if (
      (loginEmail === userData.email || loginEmail === userData.username) &&
      loginPassword === userData.password
    ) {
      session.setItem("user", "success");
      window.location.href = "/";
    } else {
      toast.warn("Email, Username or Password not true!");
    }
  };

  // eslint-disable-next-line no-useless-escape
  const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,16}$/;
  const PASSWORD_PATTERN = /^[\w]{4,16}$/;

  const onSignUp = (event) => {
    if (event) event.preventDefault();

    if (!USERNAME_PATTERN.test(signUpUsername)) {
      toast.warn("User name is not in correct format");
      return;
    }
    if (!EMAIL_PATTERN.test(signUpEmail)) {
      toast.warn("Email is not in correct format");
      return;
    }
    if (!PASSWORD_PATTERN.test(signUpPassword)) {
      toast.warn("Password is not in correct format");
      return;
    }

    window.sessionStorage.setItem("username", signUpUsername);
    window.sessionStorage.setItem("password", signUpPassword);
    window.sessionStorage.setItem("email", signUpEmail);
    document.getElementById("form-sign-up").reset();
    document.getElementById("chk").checked = false;
    toast.success("Sign Up Success");
  };

  return (
    <>
      <nav id="login-page-nav">
        <a href="/">
          <span className="span-nav-option-login">
            <p className="text-hover-animate">HOME</p>
          </span>
        </a>
        <a href="/service">
          <span className="span-nav-option-login">
            <p className="text-hover-animate">SERVICE</p>
          </span>
        </a>
        <a href="/sale/sales">
          <span className="span-nav-option-login">
            <p className="text-hover-animate">SALES</p>
          </span>
        </a>
        <a href="/contact">
          <span className="span-nav-option-login">
            <p className="text-hover-animate">CONTACT US</p>
          </span>
        </a>
      </nav>
      <div id="login-container">
        <input type="checkbox" id="chk" aria-hidden="true"></input>
        <div id="login">
          <form onSubmit={(event) => onLogin(event)}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email or Username"
              required=""
              className="login-input"
              onInput={(event) => setLoginEmail(event.target.value)}
            ></input>
            <input
              type="Password"
              name="password"
              placeholder="Password"
              required=""
              className="login-input"
              onInput={(event) => setLoginPassword(event.target.value)}
            ></input>
            <button className="login-btn" onClick={onLogin}>
              Login
            </button>
          </form>
        </div>
        <div id="sign-up">
          <form onSubmit={(event) => onSignUp(event)} id="form-sign-up">
            <label htmlFor="chk" aria-hidden="true">
              Sign Up
            </label>
            <p className="login-page-request-p">3 to 16 characters</p>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              required
              className="login-input"
              onInput={(event) => setSignUpUsername(event.target.value)}
            ></input>
            <p className="login-page-request-p">
              For example example@gmail.com
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="login-input"
              onInput={(event) => setSignUpEmail(event.target.value)}
            ></input>
            <p className="login-page-request-p">4 to 16 characters</p>
            <input
              type="Password"
              name="password"
              placeholder="Password"
              required
              className="login-input"
              onInput={(event) => setSignUpPassword(event.target.value)}
            ></input>
            <button className="login-btn" onClick={onSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
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
    </>
  );
}

export default LoginComponent;
