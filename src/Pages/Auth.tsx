import React from "react";
import { AuthOptionsProvider } from "../context/AuthOptionContext";
import { AuthProvider } from "../context/authContext";
import { SignInContextProvider } from "../context/signInContext";
import { SignUpContextProvider } from "../context/signUpContext";
import { ForgotFormContextProvider } from "../context/forgotContext";
import AuthOptions from "../components/authOptions";

export const Auth = () => {
    return(
  <AuthProvider>
    <AuthOptionsProvider>
      <SignUpContextProvider>
        <SignInContextProvider>
          <ForgotFormContextProvider>
          <AuthOptions></AuthOptions>
          </ForgotFormContextProvider>
        </SignInContextProvider>
      </SignUpContextProvider>
    </AuthOptionsProvider>
  </AuthProvider>
    ); 
};

export default Auth; 