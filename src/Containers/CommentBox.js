import React from "react";

function CommentBox({ users, heading, TextBox }) {
  return (
    <ul>
      {/* {users.map(user => {
        return <div>{heading}</div>;
      })} */}
      <textarea style={TextBox} />
    </ul>
  );
}
export default CommentBox;
