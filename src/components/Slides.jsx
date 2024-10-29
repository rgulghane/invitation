import { forwardRef, useState } from "react";
import { SectionIdMap } from "../common/constants";

const Slides = forwardRef((props, ref) => {
  const [slideIndex, setSlideIndex] = useState(1);

  // setInterval(() => {
  //   document.getElementById("slide-wrapper").classList.remove("active");
  //   document.getElementById("slide-wrapper").classList.add("active");
  //   setSlideIndex(slideIndex > 3 ? 1 : slideIndex + 1);
  // }, 5000);

  return (
    <section className="home-section" id={SectionIdMap.SLIDE} ref={ref}>
      <div
        id={SectionIdMap.SLIDE + "-wrapper"}
        className={"slide active home-background home-background-" + slideIndex}
      >
        <div className="container "></div>
        <div className="row align-items-center">
          <div className="home-content">
            <p>We are getting Married</p>
            <h1>Ritesh & Kasturi</h1>
            <span>26 Nov 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Slides;
