"use client";
import LogoLoop from "@/components/LogoLoop";
import { Button } from "@heroui/button";
import SplitText from "../components/SplitText";

import { AccentBar } from "@/components/AccentBar";
import { AccentDot } from "@/components/AccentDot";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

const techLogos = [
  {
    node: <Icon icon="logos:react" />,
    title: "React",
    //href: "https://react.dev",
  },
  {
    node: <Icon icon="logos:docker-icon" />,
    title: "Docker",
    //href: "https://nextjs.org",
  },
  {
    node: <Icon icon="logos:wordpress-icon" />,
    title: "WordPress",
    //href: "https://www.typescriptlang.org",
  },
  {
    node: <Icon icon="logos:unity" />,
    title: "Unity",
    //href: "https://tailwindcss.com",
  },
  {
    node: <Icon icon="logos:expo-icon" />,
    title: "Expo",
    //href: "https://tailwindcss.com",
  },
  {
    node: <Icon icon="logos:google-cloud" />,
    title: "Google Cloud",
    //href: "https://tailwindcss.com",
  },
  {
    node: <Icon icon="logos:salesforce" />,
    title: "Salesforce",
    //href: "https://tailwindcss.com",
  },
];

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100dvh-64px)]">
        <div className="absolute top-[175px] left-[10%]">
          <SplitText
            textAlign="left"
            text={
              <span className="text-5xl leading-[60px]">
                Great <span className="text-secondary-500">software</span> is{" "}
                <br />
                <b>
                  built by great{" "}
                  <span className="text-secondary-500">team</span>
                </b>
              </span>
            }
          />
          <div className="text-content1 pt-7 text-xl">
            A short description of our company. This is mainly what we do and
            how we help our clients.
          </div>
          <div className="pt-19">
            <Button
              color="secondary"
              className="px-[30px] py-[19px] font-semibold h-fit w-fit"
              radius="sm"
              size="lg"
            >
              Ask for an offer
            </Button>
          </div>
        </div>
      </section>
      <Divider />
      <section className="bg-[#EDEEF1] pt-20">
        <AccentBar />
        <div className="text-center text-gray-900 font-bold pb-12 text-4xl leading-20">
          Technologies we use
        </div>
        <div className="pb-20">
          <LogoLoop
            scaleOnHover
            logos={techLogos}
            logoHeight={200}
            speed={80}
            fadeOut
            fadeOutColor="#EDEEF1"
            gap={96}
          />
        </div>
      </section>
      <Divider />
      <section className="px-[10%]">
        <div className="pt-20 pb-20 flex flex-col justify-center-safe items-center gap-4">
          <AccentBar />
          <span className="text-gray-900 text-4xl">Way of building</span>
          <span className="text-gray-900 font-bold text-4xl">
            Great Software
          </span>
        </div>
        <div className="gap-20 flex flex-col">
          <div className="flex gap-30 justify-center">
            <div className="flex-1">
              <div className="text-gray-900 font-semibold text-3xl pb-8">
                Build the right team to scale
              </div>
              <div className="text-gray-800 text-large pb-3">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </div>
              <div className="text-gray-800 text-large">
                Our delivery model helps you cut costs and deliver within
                budget.
              </div>
            </div>
            <div className="flex-1">
              <Image isZoomed src="/landing2.jpg" />
              <AccentDot />
            </div>
          </div>
          <div className="flex gap-30 justify-center">
            <div className="flex-1">
              <Image isZoomed src="/landing3.jpg" />
              <AccentDot />
            </div>
            <div className="flex-1">
              <div className="text-gray-900 font-semibold text-3xl pb-8">
                Build the right team to scale
              </div>
              <div className="text-gray-800 text-large pb-3">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </div>
              <div className="text-gray-800 text-large">
                Our delivery model helps you cut costs and deliver within
                budget.
              </div>
            </div>
          </div>
          <div className="flex gap-30 justify-center pb-20">
            <div className="flex-1">
              <div className="text-gray-900 font-semibold text-3xl pb-8">
                Build the right team to scale
              </div>
              <div className="text-gray-800 text-large pb-3">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers
              </div>
              <div className="text-gray-800 text-large">
                Our delivery model helps you cut costs and deliver within
                budget.
              </div>
            </div>
            <div className="flex-1">
              <Image isZoomed src="/landing4.jpg" />
              <AccentDot />
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="bg-[#EDEEF1] pt-20">
        <div className="pt-20 pb-20 flex flex-col justify-center-safe items-center gap-4">
          <AccentBar />
          <span className="text-gray-900 text-4xl">Our recent</span>
          <span className="text-gray-900 font-bold text-4xl">Case studies</span>
        </div>
      </section>
    </>
  );
}
