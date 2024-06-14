import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetPasswordEmail } from "../api/auth/AuthService";
import { useForgotFormContext } from "../context/forgotContext";
import { useAuthOptions } from "../context/AuthOptionContext";

interface Email {
  email: string;
}
const ForgotForm = () => {
  const { register, handleSubmit } = useForm<Email>();
  const {isForgot, setIsForgot} = useForgotFormContext(); 
  const { authOptions, setAuthOptions } = useAuthOptions(); 

  const ForgotClick = () =>{
    setIsForgot(!isForgot);
     setAuthOptions(!authOptions); 
  }

  const onSubmit: SubmitHandler<Email> = (data) => {
    const Data = { ...data };
    resetPasswordEmail(Data.email);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="justify-self-start self-start ml-[2.5em] pb-[1em] -mb-5 hover:cursor-pointer"
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3 "
      />
    </form>
  );
};

export default ForgotForm;
