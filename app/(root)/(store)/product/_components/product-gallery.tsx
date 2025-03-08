"use client";

import { Image } from "@heroui/image";
import React from "react";

interface ProductGalleryProps {
  imageCover: string;
  images: string[];
}

export function ProductGallery({ imageCover, images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(imageCover);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-xl overflow-hidden">
        <Image
          alt="Product main image"
          className="object-cover"
          src={selectedImage}
          width={550}
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 ">
        <div
          className={`cursor-pointer rounded-lg overflow-hidden w-20 h-20 ${
            selectedImage === imageCover ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => setSelectedImage(imageCover)}
        >
          <Image
            alt="Product thumbnail"
            className="w-full h-full object-cover"
            src={imageCover}
          />
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-lg overflow-hidden w-20 h-20 ${
              selectedImage === image ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
