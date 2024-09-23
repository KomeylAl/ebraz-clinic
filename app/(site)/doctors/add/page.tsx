"use client";

import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import fa from "react-date-object/locales/persian_fa";
import { getCookie } from "cookies-next";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState('');

  const [errors, setErrors] : any = useState();

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const token = getCookie('token')?.toString();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}api/doctors/add`,
        {
          'name': name,
          'phone': phone,
          'address': address,
          'birth_date': birthDate,
        }, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(response.data)
      if (response.status === 201) {
        router.push('/doctors')
      }
    } catch (error: any) {
      console.log(error, "DOCOR_ADD_ERROR");
      setErrors(error.response.data.errors)
      console.log(error)
      setIsLoading(false)
    }
  }

  const renderErrors = (field: any) =>
    errors?.[field]?.map((error: any, index: any) => (
      <div key={index} className="text-red-600">
        {error}
      </div>
  ));

  const handleBirthDateChange = (value: any) => {
    console.log(value.toString())
    setBirthDate(value.toString())
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Header pageTitle="افزودن پزشک" />
      <div className="w-full h-full p-8 flex flex-col">
        <div className="w-full flex gap-3 mt-9">
          <div className="w-full">
            <label>نام و نام خانوادگی</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
          <div className="w-full">
            <label>آدرس</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
        </div>
        <div className="w-full flex gap-3 mt-9">
          <div className="w-full">
            <label>شماره تلفن</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
            />
          </div>
          <div className="w-full">
            <label>تاریخ تولد</label>
            <div className="w-full">
              <DatePicker
                calendarPosition="bottom-right"
                inputClass="w-full bg-white py-2 rounded-md shadow-sm px-2 mt-2"
                containerClassName="w-full"
                onChange={handleBirthDateChange}
                calendar={persian}
                locale={fa}
                format="YYYY-MM-DD"
              />
            </div>
          </div>
        </div>
        <div
          onClick={handleSubmit}
          className={`
                mt-9 w-52 cursor-pointer text-center rounded-md py-2 text-white
                ${isLoading ? "bg-blue-400" : "bg-blue-700"}
            `}
        >
          افزودن پزشک
        </div>
        <div className="mt-9 text-red-600">
          <p>{renderErrors("name")}</p>
          <p>{renderErrors("address")}</p>
          <p>{renderErrors("phone")}</p>
          <p>{renderErrors("birth_date")}</p>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;