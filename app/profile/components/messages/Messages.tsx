import React from 'react';
import MessageItem from './MessageItem';

type MessagesProps = {
    messages:any[],
    
};

const Messages:React.FC<MessagesProps> = ({messages}) => {
    
    return(
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 border-2 '>
        {messages?.map((message,index)=>
        <MessageItem key={index} message={message}/>
        )}

        </div>
    )
}
export default Messages;