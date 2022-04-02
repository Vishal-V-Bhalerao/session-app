import { useState } from "react"
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from './SpeakersToolbar';
import { SpeakerFilterProvider } from './../context/SpeakerFilterContext'
export default function SpeakersRoot() {
    return (
        <SpeakerFilterProvider initialSessionState={true} initialEventYear='2019' >
            <div>
                <SpeakersToolbar></SpeakersToolbar>
                <SpeakerList></SpeakerList>
            </div>
        </SpeakerFilterProvider>
    )
}