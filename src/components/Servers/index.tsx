import React, { useState } from "react";
import {
  MailOutlined,
  StarOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import "rc-texty/assets/index.css";
import "./index.less";
import AnimatedOnView from "../AnimatedOnView";

interface IListItem {
  img: any;
  text: string;
  subText: string;
}
const Servers: React.FC = () => {
  const [list] = useState<IListItem[]>([
    {
      img: <MailOutlined />,
      text: "tesst",
      subText: "subText",
    },
    {
      img: <StarOutlined />,
      text: "tesst2",
      subText: "subText",
    },
    {
      img: <ShoppingCartOutlined />,
      text: "tesst3",
      subText: "subText",
    },
  ]);

  const listItemRender = (info: IListItem, index: number) => {
    return (
      <div className="listItem" key={index}>
        <AnimatedOnView>
          <div className="con">
            <div className="icon">{info?.img}</div>
            <span className="text">{info?.text}</span>
            <span className="subText">{info?.subText}</span>
          </div>
        </AnimatedOnView>
      </div>
    );
  };

  return (
    <section className="serverSection">
      <div className="content">
        <div className="title">
          <AnimatedOnView>我想你了！</AnimatedOnView>
        </div>
        <div className="subTitle">
          <AnimatedOnView delay={0.2}>还有三天了哦~~</AnimatedOnView>
        </div>
        <div className="list">
          {list.map((item: IListItem, index: number) => {
            return listItemRender(item, index);
          })}
        </div>
      </div>
    </section>
  );
};

export default Servers;
