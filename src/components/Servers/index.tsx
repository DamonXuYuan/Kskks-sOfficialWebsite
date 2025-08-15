import React, { useState } from "react";
import {
  ThunderboltOutlined,
  StarOutlined,
  HeatMapOutlined,
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
      img: <ThunderboltOutlined />,
      text: "顧客の急務を最優先 迅速な初動対応を徹底",
      subText: "Responding to customer urgency",
    },
    {
      img: <StarOutlined />,
      text: "プロセス可視化 サービスの全工程を透明に",
      subText: "Full transparency throughout the process",
    },
    {
      img: <HeatMapOutlined />,
      text: "不断の研鑽 細部への完璧な追求",
      subText: "Striving for excellence",
    },
  ]);

  const listItemRender = (info: IListItem, index: number) => {
    return (
      <div className="listItem" key={index}>
        <AnimatedOnView delay={index * 0.1}>
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
