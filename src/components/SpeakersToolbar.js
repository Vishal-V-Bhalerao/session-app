
import { useContext } from "react"
import { themeContext } from "./../Layout/Layout"
function SpeakersToolbar({ showSessions, setShowSessions }) {
    // getting themContext using useContext hook
    const { theme, setTheme } = useContext(themeContext)
    return (
        <section className="toolbar dark-theme-header" >
            <div className="container" >
                <div className="justify-content-between" >
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Sessions &nbsp; &nbsp;</b>
                            <label className="fav" >
                                <input
                                    onChange={(event) => {
                                        console.log(event.target.checked)
                                        setShowSessions(event.target.checked)
                                    }}
                                    type="checkbox"
                                    checked={showSessions}
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
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpeakersToolbar