"use client";

import { Toaster } from "react-hot-toast";

export const Provider = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Toaster position="top-right" />
    </div>
  );
};
