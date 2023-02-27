import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import logo from "../../assets/images/eco-logo.png";

const nav_links = [
  {
    path: "home",
    diplay: "Home",
  },
  {
    path: "shop",
    diplay: "Shop",
  },
  {
    path: "cart",
    diplay: "Cart",
  },
];
export const Header = () => {
  let activeStyle = {
    fontWeight: 700,
    color: "#1C6758",
  };
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef();
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header w-full leading-[70px]" ref={headerRef}>
      <Container className="  md:mx-auto">
        <Row>
          <div className="nav_wrapper flex items-center justify-between">
            <div className="logo flex items-center gap-x-2">
              <img className="w-9 h-9" src={logo} alt="logo" />
              <div>
                <NavLink to="/home">
                  <h1 className="text-xl font-bold text-dark-green">
                    Multivie
                  </h1>
                </NavLink>
              </div>
            </div>
            <div
              className="navigation hidden md:block"
              ref={menuRef}
              onClick={() => menuToggle()}
            >
              <ul className="menu flex gap-4 md:gap-11 absolute md:relative top-0 right-0 w-64 h-full bg-white z-50 flex-col md:flex-row items-center justify-center">
                {nav_links.map((link, i) => {
                  return (
                    <li key={i} className="nav_item">
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        className="cursor-pointer font-medium text-dark-green hover:text-dark-green"
                        to={link.path}
                      >
                        {link.diplay}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav_icons flex items-center gap-x-10">
              <span className="fav_icon relative">
                <i className="text-xl cursor-pointer ri-heart-line "></i>{" "}
                <span className="badge absolute top-[10%] before:content-[''] text-white bg-dark-green rounded-[50px] text-xs font-semibold z-10">
                  1
                </span>
              </span>

              <span className="cart_icons relative">
                <NavLink to="cart">
                  <i className="text-xl cursor-pointer ri-shopping-bag-line"></i>{" "}
                </NavLink>

                <span className="badge absolute top-[10%] before:content-[''] text-white bg-dark-green rounded-[50px] text-xs font-semibold z-10 ">
                  {totalQuantity}
                </span>
              </span>

              <span className="cart_icons relative">
                <motion.i
                  whileTap={{ scale: 1.2 }}
                  className="text-xl cursor-pointer ri-user-line"
                ></motion.i>
              </span>
            </div>
            <div className="mobile_menu text-xl text-dark-green md:hidden cursor-pointer block">
              <span onClick={() => menuToggle()}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};
