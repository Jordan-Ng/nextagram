import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/loading";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Navebar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import MyProfile from "./pages/MyProfile";

toast.configure();

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [title, setTitle] = useState("hello world");
  const [isLoggedin, setisLoggedin] = useState(localStorage.getItem("jwt"));

  const imageStyle = {
    height: "100px",
    width: "100px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    marginBottom: "50px"
  };

  const TextBox = {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    marginBottom: "20px",
    width: "60vw",
    height: "100px"
  };

  const Main = {
    display: "flex",
    flexWrap: "wrap"
  };

  const VerifySignup = (name, emel, pw) => {
    axios({
      //changes here\
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/users/",
      data: { username: name, email: emel, password: pw }
    })
      .then(response => {
        console.log(response);
        toast("Signed Up Successfully");
      })
      .catch(error => {
        console.log(error.response);
        // console.log("AYYYY-ror");
        const errorMsg = error.response.data.message;
        errorMsg.forEach(msg => {
          toast(msg);
        });
        // toast(error.response.data.message.forEach());
      });
  };

  useEffect(() => {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        //we use result.data because we only want the data, not the whole thing
        //we also use setUsers here, because we cannot directly mutate the state
        setUsers(result.data);
        // no need to set timeout. setisLoading(false) should be ok
        setTimeout(() => {
          setisLoading(false);
        }, 500);
      })
      .catch(error => {
        console.log("Error");
      });
  }, []);

  if (isLoading === true) {
    return <Loader />;
  } else
    return (
      <>
        <Navebar
          VerifySignup={VerifySignup}
          ToastContainer={ToastContainer}
          isLoggedin={isLoggedin}
          setisLoggedin={setisLoggedin}
        />
        {/* <Link to="/"> Home </Link>
        <Link to="/users/2">My Profile</Link> */}

        {/* <Route exact path="/" component={props => <HomePage {...props} users={users}/>} /> */}
        <Route exact path="/">
          <HomePage
            users={users}
            imageStyle={imageStyle}
            heading={title}
            TextBox={TextBox}
            Main={Main}
          />
        </Route>

        <Route exact path="/profile">
          <MyProfile />
        </Route>

        <Route path="/users/:id">
          <UserProfilePage users={users} imageStyle={imageStyle} />
        </Route>
      </>
    );
}

export default App;
