import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  
  const[userData, setUserData] = useState([]);
  const[index, setIndex] = useState(1);

  const getData = async ()=>{
     
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=6`);

   setUserData(response.data);

   console.log(response.data);
   
     
  }

  useEffect(function(){
    getData()
  },[index])
  

  let printUserData = 'No User Available'
  if(userData.length >0){
    printUserData = userData.map(function(elem,idx){
       return  <div key={idx}>
        
       <a href={elem.url}>
    <img className='w-100 h-100 rounded-xl' src={elem.download_url} alt="" />
        <h2 className='text-white bg-black'>{elem.author}</h2>

       </a>
       </div>      
    })
  }
  return (
    <div onClick={getData} className='bg-black h-screen text-white'>
       <h1 className='fixed text-6xl bg-yellow-200 text-black'>{index}</h1>
       <div className='flex flex-wrap'>
          {printUserData}
       </div>
       <div className='flex justify-center items-center'>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-bold'onClick={()=>{
           if(index>1){
            setIndex(index-1)
            setUserData([])
            
           }
        }} >Prev</button>
        <h1 className='bg-amber-400 text-black px-4 py-2 font-bold ml-5'>Page {index}</h1>
        <button className='bg-amber-400 text-black rounded px-4 py-2 font-bold m-5' onClick={()=>{
           setIndex(index+1)
           setUserData([])
        }}>Next</button>
       </div>
       
    </div>
  )
}

export default App
