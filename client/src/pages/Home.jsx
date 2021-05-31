import React from 'react';
import Memories from '../components/Memories';
const Home = ({memories,inputSearch,setMemories}) => {
    return(
    
            <Memories memories={memories} inputSearch={inputSearch} setMemories={setMemories}/>
    )

}
export default Home;