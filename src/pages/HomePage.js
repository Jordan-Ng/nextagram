import React from "react";
import CommentBox from "../Containers/CommentBox";
import UserImages from "../Containers/UserImages";
import { Link } from "react-router-dom";
import UserProfilePage from "./UserProfilePage";
// after the parameters are passed down, they need to be deconstructed
function HomePage({ users, imageStyle, heading, TextBox, Main }) {
  return (
    <div>
      <ul>
        {users.map(user => {
          return (
            <li>
              <p style={{ marginLeft: "20px", marginTop: "20px" }}>
                {user.id}:{" "}
                <Link to={`/users/${user.id}`}> {user.username} </Link>
              </p>

              <div style={Main}>
                <img
                  src={user.profileImage}
                  alt={user.username}
                  style={imageStyle}
                />
                <CommentBox TextBox={TextBox} />
              </div>
              {/* we need to pass down the user.id (one of the keys from user) for UserImage to access  */}
              <UserImages userID={user.id} imageStyle={imageStyle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
