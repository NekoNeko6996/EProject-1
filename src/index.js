import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/index.css";

// component
import App from "./App";
import ErrorPage from "./component/errorPage";
import HomeComponent from "./component/homeComponent";
import ProductComponent from "./component/productComponent";
import ContactComponent from "./component/contactComponent";
import LoginComponent from "./component/loginComponent";

// router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
      {
        path: "/product/:productId",
        element: <ProductComponent />
      },
      {
        path: "/contact",
        element: <ContactComponent />
      },
      {
        path: "/sale/:saleStatus",
        element: <HomeComponent />,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginComponent />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
