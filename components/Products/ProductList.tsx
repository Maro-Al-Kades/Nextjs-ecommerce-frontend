import ProductCard from "./ProductCard";

import { getProducts } from "@/actions/products.actions";

const ProductList = async () => {
  const products = await getProducts({
    page: 1,
    limit: 4,
  });

  return (
    <section className="flex flex-row items-center justify-start gap-6 flex-wrap">
      {products?.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
