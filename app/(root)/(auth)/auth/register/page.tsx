"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4 ">
      <Card className="w-full max-w-lg p-4">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">تسجيل حساب جديد</h1>
          <p className="text-sm text-default-500">ادخل بياناتك هنا...</p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              color="primary"
              label="البريد الالكتروني"
              placeholder="اكتب ايميلك الشخصي"
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="lucide:mail"
                  width={20}
                />
              }
              type="email"
              value={email}
              variant="bordered"
              onValueChange={setEmail}
            />

            <Input
              color="primary"
              label="الاسم"
              placeholder="اكتب الاسم هنا..."
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="hugeicons:user-status"
                  width={20}
                />
              }
              type="email"
              value={email}
              variant="bordered"
              onValueChange={setEmail}
            />

            <Input
              color="primary"
              label="رقم الهاتف"
              placeholder="اكتب الرقم هنا..."
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="majesticons:phone"
                  width={20}
                />
              }
              type="number"
              value={email}
              variant="bordered"
              onValueChange={setEmail}
            />

            <Input
              color="primary"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <Icon
                      className="text-default-400"
                      icon="lucide:eye-off"
                      width={20}
                    />
                  ) : (
                    <Icon
                      className="text-default-400"
                      icon="lucide:eye"
                      width={20}
                    />
                  )}
                </button>
              }
              label="كلمة السر"
              placeholder="اكتب كلمة السر الخاصة بك"
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="lucide:lock"
                  width={20}
                />
              }
              type={isVisible ? "text" : "password"}
              value={password}
              variant="bordered"
              onValueChange={setPassword}
            />
            <Input
              color="primary"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <Icon
                      className="text-default-400"
                      icon="lucide:eye-off"
                      width={20}
                    />
                  ) : (
                    <Icon
                      className="text-default-400"
                      icon="lucide:eye"
                      width={20}
                    />
                  )}
                </button>
              }
              label="تأكيد كلمة السر"
              placeholder="اكتب كلمة السر الخاصة بك"
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="lucide:lock"
                  width={20}
                />
              }
              type={isVisible ? "text" : "password"}
              value={password}
              variant="bordered"
              onValueChange={setPassword}
            />
            <div className="flex items-center justify-between">
              <Checkbox defaultSelected size="sm">
                تذكرني
              </Checkbox>
            </div>
            <Button className="w-full" color="primary" type="submit">
              تسجيل حساب جديد
            </Button>

            <div className="flex items-center gap-4">
              <Divider className="flex-1" />
              <span className="text-default-500 text-sm">أو</span>
              <Divider className="flex-1" />
            </div>

            <div className="flex flex-col gap-2">
              <Button
                className="w-full"
                endContent={<Icon icon="flat-color-icons:google" width={24} />}
                variant="bordered"
              >
                تسجيل بواسطة جوجل
              </Button>
              <Button
                className="w-full"
                endContent={<Icon icon="lucide:facebook" width={24} />}
                variant="bordered"
              >
                تسجيل بواسطة فيسبوك
              </Button>
            </div>

            <p className="text-center text-sm">
              لديك حساب بالفعل ؟{" "}
              <Link className="text-primary" href="/auth/login">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
