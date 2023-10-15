import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
// import { useMediaQuery } from "react-responsive";

const Nav = () => { 

    const setDarkMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "dark") { 
        setDarkMode();
    }

    const toogleTheme = (e) => { 
        if(e.target.checked){
            setDarkMode();
        } else { 
            setLightMode();
        };
    }


    const handleMenu = (menu) => { 

        const targetMenu = document.getElementById(menu)
        targetMenu.scrollIntoView({ behavior: 'smooth' });

    }

    return <nav className="Nav">
        <div className="logo">
            <img src={process.env.PUBLIC_URL + "/img/dvLogo.png"} />
        </div>

        <div className="full-width-nav">
            <ul>
                <li onClick={()=>handleMenu("About")}>
                    About
                </li>
                <li onClick={()=>handleMenu("Skills")}>
                    Skill
                </li>
                <li onClick={()=>handleMenu("Portfolio")}>
                    Portfolio
                </li>
                <li onClick={()=>handleMenu("Contact")}>
                    Contact
                </li>
            </ul>

            <div className="mode-btns">
                <input className="dark_mode_input"
                       type="checkbox"
                       id="darkmode-toggle"
                       onChange={toogleTheme}
                       defaultChecked={selectedTheme === "dark"}/>
                <label for="darkmode-toggle"
                       data-checked="dark"
                       data-unChecked="light" ></label>
            </div>
        </div>
    </nav>
}

export default Nav;
