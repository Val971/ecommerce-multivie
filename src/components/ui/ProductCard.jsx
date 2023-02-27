import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { cartActions } from "../../redux/slices/cartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addTocart = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        imgUrl: product.imgUrl,
        price: product.price,
        quantity: 1,
      })
    );
    toast.success("Product added to the cart");
  };

  return (
    <div className="products_card cursor-pointer">
      <motion.div className="product_img" whileHover={{ scale: 0.9 }}>
        <LazyLoadImage
          className="rounded-lg w-full h-full object-cover"
          src={product.imgUrl}
          loading="lazy"
          effect="blur"
          alt=""
        />
      </motion.div>
      <div className="product_info p-2">
        <h3 className="product_name text-xl text-dark-green font-semibold mt-4">
          <NavLink
            className=" text-inherit hover:text-dark-green"
            to={`/product/${product.id}`}
          >
            {product.productName}
          </NavLink>
        </h3>
        <p className="line-clamp  text-base line-clamp-3">
          {product.shortDesc}
        </p>
      </div>
      <div className="product_card-bottom flex items-center justify-between p-2">
        <span className="price text-dark-green text-xl font-medium">
          ${product.price}
        </span>
        <motion.span whileTap={{ scale: 1.2 }} onClick={() => addTocart()}>
          <i className="ri-add-line text-lg p-1 bg-dark-green text-white rounded-[50px]"></i>
        </motion.span>
      </div>
    </div>
  );
};
