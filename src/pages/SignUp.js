import React, { useState } from "react";
import { Form, FormFeedback, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";

function SignUp({ VerifySignup, ToastContainer }) {
  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [UserName, setUserName] = useState("");
  // const [delay, setDelay] = useState(null);
  // const [usernameValid, setUsernameValid] = useState(true);
  // const [username, setUsername] = useState("");

  const HandleEmail = e => {
    setEmailInput(e.target.value);
  };

  const HandlePass = e => {
    setPasswordInput(e.target.value);
  };

  const HandleUser = e => {
    // clearTimeout(delay);
    const newUsername = e.target.value;
    setUserName(newUsername);

    // const newDelay = setTimeout(() => {
    //   checkUsername(newUsername);
    // }, 500);

    // setDelay(newDelay);
  };

  const getUserNameFeedback = () => {
    if (UserName.length < 5 && UserName.length > 0) {
      return { invalid: true };
    } else if (UserName.length >= 5) {
      return { valid: true };
    }
  };

  const getFieldFeedback = () => {
    if (UserName.length < 5 && UserName.length > 0) {
      return <FormFeedback invalid>less than 5 characters</FormFeedback>;
    } else if (UserName.length >= 5) {
      return <FormFeedback valid>Wokay!</FormFeedback>;
    }
  };

  const getEmailFeedback = () => {
    if (!EmailInput.includes("@")) {
      return <FormFeedback invalid>please key in a valid email</FormFeedback>;
    } else {
      console.log("good to go");
    }
  };

  const EmailPrompt = () => {
    if (!EmailInput.includes("@")) {
      return { invalid: true };
    } else if (EmailInput.includes("@")) {
      return { valid: true };
    }
  };

  const SubmitSign = e => {
    if (EmailInput && PasswordInput && UserName) {
      e.preventDefault();
      console.log(
        `Email= ${EmailInput}, Password=${PasswordInput}, Username=${UserName}`
      );
    } else {
      e.preventDefault();
      alert("your mum");
    }
    VerifySignup(UserName, EmailInput, PasswordInput);
  };

  // const checkUsername = newUsername => {
  //   axios
  //     .get(
  //       `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
  //     )
  //     .then(response => {
  //       console.log(response.data);
  //       if (response.data.valid) {
  //         setUsernameValid(true);
  //       } else {
  //         setUsernameValid(false);
  //       }
  //     });
  // };

  return (
    <Form>
      <p>UserName</p>

      <Input
        type="text"
        onChange={HandleUser}
        value={UserName}
        {...getUserNameFeedback()}
      />
      {getFieldFeedback()}
      {/* {checkUsername()} */}
      <p>Please enter at least 5 characters</p>

      {console.log(UserName)}

      <p>Email Address</p>
      <Input
        type="text"
        onChange={HandleEmail}
        value={EmailInput}
        {...EmailPrompt()}
      />
      {getEmailFeedback()}
      {console.log(EmailInput)}
      <p>Enter your email pls</p>

      <p>Password</p>
      <input type="text" onChange={HandlePass} value={PasswordInput} />
      {console.log(PasswordInput)}
      <p>Please enter password (at least 5 characters)</p>
      <button color="primary" onClick={SubmitSign}>
        Submit(SignUp)
      </button>
    </Form>
  );
}

export default SignUp;
