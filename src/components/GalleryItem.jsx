export default function GalleryItem({ photo, largePhoto, photoClicked }) {
  return (
    <div className="gallery-item" onClick={() => photoClicked()}>
      <div className="gallery-item-inner">
        <img src={photo} data-large={largePhoto} alt="gallery"></img>
      </div>
    </div>
  );
}
