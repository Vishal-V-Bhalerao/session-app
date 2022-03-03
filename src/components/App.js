import { data } from '../../SpeakerData'
import { useState } from "react"
import Header from './Header';
import SpeakersRoot from './SpeakersRoot';

function App() {
    const [theme, setTheme] = useState('light')
    return (
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} ></Header>
            <SpeakersRoot data={data} theme={theme} setTheme={setTheme} ></SpeakersRoot>
        </div>
    );
}

export default App