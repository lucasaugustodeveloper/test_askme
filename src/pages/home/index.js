import "./App.css";

import React from "react";
import Header from "../../components/header";
import OnlyContent from "../../components/onlyContent";
import Benefits from "../../components/benefits";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <OnlyContent />
      <Benefits />
    </div>
  );
}

export default App;
