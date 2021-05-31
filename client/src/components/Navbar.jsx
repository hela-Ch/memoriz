import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
     
     <div className="w-2/12  rounded p-1 shadow-lg bg-white ">
        <ul className=" text-sm flex flex-col justify-between h-full fixed">
            <li>
                <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-100 bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span className="lg:inline hidden">HOME</span>
                </Link>

            </li>
            <li>

                <Link to="/category/Goals" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                    <img src="https://img.icons8.com/fluent/48/fa314a/financial-success.png" width="30px" alt="goals"/>
                    </span>
                    <span className="lg:inline hidden">Success</span>
                </Link>

            </li>
            <li>

                <Link to="/category/Family&Friends" className="flex flex-wrap items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                    <img src="https://img.icons8.com/clouds/100/fa314a/dancing-party.png" width="40px" alt="family and friends"/>
                    </span>
                    <span className="lg:inline hidden ">Family & Friends</span>
                </Link>

            </li>
            <li>

                <Link to="/category/Travel" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                    
                    <img src="https://s2.svgbox.net/illlustrations.svg?ic=travel&color=000" width="32" height="32" alt="travel"></img>
                    </span>
                    <span className="lg:inline hidden">Travel</span>
                </Link>

            </li>
            <li>

                <Link to="/favorites" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className=" text-gray-600">
                    <img src="https://img.icons8.com/metro/26/fa314a/filled-like.png" alt="favorites"/>
                    </span>
                    <span className="lg:inline hidden">Favorites</span>
                </Link>

            </li>
            <li>

                <Link to="/login" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </span>
                    <span className="lg:inline hidden">Login</span>
                </Link>

            </li>

        </ul>
    </div>
)
}


export default Navbar;