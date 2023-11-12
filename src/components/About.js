import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faUser, faHashtag, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const About = () => {
  // 미디어쿼리
  const pc = useMediaQuery({ query: "(min-width: 1024px)" });
  const tabletAndMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  // 정보 오픈
  const [isClicked, setIsClicked] = useState(false);
  const [aboutSub, setAboutSub] = useState();

  const openIntroduce = (item) => { 
    //  1. isClicked가 true일 땐 눌러도 isClicked false로 안바뀜
    //  2. isClicked가 같은 item을 선택하거나 false일땐 반대로 바뀜 
    if(isClicked === false || aboutSub === item) { 
      setIsClicked(!isClicked)
    } else { 
      setAboutSub(item)
      console.log("ㅇㅇ:: ", item)
    }
  }

  return (
    <div className="wrapper" id="About">
      <div className="container about">
        <h1>About Me</h1>

        {pc && (
          <div className="about_introduce">
            <div className="about_first_line">
              <div className={`about_img about_img_${isClicked}`}>
                <img src={process.env.PUBLIC_URL + "/img/img_about.jpeg"}/>
              </div>
            </div>
           

            <div className="about_second_line"> 
                <div onClick={()=>openIntroduce("des")}>
                   Describe Me
                  <span><FontAwesomeIcon icon={faUser}/></span>
                </div>
                <div onClick={()=>openIntroduce("exp")}>
                  <span><FontAwesomeIcon icon={faPlane}/></span>
                  My Experience
                </div>
            </div>

            <div className="about_third_line">
              {
                isClicked === true ? <div>{aboutSub}</div> : null
              }
            </div>
          </div>

        )}








        
        {tabletAndMobile && (
          <div className="about_introduce_small">
            <div className="about_top">
              <div>
                <img src={process.env.PUBLIC_URL + "/img/img_about.jpeg"} />
              </div>

              <div>
                
              </div>

              <div>
                <p>
                  그동안 진로에 대해 고민하며 다양한 경험을 쌓아왔습니다. 이 과정에서 내가 진정으로 흥미를 느끼고 또 경력이 되어줄 직업과 직무가 무엇일까 항상 고민하던 중 '프로그래밍'이라는 분야를 알게되었습니다.
                  어려운 길이지만 스스로 열심히 공부하고 일한다면 그것이 온전히 나의 경력이 되어줄 수 있을 것이며, 끊임없이 발전하는 현대 사회에서 트렌디함을 유지해야 하는 직무라는 것에도 큰 흥미를 느꼈습니다. 
                  바로 학원에 등록하여 7개월간 JAVA, HTML, CSS, JavaScript, DB(Oracle) 등 풀스택을 공부하였고, 수료 후 컴포넌트 단위의 개발에 관심을 가지게 되어 React와 상태관리를 위한 Redux를 추가적으로 
                  공부하였습니다. 앞으로도 저는 필요한 공부가 있다면 어느 것이든 배울 수 있는 기회를 감사히 여기고 늘 겸손한 마음을 가진 개발자로 성장하고 싶습니다. 
                </p>

                <div>
                  <a href={process.env.PUBLIC_URL + "이력서(김다빈).pdf"} download="이력서(김다빈)">
                    Download CV__
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                  </a>
                </div>
              </div>
            </div>

            <div className="about_bottom">
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
        )}
      </div>
    </div>
  );
};

export default About;
