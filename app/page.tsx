"use client"
import Image from 'next/image'
import { Input } from 'postcss'
import { useState } from 'react'
import axios from 'axios'
import useHomes from './hooks/useHomes'
import { useRouter } from 'next/navigation'
import {GridLoader} from "react-spinners"
import HomeFeed from './components/HomeFeed/HomeFeed'
import Hero from './components/Hero'



export default function Home() {
  const {data,isLoading} =useHomes()
  return (
    <>
 <main className='p-24'>

{isLoading? <div className="flex items-center justify-center h-full">
<GridLoader color="#3B82F6" />
</div>:
<HomeFeed data={data}/>
}

</main>
      
    </>
  )
}
