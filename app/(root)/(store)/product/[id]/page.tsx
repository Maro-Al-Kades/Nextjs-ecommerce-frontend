"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { Button } from "@heroui/button";
import Link from "next/link";
import { Spinner } from "@heroui/spinner";
import { Radio, RadioGroup } from "@heroui/radio";

import CommentsSection from "../_components/CommentsSection";

async function getProducts(id: string) {
  const res = await fetch(`http://localhost:8080/api/v1/products/${id}`);

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  console.log("Fetched product data:", data); // Debugging log

  return data.data;
}

const ProductID = () => {
  const params = useParams();
  const id = params?.id; // تأكد أن `id` تُستخرج بالشكل الصحيح

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      console.log("Invalid ID:", id); // Debugging log

      return;
    }

    setLoading(true);
    getProducts(id)
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Error fetching product:", err); // Debugging log
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          label="جاري التحميل..."
          variant="gradient"
        />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  console.log("Final product state:", product); // Debugging log

  return (
    <div className="flex flex-col gap-10">
      <section className="bg-content2 dark:bg-content1 p-6 rounded-lg shadow-lg">
        {product ? (
          <div className="flex items-start justify-between gap-10">
            <div>
              <Image
                className="ring-1 ring-primary/30"
                height={500}
                src={product.imageCover}
                width={500}
              />
            </div>

            <div className="flex flex-col items-start flex-1 gap-4">
              <h2 className="text-3xl font-bold">{product.title}</h2>

              <p className="text-content4-foreground max-w-[600px] font-light">
                {product.description}
              </p>

              <div className="flex gap-2">
                <Chip
                  as={Link}
                  color="primary"
                  href={`/categories/${product.category._id}`}
                  size="md"
                  variant="flat"
                >
                  {product.category.title}
                </Chip>

                <Chip color="danger" size="md" variant="flat">
                  Dell
                </Chip>
                <Chip color="warning" size="md" variant="flat">
                  {product.ratingsQuantity} تقييم
                </Chip>
              </div>

              <div className="flex gap-2">
                <Chip color="secondary" size="md" variant="flat">
                  {product.quantity} قطعة متوفرة
                </Chip>

                <Chip color="success" size="md" variant="flat">
                  تم البيع {product.sold} مرة
                </Chip>
              </div>

              <div className="flex gap-2 mt-3">
                <h3 className="text-md font-bold">الالوان المتاحة :</h3>
                <RadioGroup orientation="horizontal">
                  {product.colors.map((color: string) => {
                    return (
                      <Radio
                        key={color}
                        className="w-6 mx-1 h-6 inline-block rounded-full ring-1 ring-primary"
                        style={{ backgroundColor: color }}
                        value={color}
                      />
                    );
                  })}
                </RadioGroup>
              </div>

              <h2 className="text-3xl font-bold text-primary">
                {product.price} ج.م
              </h2>
              <div className="flex gap-2 max-w-[600px]">
                <Button
                  fullWidth
                  className="w-[400px] mt-3"
                  color="primary"
                  endContent={
                    <svg
                      height="22"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        color="currentColor"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h.5M22 6h-2.5m-10 0h7M13 9.5v-7" />
                        <circle cx="6" cy="20" r="2" />
                        <circle cx="17" cy="20" r="2" />
                        <path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18" />
                      </g>
                    </svg>
                  }
                  size="md"
                  variant="flat"
                >
                  اضافة الي العربة
                </Button>

                <Button
                  className="w-[200px] mt-3"
                  color="warning"
                  endContent={
                    <svg
                      height="22"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        color="currentColor"
                        d="M8 13.5h8m-8-5h4M6.099 19q-1.949-.192-2.927-1.172C2 16.657 2 14.771 2 11v-.5c0-3.771 0-5.657 1.172-6.828S6.229 2.5 10 2.5h4c3.771 0 5.657 0 6.828 1.172S22 6.729 22 10.5v.5c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19c-.56.012-1.007.055-1.445.155c-1.199.276-2.309.89-3.405 1.424c-1.563.762-2.344 1.143-2.834.786c-.938-.698-.021-2.863.184-3.865"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  }
                  size="md"
                  variant="faded"
                >
                  كتابة تعليق
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <p>No Product Found</p>
        )}
      </section>
      <CommentsSection />
      {/* <ProductList /> */}
    </div>
  );
};

export default ProductID;
