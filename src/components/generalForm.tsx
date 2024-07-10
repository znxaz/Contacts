import React from "react";
import {
  FieldValue,
  FormProps,
  SubmitHandler,
  useForm,
  FieldValues,
} from "react-hook-form";

interface formProps<T extends FieldValues> {
  children: React.ReactNode;
  HeightWidth: string;
  onSubmit: SubmitHandler<T>;
}

export const GeneralForm = <T extends FieldValues>({
  children,
  HeightWidth,
  onSubmit,
}: formProps<T>) => {
  const { handleSubmit } = useForm<T>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex justify-center items-center flex-col 
          rounded-xl bg-white shadow-custom ${HeightWidth}`}
    >
      {children}
    </form>
  );
};
