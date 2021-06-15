import React, { useRef, useState } from 'react';
import './Header.css'
import iconLight from '../../assets/aMyIcon-light.png';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

function Header() {
    let match = useRouteMatch();
    let location = useLocation();

    let homeUrl = match.url;
    let myPinterestUrl = match.url + 'myPinterest';

    const myHam = useRef(null);
    const [nav, setNav] = useState(false);

    function isActive(url) {
        if (typeof url === 'string' || url instanceof String)
            return url.localeCompare(location.pathname) === 0 ?
                "header_link_current_page" : "";
        return "";
    }

    function handleHamClick(e) {
        setNav(!nav)
    }

    return (
        <div id="header" className="header">
            <nav className="header_container">
                <div className="header_left">
                    <img id="header_logo" src={iconLight} alt="Logo" className="small_icon_i"></img>
                </div>
                <div className="hamburger_container">
                    <div className="hamburger" ref={myHam} onClick={handleHamClick}>
                        <div className="first_line hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                        <div className="hamburger_line">
                        </div>
                    </div>
                </div>
                <div className={`header_right ${nav ? 'header_right_active' : ''}`}>
                    <Link to={homeUrl} className={isActive(homeUrl)} onClick={handleHamClick}>
                        HOME
                    </Link>
                    <Link to={myPinterestUrl} className={isActive(myPinterestUrl)} onClick={handleHamClick}>
                        PROJECTS
                    </Link>
                    < a href="https://google.com.hk">CONTACT</a>
                    <div className="nav_bar_cross" onClick={handleHamClick}>X</div>
                </div>
            </nav>
        </div>
    );
}

export default React.memo(Header);