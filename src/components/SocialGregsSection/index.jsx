import React, { useState } from "react";
import "./style.scss";

import discordText from "../../images/Discord.png";
import twitterText from "../../images/Twitter.png";
import instagramText from "../../images/Instagram.svg";

import discordWhite from "../../images/WTF_211025_Gregs_Social Icons_Discord_OFF_Transparent.png";
import discordColored from "../../images/WTF_211025_Gregs_Social Icons_Discord_ON_Transparent.png";
import instagramWhite from "../../images/WTF_211025_Gregs_Social Icons_Instagram_OFF_Transparent.png";
import instagramColor from "../../images/WTF_211025_Gregs_Social Icons_Instagram_ON_Transparent.png";
import twitterWhite from "../../images/WTF_211025_Gregs_Social Icons_Twitter_OFF_Transparent.png";
import twitterColor from "../../images/WTF_211025_Gregs_Social Icons_Twitter_ON_Transparent 2.png";
import DiscordButton from "../DiscordBtn";
import TwitterButton from "../TwitterButton";

const SocialGregsSection = () => {
  const [discordVisibile, setDiscordVisibility] = useState("hidden");
  const [instagramVisibility, setInstagramVisibility] = useState("hidden");
  const [twitterVisibility, setTwitterVisibility] = useState("hidden");

  return (
    <div className="main-container">
      <div className="social-gregs-container">
        <a className="" href={"Https://discord.gg/thegregs"} target="blank">
          <div className="social-greg-and-text-container">
            <div
              className="social-gregs-containers"
              onMouseEnter={() => setDiscordVisibility("visible")}
              onMouseLeave={() => setDiscordVisibility("hidden")}
            >
              <img
                src={discordWhite}
                alt=""
                className="social-greg discord-white"
              />
              <img
                src={discordColored}
                alt=""
                className="social-greg discord-colored"
                style={{ visibility: discordVisibile }}
              />
            </div>
            <div
              onMouseEnter={() => setDiscordVisibility("visible")}
              onMouseLeave={() => setDiscordVisibility("hidden")}
              style={{ cursor: "pointer" }}
            >
              <img src={discordText} alt="" className="social-text" />
            </div>
          </div>
        </a>
        <a
          className=""
          href={"https://instagram.com/thegregsnft?utm_medium=copy_link"}
          target="blank"
        >
          <div className="social-greg-and-text-container">
            <div
              className="social-gregs-containers"
              onMouseEnter={() => setInstagramVisibility("visible")}
              onMouseLeave={() => setInstagramVisibility("hidden")}
            >
              <img
                src={instagramWhite}
                alt=""
                className="social-greg discord-white"
              />
              <img
                src={instagramColor}
                alt=""
                className="social-greg discord-colored"
                style={{ visibility: instagramVisibility }}
              />
            </div>
            <div
              onMouseEnter={() => setInstagramVisibility("visible")}
              onMouseLeave={() => setInstagramVisibility("hidden")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <img src={instagramText} alt="" className="instagram" />
            </div>
          </div>
        </a>
        <a className="" href={"https://twitter.com/thegregs"} target="blank">
          <div className="social-greg-and-text-container">
            <div
              className="social-gregs-containers"
              onMouseEnter={() => setTwitterVisibility("visible")}
              onMouseLeave={() => setTwitterVisibility("hidden")}
            >
              <img
                src={twitterWhite}
                alt=""
                className="social-greg discord-white"
              />
              <img
                src={twitterColor}
                alt=""
                className="social-greg discord-colored"
                style={{ visibility: twitterVisibility }}
              />
            </div>
            <div
              onMouseEnter={() => setTwitterVisibility("visible")}
              onMouseLeave={() => setTwitterVisibility("hidden")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <img src={twitterText} alt="" className=" social-text" />
            </div>
          </div>
        </a>
      </div>
      <div className="social-buttons-container">
        <DiscordButton />
        <TwitterButton />
      </div>
    </div>
  );
};

export default SocialGregsSection;
