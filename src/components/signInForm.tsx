import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "../api/auth/AuthService";
import { useSharedSignInState } from "../context/signInContext";
import { useAuthOptions } from "../context/AuthOptionContext";
import { useForgotFormContext } from "../context/forgotContext";
const SignInForm = () => {
  interface SignInFormData {
    Email: string;
    Password: string;
  }

  const fields = [
    { label: "Email", name: "Email", type: "email" },
    { label: "Password", name: "Password", type: "password" },
  ];

  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    const Data = { ...data };
    alert(Data); 
    signIn(Data.Email, Data.Password);
  };

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

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {signInContext && (
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center bg-white shadow-custom  h-1/2 w-[30em] flex-col rounded-xl"
        >
          <div
            className="justify-self-start self-start ml-[2.5em] pb-[1em] -mb-5 hover:cursor-pointer"
            onClick={SignInClick}
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
                type={field.type}
                id={field.name}
                {...register(field.name as keyof SignInFormData, {
                  required: true,
                })}
                className="w-2/3 bg-white border focus-visible:ring-blue-500 focus-visible:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
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
        </form>
      )}
    </div>
  );
};

export default SignInForm;
