import { forwardRef, useState } from "react";
import Friend from "./Friend";
import { FriendType, SectionIdMap } from "../common/constants";

const groomsmen1 = require("../assets/groomsmen/1.jpg");
const groomsmen2 = require("../assets/groomsmen/2.jpg");
const groomsmen3 = require("../assets/groomsmen/3.jpg");
const groomsmen4 = require("../assets/groomsmen/4.jpg");

const bridesmaid1 = require("../assets/bridesmaid/1.jpg");
const bridesmaid2 = require("../assets/bridesmaid/2.jpg");
const bridesmaid3 = require("../assets/bridesmaid/3.jpg");
const bridesmaid4 = require("../assets/bridesmaid/4.jpg");

const People = forwardRef((props, ref) => {
  const [friendType, setFriendType] = useState(FriendType.GROOMSMEN);

  function updateFriendType(friendType) {
    document.querySelector(".filter-btn.active").classList.remove("active");
    document.querySelector(`.filter-btn.${friendType}`).classList.add("active");

    setTimeout(() => {
      document
        .querySelector(`.friends-wrapper.${friendType}`)
        .classList.add("active");
    });

    setFriendType(() => friendType);
  }

  return (
    <section className="people-section" id={SectionIdMap.PEOPLE} ref={ref}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>People</h2>
          </div>
        </div>

        <div className="row ">
          <div className="people-filter ">
            <span
              className={"filter-btn active " + FriendType.GROOMSMEN}
              data-target="groomsmen"
              onClick={() => updateFriendType(FriendType.GROOMSMEN)}
            >
              Groomsmen
            </span>
            <span
              className={"filter-btn " + FriendType.BRIDESMAID}
              data-target="bridesmaid"
              onClick={() => updateFriendType(FriendType.BRIDESMAID)}
            >
              Bridesmaid
            </span>
          </div>
        </div>

        {friendType === FriendType.GROOMSMEN ? (
          <div className={"row friends-wrapper " + FriendType.GROOMSMEN}>
            <Friend
              friendPhoto={groomsmen1}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen2}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen3}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen4}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen1}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen2}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen3}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={groomsmen4}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>
          </div>
        ) : (
          <div className={"row friends-wrapper " + FriendType.BRIDESMAID}>
            <Friend
              friendPhoto={bridesmaid1}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid2}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid3}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid4}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid1}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid2}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid3}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>

            <Friend
              friendPhoto={bridesmaid4}
              friendName={"Ritesh Gulghane"}
              friendLabel={"Best Friend"}
            ></Friend>
          </div>
        )}
      </div>
    </section>
  );
});

export default People;
