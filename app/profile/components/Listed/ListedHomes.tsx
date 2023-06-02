import React from 'react';
import ListedItem from './ListedItem';

type ListedHomesProps = {
    listedHomes:any[],
    
};

const ListedHomes:React.FC<ListedHomesProps> = ({listedHomes}) => {
    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 border-2 '>
        {listedHomes?.map((home,index)=>
        <ListedItem key={index} home={home}/>
        )}

        </div>
    )
}
export default ListedHomes;