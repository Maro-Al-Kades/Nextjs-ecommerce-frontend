"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useFormStatus } from "react-dom";
import { addToast } from "@heroui/toast";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { createBrand } from "@/actions/brands.actions";
import ImageUpload from "../ImageUpload";

const AddBrandModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [state, setState] = useState<any>(null);

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
  };

  useEffect(() => {
    if (state) {
      addToast({
        title: state.message,
        color: state.success ? "success" : "danger",
        variant: "solid",
      });
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    const response = await createBrand(null, formData);
    setState(response);
    if (response.success) {
      onOpenChange();
    }
  };

  return (
    <div>
      <Button
        color="primary"
        endContent={
          <Icon icon="hugeicons:add-circle-half-dot" width="20" height="20" />
        }
        onPress={onOpen}
      >
        اضافة ماركة جديدة
      </Button>

      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        size="3xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                اضافة ماركة جديدة
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <ImageUpload onChange={handleImageChange} />

                  <Input
                    endContent={
                      <Icon
                        icon="hugeicons:text-creation"
                        width="20"
                        height="20"
                      />
                    }
                    label="اسم الماركة"
                    placeholder="اكتب اسم الماركة هنا..."
                    variant="bordered"
                    color="primary"
                    name="title"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  الغاء
                </Button>
                <SubmitButton />
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      color="primary"
      type="submit"
      isLoading={pending}
      isDisabled={pending}
    >
      {pending ? "جاري الحفظ..." : "حفظ"}
    </Button>
  );
};

export default AddBrandModal;
