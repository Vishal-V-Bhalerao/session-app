import { useState, createContext } from "react"

export const themeContext = createContext()

export function ThemeProvider({ children, startTheme }) {
    const [theme, setTheme] = useState(startTheme)
    return (
        <themeContext.Provider value={
            { theme, setTheme }
        }>
            {children}
        </themeContext.Provider>
    )
}