import React from "react";
import "./style.scss";
import roadmap from "../../images/Asset 113.svg";

import portal from "../../media/Color_Portal.png";
import rocket from "../../images/Rocketship.svg";

import ten from "../../images/Asset 12.svg";
import twenty from "../../images/Asset 22.svg";
import fifty from "../../images/Asset 52.svg";
import sixty from "../../images/Asset 62.svg";
import eighty from "../../images/Asset 82.svg";
import hunid from "../../images/Asset 102.svg";

const RoadmapSection = () => {
  return (
    <div id="roadmap-section">
      <div className="roadmap-title-container">
        <img src={roadmap} alt="" className="roadmap-icon" />
      </div>
      <div className="roadmap-grid">
        <div className="roadmap-grid-top">
          <div class="card-container-top">
            <div className="card">
              <div className="percentage-container">
                <img src={ten} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  - 5 holders will be selected out of the first 300 buyers to
                  win M15 R3 Alienware Laptops
                  <br></br>
                  <br></br> - A total of 10 Gregs, including one 1 of 1 Greg,
                  will be raffled among the first 300 Gregs holders!
                  <br></br> <br></br>- We will be airdropping all pre-sale
                  prizes to giveaway winners.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container-top">
            <div className="card">
              <div className="percentage-container">
                <img src={fifty} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  - 20 random holders with three or more gregs receive digital
                  canvases.
                  <br></br>
                  <br></br> - Launch of Member Exclusive The Gregs Merch
                  Collection begins for a limited time.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container-top">
            <div className="card">
              <div className="percentage-container">
                <img src={eighty} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  - Daily raffles for Diamond Hand holders begin with a chance
                  to win $1000 per day! <br></br>
                  <br></br> - We will initiate a college Scholarship Fund for
                  students pursuing STEM <br></br>
                  <br></br> The Greg’s rarity data will be uploaded to
                  rarity.tools <br></br>
                  <br></br> $35,000 will be allocated for charity of the Gregs
                  community choosing!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-container">
          <img src={rocket} alt="" className="rocket" />
          <div className="line"></div>
          <img src={portal} alt="" className="portal-roadmap" />
        </div>

        <div className="roadmap-grid-bottom">
          <div class="card-container-bt">
            <div className="card">
              <div className="percentage-container">
                <img src={twenty} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  -Derivative art contest with a twist takes off in Discord..{" "}
                  <br></br>
                  <br></br> - Winners will receive a special role and a 12.9”
                  iPad Pro & 1 Cyber Raffle Ticket.
                </p>
              </div>
            </div>
          </div>
          <div class="card-container-bt">
            <div className="card">
              <div className="percentage-container">
                <img src={sixty} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  - $100,000 will be injected into The Gregs marketing campaigns{" "}
                  <br></br>
                  <br></br> - The Gregs Comic Book creation begin.<br></br>
                  <br></br> - Announce Winners of the Greg Clout 1st Place: 16”
                  Macbook Pro & 1 Cyber Raffle Ticket 2nd Place: 12.9” iPad Pro
                  & 1 Cyber Raffle Ticket
                </p>
              </div>
            </div>
          </div>
          <div class="card-container-bt">
            <div className="card">
              <div className="percentage-container">
                <img src={hunid} alt="" className="percentage" />
              </div>
              <div className="roadmap-text-container">
                <p className="roadmap-text">
                  - We will be seeding a wallet to stabilize the floor price.
                  <br></br>
                  <br></br> - Countdown for “Help Greg Remember” challenge
                  begins with a Cybertruck giveaway!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-container">
        <div className="timeline-container">
          <img src={rocket} alt="" className="rocket" />
          <div className="line"></div>
          <img src={portal} alt="" className="portal-roadmap" />
        </div>
        <div className="mobile-roadmap">
          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={ten} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                - 5 holders will be selected out of the first 300 buyers to win
                M15 R3 Alienware Laptops
                <br></br>
                <br></br> - A total of 10 Gregs, including one 1 of 1 Greg, will
                be raffled among the first 300 Gregs holders!
                <br></br> <br></br>- We will be airdropping all pre-sale prizes
                to giveaway winners.
              </p>
            </div>
          </div>

          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={twenty} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                -Derivative art contest with a twist takes off in Discord..{" "}
                <br></br>
                <br></br> - Winners will receive a special role and a 12.9” iPad
                Pro & 1 Cyber Raffle Ticket.
              </p>
            </div>
          </div>
          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={fifty} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                - 20 random holders with three or more gregs receive digital
                canvases.
                <br></br>
                <br></br> - Launch of Member Exclusive The Gregs Merch
                Collection begins for a limited time.
              </p>
            </div>
          </div>
          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={sixty} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                - $100,000 will be injected into The Gregs marketing campaigns{" "}
                <br></br>
                <br></br> - The Gregs Comic Book creation begin.<br></br>
                <br></br> - Announce Winners of the Greg Clout 1st Place: 16”
                Macbook Pro & 1 Cyber Raffle Ticket 2nd Place: 12.9” iPad Pro &
                1 Cyber Raffle Ticket
              </p>
            </div>
          </div>
          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={eighty} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                - Daily raffles for Diamond Hand holders begin with a chance to
                win $1000 per day! <br></br>
                <br></br> - We will initiate a college Scholarship Fund for
                students pursuing STEM <br></br>
                <br></br> The Greg’s rarity data will be uploaded to
                rarity.tools <br></br>
                <br></br> $35,000 will be allocated for charity of the Gregs
                community choosing!
              </p>
            </div>
          </div>
          <div className="mobile-roadmap-item">
            {" "}
            <div className="percentage-container">
              <img src={hunid} alt="" className="percentage" />
            </div>
            <div className="roadmap-text-container">
              <p className="roadmap-text">
                - We will be seeding a wallet to stabilize the floor price.
                <br></br>
                <br></br> - Countdown for “Help Greg Remember” challenge begins
                with a Cybertruck giveaway!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
