import { useState } from 'react'
export function useTheme(startTheme) {
    const [theme, setTheme] = useState(startTheme)
    function validateAndSetTheme(value) {
        if (value === 'dark') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return {
        theme,
        setTheme: validateAndSetTheme
    }
}