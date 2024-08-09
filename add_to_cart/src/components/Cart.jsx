import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Cart() {
  const { items } = useContext(CartContext);

  return (
    <>
      <div className="text-center mt-16">
        <h1 className="font-bold text-3xl p-2">Cart</h1>
        {items &&
          items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        <h5 className="ml-6 p-6 font-semibold">
          Total Amount: $
          {items &&
            items.reduce((total, item) => {
              return (total = total + item.price);
            }, 0)}
        </h5>
      </div>
    </>
  );
}

export default Cart;
