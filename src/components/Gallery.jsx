import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import GalleryItem from "./GalleryItem";
import { forwardRef, useState } from "react";
import { SectionIdMap } from "../common/constants";
const photo1 = require("../assets/gallery/thumb/1.jpg");
const photo2 = require("../assets/gallery/thumb/2.jpg");
const photo3 = require("../assets/gallery/thumb/3.jpg");
const photo4 = require("../assets/gallery/thumb/4.jpg");
const photo5 = require("../assets/gallery/thumb/5.jpg");
const photo6 = require("../assets/gallery/thumb/6.jpg");

const largePhoto1 = require("../assets/gallery/large/1.jpg");
const largePhoto2 = require("../assets/gallery/large/2.jpg");
const largePhoto3 = require("../assets/gallery/large/3.jpg");
const largePhoto4 = require("../assets/gallery/large/4.jpg");
const largePhoto5 = require("../assets/gallery/large/5.jpg");
const largePhoto6 = require("../assets/gallery/large/6.jpg");

const Gallery = forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState(false);

  const galleryPhotos = [
    { id: 0, photo: photo1, largePhoto: largePhoto1 },
    { id: 1, photo: photo2, largePhoto: largePhoto2 },
    { id: 2, photo: photo3, largePhoto: largePhoto3 },
    { id: 3, photo: photo4, largePhoto: largePhoto4 },
    { id: 4, photo: photo5, largePhoto: largePhoto5 },
    { id: 5, photo: photo6, largePhoto: largePhoto6 },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(galleryPhotos[0]);

  function onPhotoClicked(photoIndex) {
    togglePopup();
    setSelectedPhoto(galleryPhotos[photoIndex]);

    setTimeout(() => {
      document.querySelector(".gallery-popup").classList.add("open");
    });
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  function changePhoto(currentIndex, isNext = true) {
    if (
      document
        .querySelector(".gallery-popup img")
        .classList.contains("slide-left")
    ) {
      document
        .querySelector(".gallery-popup img")
        .classList.remove("slide-left");
    }
    const totalPhotoCount = galleryPhotos.length;
    const newIndex =
      (currentIndex + totalPhotoCount + (isNext ? +1 : -1)) %
      galleryPhotos.length;
    setSelectedPhoto(galleryPhotos[newIndex]);

    setTimeout(() => {
      document.querySelector(".gallery-popup img").classList.add("slide-left");
    });
  }

  return (
    <>
      <section className="gallery-section" id={SectionIdMap.GALLERY} ref={ref}>
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Our Memories</h2>
            </div>
          </div>

          <div className="row">
            {galleryPhotos.map((galPhoto) => {
              return (
                <GalleryItem
                  key={galPhoto.id}
                  photo={galPhoto.photo}
                  largePhoto={galPhoto.largePhoto}
                  photoClicked={() => onPhotoClicked(galPhoto.id)}
                ></GalleryItem>
              );
            })}
          </div>
        </div>
      </section>
      {showPopup && selectedPhoto && (
        <div id="gallery-popup" className="gallery-popup">
          <div className="gp-container">
            <div className="gp-counter">{`${selectedPhoto.id + 1} / ${
              galleryPhotos.length
            }`}</div>
            <div className="gp-close" onClick={() => togglePopup()}>
              &times;
            </div>
            <img src={selectedPhoto.largePhoto} alt="gallery popup"></img>
            <div className="gp-controls">
              <div
                className="prev"
                onClick={() => changePhoto(selectedPhoto.id, false)}
              >
                <FontAwesomeIcon
                  className="chevron-icon"
                  icon={faChevronLeft}
                />
              </div>
              <div
                className="next"
                onClick={() => changePhoto(selectedPhoto.id)}
              >
                <FontAwesomeIcon
                  className="chevron-icon"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Gallery;
