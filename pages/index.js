import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Fragment } from "react";
import HelloPage from "../components/HelloPage";
 import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Fragment>
      <HelloPage />
     <About />
     <Skills />
      <Projects />
     <Contact />
    </Fragment>
  );
}