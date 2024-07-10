import React from "react";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";

interface generalInput<T extends FieldValues> {
  type: string;
  name: keyof T |string;
  errors: Partial<Record<keyof T, { message?: string }>>;
}

export const GeneralInputField = <T extends FieldValues>({
  type,
  name,
  errors,
}: generalInput<T>) => {
  const { register } = useForm();
  return (
    <div>
      <input
        type={type}
        id={name as string}
        {...register(name as string, {
          required: true,
        })}
         className="w-2/3 bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {errors[name] && (
        <p className="self-start lg:ml-20 lg:mb-3 lg:z-50 lg:p-0 lg:h-4 md:ml-[5.5em] md:mb-3 md:z-50 md:p-0 md:h-4 xs:ml-[4em] xs:mb-3 xs:z-50 xs:p-0 xs:h-4 xs:text-sm animate-pulse">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
