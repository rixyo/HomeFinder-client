import { Tab } from '@/app/page';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type RecomandationProps = {
    tab:Tab
    selectedTab:boolean;
    setSelectedTab:(title:string)=>void;

    
};

const Recomandation:React.FC<RecomandationProps> = ({tab, selectedTab, setSelectedTab}) => {
    const router=useRouter()
    
    return (
        <div className='flex items-center    cursor-pointer mt-2  hover:opacity-75'   onClick={()=>router.push(tab.href)}>
        <div className='relative border-2 border-gray-300 rounded p-2'>
            <p className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 font-bold`}>{tab.title}</p>
            <Image src={tab.image as string} alt={tab.title} width={400} height={300}  />
        </div>

    </div>
    )
}
export default Recomandation;