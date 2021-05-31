import React from 'react';
import { useReducer } from 'react';
import{useHistory} from 'react-router-dom';
import {postData} from '../utils';

const reducer = (state,action) => {
    switch(action.type){
        case "handleTitle": 
                    return {...state,title: action.value,errorTitle: false } 
        case "handleDescription":
                    return {...state,description: action.value, errorDescription:false} 
        case "handleCategory":
                    return {...state,category: action.value,errorCategory: false } 
        case "handleDate":
                    return {...state,date: action.value,errorDate: false } 
        case "handlePictures":
                    return {...state,picture: action.value, errorPicture:false} 
        case "Errors":
                    return {...state,...action.payload}
        default:
                    throw new Error("action not found sorry")	

    }

}

const Create = ({ setMemories}) => {

    const initialState = {
        title:"",
        descrption: "",
        category:"",
        date:"",
        picture: null ,
        errorTitle: false,
        errorCategory: false,
        errorDate: false,
        errorDescription: false,
        errorPicture: false
    }

    const [state , dispatch] = useReducer(reducer,initialState);
    const history = useHistory();

return (

    <div className="p-3 sm:p-12 rounded-3xl">
    <div className="mx-auto max-w-md px-6 py-10 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-semibold mb-8 text-center uppercase tracking-wider ">Create a new memory</h1>
        <form  onSubmit = { async e => {
                                 e.preventDefault();
                                 //console.log(state.picture);
                                 if(!state.title || !state.date ||!state.category|| !state.description||!state.picture){
                                     dispatch({type:"Errors",payload: {
                                        errorTitle: !state.title,
                                        errorCategory: !state.date ,
                                        errorDate: !state.category,
                                        errorDescription: !state.description,
                                        errorPicture: !state.picture
                                     }})
                                    return ; 
                                 }else{
                                    const newMemory = {
                                        title: state.title,
                                        description: state.description,
                                        date: new Date(state.date).toLocaleDateString("en-GB"),
                                        like: false,
                                        category: state.category,
                                        img: state.picture
                                    }
                                    postData(newMemory)
                                      .then(data => setMemories(prevState => [...prevState,data]));
                                    history.push('/');
                                 }
                          }}
                encType = "multipart/form-data"
                className="flex flex-col justify-between"
        >
            
            <div className="relative z-0 w-full mb-5">
            <label htmlFor="task" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Title</label>
                <input
                    type="text"
                    name="memoryTitle"
                    id="MemoryTitle"
                    className=" pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    value={state.title}
                    onChange={e => dispatch({type:"handleTitle" , value: e.target.value})}
                />
                
                {state.errorTitle && <span className="text-sm text-red-600">A memory title is required</span>}
            </div>

            <div className="relative z-0 w-full mb-5">
                <label htmlFor="description" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
                <textarea
                    name="memoryDescription"
                    id="memoryDescription"
                    value={state.description}
                    onChange={e => dispatch({type:"handleDescription" , value: e.target.value})}
                    placeholder=" "
                    className="pt-5 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"

                >     
                </textarea>
                {state.errorDescription && <span className="text-sm text-red-600">Description requise</span> }
            </div>

            <div className="relative z-0 w-full mb-5">
                <label htmlFor="select" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 pb-5 mb-3">Category</label>
                <select
                    name="select"
                    value={state.category}
                    onChange={e => dispatch({type:"handleCategory" , value: e.target.value})}
                    className="pt-5 block w-full px-0 mt-5  bg-transparent border-0 border-b-2  z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                    <option value="" disabled hidden></option>
                    <option value="Family&Friends">Family and Friends</option>
                    <option value="Goals">Goals Achievement</option>
                    <option value="Travel">Travel</option>
                </select>
                {state.errorCategory && <span className="text-sm text-red-600">You have to choose a category</span>}
            </div>

            
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="deadline" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Date</label>
                    <input
                        type="date"
                        name="emoryDate"
                        id="memoryDate"
                        value={state.date}
                        onChange={e => dispatch({type:"handleDate" , value: e.target.value})}
                       
                        className="pt-5 pb-0 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                    />
                   {state.errorDate &&<span className="text-sm text-red-600">Date is required</span>}
            </div>
            <div className="relative z-0 w-full mb-5">
                <label htmlFor="task" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 mb-2">Picture</label>
                    <input
                         type="file"
                         accept="image/*"
                         //multiple={false} 
                         onChange={e => dispatch({type:"handlePictures" , value:e.target.files[0]})}
                         name="img"
                         id="img"
                        
                        className=" pt-5 pb-0 block w-full px-0 mt-2 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  border-gray-200"
                    />
                    {state.errorPicture &&<span className="text-sm text-red-600">Picture is required</span>}
            </div> 
           
            <div className="flex justify-between">
                    <button
                        id="submitBtn"
                        type="submit"
                        className=" shadow-inner px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-400 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                    >
                        Ajouter
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
export default Create ;