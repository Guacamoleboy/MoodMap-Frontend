// Pathing
// _______
// src/components/shared/navbar/Navbar.jsx

function Navbar() {
    return (
        <nav className="navbar-wrapper">

            {/* Left */}
            <div className="navbar-left">
                <img src="/images/logo/logo-svg.svg" alt="MoodMap Logo" />
            </div>

            {/* Middle */}
            <ul className="navbar-middle">

                {/* Entry */}
                <li className="nav-entry">
                    <a href="#">Vores mission</a>
                </li>

                {/* Entry */}
                <li className="nav-entry has-dropdown">
                    <a href="#">
                        Til virksomheder <i className="fa fa-chevron-down" />
                    </a>
                    <ul className="dropdown">
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-bar-chart" />
                                </span>
                                Overblik
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-credit-card" />
                                </span>
                                Priser
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-folder-open" />
                                </span>
                                Cases
                            </a>
                        </li>
                    </ul>
                </li>

                {/* Entry */}
                <li className="nav-entry has-dropdown">
                    <a href="#">
                        API <i className="fa fa-chevron-down" />
                    </a>
                    <ul className="dropdown">
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-book" />
                                </span>
                                Docs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-lock" />
                                </span>
                                Auth
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-key" />
                                </span>
                                Access
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="dropdown-icon">
                                    <i className="fa fa-question-circle" />
                                </span>
                                F&Q
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>

            {/* Right */}
            <div className="navbar-right">
                <button className="moodmap-button l primary">Dashboard</button>
                {/*<button className="moodmap-button l secondary">Kontakt</button>*/}
            </div>

        </nav>
    )
}

export default Navbar