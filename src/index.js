import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/index.css";

// component
import App from "./router/App";
import LoginComponent from "./router/loginPage";
import LoadingAnimation from "./components/loadingComponent";

// const App = lazy(() => import("./router/App"));
const ErrorPage = lazy(() => import("./components/errorPage"));
const HomeComponent = lazy(() => import("./components/homeComponent"));
const ProductComponent = lazy(() => import("./components/productComponent"));
const ContactComponent = lazy(() => import("./components/contactComponent"));
const CartComponent = lazy(() => import("./components/CartComponent"));
const ServiceComponent = lazy(() => import("./components/service"));
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
      {
        path: "/product_/:status",
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
    <Suspense fallback={<LoadingAnimation />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
