import styled, { keyframes } from 'styled-components';
import Blake from './assets/Blake.jpg';


// Sidebar.js Styles
const fadeIn = keyframes`
from { opacity: .4; }
to   { opacity: 1; }
`;
// Sidebar.js main containers
export const StyledSB = styled.div`
animation: 2s ${fadeIn};
font-family: 'Work Sans', sans-serif;

.image{
    background-image: url(${Blake});
    height: 200px;
    width: 50%;
    padding: 5%;
    display: flex;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    background-position: top;
    background-size: cover;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px;
}

.overlay-container{
    display: none;
}

.content-container{
    position: absolute;
    width: calc(100% - 300px);
    scroll-behavior: smooth;
    left: initial !important;
    overflow-x: hidden;

    @media(max-width:750px){
        width: 100%;
    }

    @media(max-height:750px){
        overflow-y: hidden;
    }
    
    .home-container{
        
        height: 100vh;
        position: relative;

        @media(max-width:750px){
            width: 100%;
            height: 100vh;
        }

        .img-title{
            color:white;
            position: absolute;
            bottom: 0;
            left: 25px;
        }
        

        .trails-main{
            display: flex;
            flex-direction: column;
            height: 65%;
            width: 100%;
            align-items: center;
            display: flex;
            justify-content: flex-end;
            @media(max-width:750px){
                
            }
        }

        .trails-text{
            color: #ffffff
            display: flex;
            align-items: center;
            font-family: 'Work Sans', sans-serif;
            font-size: 1.5rem;
            justify-content: center;
            width: 40%;
            height: 80px;
            border-right: 4px solid black;
            border-left: 4px solid black;
            
            display: flex;
            background: rgba(0, 0, 0, .7);

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

    .cv-res{
        height: 150px;
        display: flex;
        align-items: flex-end;
        width: 200px;
        justify-content: center;
        margin-top: 25px;
        font-size: 21px;
        text-align: center;
        animation: 3s ${fadeIn};
        
        

        @media(max-width:1700px){
            justify-content: center;
            padding-right: 10px;
        }

        @media(max-height:600px){
           
        }
    }

    .cvres-btn{
        display: flex;
        font-family: 'Work Sans', sans-serif;
        background: #373737;
        text-decoration: none;
        color: white;
        font-weight: bold;
        box-shadow: 2px 2px 6px black;
        font-family: 'Work Sans', sans-serif;
        height: 50px;
        font-size: 22px;
        border-radius: 2px;
        width: 146px;
        justify-content: center;
        align-items: center;
        transition: width .6s;
        cursor: pointer;

        &:focus{
            outline: 0;
          }

        &:hover{
            width:166px;
        }
    }

    
}

.sidebar-container{
    font-family: 'Work Sans', sans-serif;
    color: white;
    background: #373737;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px !important;
    
 
    @media(max-width:750px){
        display: none;
    }
}
`;
// Sidebar.js menu, desktop view
export const StyledList = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");
  font-family: "Work Sans", sans-serif;

  @media (max-width: 750px) {
    display: none;
  }

  .name-title {
    font-family: "Work Sans", sans-serif;
    font-size: 30px;
    text-align: center;
  }

  .social-tray {
    font-size: 22px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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

  .sidebar-list {
    font-size: 22px;
    margin-top: 25px;
    padding-inline-start: 0px;
    height: 200px;
    list-style-type: disc;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      transition:  border-bottom 0.3s ease;

      &:hover {
        
        border-bottom: 2px solid #4b67ff;
        border-bottom-style: inset;
      }
    }
  }
`;
// Sidebar.js component container styles
export const StyledContent = styled.div`
font-family: 'Work Sans', sans-serif;
color: black;

.first-child{
    
}

