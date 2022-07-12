import yourData from "../../yourData";
import WorkCard from "../WorkCard";
import s from "./styles.module.scss";

const Work = () => {
  return (
    <section className={s.section}>
      <h1 className={s.section__title}>
        03. Some Things I’ve Built<span className={s.section__line}></span>
      </h1>
      <div className={s.section__content}>
        {yourData.projects.map((item, index) => {
          return (
            <WorkCard key={index} img={item.imageSrc} name={item.title} description={item.description} url={item.url} />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
