
import React from 'react'
import "./App.css";
import card from "./components/card"


const App = () => {
  return (
    <div>
       <div className="card">
      <h1>Sakshi Choudhary</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequatur officiis non aliquid impedit expedita voluptates quaerat quos, repellendus fuga quasi molestias libero iusto doloremque, culpa adipisci, distinctio nostrum. Quasi!
    </p>
       </div>
       {card()}
    </div>
  )
}

export default App
