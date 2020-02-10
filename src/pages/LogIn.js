import React, { useState, useEffect } from "react";
import { Form } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function LogIn({ toggle, isLoggedin, setisLoggedin }) {
  const history = useHistory();
  console.log(history);

  const [EmailInput, setEmailInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");

  const HandleEmail = e => {
    setEmailInput(e.target.value);
  };

  const HandlePass = e => {
    setPasswordInput(e.target.value);
  };

  const SubmitLog = e => {
    e.preventDefault();
    if (EmailInput && PasswordInput) {
      e.preventDefault();
      console.log(`Email= ${EmailInput}, Password=${PasswordInput}`);
    } else {
      e.preventDefault();
      alert("your mum");
    }

    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/login",
      data: {
        username: EmailInput,
        password: PasswordInput
      }
    })
      .then(result => {
        console.log(result);
        toast("logged in successfully!");
        localStorage.setItem("jwt", result.data.auth_token);
        // console.log(localStorage);
        setisLoggedin(true);
        toggle();
        history.push("/profile");
      })
      .catch(error => {
        console.log(error.response);
        toast("Username or Password is incorrect. Try again");
      });
    // toast("signed in!");
  };

  return (
    <Form>
      <p>Username</p>
      <input type="text" onChange={HandleEmail} value={EmailInput} />
      {console.log(EmailInput)}
      <p>Password</p>
      <input type="text" onChange={HandlePass} value={PasswordInput} />
      {console.log(PasswordInput)}
      <button color="primary" onClick={SubmitLog}>
        Submit(login)
      </button>
    </Form>
  );
}

export default LogIn;
