import Speaker from './Speaker'
function SpeakerList({ data, showSessions }) {
    return (
        <div className='container speaker-list' >
            <div className='row' >
                {data.map(function (speaker) {
                    return <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} ></Speaker>
                })}
            </div>
        </div>
    )
}

export default SpeakerList