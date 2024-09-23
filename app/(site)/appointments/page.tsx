"use client";

import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import persian from "react-date-object/calendars/persian";
import DatePicker, { DateObject } from "react-multi-date-picker";
import fa from "react-date-object/locales/persian_fa";
import { AppinmentsList } from "@/components/AppointmentsList";

const Appinments = () => {
  const [value, setValue] = useState(
    new DateObject({ calendar: persian, locale: fa })
  );
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col">
      <Header pageTitle="نوبت ها" />
      <div className="w-full flex flex-col p-8">
        <div className="w-full h-full flex flex-col bg-white rounded-md shadow-md p-4">
          <AppinmentsList />
        </div>
      </div>
    </div>
  );
};

export default Appinments;
