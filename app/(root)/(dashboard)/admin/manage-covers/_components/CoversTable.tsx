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
import { Cover } from "@/types";

const CoversTable = ({
  covers,
  coversCount,
}: {
  covers: Cover[];
  coversCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 8;

  const pages = Math.ceil(coversCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return covers.slice(start, end);
  }, [page, covers]);

  return (
    <div>
      <Table
        aria-label="جدول الاغلفة"
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
          <TableColumn key="image" className="text-primary">
            الصورة
          </TableColumn>
          <TableColumn key="title" className="text-primary">
            العنوان
          </TableColumn>
          <TableColumn key="updatedAt" className="text-primary">
            تحديثات
          </TableColumn>
          <TableColumn key="actions" className="text-primary">
            تعديلات
          </TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((cover) => (
            <TableRow key={cover._id}>
              <TableCell>
                <Image
                  src={`http://localhost:8080/covers/${cover.image}`}
                  width={200}
                  height={50}
                />
              </TableCell>
              <TableCell className="text-lg text-primary">
                {cover.title}
              </TableCell>
              <TableCell className="text-lg">
                {new Date(cover.updatedAt).toLocaleDateString("ar-EG")}
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

export default CoversTable;
