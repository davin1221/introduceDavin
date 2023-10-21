import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faHtml5, faCss3Alt, faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faOtter, faStore, faServer, faLeaf, faJ, faA} from "@fortawesome/free-solid-svg-icons";


// skill 컴포넌트
const Skill = ({skillName}) => { 

    let skill; 

    switch(skillName) {
        case "HTML":
            skill = <FontAwesomeIcon icon={faHtml5}/>
            break;
        case "CSS":
            skill = <FontAwesomeIcon icon={faCss3Alt}/>
            break;
        case "JavaScript":
            skill = <FontAwesomeIcon icon={faJs}/>
            break;
        case "React":
            skill = <FontAwesomeIcon icon={faReact}/>
            break;
        case "Git":
            skill = <FontAwesomeIcon icon={faGithub}/>
            break;
        case "Oracle":
            skill = <FontAwesomeIcon icon={faServer}/>
            break;
        case "dbeaver":
            skill = <FontAwesomeIcon icon={faOtter}/>
            break;
        case "Redux":
            skill = <FontAwesomeIcon icon={faStore}/>
            break;
        case "Java":
            skill = <FontAwesomeIcon icon={faJava}/>
            break;
        case "Spring":
            skill = <FontAwesomeIcon icon={faLeaf}/>
            break;
        case "STS":
            skill = <FontAwesomeIcon icon={faLeaf}/>
            break;
        case "Ajax":
            skill = <FontAwesomeIcon icon={faA}/>
            break;
        case "jQuery":
            skill = <FontAwesomeIcon icon={faJ}/>
            break;

    }

    
    return  <span className="SkillName">
        <span>
            {skill}
        </span>
        <span>
            {skillName}
        </span>
        
  </span>
}

export default Skill;