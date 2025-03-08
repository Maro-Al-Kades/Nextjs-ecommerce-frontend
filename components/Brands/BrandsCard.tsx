import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";

const BrandsCard = ({ brand }: { brand: any }) => {
  return (
    <Card isHoverable isPressable>
      <Image
        className="bg-cover bg-center"
        height={200}
        src={brand.image}
        width={300}
      />
    </Card>
  );
};

export default BrandsCard;
