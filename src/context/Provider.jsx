import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Contexto.Provider value={{darkMode, setDarkMode}}>
    {children}
    </Contexto.Provider>
  )
}

export default Provider