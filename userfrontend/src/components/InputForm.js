
import React from 'react'
import { useState } from 'react';

//import DatePicker from "react-datepicker";



function InputForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [startDate, setDate] = useState("");
    //const [startDate, setStartDate] = useState(new Date());
    
    
     

    const handleClick=(e)=>{
        
        const numberAsInt = (parseInt(number));
        if (isNaN(numberAsInt)) {
            console.log("Not a valid number!");
            return;
        } 
        
        const user={name,address,number: numberAsInt, startDate}
        
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
      
        }).then(()=>{
          console.log("New user added") 
          console.log(user) 
          e.preventDefault();
          
        }).then(()=>{
            
         
        })
    }
  

    return ( 
       <div className="inputForm">
        <h1>Add user</h1>
        <form>
        <label>Name:
            <input
            type="text" 
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </label> 
        <label>Address:
            <input
            type="text" 
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </label> 
        <label>Phone number:
            <input
            type="text"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}    
            />
        </label>
        <label>Date:
            <input
            type="date"
           
            onChange= {(e) =>  setDate(e.target.value)}
            />
        </label>

        
        <button onClick={handleClick}>Add user</button>
        </form>
         <div>
          
          
          
        </div> 
        </div>  
    )

  }
  export default InputForm