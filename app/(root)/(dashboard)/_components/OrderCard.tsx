import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
const OrderCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row w-full justify-between">
        <p className="">
          طلب رقم <span className="text-primary">#1</span>
        </p>

        <h2 className="text-2xl font-semibold text-primary">666 ج.م</h2>
      </CardHeader>

      <CardBody className="flex flex-col items-start justify-start gap-2">
        <p>
          طلب من <span className="text-primary">مارو عصام</span>
        </p>
        <p className="">marolinkedin@gmail.com</p>

        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex gap-2">
            <Chip variant="flat" color="primary">
              لم يتم التوصيل
            </Chip>
            <Chip variant="flat" color="primary">
              لم يتم الدفع
            </Chip>
            <Chip variant="flat" color="primary">
              كاش
            </Chip>
          </div>
        </div>
      </CardBody>

      <CardFooter className="flex gap-2">
        <Button
          color="danger"
          variant="flat"
          endContent={
            <Icon icon="hugeicons:cancel-02" width="20" height="20" />
          }
        >
          الغاء الطلب
        </Button>
        <Button
          color="primary"
          endContent={
            <Icon icon="hugeicons:task-edit-02" width="20" height="20" />
          }
          as={Link}
          href="/admin/manage-orders/1"
        >
          ادارة الطلب
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;
