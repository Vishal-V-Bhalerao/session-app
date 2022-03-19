import { useState, createContext } from "react"
import Header from './Header';
import SpeakersRoot from './SpeakersRoot';

export const themeContext = createContext()

function App() {
    const [theme, setTheme] = useState('light')
    return (
        <themeContext.Provider value={
            { theme, setTheme }
        } >
            <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
                <Header ></Header>
                <SpeakersRoot ></SpeakersRoot>
            </div>
        </themeContext.Provider>
    );
}

export default App