import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

import tshirt1 from "../../images/tshirt1.png";
import jacket from "../../images/jacket.png";
import merch5 from "../../images/merch5.png";
import merch6 from "../../images/merch6.png";

import mensHoodie from "../../images/mens_hoodie.png";
import womensHoodie from "../../images/womens_hoodie.png";
import mensJacket from "../../images/mens_jacket.png";
import mensTshirt from "../../images/mens_tshirt.png";
import arrow from "../../images/arrpw.png";
import merch from "../../images/Asset 122.svg";
import { useEffect } from "react/cjs/react.development";
import useWindowDimensions from "../useWindowDimensionHook";
import cap from "../../images/cap.png";
import tumbler from "../../images/tumblr.png";

import leftArrow from "../../images/Asset 114.svg";
import rightArrow from "../../images/Asset 214.svg";

const MerchSection2 = () => {
  const { height, width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: width > 900 ? 3 : 1,
    slidesToScroll: width > 900 ? 6 : 1,
    focusOnSelect: false,
    initialSlide: 0,
    nextArrow: <img src={rightArrow} alt="" className="arrow" />,
    prevArrow: <img src={leftArrow} alt="" className="arrow" />,
    className: "carousel-container",
  };

  return (
    <div className="merch-section">
      <img src={merch} alt="" className="merch-title" />{" "}
      <Slider {...settings}>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/the-pocket-rocket"}
            target="blank"
          >
            <img src={tshirt1} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={
              "https://thegregsmerch.com/products/unisex-champion-tie-dye-hoodie"
            }
            target="blank"
          >
            <img src={mensHoodie} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/vintage-cotton-twill-cap"}
            target="blank"
          >
            <img src={cap} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/crop-hoodie"}
            target="blank"
          >
            <img src={womensHoodie} alt="" className="merch-item" />
          </a>
        </div>

        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/champion-hoodie"}
            target="blank"
          >
            <img src={merch5} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/oregon-sport-bottle"}
            target="blank"
          >
            <img src={merch6} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/champion-hoodie"}
            target="blank"
          >
            <img src={jacket} alt="" className="merch-item" />
          </a>
        </div>
        <div className="img-container-carousel">
          <a
            className=""
            href={"https://thegregsmerch.com/products/oregon-sport-bottle"}
            target="blank"
          >
            <img src={tumbler} alt="" className="merch-item" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default MerchSection2;
