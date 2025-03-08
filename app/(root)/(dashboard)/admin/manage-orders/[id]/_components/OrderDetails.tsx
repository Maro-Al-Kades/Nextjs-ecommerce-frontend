import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Switch } from "@heroui/switch";
import { cn } from "@heroui/theme";
import Link from "next/link";
import React from "react";

const OrderDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="bg-content2 p-4 rounded-lg shadow-lg flex flex-row items-start justify-between w-full">
        <div className="flex flex-row items-start gap-6">
          <Image src="https://heroui.com/images/album-cover.png" width={240} />

          <div className="flex items-start flex-col gap-5">
            <div>
              <h3 className="text-xl font-semibold ">مولد النص العربي</h3>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Chip
                  as={Link}
                  color="primary"
                  href={`/categories`}
                  size="lg"
                  variant="flat"
                >
                  الكترونيات
                </Chip>

                <Chip color="danger" size="lg" variant="flat">
                  Dell
                </Chip>
                <Chip color="warning" size="lg" variant="flat">
                  30 تقييم
                </Chip>
              </div>

              <div className="flex gap-2">
                <Chip color="secondary" size="lg" variant="flat">
                  12 قطعة متوفرة
                </Chip>

                <Chip color="success" size="lg" variant="flat">
                  تم البيع 12 مرة
                </Chip>
              </div>
            </div>

            <div>
              <p className="font-medium">
                الكمية: <span className="text-primary">2</span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-primary">666 ج.م</h3>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-2xl">تفاصيل العميل</h2>
        </CardHeader>

        <CardBody className="flex flex-col items-start justify-start gap-3">
          <p>
            <span className="text-primary font-medium">الاسم: </span> مارو عصام
          </p>
          <p>
            <span className="text-primary font-medium">رقم الهاتف: </span>{" "}
            +201014344053
          </p>
          <p>
            <span className="text-primary font-medium">
              البريد الالكتروني:{" "}
            </span>{" "}
            marolinkedin@gmail.com
          </p>
        </CardBody>

        <CardFooter className="w-full items-center gap-2">
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content3 items-center shadow-xl",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-primary/30",
                "data-[selected=true]:border-primary"
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary",
                //selected
                "group-data-[selected=true]:ms-6",
                // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ms-4"
              ),
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium font-medium">تم التوصيل ؟</p>
              <p className="text-tiny text-default-800">
                هل وصل هذا الطلب الي العميل ؟
              </p>
            </div>
          </Switch>
          <Switch
            classNames={{
              base: cn(
                "inline-flex flex-row-reverse w-full max-w-md bg-content2 hover:bg-content3 items-center shadow-xl",
                "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-primary/30",
                "data-[selected=true]:border-primary"
              ),
              wrapper: "p-0 h-4 overflow-visible",
              thumb: cn(
                "w-6 h-6 border-2 shadow-lg",
                "group-data-[hover=true]:border-primary",
                //selected
                "group-data-[selected=true]:ms-6",
                // pressed
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ms-4"
              ),
            }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-medium font-medium">تم الدفع ؟</p>
              <p className="text-tiny text-default-800">
                هل دفع العميل هذا الطلب ؟
              </p>
            </div>
          </Switch>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderDetails;
