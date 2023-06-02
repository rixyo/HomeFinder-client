import React, { useMemo } from 'react';

type MessageItemProps = {
    message:any,
    
};

const MessageItem:React.FC<MessageItemProps> = ({message}) => {
  
    const formatedPrice = useMemo(() => {
        if (message.home.price) {
          return message.home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return null;
      }, [message.home.price]);
    return(
        <div className='flex flex-col items-center p-5 border-2 border-gray-400 hover:border-gray-200'>
           
                <h1 className='text-xl font-bold'>Property Information</h1>
                <p className='text-md  text-gray-700  mt-5'>{message.home.address}</p>
                <p className='text-md  text-gray-700 break-all w-40 '><span className='text-lg font-bold underline'>Price:</span>{formatedPrice}</p>
            
        
                <h1 className='text-xl font-bold'>Message</h1>
                <p className='text-md  text-gray-700 '>{message.message}</p>
                <p className='text-md  text-gray-700 break-all w-40 '><span className='text-lg font-bold underline'>Date: </span>{message.created_at.split("T")[0]}</p>

           
          
                <h1 className='text-xl font-bold'>Buyer Information</h1>
                <p className='text-md  text-gray-700 '>{message.buyer.name}</p>
                <p className='text-md  text-gray-700 underline hover:text-sky-400'>{message.buyer.email}</p>
                <p className='text-md  text-gray-700 underline hover:text-sky-400'>{message.buyer.phone}</p>

           
        </div>
    )
}
export default MessageItem;