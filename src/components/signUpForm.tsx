import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useSharedSignUpState } from "../context/signUpContext";
import { SignUpFormData } from "../dto/SignUpFormData";
import { signup } from "../api/auth/AuthController";
import { notify } from "./toast";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpForm = () => {
  const fields = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phoneNumber", type: "tel" },
    { label: "Password", name: "password", type: "password" },
  ];

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Phone Number must be digits")
      .required("Phone Number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must be minimum 8 characters, at least one letter and one number"
      )
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: yupResolver(validationSchema) });

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    try {
      signup(data);
    } catch (error) {
      console.error(error);
    }
    notify("Successfully signed up!");
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
        className="flex justify-center items-center bg-white shadow-custom h-5/6 w-[30em] flex-col rounded-xl"
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
              {errors[field.name as keyof SignUpFormData] && (
                <p className=" self-start ml-20 mb-3 z-50 p-0 h-4 animate-pulse">
                  {errors[field.name as keyof SignUpFormData]?.message}
                </p>
              )}
            </>
          ))}
          <input
            type="submit"
            value="Sign Up"
            className=" w-1/2 p-2.5 m-4 mt-8 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block hover:cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
          <img src="" alt="" />
        </>
      </form>
    </div>
  );
};

export default SignUpForm;
