import React from "react";
import whiteWebsiteLogo from "../../images/WhiteWebsiteLogo.svg";

import SocialGregsSection from "../SocialGregsSection";

import "./style.scss";

const WhoTfSection = () => {
  return (
    <div className="whotf-container">
      <img src={whiteWebsiteLogo} alt="" className="whotf" />
      <SocialGregsSection />
    </div>
  );
};

export default WhoTfSection;
