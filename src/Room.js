import React, { useState } from 'react';

function Room(){
 const [isLit,setLit] = useState(true);
 let [Age, setAge] = useState(27);
 let [isAge, setAge1] = useState(27);

    return (
        <div> 
      <div className={`room ${isLit? "On" : "Off"}`}>
         The Lit is  {isLit? 'On': 'Off'}
         <br/>
         <br/>
        <button onClick={()=>{
            console.log("button Press") 
            setLit(!isLit)}}>
         Switch Lit</button>
</div>
         <div className="plus">
           The age is {isAge} 
           <br/>
           <button onClick={()=>{setAge1(++isAge)}}>
               Increase Age </button> 
  </div>

         <br/>
         <div className="minus">

             The Age is {Age} 
             <br/>
             <button  onClick={()=>{setAge(--Age)}}>Decrease Age</button>
  </div>

    </div>   
    );
  };
  
  export default Room;