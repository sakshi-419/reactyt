
import React from 'react'
import { useState } from 'react';

const App = () => {

 const [title, setTitle] = useState('');

  const submitHandler =(e)=>{
    e.preventDefault(); 
       console.log('Form Submitted by', title);

       setTitle(' ');
       
    }

  return (

    
    <div>
      <form onSubmit={(elem)=>{
         submitHandler(elem)
      }}>
        
        <input type="text" placeholder='Enter Your Name' 
        value= {title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
