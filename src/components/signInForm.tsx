import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../api/auth/AuthService";
import { useSharedSignInState } from "../context/signInContext";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useForgotFormContext } from "../context/forgotContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GeneralLabel } from "./generalLabel";
import { GeneralForm } from "./generalForm";
import { GeneralInputField } from "./generalInput";
import { BackButton } from "./backButton";

const SignInForm = () => {
  interface SignInFormData {
    email: string;
    password: string;
  }

  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];

  const { authOptions, setAuthOptions } = useAuthOptions();
  const { signInContext, setSignInContext } = useSharedSignInState();
  const { isForgot, setIsForgot } = useForgotFormContext();

  const SignInClick = () => {
    setTimeout(() => {
      setAuthOptions(!authOptions);
      setSignInContext(!signInContext);
    }, 100);
  };

  const ForgotClick = () => {
    setTimeout(() => {
      setSignInContext(!signInContext);
      setIsForgot(!isForgot);
    }, 100);
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });


  const {formState: { errors }} = useForm({resolver: yupResolver(validationSchema)})

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    const Data = { ...data };
    signIn(Data.email, Data.password);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {signInContext && (
        <GeneralForm
          HeightWidth=" md:w-2/3 md:h-1/3 md:m-4 md:mb-2 md:p-2.5
          xs:w-4/5 xs:h-1/2 xs:mb-2
          lg:h-1/2 lg:w-[30em]" 
          onSubmit={onSubmit}
        >
          <BackButton onClick={SignInClick}></BackButton>
          {fields.map((field) => (
            <>
              <GeneralLabel name={field.name} label={field.label} />
              <GeneralInputField
                type={field.type}
                name={field.name}
                errors={errors}
              ></GeneralInputField>
            </>
          ))}
          <a
            onClick={ForgotClick}
            className="hover:underline hover:cursor-pointer justify-end self-end text-sm m-px mr-[6em] mt-[0.75em]"
          >
            Forgot Password?
          </a>
          <input
            type="submit"
            value="Sign In"
            className="w-1/2 mt-6 bg-white border hover:cursor-pointer focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </GeneralForm>
      )}
    </div>
  );
};

export default SignInForm;
