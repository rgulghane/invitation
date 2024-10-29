import { useEffect, useState, useRef } from "react";
import Couple from "./Couple";
import Events from "./Events";
import Gallery from "./Gallery";
import LoveStory from "./LoveStory";
import People from "./People";
import Slides from "./Slides";
import { SectionIdMap } from "../common/constants";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const slideRef = useRef(null);
  const coupleRef = useRef(null);
  const storyRef = useRef(null);
  const eventsRef = useRef(null);
  const peopleRef = useRef(null);
  const galleryRef = useRef(null);

  const sectionRefMap = {
    [SectionIdMap.SLIDE]: slideRef,
    [SectionIdMap.COUPLE]: coupleRef,
    [SectionIdMap.LOVE_STORY]: storyRef,
    [SectionIdMap.EVENTS]: eventsRef,
    [SectionIdMap.PEOPLE]: peopleRef,
    [SectionIdMap.GALLERY]: galleryRef,
  };

  const scrollToDiv = (divId) => {
    console.log(divId);
    const divRef = sectionRefMap[divId] || sectionRefMap[SectionIdMap.SLIDE];
    console.log(divRef);

    if (divRef.current) {
      setTimeout(() => {
        divRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    if (showHamburger) {
      toggleHamburger();
    }
  };

  const toggleHamburger = function () {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setShowHamburger(window.innerWidth < 767);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-container">
      <header className={"header " + (isScrolled ? "fixed" : "")}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="logo">
              <a href="http://">R & K</a>
            </div>
            <div
              className={"hamburger-btn " + (showHamburger ? "show" : "")}
              onClick={() => toggleHamburger()}
            >
              <span></span>
            </div>
            <div className={"nav " + (toggleNav ? "drop-nav" : "close-nav")}>
              <ul>
                <li>
                  <a
                    data-scroll-nav="1"
                    href="#"
                    className="active"
                    onClick={() => scrollToDiv(SectionIdMap.SLIDE)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="2"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.COUPLE)}
                  >
                    Couple
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="3"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.LOVE_STORY)}
                  >
                    Story
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="4"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.EVENTS)}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="5"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.PEOPLE)}
                  >
                    People
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="6"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.GALLERY)}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    data-scroll-nav="1"
                    href="#"
                    onClick={() => scrollToDiv(SectionIdMap.SLIDE)}
                  >
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Slides ref={slideRef}></Slides>
      <Couple ref={coupleRef}></Couple>
      <LoveStory ref={storyRef}></LoveStory>
      <Events ref={eventsRef}></Events>
      <People ref={peopleRef}></People>
      <Gallery ref={galleryRef}></Gallery>
    </div>
  );
}
