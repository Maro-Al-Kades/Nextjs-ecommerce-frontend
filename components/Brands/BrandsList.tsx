import React from "react";

import BrandsCard from "./BrandsCard";

import { getBrands } from "@/actions/brands.actions";

const BarndsList = async () => {
  const brands = await getBrands({
    limit: 4,
  });

  return (
    <section className="flex flex-row flex-wrap gap-6 justify-center">
      {brands.map((brand: any) => (
        <BrandsCard key={brand} brand={brand} />
      ))}
    </section>
  );
};

export default BarndsList;
