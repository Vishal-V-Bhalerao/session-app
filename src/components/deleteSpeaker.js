import { useContext } from "react";
import { speakerContext } from "../context/SpeakerContext";
import { Button } from "react-bootstrap";
// component handles delete operation of speaker, 
export function DeleteSpeaker() {
    const { speaker, deleteRecord } = useContext(speakerContext)
    return (
        <Button className="session-button w-100 delete-bar" variant="outline-secondary" onClick={() => deleteRecord(speaker)}>
            <span className="padL2" >Delete Speaker</span>
        </Button>
    )
}