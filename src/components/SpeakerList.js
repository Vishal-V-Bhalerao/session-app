import Speaker from './Speaker'
import ReactPlaceholder from 'react-placeholder/lib'
import useRequestSpeakers from '../hooks/useRequestSpeakers'
function SpeakerList({ showSessions }) {
    const { speakerData, isLoading, isError, error, updateFavorite } = useRequestSpeakers()
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