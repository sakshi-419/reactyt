import React, { createContext } from 'react'


export const ThemeDataContext = createContext()

export default function ThemeContext(props) {
  return (
    <div>
      <ThemeDataContext.Provider value ={'sakshi'}>
        {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}
