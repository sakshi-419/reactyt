import React from 'react'

const RightCard = (props) => {
  return (
    <div className="w-60 m-3 rounded-3xl overflow-hidden relative">
      
      {/* Image */}
      <img
        src={props.img}
        alt={props.tag}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between bg-black/30">

        <h2 className="bg-gray-300 rounded-full font-bold text-black w-6 h-6 text-sm flex items-center justify-center">
          {props.id+1}
        </h2>

        <p className="text-sm text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
git
        <div className="flex gap-2">
          <button className="bg-blue-500 rounded-full text-white px-4 py-2 text-sm mr-5">
            {props.tag}
          </button>

          <button className="bg-blue-500 rounded-full text-white p-2">
            <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default RightCard
