import CategoriesCard from "./CategoriesCard";

import { getCategories } from "@/actions/categories.actions";

const CategoriesList = async () => {
  const categories = await getCategories({
    limit: 6,
  });

  if (!Array.isArray(categories)) {
    console.error("Categories is not an array", categories);

    return <p>Error loading categories</p>;
  }

  return (
    <section className="flex flex-row flex-wrap gap-6 justify-center">
      {categories.map((category: any) => (
        <CategoriesCard key={category._id} category={category} />
      ))}
    </section>
  );
};

export default CategoriesList;
