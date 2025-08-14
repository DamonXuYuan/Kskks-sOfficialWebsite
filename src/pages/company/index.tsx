import React from "react";
import { isMobile } from "react-device-detect";

import "./index.less";
import { Card } from "antd";
import AnimatedOnView from "@/components/AnimatedOnView";

const company: React.FC = () => {
  return (
    <section className="company">
      <div className="content">
        <Card className="card">
          <div className="title">会社概要</div>
          <div className="detail">
            <AnimatedOnView
              style={{ width: isMobile ? "100%" : "calc(50% - 36px)" }}
            >
              <div className="left">
                <div className="infoItem">
                  <span className="infoTitle">会社名：　</span>
                  <span className="infoText">株式会社gaff</span>
                </div>
                <div className="infoItem">
                  <span className="infoTitle">所在地：</span>
                  <span className="infoText">
                    東京都豊島区東池袋<span>３－１３－１２ー７０８号</span>
                  </span>
                </div>
                <div className="infoItem">
                  <span className="infoTitle">設立日：</span>
                  <span className="infoText">２０２０年３月１３日</span>
                </div>
                <div className="infoItem">
                  <span className="infoTitle">代表取締役：</span>
                  <span className="infoText">我亲爱的小宝贝儿</span>
                </div>
                <div className="infoItem">
                  <span className="infoTitle">従業員数：</span>
                  <span className="infoText">約９０名</span>
                </div>
              </div>
            </AnimatedOnView>
            <AnimatedOnView
              style={{ width: isMobile ? "100%" : "calc(50% - 36px)" }}
              delay={0.2}
            >
              <div className="right">
                <div className="infoItem">
                  <span className="infoTitle">事業内容：</span>
                  <span className="infoText">飲食店の運営</span>
                </div>
                <div className="infoItem">
                  <span className="cs(infoTitle, opcity)">事業内容：</span>
                  <span className="infoText">飲食店舗の運営サポート</span>
                </div>
                <div className="infoItem">
                  <span className="cs(infoTitle, opcity)">事業内容：</span>
                  <span className="infoText">食料品等の輸出入及び販売</span>
                </div>
                <div className="infoItem">
                  <span className="cs(infoTitle, opcity)">事業内容：</span>
                  <span className="infoText">不動産関連事業</span>
                </div>
              </div>
            </AnimatedOnView>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default company;
