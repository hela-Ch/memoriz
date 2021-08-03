import React from 'react';
import Memory from './Memory.jsx';

const Memories = ({memories,inputSearch,setMemories}) => {

    return (
        <div className="flex flex-wrap justify-around">

           {memories.filter(elt => elt.description.includes(inputSearch) || elt.title.includes(inputSearch)).map(memory => 
                   
                   <Memory key={memory._id} memory={memory} setMemories={setMemories}/>
            )}

        </div>
    )

}
export default Memories;