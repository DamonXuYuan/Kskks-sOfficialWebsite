import React, { useState } from "react";
import { Popup } from "antd-mobile";

import "./index.less";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/img/logo.png";
import meneIcon from "@/assets/img/mobileMenu.png";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const items = [
    {
      label: "ホームページ",
      key: "/",
    },
    {
      label: "会社概要",
      key: "/company",
    },
    {
      label: "お問い合わせ",
      key: "/contarctUs",
    },
    {
      label: "紹介",
      key: "/detail",
    },
  ];
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
                className={`item ${
                  location?.pathname === item?.key ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  navigate(item?.key);
                }}
              >
                {item?.label}
              </div>
            );
          })}
        </div>
        {/* 移动端Menu按钮 */}
        <div className="mobileMenu">
          <img
            src={meneIcon}
            alt="menu"
            className="menuIcon"
            onClick={() => setShowMobileMenu(true)}
          />
          <Popup
            visible={showMobileMenu}
            onMaskClick={() => {
              setShowMobileMenu(false);
            }}
            onClose={() => {
              setShowMobileMenu(false);
            }}
            position="top"
            bodyClassName="mobileMenuPopup"
          >
            {items.map((item, index) => {
              return (
                <div
                  className={`menuItem ${
                    location?.pathname === item?.key && "active"
                  }`}
                  key={index}
                  onClick={() => {
                    navigate(item?.key);
                    setShowMobileMenu(false);
                  }}
                >
                  {item?.label}
                </div>
              );
            })}
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Header;
