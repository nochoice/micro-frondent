import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./index.scss";

const App = () => (
  <div className="container">
    Layout
    <Header title="Rouvy"/>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));