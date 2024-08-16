import {useState} from "react";



// var name ="Mohamed"

export default function MyButton(){
const [name , setName] = useState("ahmed");


function buttononClicked(){
    if(name == "Medo"){

        setName("ahmed");
    }
    else
        setName("Medo");
    }
        

    

return(

    <>
    
    <button onClick={buttononClicked}>Click</button>
    <h1>{name}</h1>
    
    </>
 
);

}
