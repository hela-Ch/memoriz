import React from 'react';
import {useParams} from 'react-router-dom';
import Memories from '../components/Memories';
import EmptyPage from './EmptyPage';

const CategoryFiltered = ({memories,inputSearch,setMemories}) => {
    const { id } = useParams();
    const MemoriesByCategory = memories.filter(memory => memory.category.toLowerCase() === id.toLowerCase());


    return(
       MemoriesByCategory.length > 0 ?
         <Memories memories = {MemoriesByCategory} inputSearch={inputSearch} setMemories={setMemories}/>  
         :
         <EmptyPage/>
    )  
}
export default CategoryFiltered;