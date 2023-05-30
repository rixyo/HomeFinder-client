"use client"
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import Item from './Item';
type LeftPartProps = {
    
};
export type Tab = {
    title: string;
    icon?: IconType;
    href?: string;
    alert?: boolean;
    auth?:boolean
}

const LeftPart:React.FC<LeftPartProps> = () => {
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
            title: 'Mortgage',
        
            href: '/'
    
        },
        {
            title: 'Agent Finder',
            href: '/'
        }
        
      
    ]
    const [selectedTab,setSelectedTab]=useState<string>(Tabs[0].title)
    
    return (
        <>
        <div className="flex  items-center justify-center" >
            {Tabs.map((tab, index) =>
            <Item key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
             )}
        </div>
        </>

    )
}
export default LeftPart;