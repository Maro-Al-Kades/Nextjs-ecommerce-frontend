import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import Link from "next/link";

import CartCard from "./_components/CartCard";

const Cart = () => {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold">عربة التسوق</h2>

      <div className="flex flex-row items-start gap-6">
        <div className="flex-1 flex gap-5 flex-col">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <Card className="w-[300px] static">
          <CardHeader className="flex gap-2">
            <Input fullWidth placeholder="كود الخصم" />
            <Button color="success" variant="flat">
              تطبيق
            </Button>
          </CardHeader>

          <CardBody>
            <div className="bg-content2 text-primary border p-3 text-xl font-bold items-center justify-center text-center rounded-lg border-primary/40">
              3400 ج.م
            </div>
          </CardBody>

          <CardFooter className="flex flex-col gap-2">
            <Button
              fullWidth
              as={Link}
              color="primary"
              endContent={
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    color="currentColor"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M14 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1 2.843A7.111 7.111 0 0 1 3.157 11" />
                    <path d="M16 7.873c-.125-.828-.891-1.607-1.926-1.307c-1.083.314-1.575 1.907-1.083 2.902c.509 1.032.753 2.032.088 3.447c-.129.275-.194.413-.158.5c.036.085.15.085.378.085H16m-4-3.333h3.5" />
                  </g>
                </svg>
              }
              href="/payment"
            >
              اتمام الشراء
            </Button>

            <Button
              fullWidth
              color="danger"
              endContent={
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    color="currentColor"
                    d="m19.5 5.5l-.402 6.506M4.5 5.5l.605 10.025c.154 2.567.232 3.85.874 4.774c.317.456.726.842 1.2 1.131c.671.41 1.502.533 2.821.57m10-7l-7 7m7 0l-7-7M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              variant="flat"
            >
              حذف المنتجات من العربة
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Cart;
