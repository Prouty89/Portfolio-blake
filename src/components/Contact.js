import React from 'react'
import * as Yup from 'yup';
import {Field, Form, withFormik} from "formik"
import axios from 'axios';
import { StyledForm } from '../styles';





function ContactForm() {
  return (
    <>
    <h3>Reach out!</h3>
      <StyledForm className="form-container">
        <Form className="form">
          <Field
            label
            for={"name"}
            id={"name"}
            name={"name"}
            placeholder={"Name*"}
            type={"text"}
            className="name-field field"
          />

          <Field
            label
            for={"company"}
            id={"company"}
            name={"company"}
            placeholder={"Company*"}
            type={"text"}
            className="company-field field"
          />

          <Field
            label
            for={"phone"}
            id={"phone"}
            name={"phone"}
            for={"phone"}
            placeholder={"Phone"}
            type={"phone"}
            className="phone-field field"
          />

          <Field
            label
            for={"email"}
            id={"email"}
            name={"email"}
            placeholder={"Email*"}
            type={"email"}
            className="email-field field"
          />

          <Field
            label
            for={"message"}
            id={"message"}
            name={"message"}
            placeholder={"Message*"}
            input={"textarea"}
            type={"text"}
            className="message-field field"
          />

          <button type={"submit"} className="submit-btn">
            Submit
          </button>
        </Form>
      </StyledForm>
    </>
  );
}

const FormikContactForm = withFormik({
  mapPropsToValues({ name, company, phone, email, message }) {
    return {
      name: name || "",
      company: company || "",
      phone: phone || "",
      email: email || "",
      message: message || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().max(35).required("Who do I owe the pleasure?"),
    company: Yup.string().max(50),
    phone: Yup.string().max(15),
    email: Yup.string().max(40).required("Please provide an email"),
    message: Yup.string().max(300).required("Please include a message")
  }),

  handleSubmit(values) {
    axios
      .post("https://formspree.io/mqkapboa", { message: values })
      .then(res => {
        res.status = "success";
      })
      .catch(err => {
        err.message = "fail";
      });
  }
})(ContactForm);

export default FormikContactForm;

