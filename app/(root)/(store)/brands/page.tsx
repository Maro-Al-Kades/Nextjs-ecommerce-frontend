import React from "react";

import { getBrands } from "@/actions/brands.actions";
import BrandsCard from "@/components/Brands/BrandsCard";

const BrandsPage = async () => {
  const brands = await getBrands({});

  if (!Array.isArray(brands)) {
    console.error("brands is not an array", brands);

    return <p>Error loading brands</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold ">جميع التصنيفات</h1>

      <div className="flex flex-row items-center justify-center flex-wrap gap-6 mt-10">
        {brands.map((brand: any) => (
          <BrandsCard key={brand} brand={brand} />
        ))}
      </div>
    </section>
  );
};

export default BrandsPage;
