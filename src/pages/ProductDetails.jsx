import React from "react";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Helmet } from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/CommonSection";
import products from "../assets/data/products";
import { cartActions } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
  } = product;

  const addTocart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        image: product.imgUrl,
        price: product.price,
        quatity: 1,
        totalPrice: product.price,
      })
    );
    toast.success("Product added to the cart");
  };
  return (
    <Helmet title="Shop">
      <CommonSection />
      <section>
        <Container className="flex flex-col md:flex-row gap-12  my-14">
          <img
            src={imgUrl}
            alt=""
            className="rounded-lg  object-cover md:w-[40%]"
            loading="lazy"
          />
          <div className="product_details">
            <h2 className="text-3xl mb-3"> {productName}</h2>
            <div className="product_rating flex items-center gap-2 mb-4">
              <div>
                <span>
                  <i className="ri-star-s-fill text-orange-500"></i>
                </span>
                <span text-orange-500>
                  <i className="ri-star-s-fill text-orange-500"></i>
                </span>
                <span text-orange-500>
                  <i className="ri-star-s-fill text-orange-500"></i>
                </span>
                <span text-orange-500>
                  <i className="ri-star-s-fill text-orange-500"></i>
                </span>
                <span text-orange-500>
                  <i className="ri-star-s-fill text-orange-500"></i>
                </span>
              </div>
              <p>
                (
                <span className="text-orange-500 font-medium">{avgRating}</span>{" "}
                ratings)
              </p>
            </div>
            <span className="product_price text-xl font-medium">${price}</span>
            <p>{shortDesc}</p>
            <motion.button
              onClick={() => addTocart()}
              whileTap={{ scale: 1.2 }}
              className="buy_btn py-2 px-5 bg-dark-green rounded-md text-white hover:text-white cursor-pointer text-base mt-10"
            >
              Add to Cart
            </motion.button>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};
export default ProductDetails;
