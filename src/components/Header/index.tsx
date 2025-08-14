import React, { useState } from "react";
import { Menu } from "antd";
import logo from "@/assets/img/logo.png";

import "./index.less";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [current, setCurrent] = useState("/");
  const onClick = (e: any) => {
    setCurrent(e.key);
    navigate(e.key);
  };
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
        <Menu
          className="menu"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </section>
  );
};

export default Header;
