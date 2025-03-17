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
import { Icon } from "@iconify/react";
import React from "react";
import ImageUpload from "../../../_components/ImageUpload";

const AddBrandModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        color="primary"
        endContent={<Icon icon="hugeicons:brandfetch" width="20" height="20" />}
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
            <>
              <ModalHeader className="flex flex-col gap-1">
                اضافة ماركة جديدة
              </ModalHeader>
              <ModalBody>
                <ImageUpload />
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
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  الغاء
                </Button>
                <Button color="primary" onPress={onClose}>
                  حفظ
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddBrandModal;
