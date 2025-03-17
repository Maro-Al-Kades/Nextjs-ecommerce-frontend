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
import { Ad } from "@/types";
import { Chip } from "@heroui/chip";

const AdsTable = ({
  ads,
  adsCount,
}: {
  ads: Ad[];
  adsCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(adsCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return ads.slice(start, end);
  }, [page, ads]);

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
        <TableHeader className="w-full text-primary">
          <TableColumn key="image" className="text-primary">
            الصورة
          </TableColumn>
          <TableColumn key="title" className="text-primary">
            العنوان
          </TableColumn>
          <TableColumn key="updatedAt" className="text-primary">
            اخر تحديث
          </TableColumn>
          <TableColumn key="actions" className="text-center text-primary">
            تعديلات
          </TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((Ad) => (
            <TableRow key={Ad._id}>
              <TableCell>
                <Image
                  src={`http://localhost:8080/ads/${Ad.image}`}
                  width={100}
                />
              </TableCell>
              <TableCell className="text-lg text-primary">{Ad.title}</TableCell>
              <TableCell>
                <Chip size="lg" variant="solid" color="default">
                  {new Date(Ad.updatedAt).toLocaleDateString("en-EG")}
                </Chip>
              </TableCell>
              <TableCell className="">
                <Button
                  className="mr-1"
                  isIconOnly
                  color="danger"
                  variant="flat"
                >
                  <Icon icon="hugeicons:delete-03" width="20" height="20" />
                </Button>
                <Button
                  className="mr-1"
                  isIconOnly
                  color="warning"
                  variant="flat"
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

export default AdsTable;
