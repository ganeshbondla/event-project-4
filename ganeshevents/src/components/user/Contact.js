import React from "react";
import "../../style/Myfilestyle.css";

function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <h1 className="My">Edit Data</h1>
      <hr />
      <input type="text" id="name" placeholder="Name" />
      <br />
      <br />
      <input type="email" id="email" placeholder="Email" />
      <br />
      <br />
    </>
  );
}

export default Contact;
