import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export const NasaPhoto = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setPhoto(data);
    };
    fetchPhoto();
  }, []);

  if (!photo) {
    return <div />;
  }

  return (
    <>
      <Navbar />
      <div className="nasa-photo">
        {/* media_type might change everyday */}
        {photo.media_type === "image" ? (
          <img src={photo.url} alt={photo.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            className="photo"
            frameBorder="0"
            src={photo.url}
            gesture="media"
            allowFullScreen
          />
        )}
        <div>
          <h1>{photo.title}</h1>
          <p className="date">{photo.date}</p>
          <p className="explanation">{photo.explanation}</p>
        </div>
      </div>
    </>
  );
};
