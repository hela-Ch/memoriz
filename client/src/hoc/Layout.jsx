import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
import React from 'react';

const Layout = ({children,inputSearch,handleInputSearch}) => {

    return (

        <div className="flex flex-wrap justify-evenly bg-gray-100 w-full min-h-screen">
         <Navbar/>

         <div className="w-10/12 flex flex-col ">
            <div className=" flex flex-col justify-between align-center"> 
                
                 <div>
                   <h1 className="text-3xl text-center text-red-400 text-pink-800 tracking-wide"> MEMORIZ </h1>
                </div>

                <div className="flex justify-between self-center mt-5">
                    <label htmlFor="search input" className=" mr-4 text-lg font-normal  underline "> Search :</label>
                    <input type="text" 
                           value={inputSearch} 
                           onChange={ e => handleInputSearch(e.target.value)}
                           className="bg-purple-white shadow rounded border-0 pl-3"
                           id="serach input" 
                           name="serach input"
                           placeholder="seach a memory ..."
                    />
                </div>

                <div className="text-gray-500 flex justify-end">    
                    <Link 
                        to='/create'
                        className="py-2 my-5 mx-5 px-2 bg-gray-30 shadow-inner  rounded-full  text-sm font-semibold border border-gray-200 hover:shadow-xl transition-all w-36  focus:outline-none"
                    >  
                        <svg className="h-4 px-1"  viewBox="0 0 36 36">
                            <path className="ng-tns-c17-1" d="M16 16v14h4V20z" fill="#240000"></path>
                            <path className="ng-tns-c17-1" d="M30 16H20l-4 4h14z" fill="#428511"></path>
                            <path className="ng-tns-c17-1" d="M6 16v4h10l4-4z" fill="#FBBC60"></path>
                            <path className="ng-tns-c17-1" d="M20 16V6h-4v14z" fill="#EA6300"></path>
                            <path className="ng-tns-c17-1" d="M0 0h36v36H0z" fill="none"></path>
                            </svg>
                    </Link>
                </div>
                
            </div> 
            <div>
                {children}
               
            </div>

   </div>
        
      </div>


    )


}

export default Layout;