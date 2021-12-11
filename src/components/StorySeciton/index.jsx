import React from "react";
import story from "../../images/Asset 112.svg";
import DiscordButton from "../DiscordBtn";

import "./style.scss";

const StorySection = () => {
  return (
    <div id="story-section">
      <img src={story} alt="" className="story-title" />
      <div className="story-text-container">
        <p className="story-text">
          It’s uncertain exactly where Greg is from, or even when he’s from.
          What is known is that he was different from the rest, a fish out of
          water. He seemed to be the only one interested in holding on to a
          dying part of humanity… culture.
          <br /> <br /> Some wouldn’t think it’s normal for an astrophysicist to
          know as much about 80’s rock n’ roll and ancient Greek philosophy as
          he does about space.
          <br /> <br /> But then again, Greg wasn’t your average Joe. <br />{" "}
          <br /> Maybe that’s why he saw The Singularity coming when others
          didn’t. He tried to warn them.. nobody listened - they were too busy
          looking down at their feed, like cattle grazing pasture. <br /> <br />
          Needless to say, shit hit the fan.
          <br /> <br /> Chaos struck in the blink of an eye, but to no surprise,
          Greg had a contingency plan to get the fuck out of dodge. The Einstein
          Rosen Bridge – A portal to the unknown, an abyss of darkness. He’d
          been studying it for years from a distance. <br /> <br />
          Skeptics say no one could ever survive the journey; that it would rip
          any matter into quantum shreds before it would see the other side...
          <br /> <br />
          Greg begged to differ. He made his way through it like a cowboy riding
          off into the sunset.
          <br /> <br /> Once he crossed the event horizon, there was no way of
          telling where it would take him, but he sure as hell wasn’t coming
          back…
          <br /> <br />
          Legend says he fractured into 10,000 versions of himself across space
          and time.. castaway on an ocean of parallel worlds.
          <br /> <br /> Where did he go, you ask? Well, there’s only one way to
          find out... <DiscordButton width="10px" fontSize="15px" />
        </p>
      </div>
    </div>
  );
};

export default StorySection;
