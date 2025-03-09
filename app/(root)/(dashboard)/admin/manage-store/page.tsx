import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Icon } from "@iconify/react";
import ManageHead from "../../_components/ManageHead";
import { Input } from "@heroui/input";
import { Switch } from "@heroui/switch";
import ImageUpload from "../../_components/ImageUpload";

const ManageStore = () => {
  return (
    <section className="flex items-start flex-col gap-20">
      <div className="w-full flex gap-3 items-center justify-center flex-wrap">
        <Card className="bg-primary/10 dark:bg-primary/20 p-4 w-[290px]">
          <CardHeader className="flex items-center justify-between">
            <div className="flex gap-2">
              <Icon
                icon="hugeicons:money-bag-02"
                width="30"
                height="30"
                className="text-primary"
              />
              <h2 className="text-2xl font-bold text-start">الارباح</h2>
            </div>
          </CardHeader>
          <CardFooter>
            <h3 className="flex items-end justify-end w-full text-2xl font-bold text-primary">
              25000.00 ج.م
            </h3>
          </CardFooter>
        </Card>
        <Card className="bg-primary/10 dark:bg-primary/20 p-4 w-[290px]">
          <CardHeader className="flex items-center justify-between">
            <div className="flex gap-2">
              <Icon
                icon="hugeicons:web-validation"
                width="30"
                height="30"
                className="text-primary"
              />
              <h2 className="text-2xl font-bold text-start">المبيعات</h2>
            </div>
          </CardHeader>
          <CardFooter>
            <h3 className="flex items-end justify-end w-full text-2xl font-bold text-primary">
              1302 منتج
            </h3>
          </CardFooter>
        </Card>
        <Card className="bg-primary/10 dark:bg-primary/20 p-4 w-[290px]">
          <CardHeader className="flex gap-2">
            <Icon
              icon="hugeicons:user-switch"
              width="30"
              height="30"
              className="text-primary"
            />
            <h2 className="text-2xl font-bold text-start">المستخدمين</h2>
          </CardHeader>
          <CardFooter>
            <h3 className="flex items-end justify-end w-full text-2xl font-bold text-primary">
              500 مستخدم
            </h3>
          </CardFooter>
        </Card>
        <Card className="bg-primary/10 dark:bg-primary/20 p-4 w-[290px]">
          <CardHeader className="flex gap-2">
            <Icon
              icon="hugeicons:product-loading"
              width="30"
              height="30"
              className="text-primary"
            />
            <h2 className="text-2xl font-bold text-start">الطلبات</h2>
          </CardHeader>
          <CardFooter>
            <h3 className="flex items-end justify-end w-full text-2xl font-bold text-primary">
              500 طلب
            </h3>
          </CardFooter>
        </Card>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <ManageHead text={`التفاصيل الاساسية`} />

        <div className="w-full flex flex-row gap-8">
          <Input
            label="اسم المتجر"
            placeholder="متجر مارو"
            className="max-w-2xl"
          />
          <Switch color="danger">تعطيل المتجر</Switch>
        </div>

        <div className="flex flex-col gap-3 ">
          <ManageHead text={`تغيير لوجو المتجر: `} />

          <ImageUpload />
        </div>
      </div>
    </section>
  );
};

export default ManageStore;
