import React from "react";
import LoginForm from "../Components/auth/LoginForm/LoginForm";
import RegisterForm from "../Components/auth/RegisterForm/RegisterForm";

const page = () => {
  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default page;
