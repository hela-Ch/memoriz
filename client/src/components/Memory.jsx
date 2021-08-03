import noImage from '../unnamed.png';
import React from 'react';
import {Link} from 'react-router-dom'
import {modifyData,deleteData} from '../utils';

const changeFormatDate = (stringDate)=>{
    const newDate = stringDate.split('/').join('-');
    return newDate;
}

const Memory = ({memory,handleChangeOnMeories,setMemories}) => {
   
    return (
        <div className="max-w-xs flex flex-col rounded-lg overflow-hidden shadow-lg my-2 ">
               <div className=" relative h-15">
                    <div className="absolute top-0 right-0 ">
                        <svg 
                                className = "ico"
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24"
                               
                                onClick = { async() => {
                                                 memory.like = !memory.like;
                                                 const memoryModified = await modifyData(memory);
                                                  setMemories(prevState => {
                                                                                prevState[prevState.indexOf(memory)] = {...memoryModified } ;
                                                                                return [...prevState];
                                                                            }
                                                             )
                                                                     
                                                       
                            /*like /dislike the memory */             
                                } }     
                            >
                        <path 
                                fill= {memory.like? "#C62828" : "white"}
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                            </svg>
                    </div>  
                    {memory.img && memory.img !== "undefined" ?
                        <img 
                              src={memory.img.url}
                              alt={memory.title}
                              className="h-15 w-full"
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        /> : <img src={noImage} alt="no photo added"/> }
                     
                </div>
                
                <div className="py-4 flex justify-between">
                    <div >
                       <h2 className="font-bold text-xl pl-6 "> {memory.title} </h2> 
                       <p className="text-grey-darker text-base  pl-4">
                        {memory.description}
                       </p>
                    </div>

                    <div className="flex item-center justify-center">
                           {/*redirection to the edit page*/}           
                        <Link 
                              to = {`/edit/${memory._id}`}
                              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >     
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                        </Link>

                         <div 
                                className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                              
                                onClick={async() => {
                                    
                                    //delete a memory
                                    const data = await deleteData(memory);
                                    data === 200 && setMemories(prevState => {
                                                                     console.log(prevState);
                                                                     const newState =prevState.filter(elt => elt._id !== memory._id);
                                                                     return [...newState];

                               })}}

                         >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                         </div>
                    </div>  

                </div>

                <div className="px-5 py-4 flex justify-between">
                        <span className="inline-block shadow-inner bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#{memory.category}</span>
                        <span className=" underline inline-block bg-gray-100 rounded-full px-3 py-1 text-sm  text-grey-darker mr-2">{new Date(changeFormatDate(memory.date)).toLocaleDateString("en-GB")}</span>
                        
                </div>
         </div>
             
    )


}
export default Memory ;

