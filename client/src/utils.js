
/*
   ** get all the momries
*/
export const getData = async () => {
  try{
   const res = await fetch("http://localhost:9000/posts");
   const data = await res.json();
   return data;
  }catch(err){
    console.log(`oups error ${err}`)
  }              
}

/*
    ** get one memory
*/
export const getOneMemory = async (memoryId) =>{
    try{
        const res = await fetch(`http://localhost:9000/${memoryId}`);
        const data = await res.json();  
        return data;
    } catch(err){
        console.log(`oups error ${err}`)
    }
}

/*
     ** add a memory
*/
export const postData = async (newMemory) => {
    let data = new FormData();
    data.append("image" ,newMemory.img);
    data.set("title" ,newMemory.title);
    data.set("description",newMemory.description);
    data.set("date",newMemory.date);
    data.set("like", newMemory.like);
    data.set("category",newMemory.category);
  try{
    const res = await fetch ('http://localhost:9000', {
                  method: 'POST',
                  body: data,    
                })
    const newData = await res.json();
    return newData ;
  }catch(err){ 
    console.log(`oups error ${err}`)
  }
}

/*
    ** update a memory
*/    
export const modifyData = async (memoryToModify) =>{
    let data = new FormData();
    //check if the user change the image
    if(memoryToModify.hasOwnProperty('img')){
       data.append("image" ,memoryToModify.img);
    }
    data.set("like" ,memoryToModify.like);
    data.set("title" ,memoryToModify.title);
    data.set("description",memoryToModify.description);
    data.set("date",memoryToModify.date);
    data.set("category",memoryToModify.category);
    try{
      const res = await fetch (`http://localhost:9000/${memoryToModify._id}`, {
                method: 'PUT',
                body: data,
              })
      const memoryModified = await res.json();
      return memoryModified ;
   }catch(err){ 
     console.log(`oups error ${err}`)
   }

}

/*
     ** delete a memory
*/     
export const deleteData = async (memoryToModify) =>{
  try{
      const res = await fetch (`http://localhost:9000/${memoryToModify._id}`, {
             method: 'DELETE',
           })     
      return res.status;
  }catch(err){ 
    console.log(`oups error ${err}`)
  }
}




