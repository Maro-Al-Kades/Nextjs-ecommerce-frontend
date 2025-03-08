import { Button } from "@heroui/button";
import OrderDetails from "./_components/OrderDetails";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

const OrderID = () => {
  return (
    <section className="flex flex-col items-start justify-start gap-6 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">تفاصيل الطلب</h2>

        <Button
          isIconOnly
          color="primary"
          as={Link}
          href="/admin/manage-orders"
        >
          <Icon icon="hugeicons:arrow-turn-backward" width="20" height="20" />
        </Button>
      </div>
      <OrderDetails />
    </section>
  );
};

export default OrderID;
