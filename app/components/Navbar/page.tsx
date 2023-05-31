
import React from 'react';
import LeftPart from './LeftPart/LeftPart';
import RightPart from './RightPart/RightPart';
import Search from './Search';



export default function NavigationBar() {
  return (
    
      <div className='hidden lg:block'>
        <div className='flex  border-2 border-gray-400 mt-2 rounded items-center gap-5'>
    <LeftPart/>
    <Search/>
    <RightPart/>

        </div>

    </div>
  )
}