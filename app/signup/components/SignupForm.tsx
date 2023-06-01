
import React, { useCallback, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type RealtorSignupFormProps = {
    isRealtor: boolean;
    
};


const SignupForm:React.FC<RealtorSignupFormProps> = ({isRealtor}) => {
    const router=useRouter()
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [phone,setPhone]=useState<string>("")
    const [productKey,setProductKey]=useState<string>("")

   
  const handleSubmmit=useCallback(()=>{
      console.log(name,email,password,phone,productKey)
    if(name===""||email===""||password===""||phone==="" || productKey==="") return
    try {
        
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup/REALTOR`,{name,email,password,phone,productKey}).then(()=>{
            setName("")
            setEmail("")
            setPassword("")
            setPhone("")
            setProductKey("")
            toast.success("Account created successfully")
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    } catch (error) {
        console.log(error)
    }

  },[name,email,password,phone,productKey])
  
    return(
        <>
      
        <div className="flex flex-col items-center justify-center w-full gap-5 border-2 mt-5 p-2 ">
            <Input
                type="text"
                placeholder="Name"
                onChange={(e) => {setName(e.target.value)}}
                value={name}
            />
              <Input
                type="text"
                placeholder="Phone Number"
                onChange={(e) => {setPhone(e.target.value)}}
                value={phone}
            />
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
           {isRealtor &&
            <Input
            type="text"
            placeholder="Product key"
            onChange={(e) => {setProductKey(e.target.value)}}
            value={productKey}
        />
           
           }  
            <Button
              
                onClick={handleSubmmit}
                label="Sign Up"

             
                
             />
              <div className='text-neutral-400 text-center mt-4' onClick={()=>router.push('/login')}>
            <p>Already have an account? <span className='text-sky-500 cursor-pointer hover:underline'>Login</span></p>
            </div>
        </div>
        </>
    )
}
export default SignupForm;