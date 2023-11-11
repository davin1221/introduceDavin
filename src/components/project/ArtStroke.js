import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const ArtStroke = () => { 
    return <div className="project_detail_container">
        <div className="project_detail_title">
            <h2>Art Stroke</h2>
            <span>작가와 팬이 소통하는 아트 편집샵 쇼핑몰</span>
        </div>

        <div className="project_detail_description">
            <div>
                <span>기획 의도</span>
                <span> 
                    작가와 소비자가 직접 작품 세계를 공유하고 소통하며 정당한 저작권을 지급하여 작품을 소유하는 아트 편집샵
                </span>
            </div>
            <div>
                <span>개발 기간</span>
                <span>2023.05.22 ~ 07.11</span>
            </div>
            <div>
                <span>담당 및 참여도</span>
                <span>
                    
                    메인페이지, 이벤트(룰렛)페이지, 검색, UI디자인 및 퍼블리싱(50%)
                </span>
            </div>
            <div>
                <span>기술 스택</span>
                <div className="project_detail_skills">
                    <span>Java</span>
                    <span>Java Spring</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>jQuery</span>
                    <span>AJAX</span>
                    <span>JSP</span>
                    <span>OracleDB</span>
                    <span>AWS</span>
                    <span>STS</span>
                    <span>ApacheTomcat</span>
                    <span>DBeaver</span>
                    <span>Git</span>
                    <span>Notion</span>
                </div>
            </div>
            <div className="project_img">
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/ArtStroke/artStroke1.png"} alt="ArtStroke_img"/>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/ArtStroke/artStroke2.png"} alt="ArtStroke_img"/>
                </div>
                <div>
                <img src={process.env.PUBLIC_URL + "/img/ArtStroke/artStroke3.png"} alt="ArtStroke_img"/>
                </div>
            </div>
            

        </div>

        <div className="project_detail_btn">
            <a href="https://github.com/davin1221/art_stroke" target="blank">
                <span>Git</span>
                <span>
                    <FontAwesomeIcon icon={faGithub}/>
                </span>
            </a>
            <a href="https://www.notion.so/ART-STROKE-FINAL-PROJECT-fcbf42dd6f214f0aa04a63aaa35d8716" target="blank">
                <span>Notion</span>
                <span>
                    <FontAwesomeIcon icon={faClipboard}/>
                </span>
            </a>
        </div>
    </div>
}

export default ArtStroke;