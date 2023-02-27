import React from "react";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Helmet } from "../components/helmet/Helmet";
import { CommonSection } from "../components/ui/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };
  const handleCheckout = () => {
    alert("it's comming soon !!");
  };
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            {cartItems.length === 0 ? (
              <h2 className="text-3xl text-center">
                No item added to the cart
              </h2>
            ) : (
              <>
                <Col lg="9">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <img
                                className="h-20 w-20 object-cover"
                                src={item.imgUrl}
                                alt=""
                                loading="lazy"
                              />
                            </td>
                            <td>{item.productName}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}px</td>
                            <td onClick={() => deleteItem(item.id)}>
                              <motion.i
                                whileTap={{ scale: 1.2 }}
                                className="ri-delete-bin-line cursor-pointer"
                              ></motion.i>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Col>
                <Col lg="3">
                  <div className="flex gap-4">
                    <h6 className="font-semibold">Subtotal</h6>
                    <span className="text-xl font-bold">${totalAmount}</span>
                  </div>
                  <p>taxes and shipping will calculate in checkout</p>
                  <div>
                    <button className="buy_btn py-2 px-5 bg-dark-green rounded-md text-white hover:text-white cursor-pointer text-base mt-10">
                      <Link to="/shop">Continue Shopping</Link>
                    </button>
                    <button className="buy_btn py-2 px-5 bg-dark-green rounded-md text-white hover:text-white cursor-pointer text-base mt-10">
                      <Link onClick={() => handleCheckout()}>Checkout</Link>
                    </button>
                  </div>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Cart;
