import React from "react";

import "./index.less";
import { Card } from "antd";
import AnimatedOnView from "@/components/AnimatedOnView";

const Detail: React.FC = () => {
  return (
    <section className="detailSection">
      <div className="content">
        <Card className="card">
          <div className="title">紹介</div>
          <div className="detail">
            {/* <AnimatedOnView>
              <div>
                PARTNER パートナー募集 シスコムでは共に成長していける
                パートナー様を募集しております。
                パートナーとして求めているのは個人・企業は問いません。
                ご興味のある方、ご質問など、お気軽にご連絡ください。
              </div>
            </AnimatedOnView> */}
            <AnimatedOnView>
              <span className="text">作成中......</span>
            </AnimatedOnView>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Detail;
