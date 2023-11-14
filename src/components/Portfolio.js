import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCaretDown, faCar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {

  // git 이동
  const goDetail = (target) => {
    if (target === "LetsVegan") {
      window.open("https://github.com/davin1221/LetsVegan", "_blank");
    } else if (target === "ArtStroke") {
      window.open("https://github.com/davin1221/art_stroke", "_blank");
    } else if (target === "SimpleShop") {
      window.open("https://github.com/davin1221/simpleshop", "_blank");
    } else if (target === "Weeky") {
      window.open("https://github.com/davin1221/weeky", "_blank");
    }
  };

  // 프로젝트 modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [targetProject, setTargetProject] = useState(null);

  const body = document.getElementsByTagName('body')[0];

  const modalOpen = (project) => {
    setModalIsOpen(!modalIsOpen);
    setTargetProject(project);
    const portfolio = document.getElementById("Portfolio");
    portfolio.scrollIntoView({ behavior: "smooth" });
    body.classList.add('scroll-locked');
  }

  const closeModal = () => { 
    setModalIsOpen(!modalIsOpen);
    body.classList.remove('scroll-locked');
  }

  return (
    <div className="wrapper portfolio_wrapper" id="Portfolio">
      <div className="container portfolio">
        <h1>Portfolio</h1>

        <div>
          <div className="project_left">
            <img src={process.env.PUBLIC_URL + "/img/ArtStroke/artStroke1.png"} />
          </div>

          <div className="project_right">
            <div className="project_select">
              <div className="project_select_item">
                <span>Team</span>
                <ul>
                  <li>Let's Vegan</li>
                  <li>art Stroke</li>
                </ul>
              </div>

              <div className="project_select_item">
                <span>Solo</span>
                <ul>
                  <li>Memo</li>
                  <li>Simple Shop</li>
                  <li>Weeky</li>
                </ul>
              </div>
              
            </div>

            <div className="proeject_description">
              <div className="description_item">
                <span>기획 의도</span>
                <span>카카오 지도 API를 활용한 레스토랑의 위치를 지도로 구현하여 채식에 대한 관심을 증가시킬 수 있도록 정보를 제공</span>
              </div>

              <div className="description_item">
                <span>개발 기간</span>
                <span>2022.07.01 ~ 07.22</span>
              </div>

              <div className="description_item skill">
                <span>기술 스택</span>
                <div>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Redux</span>
                </div>
              </div>

              <div className="description_item">
                <span>담당 및 참여도</span>
                <span>퍼블리싱(70%), 메인페이지(상품조회), 마이페이지(정보CRUD)</span>
              </div>

              <div className="description_item">
                <span>개발 소감</span>
                <span>기획과 뭐에 있어 아쉬웠던 점이 많았다. 다음 프로젝트 때는 이를 발판 삼아 어쩌구 하는 것이 좋겠다.</span>
              </div>

              <div className="description_btn">
                <a href="#">Git</a>
              </div>
             
            </div>
          </div>

        </div>

      </div>
    </div> // wrapper end 
  );
};

export default Portfolio;
