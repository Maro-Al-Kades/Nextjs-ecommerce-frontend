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
import { Brand } from "@/actions/brands.actions";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/button";

const BrandsTable = ({
  brands,
  brandsCount,
}: {
  brands: Brand[];
  brandsCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(brandsCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return brands.slice(start, end);
  }, [page, brands]);

  return (
    <div>
      <Table
        aria-label="جدول الماركات"
        className=" w-full"
        bottomContent={
          <div className="flex w-full justify-center mt-4">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
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
        <TableHeader className="w-full">
          <TableColumn key="image">الصورة</TableColumn>
          <TableColumn key="title">العنوان</TableColumn>
          <TableColumn key="updatedAt">تحديثات</TableColumn>
          <TableColumn key="actions">تعديلات</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((brand) => (
            <TableRow key={brand._id}>
              <TableCell>
                <Image src={brand.image} width={100} />
              </TableCell>
              <TableCell className="text-lg text-primary">
                {brand.title}
              </TableCell>
              <TableCell className="text-lg">
                {new Date(brand.updatedAt).toLocaleDateString("ar-EG")}
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

export default BrandsTable;
