import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 flex gap-2">
      {props.users.map((elem, index) => (
        <RightCard key={index} id={index} img={elem.img} tag={elem.tag}/>
      ))}
    </div>
  )
}

export default RightContent
