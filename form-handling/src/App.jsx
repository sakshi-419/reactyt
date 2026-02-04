
import React from 'react'

const App = () => {

  const submitHandler =(e)=>{
    e.preventDefault(); 
       console.log('Form Submitted');
       
    }

  return (

    
    <div>
      <form onSubmit={(elem)=>{
         submitHandler(elem)
      }}>
        
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
