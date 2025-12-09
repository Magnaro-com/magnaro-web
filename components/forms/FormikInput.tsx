import { Input, InputProps } from "@heroui/react";
import { useField } from "formik";
import React from "react";

export const FormikInput: React.FC<{ id: string } & InputProps> = ({
  id,
  ...props
}) => {
  const [field, meta] = useField(id);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <Input
      {...field}
      errorMessage={isError && meta.error}
      isInvalid={isError}
      type="text"
      variant="bordered"
      {...props}
      classNames={{
        inputWrapper: "bg-white",
      }}
    />
  );
};
