import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopBtn = () => {
  // 맨 위로 가기
  const goTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <div className="TopBtn" onClick={goTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default TopBtn;
