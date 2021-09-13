
import React,{ useState } from "react";
import { LabeledInput } from "./input-controls";

const BookReg=(props)=>{
    return(
        <form>
            <LabeledInput id="name"/>
            <LabeledInput id="email"/>
            <LabeledInput  id="password"/>
            <LabeledInput id="phone"/>
            <button type="submit" className="btn btn-primary">save</button>
        </form>
    )

}
export default BookReg;