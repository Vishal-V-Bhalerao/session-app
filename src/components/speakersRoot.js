import { useState } from "react"
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from './SpeakersToolbar';

export default function SpeakersRoot() {
    const [showSessions, setShowSessions] = useState(true)
    return (
        <div>
            <SpeakersToolbar showSessions={showSessions} setShowSessions={setShowSessions}></SpeakersToolbar>
            <SpeakerList showSessions={showSessions} ></SpeakerList>
        </div>
    )
}