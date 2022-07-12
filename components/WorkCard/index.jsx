import React from "react";
import s from "./styles.module.scss";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <img src={img} alt="project image" />
      </div>
      <div className={s.card__info}>
        <h1 className={s.card__title}>{name}</h1>
        <p className={s.card__description}>{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
