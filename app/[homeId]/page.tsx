"use client"
import React from 'react';
import useHome from '../hooks/useHome';
import useHomeId from '../hooks/useHomeId';



type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    const {homeId} =useHomeId()

    const {data, isLoading} =useHome(homeId as string)
 
   return (
         <>
           
         </>
   )
}
export default page;