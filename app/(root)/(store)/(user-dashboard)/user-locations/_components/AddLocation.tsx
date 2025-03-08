"use client";

import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

const AddLocation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        color="primary"
        endContent={
          <Icon icon="hugeicons:plus-sign-square" width="20" height="20" />
        }
        onPress={onOpen}
      >
        اضف عنوان جديد
      </Button>

      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                اضف عنوان شخصي جديد
              </ModalHeader>
              <ModalBody>
                <Input
                  label="العنوان"
                  placeholder="تسمية العنوان مثلا: (المنزل - العمل)"
                  variant="faded"
                  color="primary"
                />
                <Input
                  label="العنوان بالتفصيل"
                  placeholder="العنوان بالتفصيل"
                  variant="faded"
                  color="primary"
                />
                <Input
                  label="رقم الهاتف"
                  placeholder="اكتب رقم الهاتف هنا..."
                  type="number"
                  variant="faded"
                  color="primary"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  الغاء
                </Button>
                <Button color="primary" onPress={onClose}>
                  اضافة العنوان
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddLocation;
