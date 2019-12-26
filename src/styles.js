import styled, { keyframes } from 'styled-components';


// Sidebar.js component container styles
export const StyledContent = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
scroll-behavior: smooth;
color: black;

.first-child{
  
  height: 1000px;

  .trails-main{

    display: flex;
    flex-direction: column;
    height: 400px;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    @media(max-width:750px){
        
    }
}

.trails-text{
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    justify-content: center;
    width: 40%;
    height: 80px;
    

    @media(max-width:1700px){
        margin-left: 0;
        margin-left: 0;
        
        font-size: 1.5rem;
        width: 70%;
        height: 50px;
         
    }

    @media(max-width:1050px){
        margin-left: 0;
        margin-left: 0;
        font-size: 1rem;
        width: 90%;
        height: 50px;
       
    }

    @media(max-width:750px){
        margin-left: 0%;
        font-size: 1rem;
    }
}
}

  .social-tray {
    font-size: 22px;
    position: absolute;
    bottom: 0;
    display: flex;
    position: absolute;
    bottom: -60px;
    left: 30%;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-bottom: 25px;

    @media (max-height: 750px) {
      position: relative;
    }

    .social-icons {
      display: flex;
      width: 70%;
      justify-content: space-around;

      .svg {
        cursor: pointer;
      }
    }
  }
  .bg-img {
    width: 1980px;
    height: 1000px;
    overflow-x: hidden;
    position: fixed;
    z-index: -1;
  }
}

.third-child{
    background: #F8F8F1;
 
    position: relative;



    @media(max-width: 1150px){
      height: 1350px;
    }

    .base-skills{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 25px;
        @media(max-width: 1350px){
            display:none;
        }
    }

    .skill-title{
        padding-top: 35px;
        padding-bottom: 10px;
        font-size: 30px;
        font-weight: bold;
        margin-top: 1%;
        margin-bottom: 1%;
    }
}
.fourth-child{
    background: rgba(0, 0, 0, 0.5);
    height: 1000px;

    @media(max-width: 1150px){
        height: 200vh;
    }
}

.fifth-child{
    background: #F8F8F1;
    height: 100vh;
    position: relative;

    @media(max-width: 1100px){
      min-height: 500px;
    }
}

