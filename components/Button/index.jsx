import React from "react";
import s from "./styles.module.scss";

const Button = ({ children, type, onClick }) => {
  if (type === "primary") {
    return (
      <button onClick={onClick} className={s.button_primary}>
        {children}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
