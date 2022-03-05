import { useEffect, useState } from 'react'

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

export default function useRequestData(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData)
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
        async function getDelayedData() {
            await delay(delayTime)
            try {
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e)
            }
        }
        getDelayedData()
    }, [])

    /**
     * changing favorite flag for speaker with passed ID
     * used map to create new array with updated state
     * @param {string} speakerID 
     */
    const updateRecord = function (updatedRecord, donCallBack) {
        const originalData = [...data]
        const tData = data.map(function (res) {
            return res.id === updatedRecord.id ? updatedRecord : res
        })
        // async delay function to simulate service call
        async function delayedUpdate() {
            try {
                setData(tData)
                await new Promise((resolve) => setTimeout(resolve, 2000))
                if (donCallBack) {
                    donCallBack()
                }
            }
            catch (e) {
                setData(originalData)
                if (donCallBack) {
                    donCallBack()
                }
                console.log(e)
            }
        }
        delayedUpdate()
    }

    return { data, requestStatus, error, updateRecord }
}