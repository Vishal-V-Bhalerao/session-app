import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib'
import { useContext } from "react"
import { speakerFilterContext } from '../context/SpeakerFilterContext'
import useRequestRest, { REQUEST_STATUS } from '../hooks/useRequestRest'
import { data } from '../../SpeakerData'
import { AddSpeaker } from '../components/AddSpeaker'

function SpeakerList() {

    const { searchText, eventYear } = useContext(speakerFilterContext)
    // getting states from custom hook
    // speakerData alias in spread data object<b
    const { data: speakerData, requestStatus, error, updateRecord, insertRecord, deleteRecord } = useRequestRest()
    // error handling
    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className='text-danger' >
                ERROR: <b>Loading speaker data failed</b>
            </div>
        )
    }
    return (
        <div className='container speaker-list' >
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <AddSpeaker insertRecord={insertRecord}></AddSpeaker>
                <div className='row' >
                    {speakerData
                        .filter((speaker) => {
                            return speaker.first.toLowerCase().includes(searchText) ||
                                speaker.last.toLowerCase().includes(searchText)
                        })
                        .filter(speaker => { // first loop
                            return speaker.sessions.find(session => session.eventYear === eventYear) // second loop
                        })
                        .map(function (speaker) {
                            return <Speaker key={speaker.id}
                                speaker={speaker}
                                updateRecord={updateRecord} deleteRecord={deleteRecord} ></Speaker>
                        })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakerList