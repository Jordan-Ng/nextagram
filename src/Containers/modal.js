import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const ModalExample = props => {
  const {
    buttonLabel,
    className,
    VerifySignup,
    ToastContainer,
    isLoggedin,
    setisLoggedin
  } = props;

  const [modal, setModal] = useState(false);

  const [showLogin, setShowLogin] = useState(true);

  const toggle = () => setModal(!modal);

  const LogSignToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {isLoggedin ? (
        ""
      ) : (
        <Button color="danger" onClick={toggle}>
          Log-In
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal Title</ModalHeader>

        <ModalBody>
          {showLogin ? (
            <LogIn
              toggle={toggle}
              isLoggedin={isLoggedin}
              setisLoggedin={setisLoggedin}
            />
          ) : (
            <SignUp
              VerifySignup={VerifySignup}
              ToastContainer={ToastContainer}
            />
          )}
        </ModalBody>

        <ModalFooter>
          {/* <Button color="primary" onClick={SubmitLog}>
            Submit
          </Button> */}
          <Button color="primary" onClick={LogSignToggle}>
            {showLogin ? "Signup" : "Login"}
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
