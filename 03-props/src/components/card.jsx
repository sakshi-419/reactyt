import React from 'react'

function Card(props){

       console.log(props);
  return (
   
        
     <div className="card">
              <img src={props.img} alt="" />
            <h1>{props.user}</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>View profile</button>
            </div>
  )
}

export default Card;
