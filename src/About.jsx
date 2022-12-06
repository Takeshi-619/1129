import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="d">
        <h1>About</h1>
        <h2>ここはAbout Pageです</h2>
        <br />
        <img className="i" src="Pin on WALLPAPERS.jpeg" />
      </div>
      <br />
      <Footer />
    </>
  );
}
