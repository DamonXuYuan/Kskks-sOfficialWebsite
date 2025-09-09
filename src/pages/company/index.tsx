import React from "react";

import "./index.less";

const company: React.FC = () => {
  return (
    <section className="company">
      <div className="content">
        <div className="title">会社概要</div>
        <div className="companyDetail">
          <div className="left">
            <div className="infoItem">
              <span className="infoTitle">会社名：　</span>
              <span className="infoText">開誠国際株式会社</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle">所在地：</span>
              <span className="infoText">
                〒110-0005 東京都台東区上野6-7-16川久保ビル815号
              </span>
            </div>
            <div className="infoItem">
              <span className="infoTitle">設立日：</span>
              <span className="infoText">2022年12月8日</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle">代表取締役：</span>
              <span className="infoText">張 藝絵</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle">資本金：</span>
              <span className="infoText">5,000,000円</span>
            </div>
          </div>
          <div className="right">
            <div className="infoItem">
              <span className="infoTitle">事業内容：</span>
              <span className="infoText">日中貿易</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">SNSマーケティング事業</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">病院、医院の事務の受託</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">店舗運営</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">服装類生産受注</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">ホームページ作成</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">APP作成</span>
            </div>
            <div className="infoItem">
              <span className="infoTitle opcity">事業内容：</span>
              <span className="infoText">名刺のデザインと作成</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default company;
