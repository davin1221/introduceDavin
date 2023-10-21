import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faTerminal,
  faDatabase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="wrapper" id="Skills">
      <div className="container skills">
        <h1>Skills</h1>

        <div className="skill_wrap">
          <div className="skill_item">
            <div className="item_top">
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span>Frontend</span>
            </div>
            <div className="item_bottom">
              <Skill skillName={"HTML"} />
              <Skill skillName={"CSS"} />
              <Skill skillName={"JavaScript"} />
              <Skill skillName={"React"} />
              <Skill skillName={"Redux"} />
              <Skill skillName={"jQuery"} />
              <Skill skillName={"Ajax"} />
            </div>
          </div>

          <div className="skill_item">
            <div className="item_top">
              <span>
                <FontAwesomeIcon icon={faTerminal} />
              </span>
              <span>Backend</span>
            </div>
            <div className="item_bottom">
              <Skill skillName={"Java"} />
              <Skill skillName={"Spring"} />
            </div>
          </div>

          <div className="skill_item">
            <div className="item_top">
              <span>
                <FontAwesomeIcon icon={faDatabase} />
              </span>
              <span>DataBase</span>
            </div>
            <div className="item_bottom">
              <Skill skillName={"Oracle"} />
            </div>
          </div>

          <div className="skill_item">
            <div className="item_top">
              <span>
                <FontAwesomeIcon icon={faGear} />
              </span>
              <span>Tool</span>
            </div>
            <div className="item_bottom">
              <Skill skillName={"Git"} />
              <Skill skillName={"dbeaver"} />
              <Skill skillName={"STS"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
