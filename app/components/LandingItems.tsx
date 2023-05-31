import React from 'react';
import { LandingTab } from '../page';

type LandingTabsProps = {
 
    tab: LandingTab;
    
};

const LandingTabs:React.FC<LandingTabsProps> = ({tab}) => {
    
    return (
        <div className='flex flex-col items-center xl:justify-normal p-5 cursor-pointer border-2 border-gray-300 hover:border-gray-200'>
            <div className='flex justify-between'>
                <p className='text-xl font-bold break-words w-52'>{tab.title}</p>
            <tab.icon className='text-blue-200 mt-5' size={100}/>
            </div>
            <p className='text-lg font-medium break-words'>{tab.description}</p>
            <p className='text-blue-500 font-bold mt-5 hover:underline'>{tab.href}</p>
           

        </div>
    )
}
export default LandingTabs;