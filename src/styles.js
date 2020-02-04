import styled from 'styled-components';

import Touch from './assets/Touch.jpg';

//Home.js Styles
export const StyledHome = styled.div`
@import url('https://fonts.googleapis.com/css?family=KoHo:400,500&display=swap');

.sasq-container{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #037e68;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center; 

  .sasq{
    margin: 0 auto;
    height: 500px;
    border-radius: 8px;

    @media(max-width: 750px){
      height: 300px;
    }
  }
}


.home-contents{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #336075;
  color: #fff;
  height: 315px;
  position: relative;
  z-index: 1;
  ::after{
    background: inherit;
    bottom: 0;
    content: '';
    display: block;
    height: 690px;
    left: 0;
    position: absolute;
    right: 0;
    border-bottom: 15px solid #c6e8f2;
    transform: skewY(-8.5deg);
    transform-origin: 104%;
    z-index: -1;
  }
  &::before{
    background-image: url(${Touch});
    top: 216px;
    background-color: #080808;
    background-position-x: right;
    background-position-y: bottom;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    content: '';
    display: block;
    height: 710px;
    left: 0;
    position: absolute;
    right: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
    z-index: -1;
    @media(max-width: 450px){
      height: 500px;
      width: 500px;
      padding-top: 50px;
      padding-left: 160px;
      }
    }
  
  .welcome-container{
    padding-left: 20px;
    .welcome-text{
      font-family: 'KoHo', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      margin-block-start: 0em;
      margin-block-end: 0em;
      @media(max-width: 750px){
        font-size: 2.5rem;
      }
    }
    .animated-text{
      font-family: 'KoHo', sans-serif;
      font-size: 2rem;
      color: #c6e8f2;
      margin-block-start: 0em;
      margin-block-end: 0em;
      @media(max-width: 750px){
        font-size: 1.5rem;
      }
    }
  }

  .logo{
    height: 48px;
    margin-right: 40px;
    margin-top: 20px;

    @media(max-width: 750px){
      height: 45px;
    }
  }


}


`



// // Projects.js Styles
export const StyledProjects = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap');
  font-family: 'Red Hat Display', sans-serif;
  padding-left: 50px;

  @media(max-width:500px){
    padding-left: 25px;
  }
  
  .react-multi-carousel-list{
    height: 750px;
  }

  ul {
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
  }

  .a-link {
    display: none;
  }

  .flippy-container {
    border-radius: 8px;
    height: 360px !important;
  }

  .design-desc {
    text-align: center;
  }

  .framework-desc {
    text-align: center;
  }

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;

    padding: 2%;
  }

  .card {
    position: relative;

    @media(max-width: 1100px){
      margin: 0 auto;
    }

    .click-here-text{
      position: absolute;
      bottom: 54px;
      font-size: 1.2em;
      cursor: default;

      &:hover{
        font-weight: 500;
      }

      @media(max-width: 600px){
        font-size: 1em;
      }
    }

    .click-here{
      position: absolute;
      bottom: 10px;
      right: 14px;
      text-transform: uppercase;
      font-size: 6em;
      color: #c6e8f2;

      @media(max-width: 600px){
        font-size: 3em;
        bottom: 40px;
      }

      &:hover{
        color: #A8C5FF;
        font-weight: 100;
      }
    }

    h3{
      background: #c6e8f2;
      color: black;
      font-weight: 500;
    }
  }

  .card-links {
    position: absolute;
    bottom: 3%;
    display: flex;
    border-top: 2px solid #777777;
    justify-content: space-between;
    width: 90%;

    .link {
      text-decoration: none;
      padding: 2%;
      color: #777777;

      &:hover{
        color: #A8C5FF;
        font-weight: 500;
      }
    }

  }

  h3 {
    text-align: center;
    margin-block-start: .5em;
    margin-block-end: .5em;
  }

  h4 {
    text-align: center;
    font-weight: 500;
    margin-block-start: .33em;
    margin-block-end: .33em;
  }

  .react-multi-carousel-item--active{
    width: 440px !important;
  }

`;

// // Contact.js Styles
export const StyledForm = styled.div`
  display: flex;
  height: 100%;
  font-size: 1.5rem;
  justify-content: space-evenly;
  align-items: center;

  .img-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 240px;
    z-index: 1;
    .blake-photo{
      height: 225px;
      border-radius: 50%;
      filter: drop-shadow(2px 0px 2px black);
    }
  }

  .form-heading {
    font-size: 1em;
    color: black;
    text-align: center;
  }

  .form {
    height: 550px;
    justify-content: center;
    display: flex;
    background: #336075;
    width: 650px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.22) 0 0 16px;

    @media (max-width: 700px) {
      height: 300px;
      justify-content: center;
      display: flex;
      width: 355px;
      flex-direction: column;
      align-items: center;
    }

    .field {
      margin-top: 4%;
      box-shadow: rgba(0, 0, 0, 0.35) 0 0 4px;
    }

    .submit-btn {
      background: #f8f8f1;
      border: none;
      color: #777777;
      font-weight: normal;
      box-shadow: 2px 2px 4px #9a9a9a;
      font-family: 'Red Hat Display', sans-serif;
      height: 40px;
      font-size: 1.5rem;
      border-radius: 2px;
      margin-top: 4%;
      width: 96px;
      text-align: center;
      display: flex;
      align-self: center;
      transition: width 0.6s;
      cursor: pointer;
      justify-content: center;
      align-items: center;

      @media (max-width: 1100px) {
        height: 30px;
        width: 76px;
        font-size: 1.2rem;
      }

      &:hover {
        width: 110px;
        background: #679fb3;
        color: white;
      }

      &:focus {
        outline: 0;
      }
    }
    

    input {
      font-family: "Work Sans", sans-serif;
      width: 550px;
      font-size: 1.2rem;
      background: #f8f8f1;
      height: 40px;
      border: none;
      border-radius: 4px;

      @media (max-width: 700px) {
        height: 30px;
        justify-content: center;
        display: flex;
        width: 330px;
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
      ::placeholder {
        padding-left: 10px;
      }
      ::value {
        color: red;
      }
    }
  }
`;


//Footer.js Styles
export const StyledFooter = styled.div`
@import url('https://fonts.googleapis.com/css?family=KoHo:400,500&display=swap');
.footer-container{
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  .footer-contents{
    display: flex;
    padding-left: 10px;
    color: white;
    align-items: center;
    font-family: 'KoHo', sans-serif;
  }

  .footer-icon-container{
    width: 300px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    @media(max-width: 500px){
      width: 100%;
      padding-left: 0px;
      justify-content: space-evenly;
    }
  }

  .svg{
    background: radial-gradient(#336075 75%, #0a0a0a 25%);
    border-radius: 50%;
    padding: 2px;

    &:hover{
      background: #0a0a0a;
    }
  }
}

`

