"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
const ChangePassword = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button color="primary" variant="bordered" onPress={onOpen}>
        تغيير كلمة المرور
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
                  label="كلمة السر القديمة"
                  placeholder="اكتب كلمة السر القديمة هنا..."
                  variant="bordered"
                  type="password"
                />
                <Input
                  label="كلمة السر الجديدة"
                  placeholder="اكتب كلمة السر الجديدة هنا..."
                  variant="bordered"
                  type="password"
                />
                <Input
                  label="تأكيد كلمة السر الجديدة"
                  placeholder="اكتب تأكيد كلمة السر الجديدة هنا..."
                  variant="bordered"
                  type="password"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  الغاء
                </Button>
                <Button color="primary" onPress={onClose}>
                  تغيير كلمة السر
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChangePassword;
