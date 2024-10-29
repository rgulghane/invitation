import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useEffect } from "react";
import { SectionIdMap } from "../common/constants";

const groom = require("../assets/groom.jpg");
const bride = require("../assets/bride.jpg");
const Couple = forwardRef((props, ref) => {
  useEffect(() => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="couple-section" id={SectionIdMap.COUPLE} ref={ref}>
      <div data-scroll-index="2" className="container">
        <div className="row">
          <div className="section-title">
            <h2>Happy Couple</h2>
          </div>
        </div>

        <div className="row">
          <div className="couple">
            <img src={groom}></img>
            <h3>Ritesh Gulghane</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, a
              sunt? Ex dolores sed voluptatem voluptas enim labore earum unde
              harum, molestiae voluptate, itaque sequi mollitia vitae ratione,
              corrupti in.
            </p>
          </div>
          <div className="couple">
            <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            <img src={bride}></img>
            <h3>Kasturi Gulghane</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, a
              sunt? Ex dolores sed voluptatem voluptas enim labore earum unde
              harum, molestiae voluptate, itaque sequi mollitia vitae ratione,
              corrupti in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Couple;
