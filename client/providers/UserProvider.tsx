"use client";
import React from "react";
import { UserContextProvider } from "../context/userContext";

interface Props {
  children: React.ReactNode;
}

const UserProvider = ({ children }: Props) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;
