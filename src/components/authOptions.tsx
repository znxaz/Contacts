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
    },
    100);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {authOptions && (
        <div className="flex justify-center items-center bg-white shadow-custom h-1/2 w-1/3 flex-col rounded-xl ">
          <h1 className="text-black font-extrabold font-mono mb-2">Welcome Back!</h1>
          <button
            className="bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-2/3 h-1/6 m-4 mb-2"
            onClick={SignInClick}
          >
            Sign In
          </button>
          <button
            className="bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-2/3 h-1/6 m-4 mt-2"
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
