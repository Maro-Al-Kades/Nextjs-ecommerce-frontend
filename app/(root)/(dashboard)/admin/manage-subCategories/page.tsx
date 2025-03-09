import {
  getSubCategories,
  getSubCategoriesCount,
} from "@/actions/subCategories.actions";
import ManageHead from "../../_components/ManageHead";
import SubCategoriesTable from "./_components/SubCategoriesTable";
import AddSubCategoryModal from "./_components/AddSubCategoryModal";

const ManageSubCategories = async () => {
  const subCategoriesCount = await getSubCategoriesCount();
  const subCategories = await getSubCategories({});
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead
          text={`ادارة التصنيفات الفرعية`}
          number={subCategoriesCount.count}
        />
        <AddSubCategoryModal />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <SubCategoriesTable
          subCategories={subCategories}
          subCategoriesCount={subCategoriesCount}
        />
      </div>
    </section>
  );
};

export default ManageSubCategories;
