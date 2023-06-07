import React, { useState } from "react";

export const TenFunc = (props) => {
  let [ten, setTenValue] = useState(10);
  function changeTenValue(i) {
    setTenValue((ten) => ten + i);
  }
  function randomValue() {
    setTenValue((ten) => Math.floor(Math.random() * 50));
  }
  function resetValue() {
    setTenValue((ten) => 10);
  }

  return (
    <article className="counter__app">
      <div className="counter__title">Функціональний компонент</div>
      <div className="counter__flag">{ten}</div>
      <div className="counter__controls">
        <button className="counter__btn" onClick={() => changeTenValue(1)}>
          +1
        </button>
        <button className="counter__btn" onClick={() => changeTenValue(-1)}>
          -1
        </button>
        <button className="counter__btn" onClick={() => randomValue()}>
          Random
        </button>
        <button className="counter__btn" onClick={() => resetValue()}>
          Reset
        </button>
      </div>
    </article>
  );
};
