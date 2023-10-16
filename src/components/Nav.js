import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faHome,
  faUser,
  faCode,
  faImage,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Nav = () => {

  // 미디어쿼리
  const pcAndTablet = useMediaQuery({ query: "(min-width: 480px)" });
  const mobile = useMediaQuery({ query: "(max-width: 479px)" });

  // 다크모드(로컬스토리지 저장)
  const selectedTheme = localStorage.getItem("selectedTheme");

  // 아이콘 표시(모바일버전)
  const [themeIcon, setThemeIcon] = useState(
    selectedTheme === "dark" ? (
      <FontAwesomeIcon icon={faMoon} />
    ) : (
      <FontAwesomeIcon icon={faSun} />
    )
  );

  // 다크모드 변환
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  // 라이트모드 변환
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  // 로컬스토리지 다크모드 확인
  if (selectedTheme === "dark") {
    setDarkMode();
  } else {
  }

  // 모드 변환
  const toogleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
      setThemeIcon(<FontAwesomeIcon icon={faMoon} />);
    } else {
      setLightMode();
      setThemeIcon(<FontAwesomeIcon icon={faSun} />);
    }
  };

  // 메뉴 화면 이동
  const handleMenu = (menu) => {
    const targetMenu = document.getElementById(menu);
    targetMenu.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  // 로고,home 클릭 시 맨 위로 가기
  const goTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
    setMenuOpen(false);
  };

  // 모바일버전 메뉴 보이기
  const [menuOpen, setMenuOpen] = useState(false);

  const toogleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav">
      {pcAndTablet && (
        <>
          <div className="logo" onClick={() => goTop()}>
            Dv.K
          </div>

          <div className="full-width-nav">
            <ul>
              <li onClick={() => handleMenu("About")}>About</li>
              <li onClick={() => handleMenu("Skills")}>Skill</li>
              <li onClick={() => handleMenu("Portfolio")}>Portfolio</li>
              <li onClick={() => handleMenu("Contact")}>Contact</li>
            </ul>

            <div className="mode-btns">
              <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toogleTheme}
                defaultChecked={selectedTheme === "dark"}
              />
              <label
                for="darkmode-toggle"
                data-checked="dark"
                data-unChecked="light"
              ></label>
            </div>
          </div>
        </>
      )}
      {mobile && (
        <>
          <div>Dv.K</div>
          <div className="mobile_nav">
            <div className="nav_menu_btn">
              {themeIcon}
              <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toogleTheme}
                defaultChecked={selectedTheme === "dark"}
              />
            </div>
            <div className="nav_menu_btn" onClick={toogleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>

          <div
            className="mobile_menu"
            style={menuOpen ? { height: "250px" } : { height: "0px" }}
          >
            <ul>
              <li onClick={() => goTop()}>
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span>Home</span>
              </li>
              <li onClick={() => handleMenu("About")}>
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span>About</span>
              </li>
              <li onClick={() => handleMenu("Skills")}>
                <span>
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <span>Skills</span>
              </li>
              <li onClick={() => handleMenu("Portfolio")}>
                <span>
                  <FontAwesomeIcon icon={faImage} />
                </span>
                <span>Portfolio</span>
              </li>
              <li onClick={() => handleMenu("Contact")}>
                <span>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
                <span>Contact</span>
              </li>
            </ul>
            <div
              onClick={toogleMenu}
              style={menuOpen ? { display: "block" } : { display: "none" }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
