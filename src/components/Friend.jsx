import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Friend({ friendPhoto, friendName, friendLabel }) {
  return (
    <div className="people-item" data-category="groomsmen">
      <div className="people-item-inner ">
        <img src={friendPhoto}></img>
        <h4>{friendName}</h4>
        <p>{friendLabel}</p>

        <div className="social-links">
          <a href="#" title="facebook">
            <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
          </a>{" "}
          <a href="#" title="twitter">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
          </a>{" "}
          <a href="#" title="instagram">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </a>{" "}
          <a href="#" title="linkedin">
            <FontAwesomeIcon className="social-icon" icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
}
