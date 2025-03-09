import {
  getCategories,
  getCategoriesCount,
} from "@/actions/categories.actions";
import ManageHead from "../../_components/ManageHead";
import CategoriesTable from "./_Components/CategoriesTable";
import AddCategoryModal from "./_Components/AddCategoryModal";

const AddCategory = async () => {
  const categoriesCount = await getCategoriesCount();
  const categories = await getCategories({});
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة التصنيفات`} number={categoriesCount.count} />
        <AddCategoryModal />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <CategoriesTable
          categories={categories}
          categoriesCount={categoriesCount}
        />
      </div>
    </section>
  );
};

export default AddCategory;
