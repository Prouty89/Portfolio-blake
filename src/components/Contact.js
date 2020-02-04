import React from 'react'
import * as Yup from 'yup';
import {Field, Form, withFormik} from "formik"
import axios from 'axios';
import { StyledForm } from '../styles';
import Blake2 from '../assets/bcut.png';




function ContactForm() {
  return (
    <>
      <StyledForm className="form-container">
      {/* <div className="img-container">
          <img className="blake-photo" src={Blake2} alt="profpho" />
          <p className="form-heading">Let's Work Together</p>
      </div> */}
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
    mapPropsToValues({name, company, phone, email, message}) {
        return {
            name: name || '',
            company: company || '',
            phone: phone || '',
            email: email || '',
            message: message || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().max(50).required("Who do I owe the pleasure?"),
        company: Yup.string().max(70),
        phone: Yup.string().max(11),
        email: Yup.string().max(30).required('Please provide an email'),
        message: Yup.string().max(300).required('Please include a message')
    }),

    handleSubmit(values) {
        
        axios.post('https://formspree.io/mqkapboa', {message: values})
            .then(res => {
                res.status="success"
            })
            .catch(err => {
                err.message="fail"
            });
       
    }

})(ContactForm);

export default FormikContactForm;

