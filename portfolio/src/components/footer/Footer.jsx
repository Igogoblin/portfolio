import "./style.css";
import vk from "./../../img/icons/vk.svg";
import inst from "./../../img/icons/instagram.svg";
import telegram from "../../img/icons/telegram.svg";
import github from "./../../img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={inst} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/igogoblin">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/igogoblin">
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="www.linkedin.com/in/igor-sk">
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
