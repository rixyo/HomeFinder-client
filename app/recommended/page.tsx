"use client"
import React from 'react';
import { GridLoader } from 'react-spinners';
import HomeFeed from '../components/HomeFeed/HomeFeed';
import useHomes from '../hooks/useHomes';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    const {data,isLoading}=useHomes()
    console.log(data)
    
    return (
        <main className='p-24'>


{isLoading? <div className="flex items-center justify-center h-full">
<GridLoader color="#3B82F6" />
</div>:
    <HomeFeed data={data}/>
}

        </main>
    )
}
export default page;