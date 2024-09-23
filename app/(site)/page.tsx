"use client";

import ToDaysList from "@/components/TodaysList";
import Header from "@/components/Header";
import { Tab, Tabs } from "@/components/Tabs";
import { ClientsList } from "@/components/ClientsList";

export default async function Home() {

  return (
    <div className="w-full h-full flex flex-col">
      <Header pageTitle="داشبورد" />
      <div className="w-full flex flex-col p-8">
        <div className="w-full h-full flex flex-col bg-white rounded-md shadow-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">نوبت های امروز</h2>
            <div className="px-12 py-2 bg-cyan-600 rounded-md text-white text-center cursor-pointer">
              افزودن نوبت
            </div>
          </div>
          <div className="mt-12">
            <Tabs>
              <Tab label="نوبت های امروز">
                <div className="py-4">
                  <ToDaysList />
                </div>
              </Tab>
              <Tab label="مراجعان">
                <div className="py-4">
                  <ClientsList />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
