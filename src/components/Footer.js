import React, { useState } from "react";
import { useGlobalContext } from "../custom-hooks/Context";

const Footer = ({ total, clearCart }) => {
  return (
    <>
      <hr />
      <footer>
        <h4>Total</h4>
        <h4>${total}</h4>
        <button className="clear-btn" onClick={() => clearCart()}>
          Clear Cart
        </button>
      </footer>
    </>
  );
};

export default Footer;
