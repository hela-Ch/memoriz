import React from 'react';
import {Link} from 'react-router-dom';

const EmptyPage = () => {
    return (
    
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find a memory </p>
          <p className="mb-8">But dont worry, you can create new ones anytime.</p>
          
          <Link to='/Create' className="px-4 inline py-2  text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Create a new memory</Link>
    </div>
      <div className="max-w-lg my-3">
      <img src="https://s2.svgbox.net/illlustrations.svg?ic=angler-fish&color=000000" width="300" height="300" alt=""/>
      </div>
    
  </div>

    )

}
export default EmptyPage;