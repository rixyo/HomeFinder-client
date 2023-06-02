
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';



const AuthType = [
    { id: 0, name: 'SELECT', unavailable: false},
    { id: 1, name: 'REALTOR', unavailable: false },
  ]
const ProductKey:React.FC= () => {
    const [email,setEmail]=useState<string>("")
    const [userType,setAuthType]=useState<string>(AuthType[1].name)
    const handleSubmit=useCallback(()=>{
        console.log(email,userType)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/product-key`,{email,userType},
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
        ).then((res)=>{
            setKey(res.data)
            setEmail("")
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.message)
        })
    },[email,userType])
    const [key,setKey]=useState<string>("")
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(key);
            toast.success("Copied")
        } catch (error) {
          console.log('Failed to copy text to clipboard:', error);

        }
      };
    
    return (
        <>
        <Input
        type="text"
        placeholder="Enter Gmail"
        onChange={(e) => {setEmail(e.target.value)}}
        
        />
        <div className="mt-5">
        <select className="border-2 border-gray-300 rounded-lg p-2 w-full  focus:border-sky-500 focus:border-2 mb-2" onChange={(e)=>{setAuthType(e.target.value)}}>
        {AuthType.map((item) => (
            <option key={item.id} value={item.name}>
            {item.name}
            </option>
        ))}
        </select>
        </div>
        <Button
        label="Generate Key"
        onClick={handleSubmit}

        />
        {
            key===""?null:<div className="mt-5">
            <h1 className="text-2xl font-bold mb-5">Key</h1>
            <div className='flex'>
         <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full  focus:border-sky-500 focus:border-2 mb-2" value={key} readOnly/>
     
          
          <Button
        label="Copy"
        onClick={handleCopy}

          />

            </div>
            </div>
      }   
       
      
        </>
    )
}
export default ProductKey;