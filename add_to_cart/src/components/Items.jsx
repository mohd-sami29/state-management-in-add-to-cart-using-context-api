import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Items({ name, price }) {
  const { items, setItems } = useContext(CartContext);

  return (
    <>
      <div className="text-center mt-2">
        <h4 className="font-semibold text-lg"> {name}</h4>
        <p className="p-2">Price: ${price}</p>
        <button
          onClick={() => setItems([...items, { name, price }])}
          className="border border-gray-400 rounded-sm p-1 font-semibold"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Items;
