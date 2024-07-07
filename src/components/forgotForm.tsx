import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { resetPasswordEmail } from "../api/auth/AuthService";
import { useForgotFormContext } from "../context/forgotContext";
import { useSharedSignInState } from "../context/signInContext";
import { Toast, notify } from "./toast";
import { HandleErrors } from "../utils/ErrorHandling/ForgotPasswordErrorHandling";
import { FirebaseError } from "firebase/app";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Email {
  email: string;
}
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({
    resolver: yupResolver(validationSchema),
  });
  const { isForgot, setIsForgot } = useForgotFormContext();
  const { signInContext, setSignInContext } = useSharedSignInState();

  const ForgotClick = () => {
    setIsForgot(!isForgot);
    setSignInContext(!signInContext);
  };

  const onSubmit: SubmitHandler<Email> = async (data) => {
    const Data = { ...data };
    if (Data.email) {
      try {
        await resetPasswordEmail(Data.email);
        notify(
          `A rest password email has been sent to ${Data.email}. Make sure to check junk.`
        );
      } catch (error: unknown) {
        HandleErrors(error);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center bg-white shadow-custom h-2/5 w-[25em] flex-col rounded-xl"
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
          type="email"
          id="Email"
          {...register("email")}
          className="w-2/3 mb-4 bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        />
        {errors["email"] && (
          <p className=" self-start ml-20 mb-3 z-50 p-0 h-4 animate-pulse">
            {errors["email"]?.message}
          </p>
        )}
        <input
          type="submit"
          value="Send Email"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg hover:cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
        />
      </form>
    </>
  );
};

export default ForgotForm;
