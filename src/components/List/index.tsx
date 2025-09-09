import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import img1 from "@/assets/img/list/img1.jpg";
import img2 from "@/assets/img/list/img2.jpg";
import img3 from "@/assets/img/list/img3.jpg";
import img4 from "@/assets/img/list/img4.jpg";
import img5 from "@/assets/img/list/img5.jpg";
import img6 from "@/assets/img/list/img6.jpg";
import img7 from "@/assets/img/list/img7.jpg";
import img8 from "@/assets/img/list/img8.jpg";

import "rc-texty/assets/index.css";
import "./index.less";
import { Card, Col, Row } from "antd";
import AnimatedOnView from "../AnimatedOnView";

interface IListItem {
  img: string;
  text: string;
}
const List: React.FC = () => {
  const [list] = useState<IListItem[]>([
    {
      img: img1,
      text: "日中貿易",
    },
    {
      img: img2,
      text: "SNSマーケティング事業",
    },
    {
      img: img3,
      text: "病院、医院の事務の受託",
    },
    {
      img: img4,
      text: "店舗運営",
    },
    {
      img: img5,
      text: "服装類生産受注",
    },
    {
      img: img6,
      text: "ホームページ作成",
    },
    {
      img: img7,
      text: "APP作成",
    },
    {
      img: img8,
      text: "名刺のデザインと作成",
    },
  ]);

  const listItemRender = (info: IListItem, index: number) => {
    return (
      <Col span={isMobile ? 24 : 6} key={`list${index}`}>
        <AnimatedOnView delay={index * 0.1}>
          <Card className="listItem" key={`list${index}`}>
            <img src={info?.img} alt="" />
            <span className="text">{info?.text}</span>
          </Card>
        </AnimatedOnView>
      </Col>
    );
  };

  return (
    <section className="listSection">
      <div className="content">
        <div className="title">
          <AnimatedOnView>事業項目</AnimatedOnView>
        </div>
        <div className="subTitle">
          <AnimatedOnView delay={0.2}>Main business offerings</AnimatedOnView>
        </div>
        <Row gutter={[20, 20]} className="list">
          {list.map((item: IListItem, index: number) => {
            return listItemRender(item, index);
          })}
        </Row>
      </div>
    </section>
  );
};

export default List;
