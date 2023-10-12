import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faHeart, faComputerMouse, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Intro = () => { 
    return <div className="wrapper intro_wrapper">
    <div className="container intro">
      <div className="intro_text">
        <div>
          <span>Hi, I'm </span>
          <span>Davin</span>
        </div>
        <span>Frontend Developer</span>

        <div className="intro_log">
          <a href="https://github.com/davin1221">
              <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://dvcoding.tistory.com/">
              <FontAwesomeIcon icon={faBlog} />
          </a>
          <button>
            Contact Me __ <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      <div className="intro_img">
        <img src={process.env.PUBLIC_URL + "/img/img_3.png"} />
      </div>
    </div>
    
    <div className="intro_scroll"> 
      <span><FontAwesomeIcon icon={faComputerMouse}/></span>
      <span>Scroll Down</span>
      <span><FontAwesomeIcon icon={faArrowDown}/></span>
    </div>
  </div>
}

export default Intro;