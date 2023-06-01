"use client"
import React, { useEffect, useState } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons/lib';
import { BsGraphUp } from 'react-icons/bs';
import ProfileItems from './components/ProfileItems';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';
import AddListing from './components/AddListing';
import { FiLogOut } from 'react-icons/fi';
import { GridLoader } from 'react-spinners';

export interface RealtorTab {
    title: string;
    href?: string;
    icon: IconType
}
export default function Profile() {
    const {data,isLoading}=useCurrentUser()
    console.log(data)
    const router=useRouter()
    //const role = userRole()
    const logout=()=>{
        localStorage.removeItem('token')
        router.push('/')
    }
 
      useEffect(() => {
        const session = localStorage.getItem('token');
        if (!session) {
            router.push('/');
            router.refresh();
        }
    }, [router]);
    
   const RealtorTabs:RealtorTab[]=[
       {
        title:"Deshboard",
        href:"/profile",
        icon:BsGraphUp,
    },
    {
        title:"My Listings",
        href:"/profile",
        icon:BsGraphUp,
    },
    {
        title:"Add Listing",
        href:"/profile",
        icon:IoAddCircleOutline,
    },
    {
        title:"Messages",
        href:"/profile",
        icon:AiOutlineMessage,
    }
]

const [selectedTab,setSelectedTab]=useState<string>(RealtorTabs[0].title)
    

    
    return (
        <>
        {isLoading&& <div className="flex items-center justify-center h-full">
<GridLoader color="#3B82F6" />
</div>}
            <div className='flex gap-5  mb-5'>
             {data?.role==="REALTOR" &&
                <>
             <div className=' w-1/6 '>
             {
                 RealtorTabs.map((tab,index)=>(
                     <ProfileItems key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab}/>
                 ))
             }
          
             <div className='flex ml-4 cursor-pointer hover:underline' onClick={logout}>
                <FiLogOut className='text-md mr-2' size={20} title='Logout'/>
                <p className='text-md font-semibold ' >Logout</p>

                </div>  

         </div>
 <div className=' w-1/2  p-5'>
 {selectedTab==="Add Listing"?<AddListing/>:<></>}

 </div>
    </>

             } 
            </div>
        </>
        
    
           

          
    )
}