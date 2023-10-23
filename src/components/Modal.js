import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import LetsVegan from "./project/LetsVegan";
import ArtStroke from "./project/ArtStroke";
import SimpleShop from "./project/SimpleShop";
import Weeky from "./project/Weeky";

const Modal = ({project, modalClose}) => { 

    let targetProject = "";

    if(project === "LetsVegan") targetProject = <LetsVegan />
    if(project === "ArtStroke") targetProject = <ArtStroke />
    if(project === "SimpleShop") targetProject = <SimpleShop />
    if(project === "Weeky") targetProject = <Weeky />

    return <div className="Modal">
        
        <div className="modal_back_bg"></div>


        <div className="modal_container">
            <div className="modal_close" onClick={modalClose}>
                <FontAwesomeIcon icon={faX}/>
            </div>
            {targetProject}
        </div>

    </div>
}

export default Modal;