import React from "react";
import { SocialIcon } from "react-social-icons";

import "./style.scss";

const SocialSection = () => {
  return (
    <div
      id="social-section"
      style={{
        height: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href={"https://twitter.com/thegregs"}>
        <SocialIcon
          network="twitter"
          fgColor="white"
          bgColor="#1DA1F2"
          style={{ height: "1.5em", width: "1.5em", margin: "1em" }}
          href=""
        />
      </a>
      <a href={"Https://discord.gg/thegregs"}>
        <SocialIcon
          network="discord"
          style={{ height: "1.5em", width: "1.5em" }}
        />
      </a>
    </div>
  );
};

export default SocialSection;
