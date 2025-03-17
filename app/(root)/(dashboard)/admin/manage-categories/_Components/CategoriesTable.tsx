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
import { Category } from "@/types";
import { Chip } from "@heroui/chip";

const CategoriesTable = ({
  categories,
  categoriesCount,
}: {
  categories: Category[];
  categoriesCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(categoriesCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return categories.slice(start, end);
  }, [page, categories]);

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
          {items.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                <Image src={category.image} width={100} />
              </TableCell>
              <TableCell className="text-lg text-primary">
                {category.title}
              </TableCell>
              <TableCell>
                <Chip size="lg" variant="solid" color="default">
                  {new Date(category.updatedAt).toLocaleDateString("en-EG")}
                </Chip>
              </TableCell>
              <TableCell>
                <Button
                  isIconOnly
                  color="danger"
                  variant="flat"
                  className="mr-1"
                >
                  <Icon icon="hugeicons:delete-03" width="20" height="20" />
                </Button>
                <Button
                  isIconOnly
                  color="warning"
                  variant="flat"
                  className="mr-1"
                >
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

export default CategoriesTable;
