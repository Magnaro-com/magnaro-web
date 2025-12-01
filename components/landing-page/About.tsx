import { Image } from "@heroui/image";
import React from "react";
import { AccentBar } from "../AccentBar";
import { AccentDot } from "../AccentDot";

export const About: React.FC<{}> = () => {
  return (
    <section className="px-[10%]" id="about">
      <div className="pt-20 pb-20 flex flex-col justify-center-safe items-center gap-4">
        <AccentBar />
        <span className="text-gray-900 text-4xl">Way of building</span>
        <span className="text-gray-900 font-bold text-4xl">Great Software</span>
      </div>
      <div className="gap-40 flex flex-col">
        <div className="flex gap-20 justify-center">
          <div className="flex-1">
            <div className="text-gray-900 font-semibold text-3xl pb-8">
              Build the right team to scale
            </div>
            <div className="text-gray-800 text-large pb-3">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </div>
            <div className="text-gray-800 text-large">
              Our delivery model helps you cut costs and deliver within budget.
            </div>
          </div>
          <div className="flex-1">
            <Image isZoomed src="/landing2.jpg" />
            <AccentDot />
          </div>
        </div>
        <div className="flex gap-20 justify-center">
          <div className="flex-1">
            <Image isZoomed src="/landing3.jpg" />
            <AccentDot />
          </div>
          <div className="flex-1">
            <div className="text-gray-900 font-semibold text-3xl pb-8">
              Build the right team to scale
            </div>
            <div className="text-gray-800 text-large pb-3">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </div>
            <div className="text-gray-800 text-large">
              Our delivery model helps you cut costs and deliver within budget.
            </div>
          </div>
        </div>
        <div className="flex gap-20 justify-center pb-20">
          <div className="flex-1">
            <div className="text-gray-900 font-semibold text-3xl pb-8">
              Build the right team to scale
            </div>
            <div className="text-gray-800 text-large pb-3">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers
            </div>
            <div className="text-gray-800 text-large">
              Our delivery model helps you cut costs and deliver within budget.
            </div>
          </div>
          <div className="flex-1">
            <Image isZoomed src="/landing4.jpg" />
            <AccentDot />
          </div>
        </div>
      </div>
    </section>
  );
};
