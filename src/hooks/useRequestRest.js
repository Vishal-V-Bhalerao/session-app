import { useEffect, useState } from 'react'
import axios from 'axios'
export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
}
/******** base URL for server *********/
const restUrl = "api/speakers";

/************************************/
export default function useRequestRest() {
    const [data, setData] = useState([])
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
            try {
                const result = await axios.get(restUrl);
                console.log(result)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(result.data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                console.log(e);
                setError(e)
            }
        }
        getDelayedData()
    }, [])

    /**
     * changing favorite flag for speaker with passed ID
     * used map to create new array with updated state
     * @param {object} updatedRecord - updated record object
     * @param {function} donCallBack -success callback function
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
                // constructing URl and passing data in put body
                await axios.put(`${restUrl}/${updatedRecord.id}`, updateRecord)
                // await new Promise((resolve) => setTimeout(resolve, 2000))
                if (donCallBack) {
                    donCallBack()
                }
            }
            catch (e) {
                // setData(originalData)
                if (donCallBack) {
                    donCallBack()
                }
                console.log(e)
            }
        }
        delayedUpdate()
    }

    /**
 * Insert new speaker in catalog
 * used map to create new array with updated state
 * @param {object} addedRecord - new record object
 * @param {function} donCallBack -success callback function
 */
    const insertRecord = function (addedRecord, donCallBack) {
        const originalData = [...data]
        const tData = [addedRecord, ...data]
        // async delay function to simulate service call
        async function delayedUpdate() {
            try {
                setData(tData)
                await axios.post(`${restUrl}/99999`, addedRecord)
                // await new Promise((resolve) => setTimeout(resolve, 2000))
                if (donCallBack) {
                    donCallBack()
                }
            }
            catch (e) {
                // setData(originalData)
                if (donCallBack) {
                    donCallBack()
                }
                console.log(e)
            }
        }
        delayedUpdate()
    }
    /**
* delete speaker record from list
* used map to create new array with updated state
* @param {object} deletedRecord -record object to be deleted
* @param {function} donCallBack -success callback function
*/
    const deleteRecord = function (deletedRecord, donCallBack) {
        const originalData = [...data]
        const tData = data.filter(function (res) {
            return res.id !== deletedRecord.id
        })
        // async delay function to simulate service call
        async function delayedUpdate() {
            try {
                setData(tData)
                // constructing URl and passing data in put body
                await axios.delete(`${restUrl}/${deletedRecord.id}`, deletedRecord)
                if (donCallBack) {
                    donCallBack()
                }
            }
            catch (e) {
                // setData(originalData)
                if (donCallBack) {
                    donCallBack()
                }
                console.log(e)
            }
        }
        delayedUpdate()
    }
    return { data, requestStatus, error, updateRecord, insertRecord, deleteRecord }
}