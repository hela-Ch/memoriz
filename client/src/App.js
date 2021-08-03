import './App.css';
import  React ,{useEffect, useState} from "react";
import Layout from './hoc/Layout';
import Routes from './Routes';
import Loader from './components/Loader';
import {getData} from './utils'



const App = () => {
  
    const [memories,setMemories] = useState ([]);    
    const [successLoading,setSuccessLoading] = useState(false);
    const[inputSearch,setInputSearch] = useState("");

    useEffect(()=>
        getData().then(data => {
                                  setMemories(data);
                                  setSuccessLoading(true)
                      })
      
    ,[]);

    if(!successLoading){
        return (
            <Loader />
        )
    }else{
        return (
                <>
              
                  <Layout inputSearch={inputSearch}  handleInputSearch={setInputSearch}>
                      <Routes memories ={memories} inputSearch={inputSearch} setMemories={setMemories}/>
                  </Layout>
            
                </>
        )  
              
    }
}   
export default App;
