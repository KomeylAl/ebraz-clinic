import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import Sidebar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "کلینیک ابراز - مدیریت",
  description: "کلینیک ابراز - مدیریت",
};

export default function SiteLayout({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  return (
    <html>
      <body>
        <div className="bg-gray-200/40 relative w-full h-dvh">
          <Sidebar />
          <div className="lg:pr-80">{children}</div>
        </div>
      </body>
    </html>
  );
}
