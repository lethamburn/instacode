import React, { useState, useEffect } from "react";
import getPictures from "../../api/fetch_pictures";

const Gallery = () => {
  useEffect(() => {
    formatPictures();
  }, []);

  const [pictures, setPictures] = useState([]);

  const formatPictures = async () => {
    const picturedb = await getPictures();
    console.log(picturedb);
    setPictures(picturedb.data.pictures);
  };

  return (
    <div>
      <ul>
        {pictures.map((picture) => {
          return (
            <li key={JSON.stringify(picture)}>
              <img src={picture.picture} alt="Picture" width="400px" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
