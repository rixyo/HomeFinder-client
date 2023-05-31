import React from 'react';
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {FaInstagram,FaPinterest,FaLinkedin,FaYoutube} from 'react-icons/fa'
import Image from 'next/image'




const Footer:React.FC = () => {
    
    return(
        <div className='bg-black w-full h-auto '>
            <div className='flex justify-center flex-col items-center'>

            <div className='flex '>
            <div className='flex  items-center mt-10 '>
                <AiOutlineFacebook className=' text-white text-3xl mr-5 cursor-pointer'/>
                <FiTwitter className=' text-white text-3xl mr-5 cursor-pointer'/>
                <FaInstagram className=' text-white text-3xl mr-5 cursor-pointer'/>
                <FaPinterest className=' text-white text-3xl mr-5 cursor-pointer'/>
                <FaLinkedin className=' text-white text-3xl mr-5 cursor-pointer'/>
                <FaYoutube className=' text-white text-3xl mr-5 cursor-pointer'/>

            </div>
            <div className='flex items-center mt-10 gap-5 cursor-pointer ml-60'>
                <Image src='/houselogic.jpg' width={100} height={100} alt="houselogic"/>
                <Image src='/houselogic.jpg' width={100} height={100} alt="houselogic"/>

            </div>
            </div>
            <div className='flex gap-5 mt-10 cursor-pointer'>
              
                    <p className='text-white text-lg font-bold'>About</p>
                    <p className='text-white text-lg font-bold'>Blog</p>
                    <p className='text-white text-lg font-bold'>Careers</p>
                    <p className='text-white text-lg font-bold'>Contact</p>
                    <p className='text-white text-lg font-bold'>Help</p>
                </div>
                <div className=' flex flex-col gap-5 mt-10 cursor-pointer'>
                    <h1 className='text-white text-lg font-bold'>Get The App</h1>
                    <div className='flex'>

                    <Image src='/appstore.png' width={90} height={90} alt="appstore" className='rounded'/>
                    <Image src='/googleplay.png' width={100} height={100} alt="googleplay"/>
                    </div>
                </div>
            </div>
           

        </div>
    )
}
export default Footer;