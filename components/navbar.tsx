import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";
import Logo from "./Logo";

export const Navbar = () => {
  const user = true;
  const searchInput = (
    <Input
      fullWidth
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          حرف ن للبحث
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="البحث..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="2xl"
      position="sticky"
      className="border-b border-primary-100/60"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full max-w-2xl"
        justify="center"
      >
        <NavbarItem className="hidden lg:flex w-full">
          <div className="w-full">{searchInput}</div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {!user ? (
          <NavbarItem className="hidden md:flex gap-2">
            <Button
              as={Link}
              color="primary"
              href={`/auth/login`}
              variant="solid"
            >
              تسجيل الدخول
            </Button>
            <Button
              as={Link}
              color="primary"
              href={`/auth/register`}
              variant="bordered"
            >
              تسجيل جديد
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className="hidden md:flex gap-2">
              <Avatar
                isBordered
                as={Link}
                color="primary"
                href={`/profile`}
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </NavbarItem>
            <NavbarItem className="hidden md:flex gap-2">
              <Badge color="primary" content="5" placement="top-left">
                <Button
                  isIconOnly
                  as={Link}
                  color="primary"
                  href="/cart"
                  variant="flat"
                >
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
                      <path d="m8 16l8.72-.727c2.729-.227 3.341-.823 3.643-3.544L21 6M6 6h16" />
                      <circle cx="6" cy="20" r="2" />
                      <circle cx="17" cy="20" r="2" />
                      <path d="M8 20h7M2 2h.966c.945 0 1.768.625 1.997 1.515L7.94 15.076a1.96 1.96 0 0 1-.35 1.686L6.631 18" />
                    </g>
                  </svg>
                </Button>
              </Badge>
            </NavbarItem>
          </>
        )}
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
