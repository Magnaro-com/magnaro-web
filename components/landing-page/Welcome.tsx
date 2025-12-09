import { Button } from "@heroui/button";
import React from "react";
import Silk from "../Silk";
import SplitText from "../SplitText";

// min-h-[calc(60dvh-64px)]
export const Welcome: React.FC<{}> = () => {
  return (
    <section className="min-h-[750px]">
      <div className="absolute top-[175px] left-[10%] z-10">
        <SplitText
          textAlign="left"
          text={
            <span className="text-5xl leading-[60px]">
              Great <span className="text-secondary-500">software</span> is{" "}
              <br />
              <b>
                built by great <span className="text-secondary-500">team</span>
              </b>
            </span>
          }
        />
        <div className="text-content1 pt-7 text-xl">
          A short description of our company. This is mainly what we do and how
          we help our clients.
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
      <div className="absolute top-[50x] right-[0%] overflow-hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1081"
          height="631"
          viewBox="0 0 1081 631"
          fill="none"
        >
          <path
            d="M484.039 7.10129L0 540.259L387.122 463.215L717.718 631L1053.45 463.215L1444 540.259L949.813 0L713.375 221.154L484.039 7.10129Z"
            fill="#F6F6F8"
            fill-opacity="0.8"
          />
        </svg>
        <div className="absolute top-[9px] left-[326px] overflow-hidden">
          <div className="w-[766px] h-[555px] mask-[url(/logo.png)] mask-center mask-no-repeat mask-contain">
            <Silk
              speed={10}
              scale={0.7}
              color="#D4B36A"
              rotation={0}
              noiseIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
