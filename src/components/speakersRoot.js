import { useState } from "react"
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from './SpeakersToolbar';

export default function SpeakersRoot({ data, theme, setTheme }) {
    const [showSessions, setShowSessions] = useState(true)
    return (
        <div>
            <SpeakersToolbar showSessions={showSessions} setShowSessions={setShowSessions} theme={theme} setTheme={setTheme} ></SpeakersToolbar>
            <SpeakerList data={data} showSessions={showSessions} ></SpeakerList>
        </div>
    )
}