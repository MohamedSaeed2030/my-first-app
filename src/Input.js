import { useState } from "react";



export default function Input(){

const [inputValu,setInputValue] = useState("");

function handelInput(event){
setInputValue(event.target.value);

}
    return(
       <span>
          <label>Enter Your Name: </label>
          <input
          value={inputValu}
          onChange={handelInput}></input>
       
       </span>
     
    );
}