import React, { useState } from "react";

import "./style.scss";

import story from "../../images/Asset 112.svg";
import merch from "../../images/Asset 122.svg";
import social from "../../images/Asset 132.svg";
import roadmap from "../../images/Asset 113.svg";
import whotf from "../../images/Asset 123.svg";

import team from "../../images/Team.svg";

import { Link } from "react-scroll";
import { stack as Menu } from "react-burger-menu";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  console.log(open);
  return (
    <div class="wrapper">
      <Menu right isOpen={open} onOpen={() => setOpen(true)}>
        <Link
          activeClass="active"
          to="roadmap-section"
          spy={true}
          smooth={true}
          onClick={() => setOpen(false)}
        >
          <img src={roadmap} alt="" className="navbar-item roadmap-link" />
        </Link>
        <Link
          activeClass="active"
          to="story-section"
          spy={true}
          smooth={true}
          onClick={() => setOpen(false)}
        >
          <img src={story} alt="" className="navbar-item" />
        </Link>
        <Link
          activeClass="active"
          to="team-section"
          spy={true}
          smooth={true}
          onClick={() => setOpen(false)}
        >
          <img src={team} alt="" className="navbar-item " />
        </Link>
        <Link
          activeClass="active"
          to="merch-section"
          spy={true}
          smooth={true}
          onClick={() => setOpen(false)}
        >
          <img src={merch} alt="" className="navbar-item" />
        </Link>
      </Menu>

      <div className="nav-bar">
        <div className="navbar-items-container">
          {" "}
          <Link
            activeClass="active"
            to="roadmap-section"
            spy={true}
            smooth={true}
          >
            <img src={roadmap} alt="" className="navbar-item roadmap-link" />
          </Link>
          <Link
            activeClass="active"
            to="story-section"
            spy={true}
            smooth={true}
          >
            <img src={story} alt="" className="navbar-item" />
          </Link>
          <Link activeClass="active" to="team-section" spy={true} smooth={true}>
            <img src={team} alt="" className="navbar-item" />
          </Link>
          <Link
            activeClass="active"
            to="merch-section"
            spy={true}
            smooth={true}
          >
            <img src={merch} alt="" className="navbar-item" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
