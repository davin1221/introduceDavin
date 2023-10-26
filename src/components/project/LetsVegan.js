import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const LetsVegan = () => { 

    return <div className="project_detail_container">
        <div className="project_detail_title">
            <h2>Let's Vegan</h2>
            <span>지도 API 기반 채식 식당 검색 플랫폼</span>
        </div>

        <div className="project_detail_description">
            <div>
                <span>기획 의도</span>
                <span> 
                    카카오 지도 API를 활용한 레스토랑의 위치를 지도로 구현하여 채식에 대한 관심을 증가시킬 수 있도록 정보를 제공
                    </span>
            </div>
            <div>
                <span>개발 기간</span>
                <span>2023.04.17 ~ 05.15</span>
            </div>
            <div>
                <span>담당 및 참여도</span>
                <span>
                    메인페이지, 마이페이지, UI디자인 및 퍼블리싱(70%)
                </span>
            </div>
            <div>
                <span>기술 스택</span>
                <div className="project_detail_skills">
                    <span>Java</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>AJAX</span>
                    <span>OracleDB</span>
                    <span>eclipse</span>
                    <span>ApacheTomcat</span>
                    <span>DBeaver</span>
                    <span>Git</span>
                    <span>Sourcetree</span>
                </div>
            </div>
            <div className="project_img">
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/LetsVegan/LetsVegan1.png"} alt="LetsVegan_img"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/LetsVegan/LetsVegan2.png"} alt="LetsVegan_img"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/LetsVegan/LetsVegan3.png"} alt="LetsVegan_img"/>
                </div>
            </div>
            

        </div>

        <div className="project_detail_btn">
            <a href="https://github.com/davin1221/LetsVegan" target="blank">
                <span>Git</span>
                <span>
                    <FontAwesomeIcon icon={faGithub}/>
                </span>
            </a>
        </div>
    </div>

}

export default LetsVegan;