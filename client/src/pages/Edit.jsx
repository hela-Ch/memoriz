import React, { useEffect,useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {getOneMemory} from '../utils';
import {modifyData} from '../utils';


const Edit = ({setMemories}) =>{
   
    const { id } = useParams();
    const history = useHistory();
    const[memory,setMemory] = useState({});
    const [newPicture,setNewPicture] = useState(false);
      
    useEffect(()=> {
        //console.log(useParams());
        getOneMemory(id).then(data => {
                              setMemory(data);
                              //memory.date = changeFormatDate(memory.date);
                              //console.log(memory);
                         })}
              ,[]);

   const handleChange=(event)=>{
       setMemory({...memory,[event.target.id]: event.target.value});
   }
   
   if(Object.keys(memory).length){
    return(      
     <div className="p-3 sm:p-12 rounded-3xl">
        
    <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-semibold mb-8 text-center uppercase tracking-wider ">Create a new memory</h1>
        <form  onSubmit = { async e => {
                                 e.preventDefault();
                                 const modifiedMemory = {
                                        title: memory.title,
                                        description: memory.description,
                                        date:memory.date,
                                        like: memory.like,
                                        category: memory.category,
                                        _id : memory._id
                                    }
                                    if(newPicture){
                                        modifiedMemory.img = memory.img;
                                    }
                                    //request to modify the memory
                                    modifyData (modifiedMemory)
                                      .then(data => setMemories(prevState => {
                                           prevState.splice(prevState.indexOf(data._id),1,data);
                                          return [...prevState];
                                          }));
                                    history.push('/');
                                    
                                 }
                          }
                encType = "multipart/form-data"
                className="flex flex-col justify-between"
        >
            
            <div className="relative z-0 w-full mb-5">
            <label htmlFor="MemoryTitle" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className=" pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    value={memory.title}
                    onChange={e =>  handleChange(e)}
                />
            </div>

            <div className="relative z-0 w-full mb-5">
                <label htmlFor="memoryDescription" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={memory.description}
                    onChange={e =>  handleChange(e)}
                    //placeholder=" "
                    className="pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

                >  
                </textarea>
            </div>

            <div className="relative z-0 w-full mb-5">
                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 pb-5 mb-3">Category</label>
                <select
                    name="category"
                    id="category"
                    value={memory.category}
                    onChange={e =>  handleChange(e)}
                    className="pt-5 block w-full px-0 mt-5  bg-transparent border-0 border-b-2  z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                    <option value="" disabled hidden></option>
                    <option value="Family&Friends">Family and Friends</option>
                    <option value="Goals">Goals Achievement</option>
                    <option value="Travel">Travel</option>
                </select>
            </div>

            
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="memoryDate" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={memory.date}
                        onChange={e =>  handleChange(e)}
                       
                        className="pt-5 pb-0 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="image" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 mb-2">Picture</label>
                    <input
                         type="file"
                         accept="image/*"
                         name="image"
                         id="image"
                         onChange={e => {
                                  setMemory({...memory,img :e.target.files[0]});
                                  setNewPicture(true);
                                  }
                        }
                        
                        className=" pt-5 pb-0 block w-full px-0 mt-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  border-gray-200"
                    />
            </div> 
           
            <div className="flex justify-between">
                    <button
                        id="submitBtn"
                        type="submit"
                        className=" shadow-inner px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-400 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                    >
                        Modifier
                    </button>

                    <button
                        id="resetBtn"
                        type="reset"
                        className=" shadow-inner px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-400 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
                        onClick= { e => {
                            e.preventDefault();
                            history.goBack(); 
                        }}
                     >
                        Annuler
                    </button>
            </div> 
        </form>
    </div>
</div>
)

}   
else{
    return(
    <p> Please wait ... </p>
    )
}
}

export default  Edit;