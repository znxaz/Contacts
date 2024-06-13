import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSharedDropDownState } from "../context/dropdownContext";

interface ContactValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

interface Field {
  name: string;
  label: string;
}

const ContactForm = () => {
  const { sharedState, setSharedState } = useSharedDropDownState();
  const { register, handleSubmit } = useForm<ContactValues>();
  const Fields: Field[] = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "phoneNumber", label: "Phone Number" },
    { name: "email", label: "Email" },
  ];

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center flex-col"
      onClick={() => (sharedState ? setSharedState(!sharedState) : sharedState)}
    >
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col border-2 rounded-3xl w-80 h-3/5"
      >
        <div className="flex justify-center items-center bg-white flex-col w-full h-full rounded-3xl">
          {Fields.map((field) => (
            <div className="relative mb-3">
              <label
                htmlFor={field.name}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {field.label}
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id={field.name}
                {...register(
                  field.name as
                    | "firstName"
                    | "lastName"
                    | "phoneNumber"
                    | "email"
                )}
              />
            </div>
          ))}
          <input
            type="submit"
            value="Add Contact"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
