import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Story({ photo }) {
  return (
    <div className="story-item">
      <FontAwesomeIcon className="heart-icon" icon={faHeart} />

      <div className="story-text  ">
        <h3>First Meet</h3>
        <span className="date">29 Dec 2020</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          porro delectus rem fugiat, distinctio quod Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Veritatis porro delectus rem fugiat,
          distinctio quod Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Veritatis porro delectus rem fugiat, distinctio quod
        </p>
      </div>
      <div className="story-img  ">
        <img src={photo} alt="couple love story"></img>
      </div>
    </div>
  );
}
