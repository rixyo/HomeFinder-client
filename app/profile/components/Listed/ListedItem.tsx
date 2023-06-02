import React from 'react';
import Image from 'next/image'

type ListedItemProps = {
    home:any,
};

const ListedItem:React.FC<ListedItemProps> = ({home}) => {

    
    return (
        <div className='flex flex-col  border-2  border-gray-300 p-5 cursor-pointer rounded-lg '>
        <div className='flex items-center'>
        <Image src={home.image} width={500} height={200} className='rounded-lg border-2 border-gray-200' alt={'images'}/>
        </div>
        <div>
        <p className='text-md  text-gray-700 break-all w-40'>{home.address}</p>
        <p className='text-md  text-gray-700 break-all w-40'>{home.city}</p>
        </div>
        </div>
    )
}
export default ListedItem;