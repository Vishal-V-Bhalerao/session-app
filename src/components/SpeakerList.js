import Speaker from './Speaker'
import { data } from '../../SpeakerData'
import { useState } from 'react'
function SpeakerList({ showSessions }) {
    const [speakerData, setSpeakerData] = useState(data)

    const updateFavorite = function (speakerID) {
        const tSpeaker = speakerData.find((speaker) => speaker.id === speakerID)
        tSpeaker = { ...tSpeaker, favorite: !tSpeaker.favorite }
        const tSpeakerData = speakerData.map(function (speaker) {
            return speaker.id === speakerID ? tSpeaker : speaker
        })
        setSpeakerData(tSpeakerData)
    }
    return (
        <div className='container speaker-list' >
            <div className='row' >
                {speakerData.map(function (speaker) {
                    return <Speaker key={speaker.id}
                        speaker={speaker}
                        showSessions={showSessions}
                        updateFavorite={
                            () => updateFavorite(speaker.id)
                        }></Speaker>
                })}
            </div>
        </div>
    )
}

export default SpeakerList