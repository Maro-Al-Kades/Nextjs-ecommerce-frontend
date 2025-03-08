"use client";

import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { ImageUpload } from "../../../_components/ImageUpload";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { Select, SelectItem } from "@heroui/select";
import { Link } from "@heroui/link";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const AddProduct = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedColor, setSelectedColor] = useState("#000000"); // لون افتراضي
  const [showColorPicker, setShowColorPicker] = useState(false); // إظهار أو إخفاء الـ Picker

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile);
    console.log("File changed:", newFile);
  };

  return (
    <section className="flex flex-col gap-6 items-start justify-start w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h2 className="text-2xl font-semibold">إضافة منتج جديد</h2>

        <Button
          isIconOnly
          color="primary"
          as={Link}
          href="/admin/manage-products"
        >
          <Icon icon="hugeicons:arrow-turn-backward" width="20" height="20" />
        </Button>
      </div>

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="w-full">
          <ImageUpload
            onChange={handleFileChange}
            maxSizeMB={5}
            acceptedFileTypes={[
              "image/jpeg",
              "image/png",
              "image/gif",
              "image/webp",
            ]}
          />

          {file && (
            <div className="text-center mt-4">
              <p>الملف المختار: {file.name}</p>
              <p>الحجم: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              <p>النوع: {file.type}</p>
            </div>
          )}
        </div>

        <div className="flex flex-row w-full items-center gap-2">
          <Input label="اسم المنتج" type="text" />
          <Input label="الكمية المتاحة" type="number" />
        </div>
        <Textarea label="وصف المنتج" type="text" />
        <div className="flex flex-row w-full items-center gap-2">
          <Input label="السعر" type="number" />
          <Input label="السعر بعد الخصم" type="number" />
        </div>

        <div className="flex flex-row w-full items-center gap-2">
          <Select className="w-full" label="اختر تصنيف">
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Select className="w-full" label="اختر تصنيف فرعي">
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>

        <Select className="w-full" label="اختر ماركة">
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>

        {/* Color Picker */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-medium text-sm">اختر اللون</label>
          <div className="flex items-center gap-2">
            {/* زر فتح color picker */}
            <button
              className="border p-2 rounded-md"
              onClick={() => setShowColorPicker(!showColorPicker)}
              style={{ backgroundColor: selectedColor }}
            >
              <Icon icon="mdi:palette" width="24" height="24" color="#fff" />
            </button>

            {/* عرض كود اللون المختار */}
            <span className="text-sm font-medium">{selectedColor}</span>
          </div>

          {/* color picker */}
          {showColorPicker && (
            <div className="absolute z-10">
              <SketchPicker
                color={selectedColor}
                onChange={(color) => setSelectedColor(color.hex)}
              />
            </div>
          )}
        </div>

        <Button
          fullWidth
          color="primary"
          variant="solid"
          endContent={
            <Icon icon="hugeicons:store-add-02" width="20" height="20" />
          }
        >
          اضافة المتنج الي المتجر
        </Button>
      </div>
    </section>
  );
};

export default AddProduct;
