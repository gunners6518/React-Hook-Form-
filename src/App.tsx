import React from "react";
import { useForm } from "react-hook-form";

import "./App.css";

type Inputs = {
  example: string;
  firstName: string;
  lastName: string;
  age: string;
};

export const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ...register("~")でformの値を保持できる */}
      <label htmlFor="firstName">firstName</label>
      <input {...register("firstName", { required: "This is required" })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <label htmlFor="lastName">lastName</label>
      <input
        {...register("lastName", {
          required: "This is required",
          maxLength: { value: 4, message: "You exceeded the maxLength" },
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <label htmlFor="age">age</label>
      <input {...register("age")} />
      <input type="submit" />
    </form>
  );
};
