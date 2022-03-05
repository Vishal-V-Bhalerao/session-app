import { data } from '../../SpeakerData'
import { useEffect, useState } from 'react'

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

export default function useRequestSpeakers() {
    const [speakerData, setSpeakerData] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [isError, setIsError] = useState(false)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
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
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setSpeakerData(data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
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

    return { speakerData, requestStatus, error, updateFavorite }
}