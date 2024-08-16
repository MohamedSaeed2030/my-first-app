
import { useState } from "react";


export default function MyForm(){

// const [name,setName]=useState(""); 
// const [email,setEmail]=useState(""); 

const [formInputs,setFormInputs] = useState({name:"",email:"",age:"",areYouStudent :false,aboutYou:""});


    return (

        <div>
             <form onSubmit={(event)=>{event.preventDefault();
             console.log(formInputs);
            //  console.log(name,email);



            // setName(event.target.value)

             }}> 
                <label  >Name : 
                <input
                
                value = {formInputs.name} 
                onChange={(event)=>{
                setFormInputs({...formInputs, name: event.target.value});}}/>
 

                </label>
                
                <hr/>

                <label>Email : 

                <input
                value={formInputs.email} 
                onChange={(event)=>{setFormInputs({email:event.target.value, name: formInputs.name});}}/>
                </label>


                <hr/>
                <label>Age : 
                <input
                value={formInputs.age} 
                onChange={(event)=>{setFormInputs({...formInputs, age:event.target.value});}}/>

                </label>
                
                <hr/>

                <label>Are You Student :<input
                type="checkbox"
                checked={formInputs.areYouStudent} 
                onChange={(event)=>{setFormInputs({...formInputs, areYouStudent:event.target.checked});}}/>
                 </label>
                

                <hr/>

                <label >Write tow line about you : 
                <textarea
                value={formInputs.aboutYou} 
                onChange={(event)=>{setFormInputs({...formInputs, aboutYou:event.target.value});}}/>

                </label>
                
                <hr/>

                <label >Write tow line about you : 
                    
                <textarea
                 value={formInputs.aboutYou} 
                onChange={(event)=>{setFormInputs({...formInputs, aboutYou:event.target.value});}}/>
                </label>
                
                <hr/>
                <button>Submit</button>

                {/* <hr/> */}
                {/* <input type="submit">Submit</input> */}


            </form>



        </div>



 
    );
}