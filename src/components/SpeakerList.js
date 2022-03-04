import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib'
import { data } from '../../SpeakerData'
import { useEffect, useState } from 'react'
function SpeakerList({ showSessions }) {
    const [speakerData, setSpeakerData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')
    /**
     * @param {number} ms 
     * @returns promise which resolves itself after delay
     */
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    /**
     * Use effect to fetch speaker data after component is mounted
     * using async await to consume promise returned by delay function
     * 2nd arg [] ensures that use effect only run on first render only
     */
    useEffect(() => {
        async function getSpeakerData() {
            await delay(2000)
            try {
                setIsLoading(false)
                // throw 'Internal server error'
                setIsError(false)
                setSpeakerData(data)
            }
            catch (e) {
                setIsLoading(false)
                setIsError(true)
                setError(e)
            }
        }
        getSpeakerData()
    }, [])

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
    if (isError) {
        return (
            <div className='text-danger' >
                ERROR: <b>Loading speaker data failed : {error}</b>
            </div>
        )
    }
    return (
        <div className='container speaker-list' >
            <ReactPlaceholder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={!isLoading}
            >
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
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakerList