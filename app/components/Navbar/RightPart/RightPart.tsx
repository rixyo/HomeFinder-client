"use client"
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import { useRouter } from 'next/navigation';



const RightPart:React.FC = () => {
    const {data:user} =useCurrentUser()
    const router=useRouter()

    
    return (
        <>
        <div className='flex gap-5 w-full justify-center'>
            

          {!user && 
          <div className='flex items-center mt-2  justify-center mb-3 rounded-lg p-1 cursor-pointer ' onClick={()=>router.push('/signup')}  >
          <FiLogIn className='  text-md mr-2' title='SignUp/Login'/>
          <p className='text-md font-semibold ' >SignUp</p>
       </div>
          }  
    {user && 
     <div className='flex items-center mt-2   justify-center  mb-3 rounded-lg  cursor-pointer ' onClick={()=>router.push('/profile')} >
     <CgProfile className='text-md mr-2' size={20} title='profile'/>
     <p className='text-md font-semibold ' >Profile</p>
  </div>
    
    }
            


        </div>
        </>
    )
}
export default RightPart;