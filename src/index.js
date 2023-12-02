import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/index.css";

// component
import App from "./App";
import ErrorPage from "./router/errorPage";
import HomeComponent from "./component/homeComponent";
import Product from "./router/product";
import ContactComponent from "./component/contactComponent";

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
        element: <Product />
      },
      {
        path: "/contact",
        element: <ContactComponent />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
