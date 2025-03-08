import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";

const CategoriesCard = ({ category }: any) => {
  return (
    <Card isHoverable isPressable>
      <CardBody>
        <Image src={category.image} width={200} />
      </CardBody>

      <CardFooter>
        <h3 className="text-xl font-medium text-center items-center flex justify-center w-full">
          {category.title}
        </h3>
      </CardFooter>
    </Card>
  );
};

export default CategoriesCard;
