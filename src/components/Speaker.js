function Session({ title, room }) {
    return (
        <span className='session w-100'>
            {title} <strong>Room: {room.name}</strong>
        </span>
    )
}

function SessionList({ sessions }) {
    //h-250
    return (
        <div className='sessionBox card custom-session-list-margin'>
            <Session {...sessions[0]}
            ></Session>
        </div>
    )
}

function SpeakerImage({ id, first, last }) {
    return (
        <div className='speaker-img d-flex flex-row justify-content-center align-items-center h-300' >
            <img className='contain-fit'
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            >
            </img>
        </div>
    )
}

function SpeakerInfo({ first, last, bio, company, twitterHandle }) {
    return (
        <div className='speaker-info' >
            <div className='d-flex justify-content-between mb-3'>
                <h3 className='text-truncate w-200' >
                    {first} {last}
                </h3>
            </div>
            <div>
                <p className="card-description">{bio}</p>
                <div className="social d-flex flex-row mt-4" >
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Speaker({ speaker, showSessions }) {
    const { id, first, last, sessions } = speaker;
    // card-height
    return (
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xs-12' >
            <div className='card  p-4 mt-4' >
                <SpeakerImage id={id} first={first} last={last}></SpeakerImage>
                <SpeakerInfo {...speaker}></SpeakerInfo>
                {showSessions ? <SessionList sessions={sessions} ></SessionList> : null}
            </div>
        </div>
    )
}

export default Speaker