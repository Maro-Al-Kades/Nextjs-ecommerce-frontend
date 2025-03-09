import ManageHead from "../../_components/ManageHead";
import AddBrandModal from "./_components/AddBrandModal";
import { getBrands, getBrandsCount } from "@/actions/brands.actions";
import BrandsTable from "./_components/BrandsTable";

const ManageBrands = async () => {
  const brandsCount = await getBrandsCount();
  const brands = await getBrands({ page: 1, limit: 6 });

  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة الماركات`} number={brandsCount.count} />
        <AddBrandModal />
      </div>

      <div className="w-full">
        <BrandsTable brandsCount={brandsCount} brands={brands} />
      </div>
    </section>
  );
};

export default ManageBrands;
