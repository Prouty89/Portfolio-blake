import styled from 'styled-components';


//Home.js Styles
export const StyledHome = styled.div`
@import url('https://fonts.googleapis.com/css?family=KoHo:400,500&display=swap');
background: #080808;
height: 675px;

@media(max-width: 650px){
  height: 400px;
}

.home-contents{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #080808;
  color: #fff;
  height: 100%;
  position: relative;
  z-index: 1;
  width: 1200px;
  margin: 0 auto;

  @media(max-width: 1250px){
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
  }

  .home-text-container{
    height: 260px;
    @media(max-width: 650px){
      height: 185px;
    }
  }

  


  .hand-container{
    position: absolute;
    bottom: -266px;
    transform: rotate(270deg);
    left: 773px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    z-index: 0;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

      .hands-img{
        height: 435px;
      }
    }
  }
  
  .welcome-container{
    display: flex;
    align-items: baseline;
    height: 80%;
    flex-direction: column;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    @media(max-width: 1200px){
      width: 100%;
    }
    @media(max-width: 650px){
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .welcome-text{
      font-family: 'KoHo', sans-serif;
      font-size: 5rem;
      color: #ffffff;
      font-weight: 700;
      margin-block-start: 0em;
      margin-block-end: 0em;
      @media(max-width: 650px){
        font-size: 2.5rem;
      }
    }
    .animated-text{
      font-family: 'KoHo', sans-serif;
      font-size: 2.5rem;
    
      margin-block-start: 0em;
      margin-block-end: 0em;

      @media(max-width: 650px){
        font-size: 1.3rem;
      }
    }
  }

  .underlined_1{
    color: #66FCF1;
  }

  .welcome-text-container{
    display: flex;
  }

  .logos{
    display: none;
    @media(max-width:650px){
      margin-left: 20px;
    }
    .logo{
      height: 35px;
      margin-right: 40px;
      margin-top: 20px;
    }
  }

  .logos_big{
    padding-left: 20px;
    height: 90px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media(max-width: 650px){
      height: 50px;
    }

    .logo{
      height: 35px;
      margin-right: 15px;
      margin-top: 20px;
    }
  }

  .modal-container{
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 220px;
    position: relative;
    justify-content: space-evenly;

    @media(max-width: 650px){
      flex-direction: row;
      margin-right: 15px;
      width: 300px;
      height: 80px;
    }
  }

  .show-modal-button{
  font-family: 'KoHo', sans-serif;
  color: #ffffff;
  background: transparent;
  font-size: 2.3em;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  user-select: none;
  height: 50px;
  padding: 1px 6px;
  text-decoration: none;
  
  
  @media(max-width:650px){
    font-size: 1.2em;
  }
}
.show-modal-button:hover,
.show-modal-button:focus {
  border: none;
  font-size: 2.4em;
  outline: none;

  @media(max-width: 650px){
    color: #c6e8f2;
    font-size: 1.2em;
  }
}

  .modal {
    width: 350px;
    height: 300px;
    color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    background: rgba(0,0,0,.9);
    border-radius: 30px;
    box-shadow: -2px 2px 0px #c5c6c7, 2px -2px 0px #c5c6c7;
    font-family: 'KoHo', sans-serif;
    position: absolute;
    z-index: 90;
    right: -465px;
    top: -47px;
    display: flex;
    flex-direction: column;

    @media(max-width: 650px){
      right: -43px;
      top: -208px;
    }

    .modal-title{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .modal-content{
      margin-block-start: .6em;
      list-style: none;
      font-size: 1.1em;
      text-align: justify;
      margin-block-end: .2em;

      ul{
        padding-inline-start: 5px;
      }

      li{
        list-style: none;
        margin-block-end: .2em;
      }

      a{
        text-decoration: underline;
        color: #c6e8f2;
      }
    }
  }

  .modal-content_ed{
    margin-block-start: .6em;
    list-style: none;
    text-align: left;
    margin-block-end: .2em;

    ul{
      padding-inline-start: 5px;
    }

    li{
      list-style: none;
      margin-block-end: .2em;
    }

   

    a{
      text-decoration: underline;
      color: #c6e8f2;
    }
  }
}
  
  .modal-close-button {
    padding: 6px;
    background-color: black;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.2em;
    border: none;
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    cursor: pointer;
    transition: background-color 0.1s linear;
  }
  
  .modal-close-button:hover,
  .modal-close-button:focus {
    color: #c6e8f2;
    font-size: 1.3em;
    outline: none;
  }
}
`

