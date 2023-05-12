import React from "react";
import "./ContactUsSection.css";

import { useState, useEffect } from "react";

const ContactUsSection = () => {
  const initialValues = { name: "", email: "", phone: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const fchange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phoneregex = /^[0-9\b]+$/;

    if (!values.name) {
      errors.name = "Name is required *";
    }
    if (!values.email) {
      errors.email = "Email Id is required *";
    } else if (!regex.test(values.email)) {
      errors.email = "Not an valid Email Id *";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required *";
    } else if (!phoneregex.test(values.phone)) {
      errors.phone = "Not an valid Phone Number *";
    } else if (values.phone.length < 6) {
      errors.phone = "Not an valid Phone Number *";
    }
    return errors;
  };
  const hsubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  };
  useEffect(
    () => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    },
    { formErrors }
  );

  return (
    <>
      <section className="ContactUsSection-main-div">
        <div className="ContactUsSection-Inner">
          <div className="ContactUsSection-left-div">
            <div className="ContactUsSection-left-content">
              <h3>Benefits</h3>
              <p>You will get a call between 9am - 9pm</p>
              <div className="dropdownlist-contactus">
                <div className="icon-contactus">
                  <i className="fa fa-check"></i>
                </div>
                <div className="icon-contactus-Content">
                  We will get back to you in 24 hrs
                </div>
              </div>

              <div className="dropdownlist-contactus">
                <div className="icon-contactus">
                  <i className="fa fa-check"></i>
                </div>
                <div className="icon-contactus-Content">
                  Latest offers & discounts
                </div>
              </div>

              <div className="dropdownlist-contactus">
                <div className="icon-contactus">
                  <i className="fa fa-check"></i>
                </div>
                <div className="icon-contactus-Content">
                  support@skillAlgo.com for any queries
                </div>
              </div>
            </div>
            <img
              src="/assets/images/contact-us-illustration.png"
              alt=""
              className="contact-us-image"
            />
          </div>

          <div className="ContactUsSection-right-div">
            <div className="Right-inner-content">
              <div className="contact-rigth-side-content">
                {" "}
                <h1>Contact Us</h1>
                <p style={{ color: "red", marginTop: "12px" }}>
                  {formErrors.name || formErrors.phone || formErrors.email}
                </p>
              </div>
              <div className="Contact-right-side-toggle-cross">
                {/* <i className="fa fa-times" ></i> */}
              </div>
            </div>

            <div className="ContactUs-input-field">
              <input
                value={formValues.name}
                name="name"
                onChange={fchange}
                type="text"
                placeholder="Name*"
              />
              <br />
              <input
                value={formValues.phone}
                name="phone"
                onChange={fchange}
                type="text"
                placeholder="Mobile Number*"
              />
              <br />
              <input
                value={formValues.email}
                name="email"
                onChange={fchange}
                type="text"
                placeholder="Email-id*"
              />
            </div>
            <button
              onClick={hsubmit}
              className="shining-btn"
            >Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;