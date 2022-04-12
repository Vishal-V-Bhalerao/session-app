import { useContext } from "react";
import { speakerContext } from "../context/SpeakerContext";
import { Button } from "react-bootstrap";

export function DeleteSpeaker() {
    const { speaker, deleteRecord } = useContext(speakerContext)

    return (
        <Button className="session w-100 delete-bar">
            <span className="padL2" >Delete Speaker</span>
        </Button>
        // <span className="session w-100 delete-bar">
        //     <a href="#" className="remSes" >
        //         <i onClick={(e) => {
        //             e.preventDefault();
        //             deleteRecord(speaker);
        //         }} >
        //             ...
        //         </i>
        //     </a>
        //     <span className="padL2" >Delete Speaker</span>
        // </span>
    )
}