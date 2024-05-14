"use client";

import Modal from "./Modal";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButtom";

const SignupModal = () => {
  const { isOpen, closeModal } = useSignupModal();

  const content = (
    <>
      <form className="space-y-4">
        <input placeholder="Your e-mail adress" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
        <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />  
      
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          the error message
        </div>

        <CustomButton label="Sign up" onClick={() => console.log("Sign up")} />
      </form>

    </>
  );

  return (
    <Modal
      label="Sign up"
      content={content}
      isOpen={isOpen}
      onClose={closeModal}
    />
  );
}

export default SignupModal;