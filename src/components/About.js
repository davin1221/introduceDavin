import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faUser,
  faPlane,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const About = () => {
  // 미디어쿼리
  const pc = useMediaQuery({ query: "(min-width: 1024px)" });
  const mobile = useMediaQuery({ query: "(max-width: 479px)" });

  // 정보 오픈
  const [isClicked, setIsClicked] = useState(false);
  const [aboutSub, setAboutSub] = useState(null);

  const openIntroduce = (item) => {
    // isClicked == false -> isClicked true
    if (!isClicked) {
      setIsClicked(true);
      setAboutSub(item);
      // isClicked true 인데 item도 같다면 false
    } else if (isClicked && aboutSub === item) {
      setIsClicked(false);

      // 누를 때마다 item set
    } else {
      setAboutSub(item);
    }
  };

  return (
    <div className="wrapper" id="About">
      <div className="container about">
        <h1>About Me</h1>
          <div className="about_introduce">
            <div className="about_first_line">
              <div className={`about_img about_img_${isClicked}`}>
                <img src={process.env.PUBLIC_URL + "/img/img_about.jpeg"} />
              </div>
            </div>

            <div className="about_second_line">
              <div onClick={() => openIntroduce("des")}>
                Describe Me
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              
              <div onClick={() => openIntroduce("exp")}>
                <span>
                  <FontAwesomeIcon icon={faPlane} />
                </span>
                My Experience
              </div>
            </div>

            {
              isClicked === true ? <div className="about_third_line">
                {
                  aboutSub == "des" ? 
                  <div className="about_description">
                    안녕하세요 신입 웹 개발자 <span>김다빈</span>입니다!<br/>
                    저의 20대는 진로에 대한 고민과 선택의 연속이었습니다.<br/>
                    그러던 중 <span>개발자</span>라는 직업을 알게 되었습니다.<br/>
                    프로젝트를 진행하며 완성하고 오류를 고쳐가며 살면서 처음으로 <span>성취감</span>을 맛보았습니다.<br/>
                    또, 밤낮으로 팀원들과 프로젝트를 하며 <span>팀워크</span>와 <span>협력</span>에 대한 것도 알게 되었습니다.<br/>
                    공부는 어려웠지만, 그 어려움을 이기는 과정과 결과물이 너무나도 매력적이었기에 앞으로 저는 <span>개발자로서 성장해 보고자 합니다.</span>
                    <p>#꼼꼼함 #성실함 #책임감 #온화함 #정직함 #모험심 </p>
                  </div> 
                  : 
                  <div className="about_experience">
                    <div className="about_experience_detail">
                      <div>Career</div>
                      <div className="detail_item">
                        <span>2018.12 ~ 2020.07</span>
                        <span>닷즈커뮤니케이션 재무회계팀</span>
                      </div>
                      <div className="detail_item">
                        <span>2013.11 ~ 2015.05</span>
                        <span>삼영전자공업 인사팀</span>
                      </div>
                    </div>

                    <div className="about_experience_detail">
                      <div>Education</div>
                      <div className="detail_item">
                        <span>2022.11 ~ 2022.07</span>
                        <span>KH정보교육원</span>
                      </div>
                      <div className="detail_item">
                        <span>2016.03 ~ 2018.02</span>
                        <span>신구대학교 애완동물전공</span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                }
                </div> : null 
            }

          </div>

      </div>
    </div>
  );
};

export default About;
