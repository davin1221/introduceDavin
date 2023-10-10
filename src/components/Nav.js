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
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Skill">Skill</a>
                </li>
                <li>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>

            <div className="mode-btns">
                <FontAwesomeIcon icon={faSun} />
            </div>
        </div>
    </nav>
}

export default Nav;
