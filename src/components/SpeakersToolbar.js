
import { useContext } from "react"
import { themeContext } from "./../context/ThemeContext"
import { speakerFilterContext } from '../context/SpeakerFilterContext'
function SpeakersToolbar() {
    // getting themContext using useContext hook
    const {
        showSession,
        setShowSession,
        eventYear,
        setEventYear,
        searchText,
        setSearchText,
        EVENT_YEAR
    } = useContext(speakerFilterContext)
    const { theme, setTheme } = useContext(themeContext)
    return (
        <section className="toolbar dark-theme-header" >
            <div className="container" >
                <div className="justify-content-between" >
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row align-items-center">
                            <b>Show Sessions &nbsp; &nbsp;</b>
                            <label className="fav" >
                                <input
                                    onChange={(event) => {
                                        console.log(event.target.checked)
                                        setShowSession(event.target.checked)
                                    }}
                                    type="checkbox"
                                    checked={showSession}
                                ></input>
                                <span className="switch" ></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0" >
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select
                                    className="form-control theme"
                                    value={theme}
                                    onChange={(event) => {
                                        setTheme(event.target.value)
                                    }}
                                >
                                    <option value="light">Light</option>
                                    <option value="dark" >Dark</option>
                                </select>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row" >
                            <div className="input-group">
                                <input type="text" className="form-control" value={searchText} placeholder="Search..."
                                    onChange={(event) => {
                                        setSearchText(event.target.value)
                                    }}
                                />
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </li>
                        <li className="d-flex flex-column flex-md-row" >
                            <strong>Year</strong>
                            <label className="dropmenu" >
                                <select className="form-control" value={eventYear}
                                    onChange={({ currentTarget }) => {
                                        console.log('year :', currentTarget.value)
                                        setEventYear(currentTarget.value)
                                    }}>
                                    {
                                        EVENT_YEAR.map((year) => <option value={year} key={year}>{year}</option>)
                                    }
                                </select>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpeakersToolbar