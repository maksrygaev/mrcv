import React from "react";
import { useRef } from "react";
import { stagger } from "../../animations";
import { useIsomorphicLayoutEffect } from "../../utils";
import data from "../../yourData";
import Tag from "../Tag";
import s from "./styles.module.scss";

const Welcome = () => {
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();
  const seven = useRef();

  useIsomorphicLayoutEffect(() => {
    stagger([one.current, two.current, seven.current], { y: 100 }, { y: 0 });
    stagger([three.current, four.current, five.current], { x: -100 }, { x: 0 });
    stagger([six.current], { y: -1000 }, { y: 0 });
  }, []);

  return (
    <section className={s.section}>
      <div className={s.section__information}>
        <h2 ref={seven}>HI THERE IAM MAKS RYGAEV</h2>
        <div className={s.section__title}>
          <h1 ref={one}>{data.headerTaglineOne}</h1>
          <h1 ref={two}>{data.headerTaglineTwo}</h1>
        </div>
        <div ref={three}>
          <Tag title={"WEBDEV"} />
          <Tag title={"MOBILE/NATIVE"} />
          <Tag title={"UI/UX"} />
        </div>
        <div ref={four}>
          <Tag title={"CRYPTO"} />
          <Tag title={"IOS/ANDROID"} />
          <Tag title={"COFFEE"} />
        </div>
        <div ref={five}>
          <Tag title={"ADAPTIVE LAYOUT"} />
          <Tag title={"STARTUPS"} />
        </div>
      </div>
      <div ref={six} className={s.section__picture}>
        <img src="/images/kas.png" alt="kas" />
      </div>
    </section>
  );
};

export default Welcome;
