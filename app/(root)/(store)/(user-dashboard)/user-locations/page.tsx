import { Card } from "@heroui/card";
import AddLocation from "./_components/AddLocation";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

const UserLocationsRoute = () => {
  const locations = true;
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold ">العناوين الشخصية</h2>

        <AddLocation />
      </div>

      {locations ? (
        <Card className="p-4 flex flex-row items-start justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-md ">
              <span className="text-primary font-semibold">الاسم: </span> المنزل
            </p>
            <p className="text-md">
              <span className="text-primary font-semibold">
                العنوان بالتفصيل:{" "}
              </span>{" "}
              المرج شارع محمد نجيب بعد الجزار شمال في شمال
            </p>
            <p className="text-md ">
              <span className="text-primary font-semibold">رقم الهاتف: </span>{" "}
              +201014344053
            </p>
          </div>

          <Button isIconOnly color="danger" variant="flat">
            <Icon icon="hugeicons:delete-03" width="20" height="20" />
          </Button>
        </Card>
      ) : (
        <p className="text-default-700 font-light flex items-center justify-center">
          لا يوجد عناوين حاليا...
        </p>
      )}
    </div>
  );
};

export default UserLocationsRoute;
