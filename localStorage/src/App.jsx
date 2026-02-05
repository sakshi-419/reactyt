import React from 'react'

const App = () => {

  const user = {
     username: 'Sakshi',
     age:21,
     city: 'Bihar'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const detail = JSON.parse(localStorage.getItem('user'))

   console.log(detail);

  
  
  
  return (
    <div>
      App
    </div>
  )
}

export default App
