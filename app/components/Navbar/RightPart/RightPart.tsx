"use client"
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import useCurrentUser from '@/app/hooks/useCurrentUser';
import SignupModal from '../../Modals/SignupModal';


const RightPart:React.FC = () => {
    const {data:user} =useCurrentUser()
    const [isModalOpen,setIsModalOpen]=useState<boolean>(false)
    
    return (
        <>
        <SignupModal
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
        />
        <div className='flex gap-5 w-full justify-center'>
            

          {!user && 
          <div className='flex items-center mt-2    justify-center  mb-3 rounded-lg p-1  cursor-pointer '    onClick={() => setIsModalOpen(true)} >
          <FiLogIn className='  text-md mr-2' title='SignUp/Login'/>
          <p className='text-md font-semibold ' >SignUp</p>
       </div>
          }  
    {!user && 
     <div className='flex items-center mt-2   justify-center  mb-3 rounded-lg  cursor-pointer ' >
     <CgProfile className='text-md mr-2' size={20} title='SignUp/Login'/>
     <p className='text-md font-semibold ' >Profile</p>
  </div>
    
    }
            


        </div>
        </>
    )
}
export default RightPart;