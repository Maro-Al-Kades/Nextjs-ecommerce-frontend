"use client";

import { Button } from "@heroui/button";
import { Pagination } from "@heroui/pagination";
import React from "react";

export default function PaginationComp() {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-small text-default-900/50">
        الصفحة الحالية: {currentPage}
      </p>
      <Pagination
        color="primary"
        page={currentPage}
        total={10}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2">
        <Button
          color="primary"
          size="sm"
          variant="flat"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          السابق
        </Button>
        <Button
          color="primary"
          size="sm"
          variant="flat"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
        >
          التالي
        </Button>
      </div>
    </div>
  );
}
