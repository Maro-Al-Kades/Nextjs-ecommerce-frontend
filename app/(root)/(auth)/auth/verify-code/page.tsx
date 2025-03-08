"use client";

import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { InputOtp } from "@heroui/input-otp";
import React from "react";

export default function VerifyCodeRoute() {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4 ">
      <Card className="w-full max-w-lg p-4">
        <CardHeader className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-bold">الكود</h1>
          <p className="text-sm text-default-700">
            ادخل الكود المرسل لك علي البريد الالكتروني...
          </p>
        </CardHeader>
        <CardBody>
          <Form
            className="flex w-full flex-col items-center gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const otp: any = formData.get("otp");

              setOtp(otp);
            }}
          >
            <InputOtp
              size="lg"
              isRequired
              aria-label="OTP input field"
              length={6}
              name="otp"
              placeholder="Enter code"
            />
            <Button size="sm" type="submit" color="primary" variant="bordered">
              تأكيد
            </Button>
            {otp && (
              <div className="text-small text-default-500">الكود: {otp}</div>
            )}
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
