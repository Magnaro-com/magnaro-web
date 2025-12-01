import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
import React from "react";
import { AccentBar } from "../AccentBar";
import PixelCard from "../PixelCard";

export const Team: React.FC<{}> = () => {
  const teamData = [
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      src: "/team1.png",
      name: "Maja Neska",
      position: "Cool dev",
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
  ];

  return (
    <section className="p-[10%]" id="team">
      <div className="pb-20 flex flex-col justify-center-safe items-center gap-4">
        <AccentBar />
        <span className="text-gray-900 text-6xl font-semibold">Our team</span>
        <span className="text-content1 text-xl">
          We believe in collaboration, clear communication, and delivering
          results. Get to know the people who make it all happen.
        </span>
      </div>
      <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
        {teamData.map((obj, index) => {
          return (
            <PixelCard variant="blue" key={index}>
              <div className="flex flex-col absolute h-full ">
                <div className="grow">
                  <Image
                    src="/team1.png"
                    className="place-self-center object-cover min-w-full rounded-b-none"
                    //height={230}
                  />
                  <Divider />

                  <div className="p-4 flex flex-col gap-2">
                    <div className="text-xl font-semibold">{obj.name}</div>
                    <div className="text-[#3E3E59] text-medium">
                      {obj.position}
                    </div>
                    <div className="text-[#5F6980] text-medium">
                      {obj.description}
                    </div>
                  </div>
                </div>

                <div className="place-self-end p-4">
                  <Button
                    isIconOnly
                    variant="light"
                    aria-label="LinkedIn"
                    className="text-2xl"
                  >
                    <Icon icon="cib:linkedin-in" />
                  </Button>
                </div>
              </div>
            </PixelCard>
          );
        })}
      </div>
    </section>
  );
};
