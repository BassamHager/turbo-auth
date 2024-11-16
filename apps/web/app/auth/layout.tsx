import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-[#f0f] to-[#00f] h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
