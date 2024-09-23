'use client';

import ClassesList from '@/components/ClassesList';
import { ClientsList } from '@/components/ClientsList'
import Header from '@/components/Header'
import { Tab, Tabs } from '@/components/Tabs'
import ToDaysList from '@/components/TodaysList'
import React from 'react'

const Classes = () => {
  return (
   <div className="w-full h-full flex flex-col">
   <Header pageTitle="کلاس ها و کارگاه ها" />
   <div className="w-full flex flex-col p-8">
     <div className="w-full h-full flex flex-col bg-white rounded-md shadow-md p-4">

         <Tabs>
           <Tab label="کلاس ها">
             <div className="py-4">
               <ClassesList />
             </div>
           </Tab>
           <Tab label="کارگاه ها">
             <div className="py-4">
               <ClientsList />
             </div>
           </Tab>
         </Tabs>
     </div>
   </div>
 </div>
  )
}

export default Classes