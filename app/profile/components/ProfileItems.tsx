import React from 'react';
import { RealtorTab } from '../page';
import {useRouter} from 'next/navigation'

type ProfileItemsProps = {
    tab: RealtorTab;
    selectedTab: boolean;
    setSelectedTab: (title: string) => void;
    
    
};

const ProfileItems:React.FC<ProfileItemsProps> = ({tab,selectedTab,setSelectedTab}) => {
    const router=useRouter()
    
    return(
        <div className='flex items-center xl:justify-normal  cursor-pointer mt-2'  onClick={()=>setSelectedTab(tab.title)}>
        <div  className='p-1
           rounded-full 
           h-14
           w-14
           flex
           items-center
           hover:bg-slate-300 
           hover:bg-opacity-10 
           cursor-pointer 
        ' >
            <tab.icon className={`text-2xl ${selectedTab ? 'text-blck' : 'text-gray-500'} `}  title={tab.title}/>
           
        </div>
        <div  >
           {tab.title==="Home" && 
           <p className={`text-sm ${selectedTab ? 'border-b-4 border-red-500' : 'text-gray-500'}  font-semibold hidden md:block `} onClick={()=>router.push('/')} >{tab.title}</p>
           } 
           {tab.title!=="Home" && 
            <p className={`text-sm ${selectedTab ? 'border-b-4 border-red-500' : 'text-gray-500'}  font-semibold hidden md:block `} >{tab.title}</p>
           } 
        </div>

    </div>
    )
}
export default ProfileItems;