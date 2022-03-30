import { useState, createContext } from "react"

export const themeContext = createContext()

export function Layout({ startTheme, children }) {
    const [theme, setTheme] = useState(startTheme)
    return (
        <themeContext.Provider value={
            { theme, setTheme }
        }>
            <div>
                <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
                    {children}
                </div>
            </div>
        </themeContext.Provider>
    )
}