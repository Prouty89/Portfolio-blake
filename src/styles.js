import styled from 'styled-components';
import Ocean from './assets/Ocean.jpg';
import First from './assets/Fruit1.jpg'
import Second from './assets/second1.jpg';



// Sidebar.js component container styles
export const StyledContent = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
scroll-behavior: smooth;
color: black;

.first-child{
  .blake-photo{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-self: center;
   

    @media(max-width: 800px){
      width: 130px;
      height: 130px; 
    }
  }
  
  height: 700px;

  @media(max-width:750px){
      height: 475px;
  }

.home-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media(max-width: 800px){
    display: flex;
    flex-direction: column-reverse;
  }
}

  .photo-container{
    background: rgba(55, 55, 55, .6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .trails-main{
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    height: 700px;
    background: rgba(55, 55, 55, .6);
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;

    @media(max-width: 800px){
      height: 290px;
      justify-content: end;
      margin-bottom: 0px;
    }
}

.trails-text{
    color: #ffffff;
    font-weight: 600;
    text-align: left;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    justify-content: center;
    width: 100%;
    height: 80px;
    

    @media(max-width:1700px){
        margin-left: 0;
        margin-left: 0;
        
        font-size: 1.5rem;
        width: 100%;
        height: 70px;
         
    }

    @media(max-width:1050px){
        margin-left: 0;
        margin-left: 0;
        font-size: 1rem;
        width: 100%;
        height: 60px;
       
    }

    @media(max-width:800px){
        margin-left: 0%;
        font-size: 1rem;
        text-align: center;
    }
  }
}

  .social-tray {
  
    display: flex;
    background: rgba(55, 55, 55, .6);
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media(max-width: 800px){
      width: 100%;
      height: 55px;
    }

    

    .social-icons {
      display: flex;
      flex-direction: column;
      height: 50%;
      justify-content: space-around;

      @media(max-width: 800px){
        flex-direction: row;
        height: 40%;
        width: 100%;
      }

      .svg {
        cursor: pointer;
      }
    }
  }
  .bg-img {
    width: 100%;
    height: 750px;
    overflow-x: hidden;
    position: fixed;
    z-index: -1;

    @media(max-width: 800px){
      width: 800px;
    }
  }
}

.third-child{
    position: relative;
    background-image: url(${Ocean});
    @media(max-width: 1150px){
      height: 1000px;
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

.base-container{
  height: 80px;
    background: #f8f8f1;
    text-align: center;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #373737;
    border-bottom: 2px solid #373737;

    @media(max-width: 750px){
      height: 150px;
    }

    .base-text{
      display: flex;
      justify-content: center;
    }

    .baseskill-text{
      width: 75%;
      font-size: 1.3rem;
      font-family: "Raleway", sans-serif;

      @media(max-width: 1000px){
        font-size: 1rem;
        width: 100%;
       
      }
    }
}

.fourth-child{
    background-image: url(${Second});
    background-size: cover;
    height: 935px;
    display: flex;
    align-items: center;

    @media(max-width: 735px){
        height: 170vh;
    }

    @media(max-width: 535px){
      height: 200vh;
  }
}

.fifth-child{
    background-image: url(${First});
    background-size: cover;
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
        height: 60px;
        z-index: 1;
        align-items: center;
        background: black;
        outline: 2px solid white;
        font-family: "Raleway", sans-serif;
        justify-content: space-evenly;
        margin: 0;
        padding: 0; 
        position: sticky;
        top: 0;
       
        @media(max-width: 1150px){
          font-size: .8rem;
          height: 60px;
        }
        
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
  
  display: grid;
  width: 100%;
 
  align-self: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 0px;

  @media(max-width: 1150px){
    display: flex;
    flex-wrap: wrap;
  }


  .dead-btn {
    transform: rotate(290deg);
    position: absolute;
    left: 81%;
    top: 6%;
    height: 55px;
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
    
    padding: 2%;
  }

  .card{
    margin: 0 auto;
    
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
    }
  }

  h3 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  .card-one{
    h3{
      background: #d5ff94;
    }
  }

  .card-two{
    h3{
      background: #bfa0ff;
    }
  }

  .card-three{
    h3{
      background: peachpuff;
    }
  }

  .card-four {
    h3{
      background: #d5ff94;
    }
    @media (max-width: 1050px) {
      display: none;
    }
  }

  .card-five {
    h3{
      background: #bfa0ff;
    }
    @media (max-width: 1250px) {
      display: none;
    }
  }

  .card-six {
    h3{
      background: peachpuff;
    }
    @media (max-width: 1250px) {
      display: none;
    }
  }
`;
// Skills.js Styles
export const StyledSkills = styled.div`
  height: 875px;
  display: flex;
  align-items: center;
  flex-direction: column;
  

  @media (max-width: 750px) {
    height: 100%;
    display: flex;
    min-height: 100 vh;
    padding-top: 75px;
    justify-content: flex-start;
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
    font-size: 1.55em;
    text-align: left;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 100px;

    @media(max-width: 800px){
      font-size: 1em;
      display: flex;
      text-align: center;
      flex-direction: column;
    }
    @media(max-width: 500px){
      font-size: .7em;
    }

    h1{
      margin-block-start: 0em;
      margin-block-end: 0em;

      @media(max-width: 800px){
        margin-bottom: 25px;
      }
    }
  }

  

  .accordion-skills{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media(max-width: 1150px){
      display: none;
    }
  }

  
  .skill-container {
    font-family: "Raleway", sans-serif;
    height: 850px;
    width: 100%;
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
        
        text-align: left;
        text-decoration: underline;
        font-weight: bold;

        @media(max-width: 1150px){
          text-align: center;
          width: 100%;
        }
      }

      .small{
        margin-bottom: 1%;
        width: 225px;
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
        width: 255px;
        align-self: left;
        text-align: left;
       

        @media(max-width: 1150px){
          text-align: center;
          width: 90%;
        }
      }

      .par-text{
        margin-bottom: 1%;
        width: 255px;
      
        @media(max-width: 1150px){
          text-align: center;
          width: 90%;
        }
      }
    }

    .character{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 0px;

      @media(max-width: 800px){
        display: flex;
        flex-direction: column;
      }
    }

    .additional-info{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 5px;

      @media(max-width: 800px){
        display: flex;
        flex-direction: column;
      }
    }

    .character-skills{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    
    .skills-text{
      background: #f8f8f1;
      color: black;
      padding: 2%;
      text-align: left;
      font-size: 1.1rem;
      text-rendering: optimizeLegibility;
      width: 90%;
      display: flex;
      
      border-radius: 8px;
      box-shadow: rgba(0,0,0,0.15) 0 0 6px;

      @media(max-width: 500px){
        width: 90%;
        flex-direction: column;
      }
  
      p{
          text-align: left;
          margin-block-start: .2em;
          margin-block-end: .2em;
      }
    }
  }
`;




// Contact.js Styles
export const StyledForm = styled.div`
  background: rgba(5,5,5, .4);
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
    color: white;
    text-align: center;
  }
  

  .footer{
    position: absolute;
    bottom: 40px;
    color: white;
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