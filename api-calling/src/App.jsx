import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await response.json();
    // console.log(data);

    // using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    //  console.log(response.data);
     setData(response.data)

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map(function(elem,idx){
           return <h3>Hello {elem.name}{idx}</h3>
      })}
    </div>
  )
}

export default App
