
export const getData = async () => {
  try{
   const res = await fetch("http://localhost:9000/posts");
   const data = await res.json();
   console.log(data);
   return data;
  }catch(error){console.log("oups error")}
              
}


export const postData = async (newMemory) => {
    let data = new FormData();
    data.append("img" ,newMemory.img);
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
  } 
  catch(err){ console.log(`oups error ${err}`)};

}


export const modifyData = async (memoryToModify) =>{
     let data = new FormData();
    data.append("img" ,memoryToModify.img);
    data.set("title" ,memoryToModify.title);
    data.set("description",memoryToModify.description);
    data.set("date",memoryToModify.date);
    data.set("like",memoryToModify.like);
    data.set("category",memoryToModify.category);
    try{
      const res = await fetch ("http://localhost:9000/"+memoryToModify._id, {
                method: 'PUT',
                body: data,
              })
              console.log(memoryToModify._id);
  const memoryModified = await res.json();
  console.log(memoryModified);
  return memoryModified ;
   }catch(err){ console.log(`oups error ${err}`)};

}

export const deleteData = async (memoryToModify) =>{
  try{
      const res = await fetch (`http://localhost:9000/${memoryToModify._id}`, {
             method: 'DELETE',
           })
           
      return res.status;
  }catch(err){ console.log(`oups error ${err}`)};

}




