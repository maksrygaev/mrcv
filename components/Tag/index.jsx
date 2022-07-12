import s from "./styles.module.scss";

const Tag = ({ title }) => {
  return (
    <div className={s.tag}>
      <p className={s.tag__title}>{`${title}`}</p>
    </div>
  );
};

export default Tag;