.third-child{
    background: #F8F8F1;
 
    position: relative;



    @media(max-width: 1150px){
      height: 1350px;
    }

    .base-skills{
        height: 20%
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3%;

        @media(max-width: 1350px){
            display:none;
        }
    }

    .skill-title{
        padding-top: 35px;
        padding-bottom: 10px;
        font-size: 30px;
        font-weight: bold;
    }
}
.fourth-child{
    background: #F8F8F1;
    height: 100vh;

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
    display: none;
    
    @media(max-width: 750px){
        display: flex;
        font-size: 15px;
        width: 100%;
        height: 40px;
        z-index: 1;
        align-items: center;
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
export const StyledImage = styled.div`
  .bg-img {
    display: flex;
    justify-content: end !important;
    width: 100% !important;
    position: fixed !important;
    z-index: -1;
    height: 3235px !important;

    @media (max-width: 1350px) {
      width: 150% !important;
    }

    @media (max-width: 1150px) {
      width: 200% !important;
    }

    img {
      height: 30% !important;
    }
  }
`;

// Projects.js Styles
export const StyledProjects = styled.div`
  display: flex;
  justify-content: space-around;
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
  height: 910px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1350px) {
    height: 100%;
    display: flex;
    min-height: 100 vh;
    justify-content: center;
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
  }

  
  .skill-container {
    height: 70%;
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      margin-top: 20px;
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
    width: 90%;
    align-self: center;
      @media (max-width: 1150px) {
        display: inherit;
        height: auto;
        width: 100%;
        justify-content: center;
      }

    .base-text {
      background: #ffffff;
      color: #777777;
      text-align: justify;
      text-align-last: center;
      font-size: 1.2rem;
      color: black;
      margin-top: 3%;
      text-rendering: optimizeLegibility;
  
      @media (max-width: 1150px) {
        font-size: 1.1rem;
        width: 90%;
        

      }
    }
  }
`;

// Accordion Style on Skill.js
export const StyledAccordion = styled.div`
display: flex;
position: absolute;
bottom: 5px;
width: 100%;
height: 30%;
padding-bottom: 20px;
z-index: 1;

@media(max-width: 1350px){
    display: none;
}

.inds{
  @media(max-width:1300px){
    width: 50%;
  }
}

.accordion-skills{
    display: flex;
    height: 270px !important;
    margin-top: 1%;
    width: 93%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 1%;
    margin-right: 1%;
    background: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 4px;
    color: #777777;
    border-radius: 8px;
    justify-content: space-evenly;

    @media(max-width:1300px){
        padding: 0px;
        display: flex;
        justify-content: center;
        
    }

    .rows{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;

        @media(max-width:1300px){
            width: 33%;
            display: flex;
            height: 400px;
            flex-direction: column;
            justify-content: space-around;
    
        }
    }


}

.baseskill-text{
  position: absolute;
  bottom: 48%;
  left: 17%;
  display: flex;
  align-items: center;
  text-align: justify;
  width: 64%;
  background: #ffffff;
  padding: 1%;
  height: 27%;
  color: #777777;
  border-radius: 8px;
  z-index: -1;
  box-shadow: rgba(0,0,0,0.15) 0 0 4px;
}

.toggle-bar{
    height: 100%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: flex-end;
    padding-bottom: 50px;

    @media(max-width:1300px){
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        padding-bottom: 0px;
        height: 100%;
    }
    

.btn-toggle{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 40px;
    border: none;
    background: #373737;
    cursor: pointer;
    height: 274px;
    align-self: flex-end;

    &:focus{
      outline: 0;
    }

    @media(max-width:1300px){
        width: 350px;
        height: 30px;
        display: flex;
        text-align:center;
        align-self: center;
      margin-bottom: 2%;
    }
}
   span{
       font-family: 'Work Sans', sans-serif;
       display: flex;
       justify-content: center; 
       align-items: center;
       height: 100%;
       font-size: 1.5rem;
       text-align: center;
       writing-mode: vertical-lr;
       transform: rotate(180deg);
       width: 100%;
       color: #ffffff;

       @media(max-width:1300px){
        display: flex;
        justify-content: center;
        writing-mode: rl;
        font-size: 1rem;
        text-align: center;
        transform: rotate(0deg);
    }
   }

   .row-one{
    @media(max-width:1300px){
        align-items: center;
    } 
   }
}
`;

//Trees animation
const rock = keyframes`
0% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(-2deg);
  }
`
// Contact.js Styles
export const StyledForm = styled.div`
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
  .trees {
    padding: 15px;
    animation: 5s ${rock} ease-in-out infinite;
    align-self: flex-end;

    @media (max-width: 1100px) {
      display: none;
    }
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