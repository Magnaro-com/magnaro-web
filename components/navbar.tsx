"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string>();
  const navData = [
    {
      name: "Our projects",
      href: "#projects",
    },
    {
      name: "About us",
      href: "#about",
    },
    {
      name: "People",
      href: "#team",
    },
  ];

  return (
    <HeroUINavbar
      classNames={{
        wrapper: "max-w-screen shadow-[0_4px_40px_0_rgba(0,0,0,0.1)]",
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Image width={54} height={24} src="/logo.png" />
          <p className="font-bold text-inherit pl-[9px]">Magnaro</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-18" justify="center">
        {navData.map((item, index) => {
          return (
            <NavbarItem key={index} isActive={currentSection === item.href}>
              <Link
                href={item.href}
                aria-current="page"
                onNavigate={(e) => {
                  setCurrentSection(item.href);
                }}
              >
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
        <NavbarItem className="pl-[50px]">
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
