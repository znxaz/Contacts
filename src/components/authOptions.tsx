import React, { useState } from "react";
import SignUpForm from "../components/signUpForm";
import SignInForm from "../components/signInForm";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useSharedSignInState } from "../context/signInContext";
import { useSharedSignUpState } from "../context/signUpContext";
import { useForgotFormContext } from "../context/forgotContext";
import ForgotForm from "./forgotForm";

const AuthOptions = () => {
  //Sign in, Sign up button State
  const { authOptions, setAuthOptions } = useAuthOptions();
  const { signInContext, setSignInContext } = useSharedSignInState();
  const { sharedSignUpState, setSharedSignUpState } = useSharedSignUpState();
  const { isForgot, setIsForgot } = useForgotFormContext();

  const SignUpClick = () => {
    setTimeout(() => {
      setAuthOptions(!authOptions);
      setSharedSignUpState(!sharedSignUpState);
    }, 100);
  };
  const SignInClick = () => {
    setTimeout(() => {
      setAuthOptions(!authOptions);
      setSignInContext(!signInContext);
    }, 100);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {authOptions && (
        <div className="flex justify-center items-center flex-col
         bg-white shadow-custom rounded-xl 
         xs:w-4/5 xs:h-1/3
         md:w-3/4 md: h-2/3
         lg:h-1/2 lg:w-1/3">
          <h1 className="text-black font-extrabold font-mono 
          lg:mb-2 
          md:mb-20
          xs:mb-8">
            Welcome Back!
          </h1>
          <button
            className="bg-white border rounded-lg block 
             focus-visible:ring-blue-500 focus-visible:outline-none  focus:ring-blue-500 focus:border-blue-500
              text-gray-900 text-sm 
               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
               lg:w-2/3 lg:h-1/6 lg:m-4 lg:mb-2 lg:p-2.5
               md:w-2/3 md:h-1/6 md:m-4 md:mb-2 md:p-2.5
               xs:w-2/3 xs:h-1/6 xs:mb-2 "
            onClick={SignInClick}
          >
            Sign In
          </button>
          <button
                className="bg-white border rounded-lg block 
                focus-visible:ring-blue-500 focus-visible:outline-none  focus:ring-blue-500 focus:border-blue-500
                 text-gray-900 text-sm 
                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
                  lg:w-2/3 lg:h-1/6 lg:m-4 lg:mb-2 lg:p-2.5
                  md:w-2/3 md:h-1/6 md:m-4 md:mb-2 md:p-2.5
                  xs:w-2/3 xs:h-1/6 xs:mb-2 "
            onClick={SignUpClick}
          >
            Sign Up
          </button>
        </div>
      )}
      {signInContext && <SignInForm></SignInForm>}
      {sharedSignUpState && <SignUpForm></SignUpForm>}
      {isForgot && <ForgotForm></ForgotForm>}
    </div>
  );
};

export default AuthOptions;
