import { SectionIdMap } from "../common/constants";
import Story from "./Story";
import { forwardRef } from "react";

const story1 = require("../assets/story/story-1.jpg");
const story2 = require("../assets/story/story-2.jpg");
const story3 = require("../assets/story/story-3.jpg");
const story4 = require("../assets/story/story-4.jpg");

const LoveStory = forwardRef((props, ref) => {
    
  return (
    <section
      className="love-story-section"
      id={SectionIdMap.LOVE_STORY}
      ref={ref}
    >
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Our Love Story</h2>
          </div>
        </div>

        <div className="row">
          <div className="story-content">
            <div className="row">
              <Story photo={story1}></Story>
              <Story photo={story2}></Story>
              <Story photo={story3}></Story>
              <Story photo={story4}></Story>
              <Story photo={story2}></Story>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default LoveStory;
