import React from "react";
import { AuthOptionsProvider } from "../context/AuthOptionContext";
import { AuthProvider } from "../context/authContext";
import { SignInContextProvider } from "../context/signInContext";
import { SignUpContextProvider } from "../context/signUpContext";
import AuthOptions from "../components/authOptions";

export const Auth = () => {
    return(
  <AuthProvider>
    <AuthOptionsProvider>
      <SignUpContextProvider>
        <SignInContextProvider>
          <AuthOptions></AuthOptions>
        </SignInContextProvider>
      </SignUpContextProvider>
    </AuthOptionsProvider>
  </AuthProvider>
    ); 
};

export default Auth; 