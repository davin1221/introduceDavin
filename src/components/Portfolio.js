import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => { 
  
    const goDetail = (target) => { 
      if(target === "LetsVegan") { 
        window.open("https://github.com/davin1221/LetsVegan", "_blank");
      } else if(target === "ArtStroke") { 
        window.open("https://github.com/davin1221/art_stroke", "_blank");
      } else if(target === "SimpleShop") { 
        window.open("https://github.com/davin1221/simpleshop", "_blank");
      } else if(target === "Weeky") { 
        window.open("https://github.com/davin1221/weeky", "_blank");
      }
    }

    return <div className="wrapper" id="Portfolio">

    <div className="container portfolio">
      <h1>Portfolio</h1>

      <div>
        <div className="team_project project">
          <h2>Team Project</h2>
          <div className="project_wrap">
            
            <div className="porject_item">
              <div className="project_img">
                <img src={process.env.PUBLIC_URL + "/img/project/letsVegan.jpg"} />
              </div>
              <div className="porject_description">
                <div>
                  <span>Let's Vegan</span>
                  <span>지도 API 기반 비건 레스토랑 검색 플랫폼</span>
                </div>
                <div>
                  <button onClick={()=>goDetail("LetsVegan")}>
                    프로젝트 설명_
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                  </button>
                </div>
              </div>
            </div>
      

            <div className="porject_item">
              <div className="project_img">
                <img src={process.env.PUBLIC_URL + "/img/project/artStroke.jpg"} />
              </div>
              <div className="porject_description">
                <div>
                  <span>art Stroke</span>
                  <span>작가와 팬이 소통하는 아트 편집샵 쇼핑몰</span>
                </div>
                <div>
                  <button  onClick={()=>goDetail("ArtStroke")}>
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
                  <button  onClick={()=>goDetail("SimpleShop")}>
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
                  <button onClick={()=>goDetail("Weeky")}>
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
}

export default Portfolio;