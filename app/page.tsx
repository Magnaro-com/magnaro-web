"use client";
import LogoLoop from "@/components/LogoLoop";

import { AccentBar } from "@/components/AccentBar";
import { About } from "@/components/landing-page/About";
import { Projects } from "@/components/landing-page/Projects";
import { Team } from "@/components/landing-page/Team";
import { Welcome } from "@/components/landing-page/Welcome";
import { Divider } from "@heroui/divider";
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
      <Welcome />
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
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Team />
    </>
  );
}
