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
import ImageUpload from "../ImageUpload";

const AddCoverModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        color="primary"
        endContent={
          <Icon icon="hugeicons:add-circle-half-dot" width="20" height="20" />
        }
        onPress={onOpen}
      >
        اضافة غلاف جديد
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
                اضافة غلاف جديد
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
                  label="اسم الغلاف"
                  placeholder="اكتب اسم الغلاف هنا..."
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

export default AddCoverModal;
