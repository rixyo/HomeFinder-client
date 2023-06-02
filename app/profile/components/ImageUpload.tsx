"use client"
import React,{useCallback} from 'react';
import {CldUploadWidget,CldImage} from "next-cloudinary"
import {TbPhotoPlus}from "react-icons/tb"

declare global {
    var cloudinary: any;
}
type FormImageUploadProps = {
    value:string;
    onChange:(value:string)=>void;
    label:string;

    
};
const ImageUpload:React.FC<FormImageUploadProps> = ({onChange,value,label}) => {
    const uploadPreset = "tw9uaoam"
    const handleUplaoad=useCallback((result:any)=>{
        onChange(result.info.secure_url)

    },[onChange])

    return (
        <CldUploadWidget 
      onUpload={handleUplaoad} 
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 3,
        maxFileSize: 1048576,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open()}
            className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-red-500
              mb-4
              border-2 
              p-10
              
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-
              mt-2
            "
          >
            <TbPhotoPlus
              size={50}
            />
            <div className="font-semibold text-lg">
            {label}
            </div>
            {value && (
              <div className="absolute inset-0 w-full h-full "
              >
             <CldImage
             fill

              
                  style={{ objectFit: 'cover', }} 
                  src={value}
                  alt="image" 
                  className='rounded-md object-cover'
                 
               
                  
                />
             
              
              </div>
            )}
          </div>
        ) 
    }}
    </CldUploadWidget>
  )
}
    
export default ImageUpload;