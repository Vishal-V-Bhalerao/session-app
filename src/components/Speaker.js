import { useState, useContext } from "react"
import { speakerFilterContext } from '../context/SpeakerFilterContext'
import { speakerContext, SpeakerContextProvider } from '../context/SpeakerContext'
import { DeleteSpeaker } from './deleteSpeaker'
function Session({ title, room }) {
    return (
        <span className='session w-100'>
            {title} <strong>Room: {room.name}</strong>
        </span>
    )
}

function SessionList() {
    //h-250
    const { speaker: { sessions } } = useContext(speakerContext)
    const { eventYear } = useContext(speakerFilterContext)
    return (
        <div className='sessionBox card custom-session-list-margin h-250'>
            {sessions
                .filter(session => session.eventYear === eventYear)
                .map(session => <Session {...session} key={session.id}></Session>)
            }
        </div>
    )
}

function ImageWithFallBack({ src, ...props }) {
    const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState(src);
    function onError() {
        if (!error) {
            setImgSrc("/images/speaker-99999.jpg")
            setError(true)
        }
    }

    return <img src={imgSrc} {...props} onError={onError} />

}

function SpeakerImage() {
    const { speaker: { id, first, last } } = useContext(speakerContext)
    return (
        <div className='speaker-img d-flex flex-row justify-content-center align-items-center h-300' >
            <ImageWithFallBack className='contain-fit'
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            >
            </ImageWithFallBack>
        </div>
    )
}

function SpeakerFavorite() {
    const { speaker, updateRecord } = useContext(speakerContext)
    const [inTransition, setInTransition] = useState(false)
    const donCallBack = () => {
        setInTransition(false)
    }
    return (
        <div className="action padB1" >
            <span onClick={() => {
                setInTransition(true)
                updateRecord({ ...speaker, favorite: !speaker.favorite }, donCallBack)
            }} >
                <i className={speaker.favorite === true ? 'fa fa-star orange' : 'fa fa-star-o orange'}></i>
                {' '} Favorite {' '}
                {inTransition ? <span className="fas fa-circle-notch fa-spin" ></span> : null}
            </span>
        </div>
    )
}

function SpeakerInfo() {
    const { speaker: { first, last, bio, company, twitterHandle, favorite } } = useContext(speakerContext)
    return (
        <div className='speaker-info' >
            <div className='d-flex justify-content-between mb-3'>
                <h3 className='text-truncate w-200' >
                    {first} {last}
                </h3>
            </div>
            <SpeakerFavorite favorite={favorite}></SpeakerFavorite>
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

function Speaker({ speaker, updateRecord, deleteRecord }) {
    const { showSession } = useContext(speakerFilterContext)
    // card-height card-shadow
    return (
        <SpeakerContextProvider speaker={speaker} updateRecord={updateRecord} deleteRecord={deleteRecord} >
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xs-12' >
                <div className='card  p-4 mt-4' >
                    <SpeakerImage ></SpeakerImage>
                    <SpeakerInfo ></SpeakerInfo>
                    {showSession ? <SessionList ></SessionList> : null}
                </div>
                <DeleteSpeaker></DeleteSpeaker>
            </div>
        </SpeakerContextProvider>
    )
}

export default Speaker