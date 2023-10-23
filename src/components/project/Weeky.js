import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const Weeky = () => { 
    return <div className="project_detail_container">
    <div className="project_detail_title">
        <h2>Weeky</h2>
        <span>한눈에 보는 위클리, 데일리 플래너</span>
    </div>

    <div className="project_detail_description">
        <div>
            <span>기획 의도</span>
            <span> 
                한 주의 계획을 주 단위, 일 단위로 작성하기 위한 플래너  
            </span>
        </div>
        <div>
            <span>개발 기간</span>
            <span>2023.09.02 ~ 09.28</span>
        </div>
        <div>
            <span>기능 소개</span>
            <span>
                로그인 및 회원가입, 주/일 단위 계획 조회, 작성, 수정, 삭제, 주제 생성 및 삭제<br/>
                test계정 | ID: test@gmail.com PW: password
            </span>
        </div>
        <div>
            <span>기술 스택</span>
            <div className="project_detail_skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Redux</span>
            </div>
        </div>
        <div className="project_img">
            <div>
                <img src={process.env.PUBLIC_URL + "/img/Weeky/Weeky1.png"} alt="Weeky_img"/>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/Weeky/Weeky2.png"} alt="Weeky_img"/>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/Weeky/Weeky3.png"} alt="Weeky_img"/>
            </div>
        </div>
        

    </div>

    <div className="project_detail_btn">
        <a href="https://github.com/davin1221/weeky" target="blank">
            <span>Git</span>
            <span>
                <FontAwesomeIcon icon={faGithub}/>
            </span>
        </a>
        <a href="https://dv-weeky.web.app/" target="blank">
            <span>Demo</span>
            <span>
                <FontAwesomeIcon icon={faTv}/>
            </span>
        </a>
    </div>
</div>
}

export default Weeky;