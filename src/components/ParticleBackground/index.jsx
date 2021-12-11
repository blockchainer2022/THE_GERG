import React from "react";
import Particles from "react-particles-js";
import "./style.scss";

const ParticleBackground = () => {
  return (
    <div
      className="particles"
      style={{
        backgroundColor: "black",
        height: "550vh",
        width: "100%",
        position: "absolute",
        zIndex: -1,
        padding: 0,
        margin: 0,
      }}
    >
      <Particles
        height="550vh"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#FFFFFF",
            },
            line_linked: {
              enable: false,
            },
            number: {
              value: 800,
            },
            size: {
              value: 5,
              random: true,
            },
            opacity: {
              value: 1,
            },
            move: {
              outMode: "out",
              limit: 1,
              speed: 0.5,
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleBackground;
