import React from "react";
import { useRouter } from "next/router";
import data from "../../yourData";
import s from "./styles.module.scss";
import Button from "../Button";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  return (
    <div className={s.header}>
      <h1 onClick={() => router.push("/")} className={s.header__logo}>
        {data.name}
      </h1>
      {!isBlog ? (
        <div>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={() => router.push("/blog")}>Blog</Button>
          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>Contact</Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button onClick={() => router.push("/blog")}>Blog</Button>
          <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>Contact</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
