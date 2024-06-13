import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../api/auth/AuthService";
import { useSharedSignInState } from "../context/signInContext";
import { useAuthOptions } from "../context/AuthOptionContext";
const SignInForm = () => {
  const fields = [
    { label: "Email", name: "email" },
    { label: "Password", name: "password" },
  ];

  interface SignInFormData {
    email: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    const Data = {...data}
    signIn(Data.email, Data.password);
  };

  const { authOptions, setAuthOptions } = useAuthOptions();
  const { signInContext, setSignInContext } = useSharedSignInState();

  const SignInClick = () => {
    setAuthOptions(!authOptions);
    setSignInContext(!signInContext);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center bg-gray-100 h-1/2 w-[30em] flex-col rounded-xl"
    >
        <div className="justify-self-start self-start ml-[2.5em] pb-[1em] -mb-5 hover:cursor-pointer"
        onClick={SignInClick}>&#x25c0;</div> 
      {fields.map((field) => (
        <>
          <label htmlFor={field.name} className="justify-self-start self-start ml-[5em] m-2">{field.label}</label>
          <input
            type="text"
            id={field.name}
            {...register(field.name as keyof SignInFormData)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3 "
          />
        </>
      ))}
      <input
        type="submit"
        value="Sign In"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4 mt-8"
      />
    </form>
    </div>
  );
};

export default SignInForm;
