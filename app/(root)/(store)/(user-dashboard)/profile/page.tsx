import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";

import { Link } from "@heroui/link";
import EditProfile from "./_components/EditProfile";
import ChangePassword from "./_components/ChangePassword";

const ProfileID = () => {
  return (
    <Card className="p-4 flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <Avatar
              isBordered
              as={Link}
              color="primary"
              href={`/profile`}
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="lg"
              className="w-30 h-30"
            />
          </div>

          <h2 className="w-full text-xl flex items-center justify-center font-bold text-primary">
            مارو عصام
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className=" text-lg text-default-700">
          <span className="text-primary ">رقم الهاتف: </span>
          +201014344053
        </p>
        <p className=" text-lg text-default-700">
          <span className="text-primary ">البريد الالكتروني: </span>
          marolinkedin@gmail.com
        </p>
      </div>

      <div className="text-end items-end flex gap-2 justify-end">
        <EditProfile />

        <ChangePassword />
      </div>
    </Card>
  );
};

export default ProfileID;
