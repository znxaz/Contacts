import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useSharedSignUpState } from "../context/signUpContext";
import { SignUpFormData } from "../dto/SignUpFormData";
import { signup } from "../api/auth/AuthController";
const SignUpForm = () => {
  const fields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "Email", type: "email" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Password", name: "Password", type: "password" },
  ];

  const { register, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    const displayName = `${data.firstName} ${data.lastName}`;
    signup(data);
  };

  const { authOptions, setAuthOptions } = useAuthOptions();
  const { sharedSignUpState, setSharedSignUpState } = useSharedSignUpState();
  const SignUpClick = () => {
    setAuthOptions(!authOptions);
    setSharedSignUpState(!sharedSignUpState);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center bg-white shadow-xl h-5/6 w-[30em] flex-col rounded-xl"
      >
        <div
          className="justify-self-start self-start ml-[2.5em] pb-[1em] -mb-5 hover:cursor-pointer"
          onClick={SignUpClick}
        >
          &#x25c0;
        </div>
        <>
          {fields.map((field) => (
            <>
              <label
                htmlFor={field.name}
                className="justify-self-start self-start ml-[5em] m-2"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                {...register(field.name as keyof SignUpFormData, {
                  required: true,
                })}
                className="w-2/3 bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </>
          ))}
          <input
            type="submit"
            value="Sign Up"
            className=" w-1/2 p-2.5 m-4 mt-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
          <img src="" alt="" />
        </>
      </form>
    </div>
  );
};

export default SignUpForm;
