"use client"
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import Item from './Item';

export type Tab = {
    title: string;
    icon?: IconType;
    href?: string;
    alert?: boolean;
    auth?:boolean
}

const LeftPart:React.FC = () => {
    const {data:user} =useCurrentUser()
    const Tabs:Tab[] = [
        {
            title: 'Buy',
            href: '/'
        },
        {
            title:"Sell",
         
            href: '/',
        
            auth:true
        },
        {
            title: 'Rent',
     
            href: ''
        },
        {
            title: 'Advertise',
        
            href: '/'
    
        },
        {
            title: 'Become a Realtor',
            href: '/'
        }
        
      
    ]
    const [selectedTab,setSelectedTab]=useState<string>(Tabs[0].title)
    
    return (
        <>
        {user?.role==="BUYER" && <div className="flex  items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
{!user && <div className="flex  w-full items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
}
        </>

    )
}
export default LeftPart;