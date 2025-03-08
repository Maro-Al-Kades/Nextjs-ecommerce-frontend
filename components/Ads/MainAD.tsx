import { getAds } from "@/actions/ads.actions";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import React from "react";

const MainAD = async () => {
  const ads = await getAds({ limit: 1 });
  return (
    <Card className="p-8 flex flex-row items-center justify-between w-full">
      <CardBody>
        {ads.map((ad: any) => {
          return (
            <div
              key={ad.title}
              className="flex flex-row justify-around items-center"
            >
              <h2 className="text-4xl font-bold">{ad.title}</h2>
              <Image
                src={`http://localhost:8080/ads/${ad.image}`}
                width={300}
              />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};

export default MainAD;
