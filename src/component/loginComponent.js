import { useState } from "react";

// css
import "../css/login.css";

//
function LoginComponent() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  // Because this is a front-end focused project, the checking and authorization part for users will be quite sketchy
  const onLogin = (event) => {
    if (event) event.preventDefault();
    const session = window.sessionStorage;
    let userData = {
      username: session.getItem("username") || "",
      email: session.getItem("email") || "",
      password: session.getItem("password") || "",
    };

    if (
      (loginEmail === userData.email || loginEmail === userData.username) &&
      loginPassword === userData.password
    ) {
      session.setItem("user", "success");
      window.location.href = "/";
    }
  };

  const onSignUp = (event) => {
    if (event) event.preventDefault();
    window.sessionStorage.setItem("username", signUpUsername);
    window.sessionStorage.setItem("password", signUpPassword);
    window.sessionStorage.setItem("email", signUpEmail);
    document.getElementById("form-sign-up").reset();
  };

  return (
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
            placeholder="Email"
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
          <input
            type="text"
            name="txt"
            placeholder="User name"
            required=""
            className="login-input"
            onInput={(event) => setSignUpUsername(event.target.value)}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            className="login-input"
            onInput={(event) => setSignUpEmail(event.target.value)}
          ></input>
          <input
            type="Password"
            name="password"
            placeholder="Password"
            required=""
            className="login-input"
            onInput={(event) => setSignUpPassword(event.target.value)}
          ></input>
          <button className="login-btn" onClick={onSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
