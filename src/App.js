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
  faMagnifyingGlass, 
  faComputerMouse,
  faArrowDown,
  faPhone,
  faEnvelope,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Nav from "./components/Nav";
import Skills from "./components/Skills";
import TopBtn from "./components/TopBtn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>{/* <Route path="/" element={<Intro />} /> */}</Routes>

        <Nav />

        {/* intro */}
        <div className="wrapper intro_wrapper">
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
                      DataBase
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
              <h1>Portfolio</h1>

              <div>
                <div className="team_project project">
                  <h2>Team Project</h2>
                  <div className="project_wrap">
                    
                    <div className="porject_item">
                      <div className="project_img">
                        <img src={process.env.PUBLIC_URL + "/img/project/letsVegan.png"} />
                      </div>
                      <div className="porject_description">
                        <div>
                          <span>Let's Vegan</span>
                          <span>지도 API 기반 비건 레스토랑 검색 플랫폼</span>
                        </div>
                        <div>
                          <button>
                            프로젝트 설명_
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </button>
                        </div>
                      </div>
                    </div>
              

                    <div className="porject_item">
                      <div className="project_img">
                        <img src={process.env.PUBLIC_URL + "/img/project/artStroke.png"} />
                      </div>
                      <div className="porject_description">
                        <div>
                          <span>art Stroke</span>
                          <span>작가와 팬이 소통하는 아트 편집샵 쇼핑몰</span>
                        </div>
                        <div>
                          <button>
                            프로젝트 설명_
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="solo_project project">
                  <h2>Solo Project</h2>
                  <div className="project_wrap">
                    
                    <div className="porject_item">
                      <div className="project_img">
                        <img src={process.env.PUBLIC_URL + "/img/project/simpleShop.jpg"} />
                      </div>
                      <div className="porject_description">
                        <div>
                          <span>Simple Shop</span>
                          <span>간단한 기능의 악세사리 쇼핑몰</span>
                        </div>
                        <div>
                          <button>
                            프로젝트 설명_
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </button>
                        </div>
                      </div>
                    </div>
              

                    <div className="porject_item">
                      <div className="project_img">
                        <img src={process.env.PUBLIC_URL + "/img/project/weeky.jpg"} />
                      </div>
                      <div className="porject_description">
                        <div>
                          <span>Weeky</span>
                          <span>한 눈에 보는 위클리, 데일리 플래너</span>
                        </div>
                        <div>
                          <button>
                            프로젝트 설명_
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              
            </div>

          </div>

          {/* contact */}
          <div className="wrapper" id="Contact">
              <div className="container contact">
                <h1>Contact Me</h1>

                <div className="contact_wrap">

                  <div className="contact_info">

                    <div className="info_box">
                      <div className="info_box_left">
                        <FontAwesomeIcon icon={faPhone}/>
                      </div>
                      <div className="info_box_right">
                        <div>
                          Phone
                        </div>
                        <div>
                          010-4142-2397
                        </div>
                      </div>
                    </div>
                    <div className="info_box">
                      <div className="info_box_left">
                        <FontAwesomeIcon icon={faEnvelope}/>
                      </div>
                      <div className="info_box_right">
                        <div>
                          Email
                        </div>
                        <div>
                          kdavin1221@gmail.com
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="contact_mail">
                    <div className="mail_top">
                      <div className="contact_box">
                        <label for="name">Name</label>
                        <input id="name" className="mail_input"/>
                      </div>
                      <div className="contact_box">
                        <label for="email">Email</label>
                        <input id="email" className="mail_input"/>
                      </div>
                    </div>

                    <div className="mail_bottom">
                      <label>Message</label>
                      <textarea/>
                    </div>

                    <div className="mail_btn">
                      <button>
                        send_
                        <FontAwesomeIcon icon={faPaperPlane}/>
                      </button>
                    </div>
                    
                  </div>

                </div>
              </div>
          </div>


          <TopBtn/>


        </div>
        

    </BrowserRouter>
  );
}

export default App;

<div className="intro_img">
  <img src={process.env.PUBLIC_URL + "/img/img_1.jpg"} />
</div>;
