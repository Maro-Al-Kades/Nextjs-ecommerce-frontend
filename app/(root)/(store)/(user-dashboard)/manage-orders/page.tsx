const ManageOrdersRoute = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold ">
        عدد الطلبات <span className="text-primary">#0</span>
      </h2>

      <p className="text-default-700 font-light flex items-center justify-center">
        لا يوجد طلبات حاليا...
      </p>
    </div>
  );
};

export default ManageOrdersRoute;
