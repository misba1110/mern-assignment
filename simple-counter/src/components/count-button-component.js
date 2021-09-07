import React from "react";
const component=({delta, handleclick})=>{

    const label= delta>0 ? `+${delta}`: `${delta}`;

    return(
        <button onClick={()=>handleclick(delta)} className="button">{label}</button>
    )
}
export default component;