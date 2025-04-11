import React, { useState ,useEffect } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (url) => {
const [data , setdata] = useState([])

useEffect(()=>{

},[])

  return (
    <div>
      <h1>Parent Component</h1>    
     
    </div>
  );
};

export default ParentComponent;