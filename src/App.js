import React, {useEffect} from "react";
import './assets/css/app.min.css';
import Component from "./Components/Component";
import { useDispatch, useSelector } from "react-redux";
import { geDefaultBuildingData, setPricingData } from "./action";


const App = () => {
  if (!localStorage.access_token) {
    function receiver(e) {
    //Source URL
       if (e.origin !== "https://crm.senseicrm.com") return;
      localStorage.setItem("access_token", e.data.access_token);
    };
    if (window.addEventListener) {
      window.addEventListener("message", receiver, false);
    } else {
      window.attachEvent("onmessage", receiver);
    }
   
   }
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(geDefaultBuildingData()) 
  },[dispatch])

  return (
    <div className="product-wrapper-react">
      <Component/>
    </div>
  )
}

export default App;