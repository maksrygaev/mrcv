import s from "./styles.module.scss";
import data from "../../yourData";

const About = () => {
  return (
    <section className={s.section}>
      <div className={"title"}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={s.section__content}>
        <div className={s.section__image}>
          <img src="./images/ebalo.jpg" alt="ebalo moe" />
        </div>
        <div className={s.section__information}>
          <br />
          <p>
            Hi, my name is Maxim and I do various things related to development and the Internet. I work with the
            JavaScript language. I create websites, mobile applications, games and more on it. I have experience in the
            development of cryptocurrency applications: mobile banking and NFT platform.
          </p>
          <br />
          <p>
            At the moment I am interested in interesting projects as a Frontend developer and in studying the backend. I
            am interested in participating in various startups. My dream is to launch my company with a cool product.
          </p>
          <br />
          <p>Tools that I work with or have worked with:</p>
          <br />
          <div className={s.section__tech}>
            {data.tech.map((item, index) => (
              <img src={item} key={index} alt="ass" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
