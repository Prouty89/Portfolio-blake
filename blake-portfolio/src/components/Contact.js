import React, {useEffect, useState} from 'react'
import * as Yup from 'yup';
import {Field, Form, withFormik} from "formik"
import axios from 'axios';

function ContactForm() {
    
    return (
        <div className="form-container">
          
            <Form className="form">
                <div className="name-title">Name*</div>
                <Field name={"name"} type={"text"} className="name-field"/>

                <div className="company-title">Company</div>
                <Field name={"company"} type={"text"} className="company-field"/>

                <div className="phone-title">Phone</div>
                <Field name={"phone"} type={"phone"} className="phone-field"/>

                <div className="email-title">Phone</div>
                <Field name={"email"} type={"email"} className="email-field"/>

                <div className="message-title">Message</div>
                <Field name={"message"} type={"text"} className="message-field"/>

                <button type={"submit"} className="submit-btn">
                    Submit
                </button>
            </Form>

        </div>
    )
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