"use client"
import * as jwt from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons/lib';
import { BsGraphUp, BsKey } from 'react-icons/bs';
import ProfileItems from './components/ProfileItems';
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import AddListing from './components/AddListing';
import { GridLoader } from 'react-spinners';
import Button from '../components/Button';
import { RiListOrdered } from 'react-icons/ri';
import useListedHomes from '../hooks/ListedHomes';
import ListedHomes from './components/Listed/ListedHomes';
import usegetMessages from '../hooks/useMessages';
import Messages from './components/messages/Messages';
import {HiLogout} from 'react-icons/hi'
import ProductKey from './components/ProductKey';

export interface jwtRespone {
    id: string;
    name: string;
    iat: number;
    exp: number;
}

export interface RealtorTab {
    title: string;
    icon: IconType
    href?: string;
}
export default function Profile() {
    const {data,isLoading,mutate}=useCurrentUser()
    const {data:listedHomes}=useListedHomes(data?.id as string)
    const {data:messages}=usegetMessages(data?.id as string)
    const router=useRouter()
    const logout=()=>{
    const token = localStorage.getItem('token');

    if (token) {
            localStorage.removeItem('token')
            router.push('/login')
            mutate()
        }
    }
 
      useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login')
        }
        if(token){

            const decoded = jwt.decode(token) as jwtRespone;
            if (decoded.exp * 1000 < Date.now()) {
                localStorage.removeItem('token')
                router.push('/login')
            }
        }
        
       
     
    }, [router]);

 
    
   const RealtorTabs:RealtorTab[]=[
    {
        title:"Home",
        icon:AiOutlineHome,
       
    },
       {
        title:"Deshboard",
      
        icon:BsGraphUp,
    },
    {
        title:"My Listings",
   
        icon:RiListOrdered,
    },
    {
        title:"Add Listing",
     
        icon:IoAddCircleOutline,
    },
    {
        title:"Messages",
    
        icon:AiOutlineMessage,
    }
]
const AdminTabs:RealtorTab[]=[
    {
        title:"Home",
        icon:AiOutlineHome,
    },
    {
        title:"Deshboard",
        icon:BsGraphUp,
    },
    {
        title:"Add Listing",
        icon:IoAddCircleOutline,
    },
    {
        title:"Messages",
        icon:AiOutlineMessage,
    },
    {
        title:"Product Key",
        icon:BsKey
    }
]

 const [selectedTab,setSelectedTab]=useState<string>('')

    
    if(!data){
        return <div className="flex items-center justify-center h-full">
        <GridLoader color="#3B82F6" />
        </div>
    }

    
    return (
    
        <>
        <main className='bg-gray-100  flex  w-full mt-10 gap-5 p-5'>
           {data?.role==="REALTOR"  && 
           <>
           <div className='w-1/6'>
           
           
                <>
        
             {
                 RealtorTabs.map((tab,index)=>(
                     <ProfileItems key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
                 ))
             }   
    </>
             <div className='flex cursor-pointer items-center'>
             <HiLogout className='text-md text-gray-400 mr-2' size={20} title='logout'/>
            <Button
            onClick={logout}
            label="Logout"
    />
             </div>
            </div>
            </>
           
}
{data?.role==="ADMIN"  && 
           <>
           <div className='w-1/6'>
           
           
                <>
        
             {
                 AdminTabs.map((tab,index)=>(
                     <ProfileItems key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
                 ))
             }   
    </>
             <div className='flex cursor-pointer items-center'>
             <HiLogout className='text-md text-gray-400 mr-2' size={20} title='logout'/>
            <Button
            onClick={logout}
            label="Logout"
    />
             </div>
            </div>
            </>
           
}
        <div className='p-4 w-full'>
        {selectedTab==="Add Listing"&&<AddListing/>}
        {selectedTab==="My Listings"&&<ListedHomes
        listedHomes={listedHomes}
        />}
        {selectedTab==="Messages"&&<Messages
        messages={messages}
        />}
        {selectedTab==="Home"&& <div onClick={()=>router.push('/')}></div>}
        {selectedTab==='Product Key' &&<ProductKey/>}
         
        </div>
  
    
      </main>
            {isLoading&& <div className="flex items-center justify-center h-full">
    <GridLoader color="#3B82F6" />
    </div>}

        </>
       
           
    
        
    
           

          
    )
}