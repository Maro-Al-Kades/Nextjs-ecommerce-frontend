import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import Link from "next/link";
import React from "react";

const CartCard = () => {
  return (
    <div className="bg-content2 p-4 rounded-lg shadow-lg flex flex-row items-start justify-between">
      <div className="flex flex-row items-start gap-3">
        <Image src="https://heroui.com/images/album-cover.png" width={240} />

        <div className="flex items-start flex-col gap-5">
          <div>
            <h3 className="text-xl font-semibold ">مولد النص العربي</h3>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Chip
                as={Link}
                color="primary"
                href={`/categories`}
                size="lg"
                variant="flat"
              >
                الكترونيات
              </Chip>

              <Chip color="danger" size="lg" variant="flat">
                Dell
              </Chip>
              <Chip color="warning" size="lg" variant="flat">
                30 تقييم
              </Chip>
            </div>

            <div className="flex gap-2">
              <Chip color="secondary" size="lg" variant="flat">
                12 قطعة متوفرة
              </Chip>

              <Chip color="success" size="lg" variant="flat">
                تم البيع 12 مرة
              </Chip>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-primary">3400 ج.م</h3>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <span className="text-lg font-semibold">الكمية </span>
            <Input color="primary" type="number" variant="bordered" />
          </div>
        </div>
      </div>

      <Button isIconOnly color="danger" variant="flat">
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            color="currentColor"
            d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CartCard;
