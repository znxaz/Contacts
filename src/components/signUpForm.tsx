import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signUp } from "../api/auth/AuthService";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useSharedSignUpState } from "../context/signUpContext";
import {doc, setDoc } from "firebase/firestore"; 
import { db } from "../api/auth/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
const SignUpForm = () => {
  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email", name: "email" },
    { label: "Phone Number", name: "phoneNumber" },
    { label: "Password", name: "password" },
  ];

  interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    signUp(data.email, data.password);
    addUser(data)
  };

  async function addUser(userData: SignUpFormData) {
    try {
      const userId = uuidv4(); 
      console.log(userId); 
      await setDoc(doc(db, "users", userId), userData);
      console.log("User added with ID: ", userId);
    } catch (e) {
      console.error("Error adding user: ", e);
    }
  }

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
        className="flex justify-center items-center bg-gray-100 h-5/6 w-[30em] flex-col rounded-xl"
      >
        <div
          className="justify-self-start self-start ml-[2.5em] pb-[1em] -mb-5 hover:cursor-pointer"
          onClick={SignUpClick}
        >
          &#x25c0;
        </div>
        {fields.map((field) => (
          <>
            <label
              htmlFor={field.name}
              className="justify-self-start self-start ml-[5em] m-2"
            >
              {field.label}
            </label>
            <input
              type="text"
              id={field.name}
              {...register(field.name as keyof SignUpFormData)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3 "
            />
          </>
        ))}
        <input
          type="submit"
          value="Sign Up"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-4 mt-8"
        />
      </form>
    </div>
  );
};

export default SignUpForm;
