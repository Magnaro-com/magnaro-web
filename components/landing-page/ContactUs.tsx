import { Button, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { FormikInput } from "../forms/FormikInput";

export const ContactUs: React.FC<{}> = () => {
  return (
    <section className="px-[10vh] py-44 bg-[#F8F8F8]">
      <div className="flex grow">
        <div className="flex-1 flex flex-col gap-3">
          <div className="font-medium text-6xl">Contact us</div>
          <div className="text-content1 text-medium max-w-[510px]">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </div>
          <div className="flex pt-20 flex-col gap-7">
            <div className="flex gap-11">
              <Icon icon="uiw:mail-o" className="text-[#FD7E1E] text-2xl" />
              <span className="text-xl">mail@magnaro.com</span>
            </div>
            <div className="flex gap-11">
              <Icon icon="uiw:home" className="text-[#FD7E1E] text-2xl" />
              <span className="text-xl">
                Zamojka 14
                <br />
                05-092 Gdańsk
              </span>
            </div>
            <div className="flex gap-11">
              <Icon icon="uiw:mobile" className="text-[#FD7E1E] text-2xl" />
              <span className="text-xl">+48 561 949 485</span>
            </div>
          </div>
        </div>

        <Formik
          onSubmit={(e) => {
            // sendEmail
          }}
          initialValues={{
            name: "",
            email: "",
            company: "",
            message: "",
          }}
          validationSchema={yup.object({
            name: yup
              .string()
              .required("This field is required")
              .max(40, "Provided value is too long"),
            email: yup
              .string()
              .email("Provided value must be a valid email address")
              .required("This field is required")
              .max(40, "Provided value is too long"),
            company: yup.string().required("This field is required"),
            message: yup.string().required("This field is required"),
          })}
        >
          {({ values, errors, setFieldValue }) => {
            const {} = values;

            console.log(values, errors);

            return (
              <div className="flex-1 gap-6 flex-col flex">
                <FormikInput id="name" label="Name" />
                <FormikInput id="email" label="Email" />

                <Input
                  label="Company"
                  type="text"
                  variant="bordered"
                  classNames={{
                    inputWrapper: "bg-white",
                  }}
                />
                <Textarea
                  label="Message"
                  type="text"
                  variant="bordered"
                  classNames={{
                    inputWrapper: "bg-white",
                  }}
                />
                <Button
                  color="secondary"
                  className="px-[30px] py-[19px] font-semibold h-fit w-fit"
                  radius="sm"
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};
