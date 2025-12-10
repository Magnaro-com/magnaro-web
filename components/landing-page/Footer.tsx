import { Divider, Image } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { navData } from "../navbar";

export const Footer: React.FC<{}> = () => {
  return (
    <section>
      <div className="px-25 py-43 flex flex-row gap-22">
        <div className="flex flex-col gap-4 max-w-[370px]">
          <div className="flex flex-row">
            <Image width={54} height={24} src="/logo.png" />
            <span className="font-bold text-sm pl-[9px]">Magnaro</span>
          </div>

          <div className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[370px]">
          <span>Links</span>
          {navData.map((item) => {
            return (
              <Link key={item.name} href={item.href} className="text-gray-400">
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 max-w-[370px]">
          <span>Contact us</span>
          <div className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="text-gray-400">+908 89097 890</div>
        </div>
      </div>
      <Divider />
      <div className="p-12 text-center text-gray-700">
        © 2023 Copyright by Agency Solutions. All rights reserved.
      </div>
    </section>
  );
};
