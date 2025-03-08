"use client";

import { Button } from "@heroui/button";
import { Radio, RadioGroup } from "@heroui/radio";
import { Select, SelectItem } from "@heroui/select";
import { addToast } from "@heroui/toast";
import { useState } from "react";

export default function App() {
  const [placement, setPlacement] = useState("bottom-right");

  return (
    <section className="flex flex-col gap-2">
      <h2 className="mb-16 text-2xl font-bold">اختر طريقة الدفع</h2>
      <div className=" flex items-center justify-center">
        <RadioGroup className="w-full" orientation="horizontal">
          <Radio className="p-6 mx-4 border rounded-lg " value="free">
            <span>الدفع عند الاستلام</span>
          </Radio>

          <Radio className="p-6 mx-4 border rounded-lg" value="pro">
            الدفع عن طريق البطاقة الائتمانية
          </Radio>
        </RadioGroup>
      </div>

      <Select className="max-w-xs mt-10" label="اختر عنوان التوصيل">
        <SelectItem>اضافة عنوان شحن</SelectItem>
        <SelectItem>المنزل</SelectItem>
      </Select>

      <Button
        className="mt-5 max-w-xs"
        color="primary"
        onPress={() => {
          setPlacement("top-center");

          addToast({
            title: "تم تسجيل الطلب بنجاح",
            description: "جاري تنفيذ طلبك وشحن المنتج اليك",
            color: "success",
            variant: "flat",
          });
        }}
      >
        اتمام الشراء
      </Button>
    </section>
  );
}
