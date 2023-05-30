import React from 'react';
import Image from 'next/image';


const Hero:React.FC = () => {
    
    return (
        <div className=""> 
     
        <div className="bg-hero-pattern  bg-cover bg-center w-full ">
            <Image src="/hero.jpg" alt="hero" width={1000} height="200" objectFit="cover" quality={100}/>
        </div>
       
        </div>
    
    )
}
export default Hero;