"use client";

import { Flip, ToastContainer } from "react-toastify";

export default function Toastify() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="colored"
      transition={Flip}
    />
  );
}
