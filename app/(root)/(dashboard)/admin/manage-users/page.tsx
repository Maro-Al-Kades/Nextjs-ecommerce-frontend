import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Icon } from "@iconify/react";

const ManageUsers = () => {
  return (
    <section className="w-full flex gap-3 items-center justify-center">
      <Card className="bg-primary/20 p-4 w-[350px]">
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
            500
          </h3>
        </CardFooter>
      </Card>
      <Card className="bg-primary/20 p-4 w-[350px]">
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
            500
          </h3>
        </CardFooter>
      </Card>
      <Card className="bg-primary/20 p-4 w-[350px]">
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
            500
          </h3>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ManageUsers;
