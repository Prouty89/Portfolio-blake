import styled from 'styled-components';
import Ocean from './assets/DtOcean.png';




// Sidebar.js component container styles
export const StyledContent = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
scroll-behavior: smooth;
color: black;


.first-child{

  .photo-square{
    height: 265px;
    width: 265px;
    display: flex;
    background: linear-gradient(19deg, #c35729, #f8d74f,#7d0085);
    border-radius: 50%;
    border: 2px solid white;

    @media(max-width: 800px){
      width: 140px;
      height: 140px; 
    }
  }

  .photo-container{
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media(max-width: 800px){
      padding-top: 0px;
      height: 165px;
      align-items: center;
    }

    .blake-photo{
      width: 250px;
      height: 250px;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-self: center;
     
  
      @media(max-width: 800px){
        width: 130px;
        height: 130px; 
      }
    }
  }
  
  height: 418px;
  background-image: url(${Ocean});

  @media(max-width:800px){
      height: 350px;
  }

.home-container{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  @media(max-width: 800px){
    display: flex;
    flex-direction: column-reverse;
  }
}

  .trails-main{
  
    display: flex;
    flex-direction: column;
    height: 254px;
   
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;

    @media(max-width: 800px){
      height: 240px;
      justify-content: end;
      margin-bottom: 0px;
    }
}

.trails-text{
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
    filter: drop-shadow(0px 5px 1px black);
    font-size: 3rem;
    justify-content: center;
    width: 100%;
    height: 60px;
    font-variant: petite-caps;
    

    @media(max-width:1470px){
        margin-left: 0;
        margin-left: 0;
        font-size: 2.5rem;
        width: 100%;
        height: 70px;
         
    }

    @media(max-width:1260px){
        margin-left: 0;
        margin-left: 0;
        font-size: 2rem;
        width: 100%;
        height: 60px;
       
    }

    @media(max-width:1010px){
        margin-left: 0%;
        font-size: 1.7rem;
        text-align: center;
    }

    @media(max-width:800px){
      margin-left: 0%;
      font-size: 1.3rem;
      text-align: center;
      font-variant: none;
      filter: none;
      height: 30px;

  }
  }
}

  .social-tray {
    
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    height: 75px;
    align-self: center;
   

    @media(max-width: 800px){
      width: 90%;
      height: 100px;
    }

    

    .social-icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 450px;
      justify-content: space-around;

      @media(max-width: 800px){
        flex-direction: row;
        height: 40%;
        width: 100%;
      }

      .svg {
        cursor: pointer;

        &:hover {
          transform: skewX(-8deg);
        }
      }
    }
  }
  .bg-img {
    width: 100%;
    height: 562px;
    overflow-x: hidden;
    position: fixed;
    z-index: -1;

    @media(max-width: 1000px){
      width: 1000px;
    }

    @media(max-width: 800px){
      width: 800px;
    }
  }
}

