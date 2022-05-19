import React from 'react';
import ReactDOM from 'react-dom/client';
import { useContext,Provider,createContext,useState } from 'react';
import Task from './task.js';
import Task1 from './task1';
import Task3 from './task3';
 


export const data=createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <> 
   
   {/* <App /> */}
 {/* <Task/>
<Task1/> */}
<Task3/>
    
    
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals