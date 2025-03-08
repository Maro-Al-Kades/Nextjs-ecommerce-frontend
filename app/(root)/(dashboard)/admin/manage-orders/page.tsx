import ManageHead from "../../_components/ManageHead";
import OrdersList from "../../_components/OrdersList";

const ManageOrders = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة الطلبات`} number={50} />
      </div>
      <OrdersList />
    </section>
  );
};

export default ManageOrders;
