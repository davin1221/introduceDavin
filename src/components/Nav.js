import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Nav = () => { 

    return <nav className="Nav">
        <div className="logo">
            Davin
        </div>

        <div className="full-width-nav">
            <ul>
                <li>About</li>
                <li>Skill</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

            <div className="mode-btns">
                <FontAwesomeIcon icon={faSun} />
            </div>
        </div>
    </nav>
}

export default Nav;
