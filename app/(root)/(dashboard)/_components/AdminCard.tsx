import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const AdminCard = ({
  title,
  image,
  lastUpdate,
}: {
  title: String;
  image: String;
  lastUpdate: Date;
}) => {
  const formattedDateTime = format(
    new Date(lastUpdate),
    "EEEE، d MMMM yyyy - hh:mm:ss a",
    { locale: ar }
  );

  return (
    <Card className="p-4 flex flex-row justify-between items-start">
      <div className="flex flex-row items-start gap-6 justify-start">
        <div>
          <Image src={`${image}`} width={300} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl">
            <span className="text-primary font-semibold"> العنوان: </span>{" "}
            {title}
          </p>
          <p className="text-xl">
            <span className="text-primary font-semibold"> اخر تحديث: </span>{" "}
            {formattedDateTime}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button isIconOnly color="danger" variant="flat">
          <Icon icon="hugeicons:delete-02" width="20" height="20" />
        </Button>
        <Button isIconOnly color="warning" variant="flat">
          <Icon icon="hugeicons:edit-02" width="20" height="20" />
        </Button>
      </div>
    </Card>
  );
};

export default AdminCard;
