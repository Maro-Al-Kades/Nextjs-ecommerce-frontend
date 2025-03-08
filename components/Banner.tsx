"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function Banner() {
  return (
    <div className="flex w-full items-center gap-x-3  border-divider bg-background/[0.15] px-6 py-1 backdrop-blur-xl sm:px-3.5 sm:before:flex-1 bg-primary">
      <p className="text-sm text-white">
        <Link className="text-sm text-white" href="#">
          هذا المتجر الالكتروني من تطوير مارو عصام في حالة طلب عمل مماثل الرجاء
          التواصل علي :
        </Link>
      </p>
      <Button as={Link} href="#" size="sm" variant="solid">
        تواصل معي
      </Button>
      <div className="flex flex-1 justify-end">
        <Button isIconOnly className="-m-1" size="sm" variant="light">
          <span className="sr-only">Close Banner</span>
          <Icon className="text-default-500" icon="lucide:x" width={20} />
        </Button>
      </div>
    </div>
  );
}
