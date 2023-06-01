"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import Recomandation from './components/RecomandationTabs';
import { BsPiggyBank, BsPieChart } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import LandingItems from './components/LandingItems';

export type Tab = {
  title: string;
  image?: string;
  href: string;
}
export type LandingTab = {
  title: string;
  icon: IconType;
  description: string;
  href?: string;
}
export default function Home() {
  const Tabs:Tab[] = [
    {
      title: 'Recommended for you',
      image: '/hero.jpeg',
      href: '/recommended'
    },
    {
      title: 'Buy',
      image: '/hero3.png',
      href: '/Buy'
    },
    {
      title: 'Rent',
      image: '/hero4.png',
      href: '/Rent'
    },
  ]
  const LandingTabs: LandingTab[] = [
    {
      title:'Find out how much you can afford',
      icon: BsPiggyBank,
      description: 'Use our affordability calculator to estimate how much you can comfortably spend on your new home.',
      href:"Try our affordability calculator"
    },
    {
      title:'Understand your monthly costs',
      icon: BsPieChart,
      description: 'Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.',
      href:"Calculate your monthly costs"
    },
    {
      title:'Get help with your down payment',
      icon:FaRegNewspaper,
      description: 'See if you qualify for down payment assistance to help make your dream of homeownership a reality.',
      href:"See if you qualify for down payment assistance"

    }
  ]
 

 const [selectedTab,setSelectedTab]=useState<string>("")
  return (
    <>
 <main className='p-2 flex flex-col'>
  <section className='flex flex-col items-center justify-center'>
    <div className='bg-blue-100 h-96 w-screen relative mt-10 border-2 border-gray-400 rounded p-5'>
     
      <Image src='/hero2.png' fill alt='hero' style={{ objectFit: 'cover' }} className='rounded-md bg-cover'/>
      <h1 className=" text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-bold w-screen p-5">
      Find Your Dream Home: <span className='underline decoration-cyan-700 text-blue-500'> Buy or Rent the Perfect Property Today!</span> 
    <span className="block text-lg text-blue-500  mt-5 font-bold">Discover a Wide Selection of Homes for Sale and Rent, and Experience the Joy of Finding Your Ideal Living 
    <span className='text-blue-500'> Space</span>
    </span>
  </h1>
 
    </div>
  </section>
  <div className='flex flex-col items-center'>
    <h1 className='text-3xl font-bold mt-10'>Discover how we can help</h1>
  <div className='grid sm:grid-cols-1 lg:grid-cols-3 items-center p-5 gap-5 '>
    {LandingTabs.map((tab, index) => (
      <LandingItems key={index} tab={tab}  />
    ))}
  </div>

  </div>
  <div className='flex flex-col items-center'>
    <h1 className='text-3xl font-bold mt-10'>Explore nearby</h1>
    <div className='grid sm:grid-cols-1 lg:grid-cols-3 p-5 gap-5'>
      {Tabs.map((tab, index) => (
        <Recomandation key={index} tab={tab} selectedTab={tab.title===selectedTab} setSelectedTab={setSelectedTab} />
      ))}

    </div>


  </div>



</main>
      
    </>
  )
}
