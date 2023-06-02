"use client"
import React, { useCallback, useMemo, useState } from 'react';
import useHome from '../hooks/useHome';
import useHomeId from '../hooks/useHomeId';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import {GridLoader} from "react-spinners"
import axios from 'axios';
import useCurrentUser from '../hooks/useCurrentUser';
import toast from 'react-hot-toast';
 
const page:React.FC = () => {
  const {homeId} =useHomeId()
  const {data:user}=useCurrentUser()
  const {data,isLoading} =useHome(homeId as string)
  const [message, setMessage] = useState<string>(`Hi, I'm interested in this listing. Please let me know when I can come for a viewing. Thank you.`);
  const [isSending, setIsSending] = useState<boolean>(false);
      const formatedNumber = useMemo(() => {
        if (data?.price) {
          return data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return null;
      },  [data?.price]);
      const formatSize = useMemo(() => {
        if(data?.sqft){
            return data?.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return null;
      }, [data?.sqft]);
     const handleSend= useCallback(async()=>{
      if(!user) return
        setIsSending(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/home/${homeId}/inquire`,{message},{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      }).then((res)=>{
        setIsSending(false);
        setMessage("")
        toast.success("Thank you for your interest. We will get back to you shortly.")
      }).catch((err)=>{
        setIsSending(false);
        toast.error("Something went wrong, please try again later.")
      })

     },[user,message,homeId])
   
   return (
    <div className="w-full  lg:grid lg:grid-cols-2 gap-5 lg:p-24">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
<GridLoader color="#3B82F6" />
</div>
      )}
     
      {data && (
        <div className='p-5'>
    <>
    <Zoom scale={0.4}>
    {data.images.map((slideImage: { url: string; }, index: React.Key | null | undefined)=> (
       <div key={index}>
         <div className='h-96  items-center' style={{ 'backgroundImage': `url(${slideImage.url})`, objectFit:"cover"  }} >
          
         </div>
       </div>
     ))} 
      </Zoom>
   </>
   <div className="flex flex-col mt-5">
   <p className='text-xl font-bold'>${formatedNumber}</p>
            <p className='text-md  text-gray-700 break-all w-40'>{data.address}</p>
          
            <div className='flex gap-5'>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{data.beds}</span> beds</p>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{data.baths}</span> baths</p>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{formatSize}</span> sqft</p>
            </div>
   </div>
   </div>
   
)}
     
   {data &&
    <div className=" lg:w-1/2 col-span-1 mt-5 ">
    <p className="text-2xl font-bold">Message Agent</p>
    <TextArea 
    placeholder="Message Agent"
    onChange={(e)=>{setMessage(e.target.value)}}
    label="Message Agent"
    value={message}
    />
    <Button 
    label="Send"
    disabled={isSending}
    onClick={handleSend}
    fullWidth
    />
  </div>
    }
      
   
    </div>
   )
}
export default page;