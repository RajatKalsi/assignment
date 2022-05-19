import {useState,UseEffect,useRef,useContext} from 'react';
import { userContext } from './task3';
import './task.css'

const Task1=()=>{
const data=useContext(userContext)
const[input,setInput]=useState()

function openForm(){
    document.getElementById("task4").style.display="block";
}

function closeForm(){
    document.getElementById("task4").style.display="none";
}

const[open, setOpen]=useState(false);

const handleform=()=>{
    setOpen(!open)
}
    return(
        <>
        
        <button onClick={handleform} id="open">openform</button>

        <div className="action" id='task4'>
         <form>
           <div className="div" id='closeform'>  <label htmlFor='info'>
             <div className="div1">
                 <input type="text" placeholder='Name' value={data.name}  />
                 </div>
                 <br></br>
                 <div className="div2">
                 <input type="text" placeholder='address' value={data.address} />
                 </div>
             </label>
             <button id='btn'>Submit</button>

             <button onClick={()=>{}} id="btn2">closeform</button>
            
             </div>
         </form>
         </div>
     
        </>
    )
}

export default Task1;
