import React, { createContext, useState, useContext } from 'react'

const CountContext = createContext()

export default function CountProvider({children}){
  const [Count, setCount] = useState(0)

  return(
    <CountContext.Provider 
      value={{
        Count,
        setCount
      }}
    >
      {children}
    </CountContext.Provider>
  )
}

export function useCount(){
 const context =  useContext(CountContext)
 if (!context) throw console.error("UseCount must e used within a countProvider");
 const {Count, setCount} = context
 return{ Count, setCount}


}