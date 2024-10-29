import { forwardRef, useEffect } from "react";
import flowers from "../assets/icons/flower.svg";
import { SectionIdMap } from "../common/constants";

const Events = forwardRef((props, ref) => {
    useEffect(() => {
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, []);
  return (
    <section className="event-container" id={SectionIdMap.EVENTS} ref={ref}>
      <div className="event-section">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Celebrate Our Love</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="event-item">
              <div className="event-item-inner">
                <h3>Ceremony</h3>
                <span className="date">3 Jan 2020</span>
                <span className="time">5:00 - 7:00 PM</span>
                <p> Shagun Farm </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dicta distinctio eius non
                </p>

                <img src={flowers} alt="event"></img>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-inner">
                <h3>Reception</h3>
                <span className="date">3 Jan 2020</span>
                <span className="time">5:00 - 7:00 PM</span>
                <p> Shagun Farm </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  dicta distinctio eius non
                </p>
                <img src={flowers} alt="event"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Events;
