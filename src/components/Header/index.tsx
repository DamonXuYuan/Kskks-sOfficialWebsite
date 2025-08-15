import React, { useState } from "react";
import logo from "@/assets/img/logo.png";

import "./index.less";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [current, setCurrent] = useState("/");
  const items = [
    {
      label: "ホームページ",
      key: "/",
    },
    {
      label: "会社概要",
      key: "/company",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="header">
      <div className="content">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="list">
          {items.map((item, index) => {
            return (
              <div
                className={`item ${current === item?.key ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setCurrent(item?.key);
                  navigate(item?.key);
                }}
              >
                {item?.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