.nav-list{
        display: flex;
        font-size: 1.2rem;
        width: 100%;
        height: 80px;
        z-index: 1;
        align-items: center;
        font-family: "Raleway", sans-serif;
        justify-content: space-evenly;
        background: #373737;
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0;
        
        li{
            list-style: none;
        }
    }

    a{
        text-decoration: none;
        font-weight: bold;
        color: white;
        cursor: pointer;
    }
}
`;


// Home.js Styles

// Projects.js Styles
export const StyledProjects = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1500px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media(max-width: 1100px){
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 1200px;
    justify-content: center;
  }

  .dead-btn {
    transform: rotate(290deg);
    position: absolute;
    left: 81%;
    top: 6%;
    height: 0px;
    outline: none;
    font-size: 1rem;
    color: black;
    width: 50px;
    font-size: 2rem;
    background: #ffffff;
    border: none;
    cursor: pointer;
  }

  ul{
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
  }

  .a-link {
    visibility: hidden;
  }

  .flippy-container {
    border-radius: 8px;
  }

  .design-desc{
    text-align: center;
  }

  .framework-desc{
    text-align: center;
  }

  p{
    margin-block-start: 0px;
    margin-block-end: 0px;
    color: #777777;
    padding: 2%;
  }

  .card-six{
    visibility: hidden;
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
      color: #777777;
      padding: 2%;
    }
  }

  h3 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  .card-four {
    @media (max-width: 1050px) {
      display: none;
    }
  }

  .card-five {
    @media (max-width: 1450px) {
      display: none;
    }
  }

  .card-six {
    @media (max-width: 1450px) {
      display: none;
    }
  }
`;
// Skills.js Styles
export const StyledSkills = styled.div`
  height: 978px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1350px) {
    height: 100%;
    display: flex;
    min-height: 100 vh;
    justify-content: center;
  }

  .skills-title{
      width: 100%;
      margin-bottom: 1%;
      font-size: 1.2rem;
      margin-top: 1%;
      align-self: center;
      text-align: center;
      text-decoration: underline;
      font-weight: bold;

      @media(max-width: 1150px){
        text-align: center;
        display: none;
        width: 100%;
    }
  }

  .location{
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .relocation{
    margin-block-start: 0px;
    margin-block-end: 0px;
  }

  .skills-head {
    text-align: center;
    margin-block-start: 0px;
    margin-block-end: 0px;
    font-size: 2rem;
    padding: 1%;

    @media(max-width: 1150px){
      font-size: 1.3rem;
    }
  }

  

  .accordion-skills{
    display: flex;
    color: #777777;
    justify-content: space-between;
    width: 80%;
    align-self: center;

    @media(max-width: 1150px){
      display: none;
    }
  }

  
  .skill-container {
    font-family: "Raleway", sans-serif;
    height: 810px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media(max-width: 1761px){
      height: 80%;
    }


    .availibility{
      display: flex;
      flex-wrap: wrap;
      color: #777777;
      width: 100%;
      justify-content: space-around;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .good-par{
      display: flex;
      flex-direction: column;

      @media(max-width: 1150px){
        align-items: center;
        width: 100%;
      }

      .par-title{
        width: 100%;
        margin-bottom: 2%;
        font-size: 1.2rem;
        margin-top: 1%;
        align-self: center;
        text-align: center;
        text-decoration: underline;
        font-weight: bold;

        @media(max-width: 1150px){
          text-align: center;
          width: 100%;
        }
      }

      .small{
        margin-bottom: 1%;
        width: 375px;
        align-self: center;
        text-align: center;
        

        @media(max-width: 1150px){
          text-align: center;
          width: 90%;
        }
      }
    }
      .education{
        margin-bottom: 1%;
        width: 375px;
        align-self: center;
        color: #777777;
        text-align: left;
        text-align-last: auto;

        @media(max-width: 1150px){
          text-align: center;
          width: 90%;
        }
      }

      .par-text{
        margin-bottom: 1%;
        width: 375px;
        align-self: center;
        text-align: justify;
        color: #777777;
        text-align-last: auto;

        @media(max-width: 1150px){
          text-align: center;
          width: 90%;
        }
      }
    }

    .character{
      display: flex;
      justify-content: space-between;
      margin-bottom: 2%;
      flex-wrap: wrap;
    }

    .character-skills{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    
    .skills-text{
      background: #ffffff;
      color: black;
      padding: 2%;
      text-align: left;
      font-size: 1.1rem;
      text-rendering: optimizeLegibility;
      width: 95%;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: rgba(0,0,0,0.15) 0 0 6px;
  
      p{
          text-align: left;
          margin-block-start: .2em;
          margin-block-end: .2em;
      }
    }
  }
  .base-container {
    width: 80%;
    border-top: 1px solid #373737;
    border-bottom: 1px solid #373737;
    align-self: center;
      @media (max-width: 1150px) {
        display: inherit;
        height: auto;
        width: 100%;
        border-bottom: none;
        justify-content: center;
        padding: 1%;
      }

    .base-text {
      background: #ffffff;
      color: #777777;
      text-align: justify;
      text-align-last: center;
      font-size: 1.3rem;
      color: black;
      margin-top: 1%;
      margin-bottom: 1%;
      text-rendering: optimizeLegibility;
  
      @media (max-width: 1150px) {
        font-size: 1.1rem;
        width: 90%;
      }
    }
  }
`;




// Contact.js Styles
export const StyledForm = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;

  .form-heading {
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
    text-align: center;
  }
  

  .footer{
    position: absolute;
    bottom: 40px;
    color: #777777;
    font-size: 1.2rem;
    text-align: center;
    z-index: 0;
  }

  .form {
    height: 60%;
    justify-content: center;
    display: flex;
    background: #ffffff;
    width: 750px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;

    @media (max-width: 1100px) {
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
      font-family: "Work Sans", sans-serif;
      background: #f8f8f1;
      border: none;
      color: #777777;
      font-weight: normal;
      box-shadow: 2px 2px 4px #9a9a9a;
      font-family: "Work Sans", sans-serif;
      height: 40px;
      font-size: 1.5rem;
      border-radius: 2px;
      margin-top: 6%;
      width: 96px;
      text-align: center;
      display: flex;
      align-self: center;
      transition: width 0.6s;
      cursor: pointer;
      justify-content: center;
      align-items: center;

      @media (max-width: 1100px){
        height: 30px;
        width: 76px;
        font-size: 1.2rem;
      }

      &:hover {
        width: 110px;
        background: #76836a;
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

      @media (max-width: 1100px) {
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