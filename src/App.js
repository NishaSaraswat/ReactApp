import React from "react";
import Header from "./components/Header/Header";
import appstyle from "./App.module.css";
import Footer from "./components/Footer/Footer";
import MovieAPI from "./components/MovieAPI/MovieAPI";

function App() {
  return (
    <div className={appstyle.bgimg}>
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  );
}

export default App;
