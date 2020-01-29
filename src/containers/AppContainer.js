import React from "react";
import PageHeader from "../components/molecules/PageHeader";
import Swiper from "../components/organisms/Swiper.js";
import "./AppContainer.css";

function AppContainer() {
  return (
    <div className="AppContainer">
      <div className="Row">
        <PageHeader />
      </div>
      <div className="Row">
        <Swiper />
      </div>
    </div>
  );
}

export default AppContainer;
