import { Image } from "@heroui/image";
import React from "react";
import { AccentBar } from "../AccentBar";
import SpotlightCard from "../SpotlightCard";

export const Projects: React.FC<{}> = () => {
  return (
    <section className="bg-[#EDEEF1] pt-20" id="projects">
      <div className="pt-20 pb-20 flex flex-col justify-center-safe items-center gap-4">
        <AccentBar />
        <span className="text-gray-900 text-4xl">Our recent</span>
        <span className="text-gray-900 font-bold text-4xl">Case studies</span>
      </div>
      <div className="px-[10%] gap-8 flex flex-col pb-8">
        <SpotlightCard
          className="p-0"
          spotlightColor="rgba(118, 118, 118, 0.2)"
          backgroundColor="secondary-50"
        >
          <div className="flex justify-center">
            <div className="flex-1">
              <Image width="100%" isZoomed src="/project-1.png" />
            </div>
            <div className="flex-1 p-12">
              <div className="text-gray800 text-3xl font-semibold">
                Websites
              </div>
              <div className="pt-8">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="p-0"
          spotlightColor="rgba(118, 118, 118, 0.2)"
          backgroundColor="primary-50"
        >
          <div className="flex justify-center">
            <div className="flex-1">
              <Image width="100%" isZoomed src="/project-1.png" />
            </div>
            <div className="flex-1 p-12">
              <div className="text-gray800 text-3xl font-semibold">
                Websites
              </div>
              <div className="pt-8">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </div>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="p-0"
          spotlightColor="rgba(118, 118, 118, 0.2)"
          backgroundColor="secondary-50"
        >
          <div className="flex justify-center">
            <div className="flex-1">
              <Image width="100%" isZoomed src="/project-1.png" />
            </div>
            <div className="flex-1 p-12">
              <div className="text-gray800 text-3xl font-semibold">
                Websites
              </div>
              <div className="pt-8">
                Born out of a vision, a single-minded objective that puts
                service before anything else, Swift Clearance and Forwarding
                Corp. surging forth to deliver the best services in the shipping
                and logistics scenario. Its meteoric rise stems out of a solid
                foundation. The management boasts of over 20 years of rich and
                varied experience in the shipping and freight forwarding
                industry.
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
