import React from "react";
import Certification from "./ChildComponent/Certification";
import ColoredScrew from "./ChildComponent/ColoredScrew";
import Insulation from "./ChildComponent/Insulation";
import ExtraOptions from "./ChildComponent/ExtraOptions";

const Options = ()=> {
    return (
        <div className='tab-data-container tab-data-padding mt-0 option-tab mb-options-container'>
            <Certification/>
            <Insulation/>
            <ExtraOptions/>
            {/*<ColoredScrew/> */}
        </div>
    )
}

export default Options