import { createContext, useState } from "react";
export const DarkModeContext = createContext();


export default function DarkMode () {
  const [darkMode,setDarkMode ] = useState(false)
  const changeMode = () =>{
      setDarkMode(!darkMode)
  }
  return (
    <div className='page' style={{backgroundColor : darkMode ? 'black':'white'}}>
      <button onClick={changeMode} className='dark-mode-button'>Dark Mode</button>

      <button className='light-mode-button' onClick={changeMode} >Light Mode</button>
    </div>
  )
}
