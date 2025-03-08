"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export default function ResetPasswordRoute() {
  const [password, setPassword] = React.useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { password });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4 ">
      <Card className="w-full max-w-lg p-4">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">استعادة كلمةالسر</h1>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <Input
              color="primary"
              label="اكتب كلمة السر الجديدة"
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="hugeicons:square-lock-add-01"
                  width={20}
                />
              }
              type="password"
              value={password}
              variant="bordered"
              onValueChange={setPassword}
            />
            <Input
              color="primary"
              label="تأكيد كلمة السر"
              startContent={
                <Icon
                  className="text-default-400 pointer-events-none flex-shrink-0"
                  icon="hugeicons:square-lock-add-01"
                  width={20}
                />
              }
              type="password"
              value={password}
              variant="bordered"
              onValueChange={setPassword}
            />

            <Button className="w-full" color="primary" type="submit">
              تغيير كلمة المرور
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
