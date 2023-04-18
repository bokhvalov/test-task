import React from "react";
import css from "./Button.module.css";

export const Button = ({ onClick, children }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className={css.Button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
