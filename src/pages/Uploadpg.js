import React, { useState } from "react";
import { Container, FormGroup, CustomInput, Form, Button } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Uploadpg = () => {
  const [uploadImage, setuploadImage] = useState(null);
  const [previewImage, setpreviewImage] = useState(null);

  const handleImage = e => {
    let imageFile = e.target.files[0];
    let newImage = URL.createObjectURL(imageFile);

    setuploadImage(imageFile);
    setpreviewImage(newImage);
  };

  const handleUpload = e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", uploadImage);
    let jwt = localStorage.getItem("jwt");

    axios({
      method: "POST",
      url: "https://insta.nextacademy.com/api/v1/images/",
      data: formData,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "multipart/form-data"
      }
    })
      .then(result => {
        console.log(result);
        toast("image uploaded!");
      })
      .catch(error => {
        console.log(error);
        toast(error.response);
      });
  };

  return (
    <Container className="pt-5">
      <h6>Upload New Image</h6>
      <div
        className="border border-dark rounded mx-auto d-block mt-4"
        style={{ height: "500px", width: "500px", position: "relative" }}
      >
        {previewImage ? (
          <img
            src={previewImage}
            className="w-75"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
            alt="preview"
          />
        ) : (
          " "
        )}
        <h2
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          Choose image to preview
        </h2>
      </div>
      <Form onSubmit={handleUpload}>
        <FormGroup className="w-50 mx-auto d-block">
          <CustomInput
            type="file"
            id="exampleCustomFileBrowser"
            name="customFile"
            className="mt-4"
            onChange={handleImage}
          />
        </FormGroup>
        <Button outline color="primary">
          Upload
        </Button>
      </Form>
    </Container>
  );
};

export default Uploadpg;
