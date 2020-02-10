import React, { useState, useEffect } from "react";
import axios from "axios";
import Uploadpg from "./Uploadpg";

function MyProfile() {
  const [myImages, setMyImages] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    axios({
      method: "get",
      url: "https://insta.nextacademy.com/api/v1/images/me",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(result => {
        setMyImages(result.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  // console.log(myImages);
  return (
    <>
      {myImages.map(image => {
        return (
          <img
            src={image}
            alt="po"
            style={{ width: "100px", height: "100px" }}
          />
        );
      })}
      <Uploadpg />
    </>
  );
}

export default MyProfile;
