import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card isHoverable className="max-w-[350px]">
      <CardHeader className="p-4 relative">
        <div className="rounded-xl">
          <Image
            className="rounded-xl"
            height={280}
            src={product.imageCover}
            width={350}
          />

          <Button
            isIconOnly
            className="absolute top-6 left-6 z-10"
            color="primary"
            variant="flat"
          >
            <Icon icon="hugeicons:heart-add" width="20" height="20" />
          </Button>
        </div>
      </CardHeader>

      <CardBody className="flex flex-col gap-3 items-start">
        <h3 className="text-lg font-medium">{product.title}</h3>

        <div className="flex items-center w-full justify-between">
          <h3 className="text-xl font-bold text-primary">
            {product.price} ج.م
          </h3>
          <div className="flex items-center gap-1">
            <Chip
              color="warning"
              size="md"
              startContent={
                <svg
                  height="15"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    color="currentColor"
                    d="m13.728 3.444l1.76 3.549c.24.494.88.968 1.42 1.058l3.189.535c2.04.343 2.52 1.835 1.05 3.307l-2.48 2.5c-.42.423-.65 1.24-.52 1.825l.71 3.095c.56 2.45-.73 3.397-2.88 2.117l-2.99-1.785c-.54-.322-1.43-.322-1.98 0L8.019 21.43c-2.14 1.28-3.44.322-2.88-2.117l.71-3.095c.13-.585-.1-1.402-.52-1.825l-2.48-2.5C1.39 10.42 1.86 8.929 3.899 8.586l3.19-.535c.53-.09 1.17-.564 1.41-1.058l1.76-3.549c.96-1.925 2.52-1.925 3.47 0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              variant="flat"
            >
              <span>{product.ratingsQuantity}</span>
            </Chip>

            <Chip color="secondary" size="md" variant="flat">
              {product.category ? product.category.title : "No Category"}
            </Chip>
          </div>
        </div>
      </CardBody>

      <CardFooter className="flex gap-2">
        <Button
          fullWidth
          as={Link}
          color="primary"
          endContent={
            <Icon height="20" icon="majesticons:eye-line" width="20" />
          }
          href={`/product/${product._id}`}
        >
          مشاهدة المنتج
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
