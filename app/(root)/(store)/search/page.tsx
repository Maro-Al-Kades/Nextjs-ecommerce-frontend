"use client";

import { Radio, RadioGroup } from "@heroui/radio";
import React from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";

import ProductList from "@/components/Products/ProductList";

const SearchPage = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  return (
    <div className="mt-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold">
          هناك <span className="text-primary">23</span> نتيجة بحث
        </h2>

        <Dropdown>
          <DropdownTrigger>
            <Button className="capitalize" color="primary" variant="bordered">
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Single selection example"
            color="primary"
            selectedKeys={selectedKeys}
            selectionMode="single"
            variant="flat"
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="بدون ترتيب">بدون ترتيب</DropdownItem>
            <DropdownItem key="الاكثر مبيعا">الاكثر مبيعا</DropdownItem>
            <DropdownItem key="الاعلي تقييما">الاعلي تقييما</DropdownItem>
            <DropdownItem key="السعر من الاقل للاعلي">
              السعر من الاقل للاعلي
            </DropdownItem>
            <DropdownItem key="السعر من الاعلي الي الاقل">
              السعر من الاعلي الي الاقل
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="flex flex-row items-start gap-10 mt-6">
        <div className="flex flex-col gap-3">
          <div className="mt-4">
            <RadioGroup label="الفئة">
              <Radio value="buenos-aires">الكل</Radio>
              <Radio value="sydney">اطفال</Radio>
              <Radio value="san-francisco">توشيبا</Radio>
              <Radio value="london">كمبيوتر</Radio>
              <Radio value="tokyo">اجهزة منزلية</Radio>
            </RadioGroup>
          </div>
          <div className="mt-4">
            <RadioGroup label="الماركة">
              <Radio value="buenos-aires">الكل</Radio>
              <Radio value="sydney">اطفال</Radio>
              <Radio value="san-francisco">توشيبا</Radio>
              <Radio value="london">كمبيوتر</Radio>
              <Radio value="tokyo">اجهزة منزلية</Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex-1">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
