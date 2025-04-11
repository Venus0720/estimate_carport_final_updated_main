import React, { useState } from "react";
import Position from "./ChildComponent/LeantoComponent";
import ChangeWallTab from "../../Common/ChangeWallTab";
import Wrap from "./ChildComponent/Wrap";



const Leantos = ()=> {
  const [isShowWrap, setIsShowWrap] = useState(false);

    return (
        <div className='tab-data-container'>
          <Position/>
          {
            isShowWrap ? <Wrap /> : 
            <div className="dw-add-cta mt-35" onClick={(e) => setIsShowWrap(true)}>
              <div className="custom-btn-2">
                <span className="icon-plus icon"></span>
                <span className="text" >Add Wrap</span>
              </div>
            </div>
          }
        </div>
    )
}

export default Leantos