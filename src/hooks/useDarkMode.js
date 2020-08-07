import React from 'react'
import { useLocalStorage } from './useLocalStorage'

 const useDarkMode = value => {
    const [ darkMode, setDarkMode ] = useLocalStorage(value, false)

    return [darkMode, setDarkMode ]
}

export default useDarkMode
