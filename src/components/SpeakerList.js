import Speaker from './Speaker'
import { data } from '../../SpeakerData'
import { useEffect, useState } from 'react'
function SpeakerList({ showSessions }) {
    const [speakerData, setSpeakerData] = useState([])
    /**
     * @param {number} ms 
     * @returns promise which resolves itself after delay
     */
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    /**
     * Use effect to fetch speaker data after component is mounted
     * using async await to consume promise returned by delay function
     */
    useEffect(() => {
        async function getSpeakerData() {
            await delay(2000)
            setSpeakerData(data)
        }
        getSpeakerData()
    }, []) // 2nd arg [] ensures that use effect only run on first render only

    /**
     * changing favorite flag for speaker with passed ID
     * used map to create new array with updated state
     * @param {string} speakerID 
     */
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