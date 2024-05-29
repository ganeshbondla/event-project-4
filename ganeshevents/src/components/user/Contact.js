import React from "react";
import "../../style/Myfilestyle.css";
import Header from "./Header";

const Contact = () => {
  const styleFrame = {
    border: 0,
  };
  return (
    <>
      <div className="container p-2">
        <Header activeMenu="Contact" />
        <div className="mt-3 text-center">
          <h2>Contact Us</h2>
        </div>
        <div className="mt-2 p-2">
          <div className="row border border-primary p-2">
            <div className="col-6 col-lg-6 col-md-6">
              <iframe
                title="ContactMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.352910960317!2d78.38505327608055!3d17.442814901204244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e57a001b7%3A0x80be7726edd7a630!2sDurgam%20Cheruvu!5e0!3m2!1sen!2sin!4v1716985572980!5m2!1sen!2sin"
                width="auto"
                height="450"
                style={styleFrame}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-6 col-lg-6 col-md-6 my-auto">
              <div className="text-left">
                <h4>Contact Us</h4>
                <p>Will back in 24 hours</p>
              </div>
              <form className="mt-2">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id="inputMobile"
                    placeholder="Enter Your Mobile Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPerpose"
                    placeholder="Perpose"
                  />
                </div>
                <button type="submit" class="btn btn-block btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
