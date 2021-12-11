import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";

import merch from "../../images/Asset 122.svg";

import merch1 from "../../images/merch1.png";
import merch2 from "../../images/merch2.png";
import merch3 from "../../images/merch3.png";
import merch4 from "../../images/merch4.png";
import merch5 from "../../images/merch5.png";
import merch6 from "../../images/merch6.png";
import cap from "../../images/cap.png";
import tumbler from "../../images/tumbler.png";

import "./style.scss";

const MerchSection = () => {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };
  return (
    <div id="merch-section" className="merch-wrapper">
      <img src={merch} alt="" className="merch-title" />
      <Carousel plugins={["arrows"]}>
        <img src={cap} className="merch-img" />
        <img src={merch2} className="merch-img" />
        <img src={merch3} className="merch-img" />
        <img src={merch4} className="merch-img" />
        <img src={merch5} className="merch-img" />
        <img src={merch6} className="merch-img" />
        <img src={cap} className="merch-img" />
        <img src={tumbler} className="merch-img" />
      </Carousel>
      <Dots
        value={value}
        onChange={onChange}
        thumbnails={[
          <img key={1} className="img-example-small" src={merch1} />,
          <img key={12} className="img-example-small" src={merch2} />,
          <img key={1} className="img-example-small" src={merch3} />,
          <img key={12} className="img-example-small" src={merch4} />,
          <img key={1} className="img-example-small" src={merch5} />,
          <img key={12} className="img-example-small" src={merch6} />,
        ]}
      />
    </div>
  );
};

export default MerchSection;
