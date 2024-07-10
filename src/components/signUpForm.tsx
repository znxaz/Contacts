import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUpForm = () => {

  interface SignUpData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
  }
  const fields = [
    { Label: "FirstName", Name: "First Name" },
    { Label: "Last Name", Name: "LastName" },
    { Label: "Email", Name: "Email" },
    { Label: "Phone Number", Name: "PhoneNumber" },
    { Label: "Password", Name: "Password" },
  ];
  const { register, handleSubmit } = useForm<SignUpData>()

  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form action=""
    onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <>
          <label htmlFor={field.Label}>{field.Name}</label>
          <input
            type="text"
            id={field.Label}
            {...register(
              field.Name as
                | "firstName"
                | "lastName"
                | "phoneNumber"
                | "password"
                | "email"
            )}
          />
        </>
      ))}
    </form>
  );
};

export default SignUpForm; 
