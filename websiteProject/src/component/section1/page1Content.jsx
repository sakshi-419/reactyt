import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Page1Content = (props) => {
  return (
    <div className="py-10 flex justify-between px-16 h-[90vh]">
      <LeftContent />
      <RightContent users={props.users} />
      

    </div>
  )
}

export default Page1Content
