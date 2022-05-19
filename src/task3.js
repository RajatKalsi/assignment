import React from 'react'
import Task from './task'
import Task1 from './task1'
import {useState,UseEffect,useRef,useContext,createContext,Provider} from 'react';

export let userContext=createContext()

const Task3=()=> {
    const[data,setData]=useState({name:"anshu",age:22,address:"Naraingarh"})
  return (
    <div>
    <userContext.Provider value={data}>
        <Task/>
        <Task1/>
        
</userContext.Provider>
    </div>
  )
}

export default Task3