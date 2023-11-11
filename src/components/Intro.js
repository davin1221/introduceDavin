import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHeart,
  faComputerMouse,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Intro = () => {

  // contact로 가기 
  const goContact = () => {
    const targetMenu = document.getElementById("Contact");
    targetMenu.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="wrapper intro_wrapper">
      <div className="container intro">
        <div className="intro_text">
          <div>
            <span>Hi, I'm </span>
            <span>Davin</span>
          </div>
          <span>Web Developer</span>

          <div className="intro_log">
            <a href="https://github.com/davin1221" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://dvcoding.tistory.com/" target="blank">
              <FontAwesomeIcon icon={faBlog} />
            </a>
            <button onClick={() => goContact()}>
              Contact Me _<FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>

        <div className="intro_img">
          <img src={process.env.PUBLIC_URL + "/img/img_intro.jpeg"} />
        </div>
      </div>

      <div className="intro_scroll">
        <span>
          <FontAwesomeIcon icon={faComputerMouse} />
        </span>
        <span>Scroll Down</span>
        <span>
          <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>
    </div>
  );
};

export default Intro;
