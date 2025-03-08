import React from "react";

import CategoriesCard from "@/components/Categories/CategoriesCard";
import { getCategories } from "@/actions/categories.actions";

const CategoriesPage = async () => {
  const categories = await getCategories({});

  if (!Array.isArray(categories)) {
    console.error("Categories is not an array", categories);

    return <p>Error loading categories</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold ">جميع التصنيفات</h1>

      <div className="flex flex-row items-start justify-start flex-wrap gap-6 mt-10">
        {categories.map((category: any) => (
          <CategoriesCard key={category._id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
