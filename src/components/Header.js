import { useContext } from "react";
import { themeContext } from "./../context/ThemeContext"
// contains website logo, name and login
function Header() {
    const divStyle = {
        backgroundImage: 'url("/images/banner.png")'
    };
    const { theme } = useContext(themeContext)
    return (
        <div className="padT4 padB4 background-ba header-container " style={divStyle}>
            <div className=" mobile-container" >
                <div className="d-flex justify-content-between padH20" >
                    <div>
                        {/* <img alt="SVCC Home Page"
                            src="/images/logo.png"
                        /> */}
                    </div>
                    <div className={
                        theme === "light" ? "header-text-light" : "header-text-dark"
                    }>
                        <h4 className="header-title" >
                            Silicon Valley Code Camp
                        </h4>
                    </div>
                    <div className={
                        theme === "light" ? "header-text-light" : "header-text-dark"
                    } >
                        Hello Mr. Smith &nbsp;&nbsp;
                        <span>
                            <a href="#">sign-out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;