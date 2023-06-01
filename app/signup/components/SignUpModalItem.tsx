import React from 'react';
import { SignUpTab } from '../page';

type SignUpModalItemProps = {
    tab: SignUpTab,
    selectedTab: boolean,
    setSelectedTab: (title: string) => void
    
};

const SignUpModalItem:React.FC<SignUpModalItemProps> = ({tab,selectedTab,setSelectedTab}) => {
    
    return (
        <div className='flex flex-col items-center xl:justify-normal p-5 cursor-pointer' onClick={()=>setSelectedTab(tab.title)}>
        <div className='flex justify-between'>
            <p className={`${selectedTab?"border-b-4 border-red-500":""}`}>{tab.title}</p>
        </div>
      
    
       

    </div>
    )
}
export default SignUpModalItem;