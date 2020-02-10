import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfilePage = ({ imageStyle }) => {
  //   const params = useParams();
  const [profileImage, SetProfileImage] = useState([]);
  const { id } = useParams();
  console.log(id); // {id: someId}

  useEffect(() => {
    axios
      .get(`https://insta.nextacademy.com/api/v1/images?userId=${id}`)
      .then(result => {
        SetProfileImage(result.data);
        // console.log(result.data);
      });
  }, []);
  // axios call
  // console.log data

  return (
    <>
      {profileImage.map(image => {
        return <img src={image} alt="po" style={imageStyle} />;
      })}
    </>
  );
};

export default UserProfilePage;
