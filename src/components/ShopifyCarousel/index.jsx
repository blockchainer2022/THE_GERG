import React from "react";
import Slider from "infinite-react-carousel";

import greg1 from "../../media/greg1.png";
import greg2 from "../../media/greg2.png";
import greg3 from "../../media/greg3.png";
import greg4 from "../../media/greg1.png";
import greg5 from "../../media/greg5.png";
import greg6 from "../../media/greg6.png";
import greg7 from "../../media/greg7.png";
import greg8 from "../../media/greg8.png";
import team from "../../media/team_black.png";

import "./style.scss";

const ShopifyCarousel = () => {
  const settings = {
    adaptiveHeight: true,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: 200,
    dots: true,
    duration: 500,
    virtualList: true,
    wheel: true,
  };
  return (
    <div className="carousel-wrapper">
      <h1 style={{ color: "black" }}>SHOPIFY TEXT HERE</h1>
      <div style={{ color: "black" }}>
        <Slider {...settings}>
          <div className="box">
            <div className="inner-box">
              <img src={greg1} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="inner-box">
              <img src={greg2} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="inner-box">
              <img src={greg3} alt="" className="carousel-image" />
            </div>
          </div>
          <div>
            <div className="inner-box">
              <img src={greg4} alt="" className="carousel-image" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ShopifyCarousel;
