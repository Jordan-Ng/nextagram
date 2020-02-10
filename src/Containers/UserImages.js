import React, { useEffect, useState } from "react";
import axios from "axios";
// deconstructing userID, imageStyle after it is passed down from parent (app)
function UserImages({ userID, imageStyle }) {
  const [images, setImages] = useState([]); //defining the state (note that setImage is a function to change state)

  // the idea here is that everytime we fetch data from the server, we then change the original state using setImage
  // ex. images = [user1 link, user 1 link].
  // then for each item in images (referred to as image in this ex), we will create an image tag and set the source
  //   by doing so, we create multiple instances of UserImages, everytime a userID is passed down
  useEffect(() => {
    axios
      // the "get" link requires a specific id to access the image links. so in order not to hard code it, we put ${userID}
      // userID is a parameter passed down from the homepage
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${userID}`)
      .then(result => {
        // console.log(result);
        setImages(result.data); //once the result is collected setImage is used to alter the state
      });
  });

  return (
    <>
      {/* for each link (image), create an image tag */}
      {images.map(image => {
        return <img src={image} alt="po" style={imageStyle} />;
      })}
    </>
  );
}

export default UserImages;