// // Projects.js Styles
export const StyledProjects = styled.div`
@import url('https://fonts.googleapis.com/css?family=KoHo:400,500&display=swap');
font-family: 'KoHo', sans-serif;
width: 600px;
  
  @media(max-width: 600px){
    width: 500px;
  }

  @media(max-width: 499px){
    width: 580px;
  }
  
  .react-multi-carousel-list{
    height: 475px;
    width: 550px;
    border-radius: 30px;
    box-shadow: -3px 0px 0px #C5C6C7, 3px 0px 0px #C5C6C7;
    align-items: baseline;
    @media(max-width: 650px){
      width: 370px;
      margin: 0 auto;
    }
  }

  }
  
  .custom-button-group{
    position: absolute;
    top: 20px;
    width: 100%;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    color: white;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media(max-width: 650px){
      display: absolute;
      top: 435px;
    }
  }
  .arrow-next{
    width: 70px;
    height: 30px;
    margin-right: 40px;
    background: #45a29e;
    border: none;
    border-radius: 8px;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    position: relative;
    border-bottom: 4px solid #45a29e;
    color: #fbfbfb;
    font-weight: 600;
    font-family: 'KoHo',sans-serif;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);
    font-size: 1em;
    text-align: left;
    text-indent: 8px;
    box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
    cursor: pointer;

    &::after{
      content: "";
      width: 0;
      height: 0;
      display: block;
      border-top: 15px solid #080808;
      border-bottom: 15px solid #080808;
      border-left: 16px solid transparent;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:focus{
      outline: none;
    }

    &:active{
      outline: none;
    }
    &:hover{
      color: #000000;
    }
  }

  .arrow-back{
    border-right: 1px solid white;
    text-align: left;
    text-indent: 20px;
    margin-left: 40px;
    width: 70px;
    height: 30px;
    background: #45a29e;
    border: none;
    border-radius: 8px;
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    position: relative;
    border-bottom: 4px solid #45a29e;
    color: #fbfbfb;
    font-weight: 600;
    font-family: 'KoHo',sans-serif;
    text-shadow: 1px 1px 1px rgba(0,0,0,.4);
    font-size: 1em;
    box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
    cursor: pointer;


    &::after{
      content: "";
      width: 0;
      height: 0;
      display: block;
      border-top: 15px solid #080808;
      border-bottom: 15px solid #080808;
      border-right: 16px solid transparent;
      position: absolute;
      left: 0;
      top: 0;
    }

    &:focus{
      outline: none;
    }

    &:active{
      outline: none;
    }
    &:hover{
      color: #000000;
    }
  }

  .title-br{
  width: 100%;
  height: 65px;
  color: white;
  padding-bottom: 5px;

  .project-title{
    color: white;
    font-size: 1.7em;
  }
  }

  .project-image{
    position: fixed;
    border: 15px solid #080808;
    margin-left: 5px;
    width: 360px;
    height: 360px;
    border-radius: 30px;
    
    top: 0;
    left: 0;

    @media(max-width: 650px){
      margin-left: 0px;
      border: 25px solid #080808;
      width: 300px;
    }
  }

  ul {
    list-style: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
    padding-inline-start: 0px;
  }

  .card-ul{
    width: 135px;
    padding-top: 10px;
    text-align: left;
    margin: 0 auto;
    list-style: none;
  }

  .a-link {
    display: none;
  }

  .flippy-container {
    
    width: 550px !important;
    height: 360px !important;
    overflow: hidden;
    position: relative;
    user-select: none;

    @media(max-width: 650px){
      width: 380px !important;
    }
  }


  .flippy-front{

  }

  .flippy-back{
    border-radius: 8px;
    overflow: auto;
    text-align: justify;
  }

  .design-desc {
    text-align: center;
  }

  .framework-desc {
    text-align: center;
  }

  .framework-description {
    position: fixed;
    color: white;
    right: 25px;

    @media(max-width: 650px){
      position: fixed;
      top: 25px;
      color: white;
      right: -38px;
      font-size: .7em;
    }
  }

  .tech-stack{
    text-align: left;
    color: white !important;
  }

  p {
    margin-block-start: 0px;
    margin-block-end: 0px;

    padding: 2%;
  }

  .card {
    position: relative;
   
   

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
      font-weight: 700;
      margin-block-start: 0em;
      margin-block-end: 0em;
  
    }
  }

  .card-links {
    flex-direction: column;
    padding-top: 15px;
    color: black;
    font-size: 1.2em;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    @media(max-width: 499px){
      left: 96px;
    }
    

    .link {
      text-decoration: none;
      padding: 2%;
      color: #45A29E;
      text-decoration: underline;
      
      

      &:hover{
        color: #c6e8f2;
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
    margin-block-start: .1em;
    margin-block-end: .1em;
    
  }

  .proj-description{
    color: white;
    font-size: 1.1em;
    padding: 10px;
  }

  .project-description-heading{
    color: white;
  }

  .react-multi-carousel-item--active{
    width: 550px !important;
    padding-right: 50px;
    display: flex;
    justify-content: center;
    

    @media(max-width: 650px){
      width: 360px !important;
    }
  }

`;

//Footer.js Styles
export const StyledFooter = styled.div`
@import url('https://fonts.googleapis.com/css?family=KoHo:400,500&display=swap');
color: white;
height: 50px;
width: 1200px;
justify-content: center;
margin: 0 auto;
display: flex; 
align-content: center;
font-family: 'KoHo', sans-serif;

@media(max-width: 1250px){
  width: 100%;
}

.footer-text{
  display: flex;
  font-size: 1.3em;
  align-items: center;

  @media(max-width: 499px){
    font-size: 1em;
  }
}
`

