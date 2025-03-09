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
import { Product } from "@/types";
import { Link } from "@heroui/link";

const ProductsTable = ({
  products,
  productsCount,
}: {
  products: Product[];
  productsCount: { count: number };
}) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;

  const pages = Math.ceil(productsCount.count / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return products.slice(start, end);
  }, [page, products]);

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
          <TableColumn className="text-primary text-center" key="image">
            الصورة
          </TableColumn>
          <TableColumn className="text-primary text-center" key="title">
            اسم المنتج
          </TableColumn>
          <TableColumn className="text-primary text-center" key="price">
            السعر
          </TableColumn>
          <TableColumn className="text-primary " key="quantity">
            الكمية
          </TableColumn>
          <TableColumn className="text-primary " key="category">
            التصنيفات
          </TableColumn>
          <TableColumn className="text-primary " key="brand">
            الماركة
          </TableColumn>
          <TableColumn className="text-primary " key="colors">
            الالوان
          </TableColumn>
          <TableColumn className="text-primary " key="ratingsQuantity">
            التقيمات
          </TableColumn>
          <TableColumn className="text-primary " key="updatedAt">
            اخر تحديث
          </TableColumn>
          <TableColumn className="text-primary text-center" key="actions">
            تعديلات
          </TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {items.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <Image src={`${product.imageCover}`} width={70} height={70} />
              </TableCell>
              <TableCell className="text-md text-primary">
                {product.title}
              </TableCell>
              <TableCell className="text-md font-semibold">
                {product.priceAfterDiscount ? (
                  <span>{product.priceAfterDiscount} ج.م</span>
                ) : (
                  <span>{product.price} ج.م</span>
                )}
              </TableCell>
              <TableCell className="text-md">{product.quantity}</TableCell>
              <TableCell className="text-md">
                <Link href="/admin/manage-categories">
                  {product?.category?.title}
                </Link>
              </TableCell>
              <TableCell className="text-md">{product?.brand?.title}</TableCell>
              <TableCell className="text-md">
                {product?.colors?.length}
              </TableCell>
              <TableCell className="text-md">
                {product?.ratingsQuantity}
              </TableCell>
              <TableCell className="text-md">
                {new Date(product.updatedAt).toLocaleDateString("ar-EG")}
              </TableCell>
              <TableCell className="">
                <Button
                  isIconOnly
                  className="mr-1"
                  color="primary"
                  variant="flat"
                  as={Link}
                  href={`/product/${product._id}`}
                >
                  <Icon icon="hugeicons:eye" width="20" height="20" />
                </Button>

                <Button
                  isIconOnly
                  className="mr-1"
                  color="warning"
                  variant="flat"
                >
                  <Icon
                    icon="hugeicons:pencil-edit-02"
                    width="20"
                    height="20"
                  />
                </Button>
                <Button
                  isIconOnly
                  className="mr-1"
                  color="danger"
                  variant="flat"
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

export default ProductsTable;
