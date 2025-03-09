"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Pagination } from "@heroui/pagination";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";
import { User } from "@/types";
import { Avatar } from "@heroui/avatar";
import { cn } from "@heroui/theme";
import { Switch } from "@heroui/switch";
import { Chip } from "@heroui/chip";

const UsersTable = ({
  users,
  usersCount,
}: {
  users: User[];
  usersCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 8;

  const pages = Math.ceil(usersCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  }, [page, users]);

  return (
    <div>
      <Table
        aria-label="جدول الماركات"
        className=" w-full"
        bottomContent={
          <div className="flex w-full justify-center mt-4">
            <Pagination
              dir="ltr"
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={setPage}
            />
          </div>
        }
        classNames={{
          wrapper: " w-full",
        }}
      >
        <TableHeader className="w-full bg-primary">
          <TableColumn key="profileImg" className="text-primary">
            الصورة
          </TableColumn>
          <TableColumn key="name" className="text-primary">
            الاسم
          </TableColumn>
          <TableColumn key="email" className="text-primary">
            البريد الالكتروني
          </TableColumn>
          <TableColumn key="phone" className="text-primary">
            رقم الهاتف
          </TableColumn>
          <TableColumn key="role" className="text-primary">
            الصفة
          </TableColumn>
          <TableColumn key="active" className="text-primary">
            حالة الحساب
          </TableColumn>
          <TableColumn key="actions" className="text-primary">
            تعديلات
          </TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((user) => (
            <TableRow key={user._id}>
              <TableCell>
                <Avatar
                  isBordered
                  size="md"
                  src={
                    user.profileImg
                      ? user.profileImg
                      : "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  }
                />
              </TableCell>
              <TableCell className="text-lg text-primary">
                {user.name}
              </TableCell>
              <TableCell className="text-lg  font-semibold">
                {user.email}
              </TableCell>
              <TableCell className="text-lg">{user.phone}</TableCell>
              <TableCell className={cn("text-lg")}>
                <Chip color={user.role === "admin" ? "primary" : "default"}>
                  {user.role}
                </Chip>
              </TableCell>
              <TableCell className={cn("text-lg")}>
                {user.role === "admin" ? null : (
                  <Switch
                    defaultSelected={user.active === true}
                    color="success"
                  />
                )}
              </TableCell>
              <TableCell className="flex gap-1 items-end">
                <Button isIconOnly color="danger" variant="flat">
                  <Icon icon="hugeicons:delete-03" width="20" height="20" />
                </Button>
                <Button isIconOnly color="warning" variant="flat">
                  <Icon
                    icon="hugeicons:pencil-edit-02"
                    width="20"
                    height="20"
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersTable;
