import React from "react";

import "./style.scss";
import whiteWebsiteLogo from "../../images/WhiteWebsiteLogo.svg";
import SocialSection from "../SocialSection";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="blurb">
          The Gregs are bringing together the brightest minds to pave the way
          for future of NFTs and cryptocurrencies. They are a collection of
          10,000 unique digital NFTs launched on the Ethereum Blockchain,
          created by Messier Labs. Messier Labs aims to be the leader in the
          crypto space for the future of education through disruptive learning.
          The Gregs NFT is not only a piece of collectible digital artwork, but
          also as an exclusive key to the future of the crypto space with The
          Gregs.
        </div>
        <div className="copyright-logo-container">
          <div className="footer-social-icons">
            <SocialSection />
          </div>
          <div className="footer-logo">
            {" "}
            <img src={whiteWebsiteLogo} alt="" className="footer-logo-img" />
          </div>
          <div className="copyright">© 2021 Messier LLC</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
