"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

interface ImageUploadProps {
  onChange?: (file: File | null) => void;
  maxSizeMB?: number;
  acceptedFileTypes?: string[];
}

export function ImageUpload({
  onChange,
  maxSizeMB = 5,
  acceptedFileTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"],
}: ImageUploadProps) {
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    setError(null);

    if (!file) {
      setPreview(null);
      onChange?.(null);
      return;
    }

    // Validate file type
    if (!acceptedFileTypes.includes(file.type)) {
      setError(
        `File type not supported. Please upload: ${acceptedFileTypes.join(", ")}`
      );
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setError(`File size exceeds ${maxSizeMB}MB limit`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    onChange?.(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  const handleRemove = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange?.(null);
  };

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept={acceptedFileTypes.join(",")}
        onChange={handleInputChange}
        className="hidden"
      />

      {!preview ? (
        <Card
          className={`border-2 border-dashed transition-colors w-full ${
            isDragging
              ? "border-primary bg-primary-50 dark:bg-primary-900/20"
              : "border-default-200"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <CardBody className="flex flex-col items-center justify-center gap-4 py-8">
            <div className="rounded-full bg-primary-100 p-4">
              <Icon
                icon="lucide:upload-cloud"
                className="h-8 w-8 text-primary"
              />
            </div>
            <div className="text-center">
              <p className="text-default-700">
                <span className="font-semibold">اضغط لرفع الصور</span> او يمكنك
                سحب الصور هنا
              </p>
              <p className="text-small text-default-600">
                {acceptedFileTypes.map((type) => type.split("/")[1]).join(", ")}{" "}
                (max {maxSizeMB}MB)
              </p>
            </div>
            <Button
              color="primary"
              variant="flat"
              onPress={handleBrowseClick}
              endContent={
                <Icon icon="hugeicons:image-upload" width="20" height="20" />
              }
            >
              رفع الصور من علي الجهاز
            </Button>
            {error && <p className="text-small text-danger">{error}</p>}
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody className="p-0 relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                isIconOnly
                color="danger"
                variant="flat"
                radius="full"
                size="sm"
                onPress={handleRemove}
              >
                <Icon icon="lucide:trash-2" />
              </Button>
              <Button
                isIconOnly
                color="primary"
                variant="flat"
                radius="full"
                size="sm"
                onPress={handleBrowseClick}
              >
                <Icon icon="lucide:edit" />
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
