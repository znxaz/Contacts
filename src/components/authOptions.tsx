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
    setAuthOptions(!authOptions);
    setSharedSignUpState(!sharedSignUpState);
  };
  const SignInClick = () => {
    setAuthOptions(!authOptions);
    setSignInContext(!signInContext);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {authOptions && (
        <div className="flex justify-center flex-col items-center bg-gray-100 w-1/3 h-1/2 rounded-xl ">
          <h1 className="text-black font-extrabold font-mono">Welcome Back</h1>
          <button
            className="rounded-xl bg-blue-400 text-white font-bold w-2/3 h-1/6 m-4"
            onClick={SignInClick}
          >
            Sign In
          </button>
          <button
            className="rounded-xl bg-blue-400 text-white font-bold w-2/3 h-1/6 m-4"
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
