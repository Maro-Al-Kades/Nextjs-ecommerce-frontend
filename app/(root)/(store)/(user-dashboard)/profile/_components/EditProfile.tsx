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
const EditProfile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button variant="solid" color="primary" onPress={onOpen}>
        تعديل البيانات الشخصية
      </Button>

      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                تعديل بيانات الشخصية
              </ModalHeader>
              <ModalBody>
                <Input
                  label="الاسم"
                  placeholder="اكتب اسمك هنا..."
                  variant="bordered"
                />
                <Input
                  label="البريد الالكتروني"
                  placeholder="اكتب بريدك الالكتروني هنا..."
                  variant="bordered"
                />
                <Input
                  label="رقم الهاتف"
                  placeholder="اكتب رقم الهاتف هنا..."
                  type="number"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  الغاء
                </Button>
                <Button color="primary" onPress={onClose}>
                  تحديث البيانات
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditProfile;
