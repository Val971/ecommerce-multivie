import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import counterImg from "../assets/images/counter-timer-img.png";
import products from "../assets/data/products.js";
import { Helmet } from "../components/helmet/Helmet";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import { Services } from "../components/services/Services";
import { ProductList } from "../components/ui/ProductList";
import { Clock } from "../components/ui/Clock";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const year = new Date().getFullYear();

  const filterJuiceproducts = () => {
    const filtered = products.filter((product) =>
      product.category.includes("trending")
    );
    setProductsList(filtered);
  };
  const filterBestproducts = () => {
    const filtered = products.filter((product) =>
      product.category.includes("best")
    );
    setTrendingProducts(filtered);
  };
  const filterNewProducts = () => {
    const filtered = products.filter((product) =>
      product.category.includes("new")
    );
    setNewProducts(filtered);
  };
  const filterAllProducts = () => {
    const filtered = products.filter((product) => product);
    setAllProducts(filtered);
  };
  useEffect(() => {
    filterJuiceproducts();
    filterBestproducts();
    filterNewProducts();
    filterAllProducts();
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section bg-light-brown py-0">
        <Container>
          <Row>
            <div className="flex flex-col md:flex-row py-0 gap-8 justify-between">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hero_content md:max-w-[45%] py-10  md:p-20 lg:p-20 "
              >
                <AnimatePresence>
                  <motion.p
                    exit={{ y: -1000 }}
                    className=" hero_subtitle font-semibold w-max"
                  >
                    Trending product in {year}
                  </motion.p>
                </AnimatePresence>
                <motion.h2
                  variants={childrenVariants}
                  className="text-dark-green text-5xl leading-[3.5rem] md:text-4xl font-semibold my-3 md:my-5 w-fit"
                >
                  Increase your energy levels
                </motion.h2>
                <motion.p
                  variants={childrenVariants}
                  className=" text-dark-green leading-7"
                >
                  Welcome to our healthy products and juices website, where we
                  believe that living a healthy lifestyle doesn't have to be a
                  chore! We offer a wide range of delicious and nutritious
                  products that are designed to help you look and feel your
                  best.
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  type="button"
                  className="buy_btn py-2 px-5 bg-dark-green rounded-md text-white hover:text-white cursor-pointer text-base mt-10"
                >
                  <Link to="/shop" className="hover:text-white">
                    SHOP NOW
                  </Link>
                </motion.button>
              </motion.div>

              <div className=" herogallery  w-full gap-3">
                <img
                  className=" rounded-lg w-full h-full object-cover "
                  src={hero1}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="section_title text-dark-green font-semibold">
                Trending Products
              </h2>
            </Col>
            <ProductList products={productsList} onceCol={true} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="section_title text-dark-green font-semibold">
                Best Sales
              </h2>
            </Col>
            <ProductList products={trendingProducts} />
          </Row>
        </Container>
      </section>
      {/* <section className="timer_count bg-light-green py-0">
        <Container>
          <div className="flex justify-between items-center h-auto">
            <div>
              <div className="clock_top-content ">
                <h4 className="text-white text-sm mb-2 font-semibold">
                  Limited Offers
                </h4>
                <h3 className="text-white text-2xl mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="buy_btn store_btn buy_btn py-2 px-5  rounded-md   cursor-pointer text-base mt-10  bg-white text-dark-green font-semibold"
              >
                <Link className="hover:text-dark-green" to="shop">
                  Visit Store
                </Link>
              </motion.button>
            </div>
            <img className="w-1/3  object-cover" src={counterImg} alt="" />
          </div>
        </Container>
      </section> */}
      <section className="best_sales">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="section_title text-dark-green font-semibold">
                New Arrivals
              </h2>
            </Col>
            <ProductList products={newProducts} />
          </Row>
        </Container>
      </section>
      <section className="new_produtcs">
        <Container>
          <Row>
            <Col className="text-center">
              <h2 className="section_title text-dark-green font-semibold">
                New Juices
              </h2>
            </Col>
            <ProductList products={allProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
