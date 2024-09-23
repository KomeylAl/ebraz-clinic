"use client";

import Header from "@/components/Header";
import { PaymentsList } from "@/components/PaymentsList";
import { useRouter } from "next/navigation";

const Payments = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col">
      <Header pageTitle="پرداخت ها" />
      <div className="w-full flex flex-col p-8">
        <div className="w-full h-full flex flex-col bg-white rounded-md shadow-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">پرداخت ها</h2>
          </div>
          <PaymentsList />
        </div>
      </div>
    </div>
  );
};

export default Payments;
