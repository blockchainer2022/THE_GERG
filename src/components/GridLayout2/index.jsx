import React from "react";
import NavBar from "../NavBar";
import TeamSection from "../TeamSection";

import WhoTfSection from "../WhoTfSection";
import RoadmapSection from "../RoadmapSection";
import StorySection from "../StorySeciton";
import MerchSection2 from "../MerchSection2";
import RoadmapDevelopmentSection from "../RoadmapDevelopmentSection";
import Footer from "../Footer";

const GridLayout2 = () => {
  return (
    <div
      style={{
        zIndex: 2,
        position: "absolute",
        width: "100%",
      }}
      className="grid-layout-container"
    >
      <NavBar />
      <WhoTfSection />

      <RoadmapSection />
      <RoadmapDevelopmentSection />
      <MerchSection2 />
      <TeamSection />

      <StorySection />

      <Footer />
      {/* <GallerySection /> 
       <GallerySection /> */}
    </div>
  );
};

export default GridLayout2;
