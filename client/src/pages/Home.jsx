import React from 'react';
import Memories from '../components/Memories';
import EmptyPage from './EmptyPage';
const Home = ({memories,inputSearch,setMemories}) => {
    return (
        (memories.length > 0 ? 
  
            <Memories memories={memories} inputSearch={inputSearch} setMemories={setMemories}/>
            : 
            <EmptyPage/>
        )
    )
}
export default Home;