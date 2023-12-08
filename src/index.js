import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/index.css";

// component
import App from "./router/App";
import LoginComponent from "./router/loginPage";

// const App = lazy(() => import("./router/App"));
const ErrorPage = lazy(() => import("./component/errorPage"));
const HomeComponent = lazy(() => import("./component/homeComponent"));
const ProductComponent = lazy(() => import("./component/productComponent"));
const ContactComponent = lazy(() => import("./component/contactComponent"));
const CartComponent = lazy(() => import("./component/CartComponent"));
const ServiceComponent = lazy(() => import("./component/service"));
// const LoginComponent = lazy(() => import("./router/loginPage"))

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
        element: <ProductComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/sale/:status",
        element: <HomeComponent />,
      },
      {
        path: "/tech/:status",
        element: <HomeComponent />,
      },
      {
        path: "/cart",
        element: <CartComponent />,
      },
      {
        path: "service",
        element: <ServiceComponent />,
      },
      {
        path: "/gift/:status",
        element: <HomeComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/signup",
    element: <LoginComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
