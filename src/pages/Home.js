import React from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Main from "../components/Main";
import Menu from "../components/Menu";
import '../styles/breakpoint.css'
import TodoPrompt from "../components/TodoPrompt";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Menu />
        <Info />
        <Main />
      </div>
      <Footer />
      <TodoPrompt />
    </div>
  );
};

export default Home;
