import React from "react";

import "./index.less";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
