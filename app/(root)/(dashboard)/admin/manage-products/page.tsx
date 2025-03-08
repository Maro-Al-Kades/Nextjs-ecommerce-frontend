import ProductList from "@/components/Products/ProductList";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import ManageHead from "../../_components/ManageHead";

const ManageProducts = async () => {
  return (
    <section className="flex flex-col items-start justify-start gap-6">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة المنتجات`} number={226} />

        <Button
          color="primary"
          variant="shadow"
          endContent={
            <Icon icon="hugeicons:add-circle-half-dot" width="20" height="20" />
          }
          as={Link}
          href="/admin/manage-products/add"
        >
          اضافة منتج جديد
        </Button>
      </div>

      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default ManageProducts;
