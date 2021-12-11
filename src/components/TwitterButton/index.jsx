import React from "react";

import { SocialIcon } from "react-social-icons";

import "./style.scss";

const TwitterButton = ({ isSSO, url, width = null, fontSize = null }) => (
  <a
    className="discord-btn"
    href={"https://twitter.com/thegregs"}
    style={{
      color: "white",
      fontWeight: "bold",
      borderRadius: 8,
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 15px",
      backgroundColor: "#1DA1F2",
      textDecoration: "none",
      marginBottom: "8em",
      fontFamily: "Noto Sans Mono",
    }}
  >
    <div style={{ width: 25, height: 25, marginRight: 15 }}>
      <SocialIcon
        network="twitter"
        bgColor="black"
        style={{ height: "1.5em", width: "1.5em" }}
      />
    </div>
    <span>{"Follow on Twitter"}</span>
  </a>
);

export default TwitterButton;
