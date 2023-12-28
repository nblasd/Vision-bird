"use client";
import React, { useState } from "react";

const Card: React.FC = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState(0);

  const onPlusClick = () => {
    setPrice((prevPrice) => prevPrice + 100);
    setItems((prevCount) => prevCount + 1);
  };

  const onMinusClick = () => {
    setPrice((prevPrice) => Math.max(0, prevPrice - 100));
    setItems((prevCount) => Math.max(0, prevCount - 1));
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredCount = parseInt(event.target.value, 10) || 0;
    setItems(enteredCount);
    setPrice(enteredCount * 100);
  };

  return (
    <div className="h-96 w-60 bg-blue-100 gap-5 rounded-lg flex flex-col items-center justify-center">
      <p>Price: {price}$</p>
      <label htmlFor="">Items:</label>
      <input type="text" value={items} onChange={onInputChange} />
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={onMinusClick}
          className="bg-black text-white p-3 rounded-lg"
        >
          -
        </button>
        <button
          onClick={onPlusClick}
          className="bg-black text-white p-3 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
