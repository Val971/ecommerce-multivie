import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer pt-16 pb-8 bg-dark-green left-0 bottom-0 w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-start">
          <div className="logo flex items-center gap-x-2 ">
            <div>
              <h1 className="text-white text-sm mb-2 font-semibold">
                Multivie
              </h1>
              <p className="footer_text text-sm text-break-white ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam esse, quos vero blanditiis sed labore?
              </p>
            </div>
          </div>

          <div className="footer_quick-links">
            <h4 className="quick_link-title text-white font-semibold mb-3 text-xl">
              Top Categories
            </h4>
            <ul className="flex flex-col gap-2 text-break-white text-sm">
              <li>
                <Link to="#">Cold press oils</Link>
              </li>
              <li>
                <Link to="#">Vitamin juices</Link>
              </li>
              <li>
                <Link to="#">Artisanal products</Link>
              </li>
            </ul>
          </div>
          <div className="footer_quick-links">
            <h4 className="quick_link-title text-white font-semibold mb-3 text-xl">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-2 text-break-white text-sm">
              <li>
                <Link to="shop">Shop</Link>
              </li>
              <li>
                <Link to="cart">Cart</Link>
              </li>
              <li>
                <Link to="login">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer_quick-links">
            <h4 className="quick_link-title text-white font-semibold mb-3 text-xl">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-break-white text-sm">
              <li className="flex gap-1 ">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p className="text-white">123 ZindaBazar, Sylhet, Bangladesh</p>
              </li>
              <li className="flex gap-1">
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p className="text-white">+0881234567890</p>
              </li>
              <li className="flex gap-1">
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p className="text-white">exemple@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer_copyright text-white mt-5">
          Copyright {year} make with ❤️ by FanmKaribeyenn. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
