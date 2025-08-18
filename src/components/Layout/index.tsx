import React from "react";

import "./index.less";
import Header from "../Header";
import Footer from "../Footer";
import ParticleAnimation from "../ParticleAnimation";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="layout">
      <ParticleAnimation />
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
