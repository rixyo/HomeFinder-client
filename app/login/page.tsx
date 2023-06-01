"use client"
import React,{useState,useCallback} from 'react';
import axios from 'axios';
import Button from '@/app/components/Button';
import Input from '@/app/components/Input';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const page:React.FC = () => {
    const router=useRouter()
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const handleClick=useCallback(()=>{
        if(email===""||password==="") return
        axios.post("http://localhost:5000/auth/login",{email,password}).then((res)=>{
            localStorage.setItem("token",res.data)
            setEmail("")
            setPassword("")
            router.push("/profile")
            toast.success("Loged in")
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.message)
        })
    },[email,password])
    
    return (
        <div className='mt-5 p-5 xl:w-1/2 xl:ml-52 '>
         <div className="flex flex-col">
                    <h1 className="text-2xl font-bold mb-5">Login</h1>
                    <Input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {setPassword(e.target.value)}}
                        value={password}
                    />
            </div>
            <Button
                onClick={handleClick}
                label="Login"
                
            />
        </div>
    )
}
export default page;