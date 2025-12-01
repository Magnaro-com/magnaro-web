import { Button } from "@heroui/button";
import React from "react";
import SplitText from "../SplitText";

export const Welcome: React.FC<{}> = () => {
  return (
    <section className="min-h-[calc(100dvh-64px)]">
      <div className="absolute top-[175px] left-[10%]">
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
    </section>
  );
};
