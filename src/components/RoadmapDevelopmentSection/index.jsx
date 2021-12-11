import React from "react";
import roadmMapDevelopment from "../../images/RoadmapDevelopment.svg";
import "./style.scss";

const RoadmapDevelopmentSection = () => {
  return (
    <div className="roadmap-development-section">
      {" "}
      <img
        src={roadmMapDevelopment}
        alt=""
        className="roadmap-development-title"
      />
      <div className="roadmap-development-content">
        <div className="roadmap-development-category-container">
          <div className="roadmap-development-category top-left">
            <h1>MARKETING CAMPAIGNS</h1>
            <p className="category-text">
              On top of injecting $100,000 for marketing, we will continue
              investing money in marketing campaigns to feed the momentum
              post-launch. Our goal is to ensure Greg thrives throughout time
              and space, and we believe the best way to do this is by planning
              multiple advertising campaigns to keep the ball rolling. We will
              set up huge partnerships with other projects, artists and NFT
              thought leaders. In addition to this 1% of the OpenSea fees will
              go into the community grant forever!{" "}
            </p>
          </div>
          <div className="roadmap-development-category top-right">
            <h1>METAVERSE DEVELOPMENT</h1>
            <p className="category-text">
              A spot in the Metaverse will be purchased and set up as a Gallery
              for holders to view their NFT Collection. Stay tuned for more
              information to be released at a later date!
            </p>
          </div>
        </div>
        <div className="roadmap-development-category-container ">
          <div className="roadmap-development-category bottom-left">
            {" "}
            <h1>WORLDWIDE EVENT</h1>
            <p className="category-text">
              The most active members of our community will be invited to a
              private party in Vegas, including the Help Greg Remembers
              challenge winners! There will be more worldwide events organized
              in world famous cities at a later date.
            </p>
          </div>
          <div className="roadmap-development-category bottom-right">
            {" "}
            <h1>GAME DEVELOPMENT</h1>
            <p className="category-text">
              We will initiate the development of a game. Holders of The Gregs
              collection will have a massive advantage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDevelopmentSection;
