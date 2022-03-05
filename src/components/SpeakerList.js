import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib'
import useRequestData, { REQUEST_STATUS } from '../hooks/useRequestData'
import { data } from '../../SpeakerData'
function SpeakerList({ showSessions }) {
    // getting states from custom hook
    // speakerData alias in spread data object
    const { data: speakerData, requestStatus, error, updateRecord } = useRequestData(2000, data)
    // error handling
    if (requestStatus === REQUEST_STATUS.FAILURE) {
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
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className='row' >
                    {speakerData.map(function (speaker) {
                        return <Speaker key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            updateFavorite={
                                () => { updateRecord({ ...speaker, favorite: !speaker.favorite }) }
                            }></Speaker>
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakerList