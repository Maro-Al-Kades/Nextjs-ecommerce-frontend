import ProductList from "@/components/Products/ProductList";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import ManageHead from "../../_components/ManageHead";
import { getProducts, getProductsCount } from "@/actions/products.actions";
import ProductsTable from "./_components/ProductsTable";

const ManageProducts = async () => {
  const ProductsCount = await getProductsCount();
  const products = await getProducts({ limit: 6 });
  return (
    <section className="flex flex-col items-start justify-start gap-6">
      <div className="flex flex-row items-center justify-between w-full">
        <ManageHead text={`ادارة المنتجات`} number={ProductsCount.count} />

        <Button
          color="primary"
          variant="shadow"
          endContent={
            <Icon icon="hugeicons:folder-management" width="20" height="20" />
          }
          as={Link}
          href="/admin/manage-products/add"
        >
          اضافة منتج جديد
        </Button>
      </div>

      <div className="w-full">
        <ProductsTable products={products} productsCount={ProductsCount} />
      </div>
    </section>
  );
};

export default ManageProducts;
