"use client";
import axios from 'axios';
import Input from '@/app/components/Input';
import React, { useCallback, useState } from 'react';
import ImageUpload from './ImageUpload';

import Button from '@/app/components/Button';
import useHomes from '@/app/hooks/useHomes';
import { mutate } from 'swr';
import Router from 'next/router';


  type Image = {
    url: string;
  };
  enum PropertyType {
    SINGLE_FAMILY = 'SINGLE_FAMILY',
  }
const AddListing:React.FC= () => {
   
    const [images, setImages] = useState<Image[]>([]);
    const [imageUrl,setImageUrl]=useState<string>('')
    const [price,setPrice]=useState<string>("")
    const [beds,setBedrooms]=useState<string>("")
    const [baths,setBathrooms]=useState<string>("")
    const [sqft,setSqft]=useState<string>("")
    const [address,setAddress]=useState<string>("")
    const [city,setCity]=useState<string>("")
    const [state,setState]=useState<string>("")
    const [zip,setZip]=useState<string>("")
    const {mutate}=useHomes()

      const handleChange=(value:string)=>{
          setImageUrl(value)
          const img={url:value}
          setImages((prevImageArray) => [...prevImageArray, img]);
      
      }
      const token=localStorage.getItem('token')
      const handleSubmit=useCallback(async()=>{
        
        if(images.length===0||price===""||beds===""||baths===""||sqft===""||address===""||city===""||state===""||zip==="") return
        const data={
            images,
            price,
            beds,
            baths,
            sqft,
            address,
            city,
            state,
            zip,
            propertyType:PropertyType.SINGLE_FAMILY
        }
        console.log(data)
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/home`,data,{
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}` ,
                
            }
        }).then((res)=>{
            console.log(res)
            setImages([])
            setPrice("")
            setBedrooms("")
            setBathrooms("")
            setSqft("")
            setAddress("")
            setCity("")
            setState("")
            setZip("")
            mutate()
            
          

        }).catch((err)=>{console.log(err)})
       
      },[images,price,beds,baths,sqft,address,city,state,zip])
    
    return(
        <div className='p-5 w-full'>
        <ImageUpload
        label="Upload Image"
        onChange={handleChange}
        value={imageUrl}
        />

     <Input
  
     placeholder='Enter Price'
     onChange={(e)=>{setPrice(e.target.value)}}
     value={price}
     />
     <Input

     placeholder='Enter Bedrooms'
     onChange={(e)=>{setBedrooms(e.target.value)}}
     value={beds}
     />
     <Input

     placeholder='Enter Bathrooms'
     onChange={(e)=>{setBathrooms(e.target.value)}}
     value={baths}
     />
     <Input

     placeholder='Enter Sqft'
     onChange={(e)=>{setSqft(e.target.value)}}
     value={sqft}
     />
     <Input
     placeholder='Enter Address'
     onChange={(e)=>{setAddress(e.target.value)}}
     value={address}
     />
     <Input
    placeholder='Enter City'
     onChange={(e)=>{setCity(e.target.value)}}
     value={city}
     />
     <Input
 
     placeholder='Enter State'
     onChange={(e)=>{setState(e.target.value)}}
     value={state}
     />
     <Input

     placeholder='Enter Zip'
     onChange={(e)=>{setZip(e.target.value)}}
     value={zip}
     />
     <Button
        label="Add Listing"
        onClick={handleSubmit}

     />
        </div>
    )
}
export default AddListing;