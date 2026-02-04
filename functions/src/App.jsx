import React from 'react'

const App = () => {
  function btnClick(){
    console.log('Button Is Clicked....');
    
  }
  return (
    <div>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App
