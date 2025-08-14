import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import test from "@/assets/img/list/test.jpg";

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
      img: test,
      text: "tesst",
    },
    {
      img: test,
      text: "tesst2",
    },
    {
      img: test,
      text: "tesst3",
    },
    {
      img: test,
      text: "tesst4",
    },
    {
      img: test,
      text: "tesst5",
    },
    {
      img: test,
      text: "tesst6",
    },
    {
      img: test,
      text: "tesst7",
    },
    {
      img: test,
      text: "tesst8",
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
          <AnimatedOnView>你想我了吗？</AnimatedOnView>
        </div>
        <div className="subTitle">
          <AnimatedOnView delay={0.2}>
            亲爱的，我们终于要见面啦！
          </AnimatedOnView>
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
