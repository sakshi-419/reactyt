
import React from 'react'
import { useState } from 'react';




const App = () => {

 const [title, setTitle] = useState(' ')

 const [detail, setDetails] = useState(' ')

 const [task, setTask] = useState([])

  const submitHandler = (e) => { 
    e.preventDefault();
   
    const copyTask = [...task];

    copyTask.push({title,detail})

    setTask(copyTask);
    console.log(task);
    
    setTitle('');
    setDetails('');
  }

  const deleteNote =(idx)=>{

     const copyTask = [...task];
     copyTask.splice(idx,1);
     setTask(copyTask);
     
  } 
  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center p-10 gap-10">

      {/* LEFT SIDE — FORM */}
      <form 
        onSubmit={submitHandler}
        className="w-1/2 bg-gray-900 p-8 rounded-xl flex flex-col"
      >
        <h1 className="text-2xl font-semibold mb-6">Add a Note</h1>

        <input 
          type="text" 
          placeholder="Enter Your Heading" 
          className="bg-black text-white p-4 mb-6 border-2 w-full rounded "
          onChange ={(e)=>{
           setTitle(e.target.value);
           }}
        />

        <input 
          type="text" 
          placeholder="Enter Details" 
          className="bg-black text-white p-4 mb-6 border-2 w-full rounded"
          value ={detail}
          onChange={(e)=>{
            setDetails(e.target.value);
            
          }}

        />

        <button className="bg-white text-black px-6 py-2 rounded border-2 hover:bg-gray-200 transition w-fit">
          Add Notes
        </button>
      </form>


      {/* RIGHT SIDE — NOTES */}
      <div className="w-1/2 bg-gray-900 p-8 rounded-xl">
        <h1 className="text-2xl font-semibold mb-6">Your Notes</h1>

        <div className="flex flex-wrap gap-5">
          {/* <div className="h-32 w-32 rounded-2xl bg-white"></div>
          <div className="h-32 w-32 rounded-2xl bg-white"></div>
          <div className="h-32 w-32 rounded-2xl bg-white"></div>
          <div className="h-32 w-32 rounded-2xl bg-white"></div>
          <div className="h-32 w-32 rounded-2xl bg-white"></div>
          <div className="h-32 w-32 rounded-2xl bg-white"></div> */}

          {task.map(function(elem,idx){
            return <div key ={idx} className="relative h-52 w-32 rounded-2xl bg-white text-black">
            
              <h3 className='leading-text-xl font-bold p-2'>{elem.title}</h3>
              <p className='mt-2 leading-tight tect-gray-200 p-2'>{elem.detail}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer bg-red-500 text-white py-1 mt-20 rounded'>Delete Note </button>
            </div>
          })}
        </div>
        
      </div>

    </div>
  )
}

export default App
