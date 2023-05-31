import React, { useMemo } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
type HomeItemProps = {
    home:any,
};

const HomeItem:React.FC<HomeItemProps> = ({home}) => {
  const router = useRouter();

  const formatedNumber = useMemo(() => {
    if (home.price) {
      return home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return null;
  }, [home.price]);
  const formatSize = useMemo(() => {
    if(home.sqft){
        return home.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return null;
  }, [home.sqft]);
    
    return (
        <div className='flex flex-col  border-2  border-gray-300 p-5 cursor-pointer rounded-lg   my-5 mx-2 hover:border-gray-200' onClick={()=>router.push(`/${home.id}`)}>
        <div className='flex items-center'>
           <Image src={home.image} width={500} height={200} className='rounded-lg border-2 border-gray-200' alt={'images'}/>
        
        </div>
        <div className='flex '>
        <div className='flex flex-col'>
            <p className='text-xl font-bold'>${formatedNumber}</p>
            <p className='text-md  text-gray-700 break-all w-40'>{home.address}</p>
            <div className='flex gap-5'>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{home.beds}</span> beds</p>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{home.baths}</span> baths</p>
            <p className='text-sm text-gray-700'><span className='text-black font-semibold text-lg'>{formatSize}</span> sqft</p>
            </div>
        </div>
        <div className='border-2 border-blue-500 mt-16 ml-5 rounded-full p-2'>
            <p className='text-blue-500'>Message Agent</p>
        </div>

        </div>

        </div>
    )
}
export default HomeItem;