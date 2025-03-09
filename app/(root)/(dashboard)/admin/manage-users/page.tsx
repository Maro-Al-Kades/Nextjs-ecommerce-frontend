import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Icon } from "@iconify/react";
import UsersTable from "./_components/UsersTable";
import { getUsers, getUsersCount } from "@/actions/user.actions";

const ManageUsers = async () => {
  const usersCount = await getUsersCount();
  const users = await getUsers({});
  return (
    <section className="w-full flex flex-col gap-3 items-center justify-center">
      <div className="w-full flex gap-3 items-center justify-center">
        <Card className="bg-primary/20 p-4 w-full">
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
              {usersCount.count}
            </h3>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full">
        <UsersTable users={users} usersCount={usersCount} />
      </div>
    </section>
  );
};

export default ManageUsers;
