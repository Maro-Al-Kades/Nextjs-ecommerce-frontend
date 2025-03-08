import PaginationComp from "@/components/PaginationComp";
import AdminCard from "../../_components/AdminCard";
import ManageHead from "../../_components/ManageHead";
import AddBrandModal from "../../_components/modals/AddBrandModal";

const ManageBrands = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة الماركات`} number={12} />
        <AddBrandModal />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
        <AdminCard
          title={`احدث الاجهزة الالكترونية لعام 2024`}
          image={`https://heroui.com/images/hero-card-complete.jpeg`}
        />
      </div>

      <div className="flex items-center justify-center w-full">
        <PaginationComp />
      </div>
    </section>
  );
};

export default ManageBrands;
