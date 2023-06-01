"use client"

import React, { useState } from 'react';
import BuyerSignupForm from './components/BuyerSignupForm';
import RealtorSignupForm from './components/RealtorSignupForm';
import SignUpModalItem from './components/SignUpModalItem';


 export interface SignUpTab {
    title: string;
    
}

const page:React.FC = () => {
    const SignUpTabs: SignUpTab[] = [{
        title: 'Realtor',
    },
    {
        title: 'Buyer',
    }
]
const [selectedTab,setSelectedTab]=useState<string>(SignUpTabs[0].title)
    return(
        <div className="w-full xl:w-1/2 xl:flex-col xl:ml-28 mt-5">
        <h1 className="text-2xl font-bold">Sign Up</h1>
    <div className="grid grid-cols-2 gap-5  w-full">
        {SignUpTabs.map((tab, index) => (
            <SignUpModalItem key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab} />
        ))}
   
    </div>
        {selectedTab==="Realtor"?<RealtorSignupForm/>:<BuyerSignupForm/>}
</div>
    )
}
export default page;