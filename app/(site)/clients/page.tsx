"use client";

import { ClientsList } from "@/components/ClientsList";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

const Clients = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col">
      <Header pageTitle="مراجعان" />
      <div className="w-full flex flex-col p-8">
        <div className="w-full h-full flex flex-col bg-white rounded-md shadow-md p-4">
          <ClientsList />
        </div>
      </div>
    </div>
  );
};

export default Clients;
