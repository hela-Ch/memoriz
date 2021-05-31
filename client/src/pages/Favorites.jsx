import React from 'react';
import Memories from '../components/Memories';

const Favorites = ({memories,inputSearch,setMemories})=> {
    const favoritesMemories = memories.filter( memory => memory.like);

    return (
        <>
        {<Memories memories ={favoritesMemories} inputSearch={inputSearch} setMemories={setMemories}/>}
        </> 
    )
   

}
export default Favorites;