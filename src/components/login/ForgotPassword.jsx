import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { successToast, errorToast } from "../../utils/toast";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

const ForgotPassword = ({ setIsForgot }) => {
  const { forgotPassword } = useContext(AuthContext);

  const methods = useForm();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const result = await forgotPassword(data.email);

    if (result.success) {
      successToast(result.message);
       setTimeout(() => {
    setIsForgot(false)
  }, 2000);
    } else {
      errorToast(result.message);
    }
  };

  return (
    <>
    <FormProvider {...methods} >
          <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <AuthInput
        type="email"
        name="email"
        label="Email"
        register={methods.register}
        error={errors.email?.message}
        validation={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          },
        }}
      />

      <AuthButton text="Sending....." />

      <p
        className="text-center text-sm cursor-pointer text-violet-600"
        onClick={() => setIsForgot(false)}
      >
        Back to Login
      </p>
    </form>
         </FormProvider>
    </>
  );
};

export default ForgotPassword;