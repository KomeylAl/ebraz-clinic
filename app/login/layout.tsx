import type { Metadata } from "next";
import '@/app/globals.css';
import React from "react";

export const metadata: Metadata = {
  title: "کلینیک ابراز - ورود",
  description: "کلینیک ابراز - ورود",
};

const LoginLayout = ({
  children,
}: {children : React.ReactNode}) => {

  return (
    <html lang="fa">
      <body className='bg-gray-200/40 w-dvw h-dvh'>
        {children}
      </body>
    </html>
  );
}

export default LoginLayout;
