
import React,{ useState } from "react";
import { LabeledInput,LabeledTextArea } from "./input-controls";

const UserLogin=(props)=>{
    //const [user,setUser]=useState(null);
  return (
  <form>
      <LabeledInput  id="email"/>
      <LabeledInput  id="password"/>
      <button type="submit"className="btn btn-primary">login</button>

  </form>
  );
}
export default UserLogin;