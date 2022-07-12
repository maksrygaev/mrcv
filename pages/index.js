import { useRef } from "react";
import ServiceCard from "../components/ServiceCard";

import Footer from "../components/Footer";
import Head from "next/head";

import data from "../yourData";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import WorkCard from "../components/WorkCard";
import Welcome from '../components/Welcome'
export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>MR</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <>
        <Header handleWorkScroll={handleWorkScroll} handleAboutScroll={handleAboutScroll} />
        <Welcome />
         <div ref={aboutRef}>
          <About title={"ABOUTME"} />
        </div>
        {/* <Work /> */}

        {/* <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">Services.</h1>
          <div className="mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard key={index} name={service.title} description={service.description} />
            ))}
          </div>
        </div> 

        <Footer /> */}
      </>
    </>
  );
}
