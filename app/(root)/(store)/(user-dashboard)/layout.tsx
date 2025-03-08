import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";
import { redirect } from "next/navigation";

const PROFILE_LINKS = [
  {
    title: "الملف الشخصي",
    path: "/profile",
    icon: <Icon icon="hugeicons:user-circle" width="22" height="22" />,
  },
  {
    title: "ادراة الطلبات",
    path: "/manage-orders",
    icon: <Icon icon="hugeicons:product-loading" width="22" height="22" />,
  },
  {
    title: "المنتجات المفضلة",
    path: "/favourite-products",
    icon: (
      <Icon
        icon="hugeicons:shopping-basket-favorite-01"
        width="22"
        height="22"
      />
    ),
  },
  {
    title: "العناوين الشخصية",
    path: "/user-locations",
    icon: <Icon icon="hugeicons:maps-location-01" width="22" height="22" />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    redirect("/");
  }
  return (
    <section className="flex flex-row items-start justify-start gap-8 h-full w-full ">
      <nav className="flex flex-col items-start justify-start gap-4 bg-content1 p-4 h-full w-[250px] rounded-lg">
        {PROFILE_LINKS.map((link) => {
          return (
            <Button
              fullWidth
              as={Link}
              className="flex justify-start gap-3 items-center"
              href={link.path}
              key={link.path}
              variant="solid"
              color="primary"
            >
              {link.icon}
              {link.title}
            </Button>
          );
        })}
      </nav>
      <div className="flex-1">{children}</div>
    </section>
  );
}
