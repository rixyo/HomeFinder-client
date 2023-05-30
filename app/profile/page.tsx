"use client"
import React, { useEffect } from 'react';
import useCurrentUser from '../hooks/useCurrentUser';
import userRole from '../libs/userRole';
import { useRouter } from 'next/navigation';

type pageProps = {
    
};
export default function Profile({}: pageProps) {
    const {data}=useCurrentUser()
    const router=useRouter()
    const role = userRole()
    const gotoDeshBoard=()=>{
        router.push("/Deshboard")

    }
    useEffect(() => {
        const session = localStorage.getItem('token');
        if (!session) {
          router.push('/');
        }
      }, [router]);

    
    return (
        <div>
            <h1>Profile</h1>
            <p>{data?.email}</p>
            <p>{role}</p>
            {role==="ADMIN" && <button onClick={gotoDeshBoard}>DeshBoard</button>}
            <button onClick={()=>localStorage.removeItem("token")}>Logout</button>

          
        </div>
    )
}