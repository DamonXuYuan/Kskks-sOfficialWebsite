import React from "react";

import "./index.less";
import Banner from "@/components/Banner";
import List from "@/components/List";
import Servers from "@/components/Servers";

const Home: React.FC = () => {
  return (
    <section className="home">
      <Banner />
      <Servers />
      <List />
    </section>
  );
};

export default Home;
