import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  // 이메일 보내기 emailJs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_640rkpk",
        "template_gt9j0x9",
        form.current,
        "CGzqtpq9ADxBuTNbi"
      )
      .then(
        (result) => {
          alert("메일을 전송하였습니다.");
        },
        (error) => {
          alert("메일 전송에 실패하였습니다.");
        }
      );
  };

  return (
    <div className="wrapper" id="Contact">
      <div className="container contact">
        <h1>Contact Me</h1>

        <div className="contact_wrap">
          <div className="contact_info">
            <div className="info_box">
              <div className="info_box_left">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info_box_right">
                <div>Phone</div>
                <div>010-4142-2397</div>
              </div>
            </div>
            <div className="info_box">
              <div className="info_box_left">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info_box_right">
                <div>Email</div>
                <div>kdavin1221@gmail.com</div>
              </div>
            </div>
          </div>

          <form className="contact_mail" onSubmit={sendEmail} ref={form}>
            <div className="mail_top">
              <div className="contact_box">
                <label for="name">Name</label>
                <input id="name" className="mail_input" name="user_name" />
              </div>
              <div className="contact_box">
                <label for="email">Email</label>
                <input id="email" className="mail_input" name="user_email" />
              </div>
            </div>

            <div className="mail_bottom">
              <label>Message</label>
              <textarea name="message" />
            </div>

            <div className="mail_btn">
              <button type="submit" value="send">
                send_
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
