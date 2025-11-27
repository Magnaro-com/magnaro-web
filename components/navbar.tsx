"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const navData = [
    { name: "Technologies", href: "#" },
    {
      name: "Our projects",
      href: "#",
    },
    {
      name: "About us",
      href: "#",
    },
    {
      name: "Team",
      href: "#",
    },
    {
      name: "People",
      href: "#",
    },
  ];

  return (
    <HeroUINavbar
      classNames={{
        wrapper: "max-w-screen",
      }}
      isBordered
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">Magnaro</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-18" justify="center">
        {navData.map((item, index) => {
          return (
            <NavbarItem isActive>
              <Link href={item.href} aria-current="page">
                {item.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            aria-label="LinkedIn"
            className="text-2xl"
          >
            <Icon icon="cib:linkedin-in" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
            className="bg-gradient-to-l from-primary-900 to-primary-500 px-[25px] py-[14px] font-semibold"
            radius="sm"
          >
            Contact us
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
