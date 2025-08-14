import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import Texty from "rc-texty";

import "rc-banner-anim/assets/index.css";
import "rc-texty/assets/index.css";

import "./index.less";

const BgElement = Element.BgElement;
const Banner: React.FC = () => {
  return (
    <section className="banner">
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement key="bg" className="bg bg1" />
          <Texty className="text">Kskks</Texty>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement key="bg" className="bg bg2" />
          <Texty className="text">Yi Hui</Texty>
        </Element>
        <Element prefixCls="banner-user-elem" key="2">
          <BgElement key="bg" className="bg bg3" />
          <Texty className="text">Love You</Texty>
        </Element>
      </BannerAnim>
    </section>
  );
};

export default Banner;
