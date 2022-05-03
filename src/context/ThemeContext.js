import { useState, createContext } from "react"
import { useTheme } from "../hooks/useTheme"
export const themeContext = createContext()
// context for providing theme state to all app components
export function ThemeProvider({ children, startTheme }) {
    const { theme, setTheme } = useTheme(startTheme)
    return (
        <themeContext.Provider value={
            { theme, setTheme }
        }>
            {children}
        </themeContext.Provider>
    )
}