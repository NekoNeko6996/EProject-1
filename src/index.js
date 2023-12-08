import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// css
import "./css/index.css";

// component
const App = lazy(() => import("./router/App"));
const ErrorPage = lazy(() => import("./component/errorPage"));
const HomeComponent = lazy(() => import("./component/homeComponent"));
const ProductComponent = lazy(() => import("./component/productComponent"));
const ContactComponent = lazy(() => import("./component/contactComponent"));
const LoginComponent = lazy(() => import("./router/loginPage"));
const CartComponent = lazy(() => import("./component/CartComponent"));
const ServiceComponent = lazy(() => import("./component/service"));

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
        path: "/sale/:saleStatus",
        element: <HomeComponent />,
      },
      {
        path: "/tech/:tech",
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