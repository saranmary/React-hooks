import React,{useState,useEffect} from "react";
import BookList from "./data.js"
import Loading from "./loading.js"


function App(){

  const[loading, setLoading]=useState(false);
  
  useEffect(()=>
  {
    const time=setTimeout(()=>{
      setLoading(true);
    },2000);
  },[]);
    
     return(
    <>
      {
      loading ? (<BookList/>):(<Loading/>)
    }  
    </>
  )
  
}
export default App;