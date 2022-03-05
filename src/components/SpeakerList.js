import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib'
import useRequestSpeakers, { REQUEST_STATUS } from '../hooks/useRequestSpeakers'
function SpeakerList({ showSessions }) {
    const { speakerData, requestStatus, error, updateFavorite } = useRequestSpeakers()
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
                                () => updateFavorite(speaker.id)
                            }></Speaker>
                    })}
                </div>
            </ReactPlaceholder>
        </div>
    )
}

export default SpeakerList