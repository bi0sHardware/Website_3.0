import React from "react";

import Header from "./src/partials/Header";
import HeroHome from "./src/partials/HeroHome";
import FeaturesHome from "./src/partials/Features";
import FeaturesBlocks from "./src/partials/FeaturesBlocks";
import Testimonials from "./src/partials/Testimonials";
import Newsletter from "./src/partials/Newsletter";
import Footer from "./src/partials/Footer";
import Banner from "./src/partials/Banner";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden selection:bg-lime-500 selection:text-[#111827] ">
      {/*  Site header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow  ">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
