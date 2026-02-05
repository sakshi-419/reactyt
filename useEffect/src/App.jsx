
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [num , setNum] = useState(0)
  const [num2 , setNum2] = useState(0)
  useEffect(function(){
    console.log('Use effe t is running....');
  },[])

  return (
    <div>
      <h1>{num}</h1>
      <h1>number 2 : {num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
        setNum2(num2+10)
      }}>Click</button>
    </div>
  )
}

export default App
