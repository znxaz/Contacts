import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetPasswordEmail } from "../api/auth/AuthService";
import { useForgotFormContext } from "../context/forgotContext";
import { useSharedSignInState } from "../context/signInContext";

interface Email {
  email: string;
}
const ForgotForm = () => {
  const { register, handleSubmit } = useForm<Email>();
  const { isForgot, setIsForgot } = useForgotFormContext();
  const { signInContext, setSignInContext } = useSharedSignInState();

  const ForgotClick = () => {
    setIsForgot(!isForgot);
    setSignInContext(!signInContext); 
  };

  const onSubmit: SubmitHandler<Email> = (data) => {
    const Data = { ...data };
    resetPasswordEmail(Data.email);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center bg-gray-100 h-2/5 w-[25em] flex-col rounded-xl"
    >
      <div
        className="justify-self-start self-start ml-[1.5em] pb-[1em] hover:cursor-pointer"
        onClick={ForgotClick}
      >
        &#x25c0;
      </div>
      <label
        htmlFor="Email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Enter your email to reset your password
      </label>
      <input
        type="text"
        id="Email"
        {...register("email")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3 mb-4"
      />
     <input
            type="submit"
            value="Send Email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          />
    </form>
  );
};

export default ForgotForm;
