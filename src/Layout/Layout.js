import { ThemeProvider, themeContext } from "../context/ThemeContext"
import { useContext } from "react"
export function Layout({ startTheme, children }) {

    return (
        <ThemeProvider startTheme={startTheme}>
            <LayoutNoThemeProvider children={children}></LayoutNoThemeProvider>
        </ThemeProvider>
    )
}

function LayoutNoThemeProvider({ children }) {
    const { theme } = useContext(themeContext)
    return (
        <div>
            <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
                {children}
            </div>
        </div>
    )
}