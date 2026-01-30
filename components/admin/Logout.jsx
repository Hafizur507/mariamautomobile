"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      className=" py-3 px-5 bg-green-500 text-black rounded hover:bg-red-500 transition-colors"
      onClick={() => {
        signOut({ callbackUrl: "/login" });
      }}
    >
      Sign Out
    </button>
  );
};

export default Logout;
