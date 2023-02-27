import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Shop = lazy(() => import("../pages/Shop"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const Routers = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center space-x-2 h-screen">
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-puls bg-dark-green dark:bg-violet-400"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
