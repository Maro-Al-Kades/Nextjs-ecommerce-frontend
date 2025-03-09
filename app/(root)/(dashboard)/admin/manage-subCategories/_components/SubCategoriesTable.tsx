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
import { subCategory } from "@/types";
import { Link } from "@heroui/link";

const SubCategoriesTable = ({
  subCategories,
  subCategoriesCount,
}: {
  subCategories: subCategory[];
  subCategoriesCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(subCategoriesCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return subCategories.slice(start, end);
  }, [page, subCategories]);

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
          <TableColumn key="title">العنوان</TableColumn>
          <TableColumn key="image">التصنيف الرئيسي</TableColumn>
          <TableColumn key="updatedAt">تحديثات</TableColumn>
          <TableColumn key="actions">تعديلات</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((subCategory) => (
            <TableRow key={subCategory._id}>
              <TableCell className="text-lg text-primary">
                {subCategory.title}
              </TableCell>
              <TableCell>
                <Link href={`/admin/manage-categories`}>
                  {subCategory?.category?.title}
                </Link>
              </TableCell>
              <TableCell className="text-lg">
                {new Date(subCategory.updatedAt).toLocaleDateString("ar-EG")}
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

export default SubCategoriesTable;
