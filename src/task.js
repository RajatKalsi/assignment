import task1 from "./task1";
import {useState,UseEffect,useRef,useContext,createContext,Provider} from 'react';
import Task1 from "./task1";

let userContext=createContext()
const Task=()=>{


const student=[
    {name:"Anshu",age:24,address:"Naraingarh"},
    {name:"Akshay",age:18,address:"Ambala"},
    {name:"Ashwani",age:36,address:"navipur"},
    {name:"Rohan",age:24,address:"kurukshetra"},
    {name:"Mohit",age:53,address:"jamta"},

]
const[input,setInput]=useState();
function open(){
    alert(<Task1/>)
}
    return(
        <>
    <h1>{student.map((item)=>{return(<li>
        My name is {item.name} and i am from {item.address} <button onClick={<Task1/>}>click</button>
    </li>)})}</h1>
        </>
    )
}

export default Task;