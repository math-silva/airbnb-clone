"use client";

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButtom";

const LoginModal = () => {
  const { isOpen, closeModal } = useLoginModal();

  const content = (
    <>
      <form className="space-y-4">
        <input placeholder="Your e-mail adress" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
        <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
        
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          the error message
        </div>

        <CustomButton label="Log in" onClick={() => console.log("Log in")} />
      </form>

    </>
  );

  return (
    <Modal
      label="Log in"
      content={content}
      isOpen={isOpen}
      onClose={closeModal}
    />
  );
}

export default LoginModal;