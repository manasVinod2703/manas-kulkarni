import React,{useEffect, useState} from "react";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import { useAppContext } from "./context/appContext";

function App() {

  const {isLoading} = useAppContext();

  const [load,setLoad] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
       setLoad(false)
    },4000)
  },[])

  if(load){
    return <Loading />
  }
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
