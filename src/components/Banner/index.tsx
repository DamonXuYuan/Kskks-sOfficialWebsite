import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import Texty from "rc-texty";

import "rc-banner-anim/assets/index.css";
import "rc-texty/assets/index.css";

import "./index.less";
import logo from "@/assets/img/logoMini.png";
import AnimatedOnView from "../AnimatedOnView";

const BgElement = Element.BgElement;
const Banner: React.FC = () => {
  return (
    <section className="banner">
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement key="bg" className="bg bg1" />
          <div className="info">
            <AnimatedOnView>
              <img src={logo} alt="logo" />
            </AnimatedOnView>
            <Texty className="text">開誠国際株式会社</Texty>
          </div>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement key="bg" className="bg bg2" />
          <div className="info">
            <AnimatedOnView>
              <img src={logo} alt="logo" />
            </AnimatedOnView>
            <Texty className="text">開誠国際株式会社</Texty>
          </div>
        </Element>
        <Element prefixCls="banner-user-elem" key="2">
          <BgElement key="bg" className="bg bg3" />
          <div className="info">
            <AnimatedOnView>
              <img src={logo} alt="logo" />
            </AnimatedOnView>
            <Texty className="text">開誠国際株式会社</Texty>
          </div>
        </Element>
      </BannerAnim>
    </section>
  );
};

export default Banner;
