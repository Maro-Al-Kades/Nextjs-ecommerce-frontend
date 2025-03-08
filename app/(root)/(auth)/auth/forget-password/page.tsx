"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function ForgetPasswordRoute() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4 ">
      <Card className="w-full max-w-lg p-4">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">استعادة كلمةالسر</h1>
          <p className="text-sm text-default-500">
            ادخل البريد الالكتروني الخاص بك هنا...
          </p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              color="primary"
              label="البريد الالكتروني"
              placeholder="اكتب بريدك الالكرتوني الشخصي"
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

            <Button className="w-full" color="primary" type="submit">
              تأكيد
            </Button>

            <p className="text-center text-sm">
              ليس لديك حساب ؟{" "}
              <Link className="text-primary" href="/auth/register">
                تسجيل حساب جديد
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
