import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

const ADMIN_LINKS = [
  {
    title: "ادارة المتجر",
    path: "/admin/manage-store",
    icon: <Icon icon="hugeicons:store-03" width="20" height="20" />,
  },
  {
    title: "ادارة الطلبات",
    path: "/admin/manage-orders",
    icon: <Icon icon="hugeicons:product-loading" width="20" height="20" />,
  },

  {
    title: "ادارة الاغلفة",
    path: "/admin/manage-covers",
    icon: <Icon icon="hugeicons:image-01" width="20" height="20" />,
  },
  {
    title: "ادارة التصنيفات",
    path: "/admin/manage-categories",
    icon: <Icon icon="hugeicons:folder-add" width="20" height="20" />,
  },
  {
    title: "ادارة التصنيفات الفرعية",
    path: "/admin/manage-subCategories",
    icon: <Icon icon="hugeicons:structure-folder" width="20" height="20" />,
  },
  {
    title: "ادارة الماركات",
    path: "/admin/manage-brands",
    icon: <Icon icon="hugeicons:brandfetch" width="20" height="20" />,
  },
  {
    title: "ادارة المنتجات",
    path: "/admin/manage-products",
    icon: <Icon icon="hugeicons:folder-management" width="20" height="20" />,
  },
  {
    title: "ادارة الكوبونات",
    path: "/admin/manage-copouns",
    icon: <Icon icon="hugeicons:sms-code" width="20" height="20" />,
  },
  {
    title: "ادارة الاعلانات",
    path: "/admin/manage-ads",
    icon: <Icon icon="hugeicons:select-02" width="20" height="20" />,
  },
  {
    title: "ادارة المستخدمين",
    path: "/admin/manage-users",
    icon: <Icon icon="hugeicons:user-switch" width="20" height="20" />,
  },
];
const LayoutSidebar = () => {
  return (
    <nav className="flex flex-col items-start justify-start gap-4 bg-primary/10 dark:bg-primary/20 p-4 h-full w-[250px] rounded-lg">
      <p className="text-lg w-full items-center flex justify-center py-2 font-bold">
        ادارة المتجر
      </p>
      {ADMIN_LINKS.map((link) => {
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
  );
};

export default LayoutSidebar;
