import React, { createContext } from 'react'

const FoodContext = createContext()
const Context = ({children}) => {
  return (
    <>
    <FoodContext.Provider
    value={{}}>
        {children}
    </FoodContext.Provider>
    </>
  )
}

export {Context, FoodContext}