.third-child{
    position: relative;
    background: #192640;
    @media(max-width: 1200px){
      height: 750px;
      
    }

    @media(max-width: 750px){
      height: 750px;
    }

    .svg-logo{
      bottom: -2px;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 40px;
      right: 0;

      &:hover {
        transform: skewX(-8deg);
      }

      @media(max-width: 1200px){
        display: none;
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

.base-shell{
  background: #192640;
}

.base-shell2{
  background: #192640;
}

.base-container{
    height: 120px;
    border-top: 8px solid #62ABD9;
    border-bottom: 8px solid #62ABD9;
    border-bottom-left-radius: 39%;
    border-top-right-radius: 55%;
    background: white;
    color: #192640;
    text-align: center;
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  

    @media(max-width: 750px){
      height: 150px;
    }

    .base-text{
      display: flex;
      justify-content: center;
      width: 90%;

      @media(max-width: 600px){
        width: 100%;
      }

      h4{
        text-decoration: underline;
        margin-block-start: 0em;
        margin-block-end: .83em;
      }
    }

    .baseskill-text{
      width: 100%;
      font-size: 1.3rem;
      font-family: "Raleway", sans-serif;

      @media(max-width: 1000px){
        font-size: 1rem;
        width: 90%;
        text-align: left;
        align-self: flex-end;
       
      }
    }
}

.base-container2{
  height: 120px;
  border-top: 8px solid #62ABD9;
  border-bottom: 8px solid #62ABD9;
  border-bottom-left-radius: 39%;
  border-top-right-radius: 55%;
  background: white;
  text-align: center;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media(max-width: 750px){
    height: 150px;
  }

  .base-text{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;

    @media(max-width: 600px){
      width: 100%;
    }

    h4{
      text-decoration: underline;
      margin-block-start: 0em;
      margin-block-end: .83em;
    }
  }

  .baseskill-text{
    width: 100%;
    font-size: 1.3rem;
    font-family: "Raleway", sans-serif;

    @media(max-width: 1000px){
      font-size: 1rem;
      text-align: left;
      align-self: center;
      width: 80%;

     
    }
  }

  .skills-title{
    width: 100%;
    margin-bottom: 1%;
    font-size: 1.2rem;
    align-self: center;
    text-align: center;
    text-decoration: underline;
    font-family: "Raleway",sans-serif;
    
    
    h4{
      margin-block-start: 0em;
      margin-block-end: 0em;
      font-size: 1.3rem;
      text-decoration: underline;
    }

}
}

.fourth-child{
    background: #192640;
  
    height: 935px;
    display: flex;
    align-items: center;



    @media(max-width: 740px){
      height: 200vh;
  }
}

.fifth-child{
  background: #192640;
  
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
        background: #192640;
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

        .about-container{
          padding-bottom: 25px;
          justify-content: center;
          align-items: center;
          display: flex;
          height: 462px;
          

          @media(max-width: 1200px){
            display: none;
          }
        }

        .arrow_box_pointdown_left:after, .arrow_box_pointdown_left:before {
          border-style:solid;
          border-color: #5B7BA6 transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top:200px;
      }
      .arrow_box_pointdown_left:after {
          border-top-color: #5B7BA6;
          border-width: 65px 100px 0 100px;
          left: 0px;
      }
      .arrow_box_pointdown_left:before {
          border-top-color: white;
          border-width: 76px 116px 0 116px;
          left:-16px;
      }
      .arrow_box_pointup_center:after, .arrow_box_pointup_center:before {
          border-style:solid;
          border-color:  transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          transform:rotate(180deg);
          -ms-transform:rotate(180deg);
          /* IE 9 */
          -webkit-transform:rotate(180deg);
          /* Opera, Chrome, Safari */
          bottom:189px;
      }
      .arrow_box_pointup_center:after {
          
          border-width: 65px 100px 0 100px;
          left: 200px;
      }
      .arrow_box_pointup_center:before {
          border-top-color: white;
          border-width: 76px 116px 0 116px;
          left:184px;
      }
      .arrow_box_pointdown_right:after, .arrow_box_pointdown_right:before {
          border-style:solid;
          border-color: rgba(55,55,55,.6) transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top:200px;
      }
      .arrow_box_pointdown_right:after {
          border-top-color: #5B7BA6;
          border-width: 65px 100px 0 100px;
          left: 400px;
      }
      .arrow_box_pointdown_right:before {
          border-top-color: white;
          border-width: 76px 116px 0 116px;
          left:384px;
      }
      /*
      .
      .
      .
      .
      .
      .
      */
      .arrow-container {
          
          width:600px;
          height:400px;
          position:relative;
          overflow:hidden;
          align-self: flex-end;

          .arrow-c2{
            transform: rotate(180deg);
          }
        }
        

      .text_div {
          width:200px;
          height:200px;
          position:absolute;
      }
      .text_container{
          width:187px;
          font-family: "Raleway", sans-serif;
          margin-top:-10px;
          margin-left:10px;
          margin-right:10px;
          color:white;
          text-align:center;

          .text-c2{
            transform: rotate(180deg);
          }

          h3{
            color: white;
            font-size: 1.3em;
          }

          h5{
            color: white;
            margin-block-start: .67em;
            margin-block-end: .67em;
            font-size: .9em;
            text-align: left;
            font-weight: 500;
            padding-left: 3px;
          }
      }
      .img_div {
          width:200px;
          height:200px;
          position:absolute;
      }
      .left_top_div{
          top:0px;
          left:0px;
          background-color: #5B7BA6;
          border-top-right-radius: 8px;
         
      }

      .oneltd{
        border-left: 1px solid white;
        border-top-right-radius: 8px;
      }
      
      .center_bottom_div{
          bottom:0px;
          left:200px;
          background-color: #5B7BA6;
          display: flex;
          align-items: center;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
      }
      
      .right_top_div{
          top:0px;
          right:0px;
          background-color: #5B7BA6;
          border-top-left-radius: 8px;
         
      }
      
      .left_bottom_div{
          bottom:0px;
          left:0px;
          
          background-size:200px 200px;
      }
      
      .center_top_div{
          top:0px;
          left:200px;
          
          background-size:200px 200px;
      }
      
      .right_bottom_div{
          bottom:0px;
          right:0px;
          background-size:200px 200px;
      }

      .accordion-skills{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    
        .rows{
          text-align: left;
          @media(max-width: 600px){
            text-align: left;
            font-size: .8rem;
          }
        }
      

        p{
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
      }

      .skills-content{
        padding-top: 75px;

        .ac-small{
          width: 400px;
          height: 300px;
          margin: 0 auto;
        }

        .right_top_div{
          border-top-left-radius: 0px;
        }

        .left_top_div{
          border-top-right-radius: 0px;
        }

        .oneltd{
          border-left: none;
        }

        h5{
          text-align: left;
        }

        .abpdr-small:after, .abpdr-small:before {
          border-style:solid;
          border-color: rgba(55,55,55,.6) transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top:198px;
      }
      .abpdr-small:after {
          border-top-color: #5B7BA6;
          border-width: 65px 100px 0 100px;
          left: 400px;
      }
      .abpdr-small:before {
          border-top-color: white;
          border-width: 76px 116px 0 116px;
          left: 167px;
      }

      .abpdl-small, .abpdl-small:before {
        border-style:solid;
        border-color: #5B7BA6 transparent transparent transparent;
        content:" ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        top: 98px;
    }
    .abpdl-small:after {
      border-top-color: #5B7BA6;
      border-width: 65px 100px 0 100px;
      left: -6px;
      top: 97px;
    }
    .abpdl-small:before {
      border-top-color: #71C6D9;
      border-width: 76px 116px 0 116px;
      left: 54px;
    }






        height: 750px;
        display: flex;
        align-items: center;
        flex-direction: column;
        display: none;
       
        
        @media(max-width: 1200px){
          display: inherit;
        }
      
        @media (max-width: 750px) {
          height: 100%;
          display: flex;
          min-height: 100 vh;
          padding-top: 75px;
          justify-content: flex-start;
        }
      
        
      
        .skills-title{
            width: 100%;
            font-size: 1.2rem;
            margin-top: 1%;
            align-self: center;
            text-align: left;
            text-decoration: underline;
            font-weight: bold;
            
            h4{
              margin-block-start: .33em;
              margin-block-end: .33em;
              font-size: 1.3rem;
              text-decoration: underline;
            }
      
            @media(max-width: 1200px){
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
          margin-block-end: 15px;
        }
      
        .skills-head {
          font-size: 1.55em;
          text-align: center;
          min-width: 600px;
          text-transform: capitalize;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-row-gap: 30px;
      
          @media(max-width: 1000px){
            font-size: 1em;
            display: flex;
            text-align: center;
            flex-direction: column;
            min-width: 450px;
          }
          @media(max-width: 500px){
            font-size: .7em;
            min-width: 300px;
          }
      
          h1{
            margin-block-start: 0em;
            margin-block-end: 0em;
      
            @media(max-width: 800px){
              margin-bottom: 25px;
            }
          }
        }
}
`;

// Home.js Styles

// Projects.js Styles
export const StyledProjects = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  font-family: "Raleway", sans-serif;

  display: grid;
  width: 100%;

  align-self: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 0px;

  @media (max-width: 1150px) {
    display: flex;
    flex-wrap: wrap;
  }

  .dead-btn {
    transform: rotate(290deg);
    position: absolute;
    left: 83%;
    top: 4%;
    height: 55px;
    outline: none;
    font-size: 1rem;
    color: black;
    width: 50px;
    font-size: 2.3rem;
    background: #ffffff;
    border: none;
    cursor: pointer;
  }

  .dead-btn2 {
    transform: rotate(290deg);
    position: absolute;
    right: 83%;
    top: 6%;
    height: 50px;
    outline: none;
    color: white;
    width: 50px;
    background: #ffffff;
    border: none;
  }

  .dead-btn3 {
    transform: rotate(111deg);
    position: absolute;
    right: 83%;
    top: 6%;
    height: 50px;
    outline: none;
    font-size: 2.3rem;
    cursor: pointer;
    color: black;
    width: 50px;
    background: #ffffff;
    border: none;
  }

  .dead-btn4 {
    transform: rotate(111deg);
    position: absolute;
    left: 83%;
    top: 4%;
    height: 55px;
    outline: none;
    width: 50px;

    background: #ffffff;
    border: none;
  }

  ul {
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

  .card {
    h3 {
      background: #62abd9;
      color: white;
    }
  }

  .card-four {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .card-five {
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .card-six {
    @media (max-width: 1100px) {
      display: none;
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
  justify-content: flex-end;
  align-items: center;

  .form-heading {
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    text-align: center;
  }

  .footer {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    z-index: 0;
  }

  .form {
    height: 550px;
    justify-content: center;
    display: flex;
    background: #ffffff;
    width: 650px;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;

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
        background: #192640;
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

