import React, { useEffect } from "react";
import Footer from "./Footer";
import { useGlobalContext } from "../custom-hooks/Context";
import Item from "./Items";

const CartContainer = () => {
  const {
    state: { cart, total },
    getTotal,
    clearCart,
  } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <>
        <section className="cart">
          <div className="heading-cart">
            <h2>your bag</h2>
            <h4 className="currently-empty">is currently empty</h4>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="cart">
        <div className="heading-cart">
          <h2>your bag</h2>
        </div>
        {cart.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </section>
      <Footer total={total} clearCart={clearCart} />
    </>
  );
};

export default CartContainer;
