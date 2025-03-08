import { getLogo } from "@/actions/logo.actions";
import { Image } from "@heroui/image";
import React from "react";

const Logo = async () => {
  const logos = await getLogo({ limit: 1 });
  const logo = logos.length > 0 ? logos[0] : null;

  return (
    <div className="flex gap-2">
      {logo ? (
        <div className="flex items-center gap-2">
          {logo.image && (
            <Image
              src={`http://localhost:8080/logos/${logo.image}`}
              width={50}
              height={50}
              alt="Logo"
              className="rounded-full"
            />
          )}
          <h2 className="font-bold text-lg text-primary">{logo.title}</h2>
        </div>
      ) : (
        <p>لا يوجد شعار متاح</p>
      )}
    </div>
  );
};

export default Logo;
