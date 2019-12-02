import React, {useEffect, useState} from 'react'
import * as Yup from 'yup';
import {Field, Form, withFormik} from "formik"
import axios from 'axios';
import styled from 'styled-components';

function ContactForm() {
    
    return (
        <StyledForm className="form-container">
          
            <Form className="form">
                <Field name={"name"} placeholder={"Name*"} type={"text"} className="name-field field"/>

                
                <Field name={"company"} placeholder={"Company*"} type={"text"} className="company-field field"/>

                
                <Field name={"phone"} placeholder={"Phone"} type={"phone"} className="phone-field field"/>

               
                <Field name={"email"} placeholder={"Email*"} type={"email"} className="email-field field"/>

                
                <Field name={"message"} placeholder={"Message*"} input={"textarea"} type={"text"} className="message-field field"/>

                <button type={"submit"} className="submit-btn">
                    Submit
                </button>
            </Form>

        </StyledForm>
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

const StyledForm = styled.div`
display: flex;
height: 90%;
font-size: 22px;
justify-content: center;
align-items: center;

.form{
    height: 70%;
    justify-content: center;
    display: flex;
    background: #bccaa9;
    width: 750px;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 8px;

    @media(max-width: 1100px){
    height: 50%;
    justify-content: center;
    display: flex;
    width: 375px;
    flex-direction: column;
    align-items: center;
    }

    .field{
        margin-top: 20px;
    }
    
    

    .submit-btn{
        font-family: 'Work Sans', sans-serif;
        background: #ffffff;
        border: none;
        color: #777777;
        font-weight: normal;
        box-shadow: 2px 2px 4px #9a9a9a;
        font-family: 'Work Sans', sans-serif;
        height: 40px;
        font-size: 22px;
        border-radius: 2px;
        margin-top: 50px;
        width: 96px;
        text-align: center;
        display: flex;
        align-self: center;
        transition: width .6s;
        cursor: pointer;
        justify-content: center;
        align-items: center;

        &:hover{
            width:110px;
        }

        &:focus{
            outline: 0;
          }
    }

    input {
        font-family: 'Work Sans', sans-serif;
        width: 550px;
        font-size: 22px;
        height: 40px;
        border: none;
        border-radius: 2px;


        @media(max-width: 1100px){
            height: 30px;
            justify-content: center;
            display: flex;
            width: 350px;
            font-size: 15px;
            flex-direction: column;
            align-items: center;
            }
        
        
        input:focus { 
            outline: none;
            border: none;
            border-radius: 2px;
            box-shadow: 0 0 1px black;
        }

        ::placeholder{
            padding-left: 10px;
        }

        ::value{
            color:red;
        }

    }
}
`