"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Chip } from "@heroui/chip";
import { Badge } from "@heroui/badge";
import { Button } from "@heroui/button";

interface ProductInfoProps {
  title: string;
  description: string;
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  sold: number;
  colors: string[];
  averageRatings: number;
  ratingsQuantity: number;
  publishedOn: string;
}

export function ProductInfo({
  title,
  description,
  price,
  priceAfterDiscount,
  quantity,
  sold,
  colors,
  averageRatings,
  ratingsQuantity,
  publishedOn,
}: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [quantity_, setQuantity] = React.useState(1);

  const discount = Math.round(((price - priceAfterDiscount) / price) * 100);

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-right">{title}</h1>
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(averageRatings)
                    ? "text-warning"
                    : "text-default-400"
                }`}
                icon="lucide:star"
              />
            ))}
          </div>
          <span className="">({ratingsQuantity} تقييم)</span>
        </div>
        <Chip color="primary" size="sm" variant="flat">
          تم البيع {sold} مرة
        </Chip>
      </div>

      <div className="flex items-center gap-2">
        {priceAfterDiscount < price ? (
          <>
            <span className="text-3xl font-bold text-primary">
              ج.م {priceAfterDiscount}
            </span>
            <span className="text-xl line-through">ج.م {price}</span>
            <Badge color="danger">{discount}% خصم</Badge>
          </>
        ) : (
          <span className="text-3xl font-bold">ج.م {price}</span>
        )}
      </div>

      <p className="text-right text-gray-500">{description}</p>

      <div>
        <p className="text-sm font-semibold mb-2 text-right">الالوان</p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full ${
                selectedColor === color
                  ? "ring-2 ring-primary ring-offset-2"
                  : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onClick={() => setQuantity(Math.max(1, quantity_ - 1))}
          >
            <Icon icon="lucide:minus" />
          </Button>
          <span className="w-12 text-center">{quantity_}</span>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onClick={() => setQuantity(Math.min(quantity, quantity_ + 1))}
          >
            <Icon icon="lucide:plus" />
          </Button>
        </div>
        <span className="">{quantity} منتج متوفر</span>
      </div>

      <div className="flex gap-2 mt-4">
        <Button className="flex-1" color="primary">
          الاضافة الي العربة
        </Button>
        <Button className="flex-1" variant="bordered">
          شراء الان
        </Button>
      </div>
    </div>
  );
}
