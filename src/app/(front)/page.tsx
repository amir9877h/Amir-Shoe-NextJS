import CategoriesSelection from "@/components/Front/CategoriesSelection";
import { FeaturedProducts } from "@/components/Front/FeaturedProducts";
import { Hero } from "@/components/Front/Hero";
import React from "react";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
      <FeaturedProducts />
    </div>
  );
};

export default IndexPage;
