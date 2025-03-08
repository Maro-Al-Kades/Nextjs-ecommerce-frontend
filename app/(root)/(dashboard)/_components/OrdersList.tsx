import PaginationComp from "@/components/PaginationComp";
import OrderCard from "./OrderCard";

const OrdersList = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full">
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />

      <div className="flex items-center justify-center">
        <PaginationComp />
      </div>
    </section>
  );
};

export default OrdersList;
