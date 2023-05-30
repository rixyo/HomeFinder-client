import useHomes from '@/app/hooks/useHomes';
import React from 'react';
import {MoonLoader} from "react-spinners"
import HomeItem from './HomeItem';

type HomeFeedProps = {
    data:any[],
    
};

const HomeFeed:React.FC<HomeFeedProps> = ({data}) => {

   
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 border-2 '>
        {data?.map((home,index)=>
        <HomeItem key={index} home={home}/>
        )}

        </div>
    )
}
export default HomeFeed;