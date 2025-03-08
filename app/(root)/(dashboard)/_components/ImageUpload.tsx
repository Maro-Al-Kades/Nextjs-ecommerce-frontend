"use client";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";

const ImageUpload = ({
  onChange,
}: {
  onChange?: (file: File | null) => void;
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setPreview(null);
      onChange?.(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);

    onChange?.(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleBrowseClick = () => {
    inputRef.current?.click(); // ✅ اجعل زرار رفع الصورة يفتح اختيار الملف
  };

  const handleRemove = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange?.(null);
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="hidden"
      />

      {!preview ? (
        <Card
          className="border-2 border-dashed transition-colors w-full cursor-pointer border-gray-300 hover:border-primary"
          onClick={handleBrowseClick} // ✅ السماح بفتح اختيار الملفات عند الضغط
        >
          <CardBody className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="rounded-full bg-primary/10 p-4">
              <Icon
                icon="lucide:upload-cloud"
                className="h-8 w-8 text-primary"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-700">
                <span className="font-semibold">اضغط لرفع الصور</span> أو اسحب
                الصورة هنا
              </p>
              <p className="text-sm text-gray-500">JPG, PNG, WEBP (Max 5MB)</p>
            </div>
            <Button variant="bordered" onClick={handleBrowseClick}>
              <Icon icon="hugeicons:image-upload" className="mr-2" />
              رفع صورة من الجهاز
            </Button>
          </CardBody>
        </Card>
      ) : (
        <Card className="relative mt-4">
          <CardBody className="p-0">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                variant="bordered"
                size="md"
                className="bg-white/80"
                onClick={handleRemove}
              >
                <Icon icon="lucide:trash-2" className="text-red-500" />
              </Button>
              <Button
                variant="bordered"
                size="md"
                className="bg-white/80"
                onClick={handleBrowseClick}
              >
                <Icon icon="lucide:edit" className="text-blue-500" />
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ImageUpload;
