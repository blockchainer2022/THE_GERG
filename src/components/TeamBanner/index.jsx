import React from "react";
import greg1 from "../../images/Greg_001-01.png";
import carlosAvatar from "../../images/CarlosAvatar.png";

import bruceLee from "../../images/BruceLee.png";
import grease from "../../images/Grease.png";

import team from "../../images/Team.svg";

import "./style.scss";

const TeamBanner = () => {
  return (
    <div className="team-container">
      <div className="team-title-container">
        <img src={team} alt="" className="team" />
      </div>
      <div className="team-row-container">
        <div className="team-row">
          <div className="team-greg-item-container">
            <img src={bruceLee} alt="" className="greg" />
            <p className="team-greg-description">nfTNft</p>
          </div>
          <div className="team-greg-item-container">
            <img src={greg1} alt="" className="greg" />
            <p className="team-greg-description">Gregorius</p>
          </div>
          <div className="team-greg-item-container">
            <img src={grease} alt="" className="greg" />
            <p className="team-greg-description">Star-Lord</p>
          </div>

          <div className="team-greg-item-container">
            <img src={carlosAvatar} alt="" className="greg" />
            <p className="team-greg-description">Greginho</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner;
