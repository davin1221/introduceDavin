import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
// import { useMediaQuery } from "react-responsive";

const Nav = () => { 

    // const tablet = useMediaQuery({ query : "(max-width:768px)"})
    // const mobile = useMediaQuery({ query : "(max-width:480px)"})

    

    const handleMenu = (menu) => { 

        const targetMenu = document.getElementById(menu)
        targetMenu.scrollIntoView({ behavior: 'smooth' });

    }

    return <nav className="Nav">
        <div className="logo">
            Davin
        </div>

        <div className="full-width-nav">
            <ul>
                <li onClick={()=>handleMenu("About")}>
                    About
                    {/* <a href="#About">About</a> */}
                </li>
                <li onClick={()=>handleMenu("Skills")}>
                    Skill
                    {/* <a href="#Skills">Skills</a> */}
                </li>
                <li onClick={()=>handleMenu("Portfolio")}>
                    Portfolio
                    {/* <a href="#Portfolio">Portfolio</a> */}
                </li>
                <li onClick={()=>handleMenu("Contact")}>
                    Contact
                    {/* <a href="#Contact">Contact</a> */}
                </li>
            </ul>

            <div className="mode-btns">
                <FontAwesomeIcon icon={faSun} />
            </div>
        </div>
    </nav>
}

export default Nav;
