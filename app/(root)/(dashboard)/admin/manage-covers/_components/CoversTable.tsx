"use client";

import React, { useState } from "react";
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
import { Chip } from "@heroui/chip";
import { deleteCover } from "@/actions/covers.actions";
import { addToast } from "@heroui/toast";

const CoversTable = ({
  covers,
  coversCount,
}: {
  covers: Cover[];
  coversCount: { count: number };
}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const [coversList, setCoversList] = useState<Cover[]>(covers);

  const pages = Math.ceil(coversCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return coversList.slice(start, end);
  }, [page, coversList]);

  const handleDeleteCover = async (coverId: string) => {
    setCoversList((prev) => prev.filter((cover) => cover._id !== coverId));

    const response = await deleteCover(coverId);

    if (response.success) {
      addToast({
        title: "تم الحذف بنجاح",
        color: "success",
        variant: "solid",
      });
    } else {
      addToast({ title: response.message, color: "danger", variant: "solid" });
      setCoversList((prev) => [
        ...prev,
        covers.find((c) => c._id === coverId)!,
      ]);
    }
  };

  return (
    <div>
      <Table
        aria-label="جدول الاغلفة"
        className="w-full"
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
          wrapper: "w-full",
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
              <TableCell>
                <Chip size="lg" variant="solid" color="default">
                  {new Date(cover.updatedAt).toLocaleDateString("en-EG")}
                </Chip>
              </TableCell>
              <TableCell className="flex gap-1 items-end">
                <Button
                  isIconOnly
                  color="danger"
                  variant="flat"
                  onPress={() => handleDeleteCover(cover._id)}
                >
                  <Icon icon="hugeicons:delete-03" width="20" height="20" />
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
