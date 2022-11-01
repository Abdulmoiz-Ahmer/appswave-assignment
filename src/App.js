import React from "react";
import { Header, Stepper } from "./components";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="gutter">&nbsp;</div>
      <div className="content">
        <Header />
        <Stepper />
      </div>
    </div>
  );
}

export default App;
