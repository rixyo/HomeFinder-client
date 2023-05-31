"use client"
import React from 'react';
import { BsSearch } from 'react-icons/bs';

type SearchProps = {
    
};

const Search:React.FC<SearchProps> = () => {
    
    return (
        <div className='w-full mt-1 p-2 mr-5' >
        <BsSearch className='w-5 h-5 absolute mt-1 ml-1  text-gray-500'/>
        <form >

         <input   type="text"
         placeholder="Search"
         className="border-2 border-none  h-8 pr-3 pl-10 py-2 font-semibold place-holder-gray-500 text-black rounded-lg ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent w-full" 
         onChange={()=>{}}
         value=''
     
         />
        </form>
      

        </div>
    )
}
export default Search;