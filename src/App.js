import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCloudArrowDown,
  faCode,
  faTerminal,
  faDatabase,
  faGear,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Nav from "./components/Nav";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>{/* <Route path="/" element={<Intro />} /> */}</Routes>

        <Nav />

        {/* intro */}
        <div className="wrapper">
          <div className="container intro">
            <div className="intro_text">
              <div>
                <span>Hi, I'm </span>
                <span>Davin</span>
              </div>
              <span>Frontend Developer</span>
              <span>즐겁게 도전하는 프런트엔드 개발자 김다빈입니다. </span>

              <div className="intro_log">
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBlog} />
                  </span>
                  <button>
                  Contact Me __ <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

              
            </div>

            <div className="intro_img">
              <img src={process.env.PUBLIC_URL + "/img/img_3.png"} />
            </div>
          </div>
        </div>

        {/* about */}
        <div className="wrapper" id="About">
          <div className="container about">
            <h1>About Me</h1>

            <div className="about_introduce">
              <div className="about_left">
                <img src={process.env.PUBLIC_URL + "/img/img_about.jpeg"} />
              </div>

              <div className="about_right">
                <p className="about_text">
                  7개월간 국비지원 풀스택 개발자 과정을 통해 Java, HTML, CSS,
                  JavaScript, DataBase(Oracle)와 같은 기초적인 웹 프로그래밍에
                  대한 공부를 하며 실습을 하였습니다. 그 과정에서 두 번의 팀
                  프로젝트를 진행하며 화면을 편리하고 풍부하게 해주는
                  프런트엔드에 매력을 느껴 프런트엔드 개발자가 되기를
                  결심하였습니다. 수료 후 React 공부와 개인프로젝트를 진행하며
                  프런트엔드 개발자로서의 능력을 키우는 중이며 필요한 언어나
                  라이브러리가 있다면 언제든 배울 준비가 되어있습니다. 앞으로도
                  항상 배울 수 있는 기회를 감사히 여기며 겸손한 마음으로 배워
                  성장하고 싶습니다.
                </p>

                <div style={{ textAlign: "end" }}>
                  <button>
                    Download CV__
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                  </button>
                </div>

                <div className="about_detail">
                  <div className="detail_box">
                    <span>Career</span>
                    <div className="detail_item">
                      <span>2018.11 ~ 2022.07</span>
                      <span>닷즈커뮤니케이션(주) 재무회계팀 사원</span>
                    </div>
                    <div className="detail_item">
                      <span>2013.11 ~ 2015.05</span>
                      <span>삼영전자공업(주) 인사팀 사원</span>
                    </div>
                  </div>

                  <div className="detail_box">
                    <span>Education</span>
                    <div className="detail_item">
                      <span>2022.11 ~ 2023.07</span>
                      <span>KH정보교욱원 Java기반 개발자 과정 수료</span>
                    </div>
                    <div className="detail_item">
                      <span>2016.03 ~ 2018.02</span>
                      <span>신구대학교 자원동물과 졸업</span>
                    </div>
                    <div className="detail_item">
                      <span>2011.03 ~ 2014.02</span>
                      <span>분당경영고등학교 시각디자인과 졸업</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="wrapper" id="Skills">
          <div className="container skills">
            <h1>Skills</h1>

            <div className="skill_wrap">

              <div className="skill_item">
                <div className="item_top">
                  <span>
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  <span>
                    Frontend
                  </span>
                </div>
                <div className="item_bottom">
                  <Skills skillName={"HTML"} />
                  <Skills skillName={"CSS"} />
                  <Skills skillName={"JavaScript"} />
                  <Skills skillName={"React"} />
                  <Skills skillName={"Redux"} />
                </div>
              </div>


                <div className="skill_item">
                  <div className="item_top">
                    <span>
                     <FontAwesomeIcon icon={faTerminal} />
                    </span>
                    <span>
                    Backend
                    </span>
                  </div>
                  <div className="item_bottom">
                    <Skills skillName={"Java"} />
                  </div>
                </div>

                <div className="skill_item">
                  <div className="item_top">
                    <span>
                      <FontAwesomeIcon icon={faDatabase} />
                    </span>
                    <span>
                      DabaBase
                    </span>
                  </div>
                  <div className="item_bottom">
                    <Skills skillName={"Oracle"} />
                  </div>
                </div>

                <div className="skill_item">
                  <div className="item_top">
                    <span>
                      <FontAwesomeIcon icon={faGear} />
                    </span>
                    <span>
                      Tool
                    </span>
                  </div>
                  <div className="item_bottom">
                    <Skills skillName={"Git"} />
                    <Skills skillName={"dbeaver"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="wrapper" id="Portfolio">
            <div className="container portfolio">
              포폴
            </div>

          </div>

          {/* Portfolio */}
          <div className="wrapper" id="Contact">
              <div className="container contact">
                컨택미 컨택미 
              </div>
          </div>


        </div>
        

    </BrowserRouter>
  );
}

export default App;

<div className="intro_img">
  <img src={process.env.PUBLIC_URL + "/img/img_1.jpg"} />
</div>;
