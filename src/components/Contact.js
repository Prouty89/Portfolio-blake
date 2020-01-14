import React from 'react'
import * as Yup from 'yup';
import {Field, Form, withFormik} from "formik"
import axios from 'axios';
import { StyledForm } from '../styles';

import Github from '../assets/Github.svg';
import Tweet from '../assets/Tweet.svg';
import IG from '../assets/IG.svg';
import Linkd from '../assets/Linkd.svg';
import SVG from 'react-inlinesvg';


function ContactForm() {
  return (
    <>
      <StyledForm className="form-container">
        <p className="form-heading">
          Let's Work Together. 
        </p>
        <Form className="form">
          <Field
            name={"name"}
            placeholder={"Name*"}
            type={"text"}
            className="name-field field"
          />

          <Field
            name={"company"}
            placeholder={"Company*"}
            type={"text"}
            className="company-field field"
          />

          <Field
            name={"phone"}
            for={"phone"}
            placeholder={"Phone"}
            type={"phone"}
            className="phone-field field"
          />

          <Field
            name={"email"}
            placeholder={"Email*"}
            type={"email"}
            className="email-field field"
          />

          <Field
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
        <div className ="social-tray">
            <div className="social-icons">
                <SVG rel = "noopener" className="svg" src = {IG}/>
                <SVG rel = "noopener" className="svg" src = {Github}/>
                <SVG rel = "noopener" className="svg" src = {Linkd}/>
                <SVG rel = "noopener" className="svg" src = {Tweet}/>
            </div>
        </div>
        <p className="footer">Designed and Developed by Blake Prouty</p>
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

