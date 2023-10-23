import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const SimpleShop = () => { 
    return <div className="project_detail_container">
    <div className="project_detail_title">
        <h2>Simple Shop</h2>
        <span>간단한 쇼핑몰 기능 구현</span>
    </div>

    <div className="project_detail_description">
        <div>
            <span>기획 의도</span>
            <span> 
                간단한 기능의 쇼핑몰 기능 구현 
            </span>
        </div>
        <div>
            <span>개발 기간</span>
            <span>2023.08.15 ~ 08.31</span>
        </div>
        <div>
            <span>기능 소개</span>
            <span>
                카테고리별 조회, 상세페이지 조회, 최근 본 상품, 장바구니 추가 및 변경
            </span>
        </div>
        <div>
            <span>기술 스택</span>
            <div className="project_detail_skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
            </div>
        </div>
        <div className="project_img">
            <div>
                <img src={process.env.PUBLIC_URL + "/img/SimpleShop/SimpleShop1.png"} alt="SimpleShop_img"/>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/SimpleShop/SimpleShop2.png"} alt="SimpleShop_img"/>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + "/img/SimpleShop/SimpleShop3.png"} alt="SimpleShop_img"/>
            </div>
        </div>
        

    </div>

    <div className="project_detail_btn">
        <a href="https://github.com/davin1221/simpleshop" target="blank">
            <span>Git</span>
            <span>
                <FontAwesomeIcon icon={faGithub}/>
            </span>
        </a>
        <a href="https://dv-jewl.web.app/" target="blank">
            <span>Demo</span>
            <span>
                <FontAwesomeIcon icon={faTv}/>
            </span>
        </a>
    </div>
</div>
}

export default SimpleShop;