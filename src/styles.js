import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ani1 = keyframes` {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    text-shadow: 0em 0em 0 lightblue;
    color: black;
  }
  30% {
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
    text-shadow: -0.02em 0.02em 0 lightblue;
    color: black;
  }
  70% {
    -webkit-transform: translate3d(0.08em, -0.92em, 0);
            transform: translate3d(0.08em, -0.92em, 0);
    text-shadow: -0.06em 0.06em lightblue;
    opacity: .5;
    color: black;
  }
  100% {
    -webkit-transform: translate3d(0, -0, 0);
            transform: translate3d(0, -0, 0);
            text-shadow: -0.02em 0.02em 0 lightblue;
    color: black;
  }
}
`

//App.js Styles

export const StyledContent = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
  display: flex;
  justify-content: center;
  margin: auto;
`;

//Home.js Styles
export const StyledHome = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.coffee{
  height: 90px;
  border-radius: 50%;

  @media(max-width: 830px){
    height: 60px;
  }
}

.heading{
  width: 100%;

  @media(max-width: 1150px){
    grid-template-columns: 1fr 3fr;
  }

  .two{
    background: #fcfcfc;

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 1.8rem;
    }
  }
}

.bg-wtc{
  width: 100%;
  display: flex;
  background-image: url("data:image/svg+xml,%3Csvg width='386' height='226' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2336475d' fill-opacity='0.16'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 15px;
  background-attachment: fixed;
  flex-direction: column;

  @media (max-width: 600px){
    height: 320px;
  }

  

  .col-1{
    margin-top: 32px;
    display: flex;
    min-width: 300px;
    justify-content: center;
    align-items: center;
    z-index: 2;

    @media(max-width: 600px){
      margin: 20px;
    }
  }
}


.welcome-text-container{
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content:center;
  align-items: center;
 

  @media(max-width: 830px){
    height: 265px;
  }
  @media(max-width: 600px){
    height: 120px;
  }
 
}

.animated-text{
  font-family: 'Josefin Slab', serif;
    display: flex;
    margin-left: 30px;
    align-items: flex-start;
    flex-direction: column;

    p{
    margin-block-start: 0em;
    margin-block-end: .5em;
    font-size: 3rem;
    text-align: center;
    width: 100%;
    @media(max-width: 1150px){
      font-size: 2rem;
    }
    @media(max-width: 600px){
      font-size: 1.6rem;
    }
    }

}

.gifs{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.gif{
  margin-right: 5px;
}

.profile{
  
  .pic-container{
    background: #536273;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 90px;
    width: 90px;
    overflow: hidden;
    border-radius: 50%;

    @media(max-width: 830px){
      height: 60px;
      width: 60px;
    }
  

  .profile-pic{
      height: 115px;
      border-radius: 50%;

      @media(max-width: 830px){
        height: 85px;
      }
  }
}
}

.home-text-container{
  display: flex;
  align-items: flex-start;
  min-width: 250px;
  margin-top: 50px;
  justify-content: center;
  z-index: 1;

  @media(max-width: 900px){
    min-width: 200px;
  }

  @media(max-width: 600px){
    min-width: 100px;
    margin-top: 30px;
  }
}

.welcome-text{
  font-family: 'Josefin Slab', serif;
    font-size: 6.5rem;
    font-weight: bolder;
    background-attachment: fixed;
    text-shadow: -0.02em 0.02em 0 lightblue;
    color: #36475d;
    flex-direction: column;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding: 35px;
     span {
      position: relative;
      color: black;
      display: inline-block;
      flex-direction: row;
      animation:${ani1} 1s 2s alternate cubic-bezier(0.46, 0, 0.03, .5);
      transition: ease-in-out;
    }
    span:nth-last-child(1n) {
      -webkit-animation-delay: .7s;
              animation-delay: .7s;
        animation-duration: 3.5s;
  
    }
    span:nth-last-child(2n) {
      -webkit-animation-delay: .9s;
              animation-delay: .9s;
        animation-duration: 3.5s;
        transition: ease;
    }
    span:nth-last-child(3n) {
      -webkit-animation-delay: 1.1s;
              animation-delay: 1.1s;
       animation-duration: 3.5s;
       transition: ease;
    }

  @media(max-width: 830px){
    font-size: 4rem;
  }

  @media(max-width: 600px){
    padding: 20px;
  }

}

  .logo-react{
    height: 20px;
    width: 20px;
    animation: ${rotate} 8s linear infinite;
    @media(max-width: 600px){
      height: 15px;
      width: 15px;
    }
  }

.home-contents{
  flex-direction: column;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  
  .welcome-container{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  }

  .modal-container_projects{
    background: #fcfcfc;
    width: 100%;
    height: 375px;
    justify-content: center;
    align-items: center;

    @media(max-width: 950px){
      height: 625px;
    }
    @media(max-width: 600px){
      height: 400px;
    }
  }

  .modal-container{
    display: flex;
    flex-direction: column;
    background: #fcfcfc;
    height: 375px;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media(max-width: 600px){
      height: 250px;
    }
  }
}

  .modal {
    align-items: center;
    height: 350px;
    color: #080808;
    user-select: none;
    font-family: 'Roboto', sans-serif;
    display: flex;
    @media(max-width: 600px){
      padding: 30px;
    }
    

    .modal-title{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .modal-content{
      font-family: 'Roboto', sans-serif;
      margin-block-start: .3em;
      list-style: none;
      padding: 15px;
      margin: 0 auto;
      max-width: 930px;
      font-size: 1.4em;
      text-align: justify;
      margin-block-end: .2em;

      @media(max-width: 1300px){
        font-size: 1.2em;
      }

      @media(max-width: 650px){
        font-size: .7rem;
      }

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
    max-width: 930px;
    margin: 0 auto;
    font-size: 1.4em;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    margin-block-end: .2em;

    @media(max-width: 1000px){
      font-size: .7rem;
    }

    ul{
      padding-inline-start: 5px;
    }

    li{
      list-style: none;
      margin-block-end: 1.2em;
    }

   

    a{
      text-decoration: underline;
      color: #5885b6;
    }
  }
}

.modal-content_contact{
  
  font-size: 1.4em;
  margin-block-start: .6em;
  list-style: none;
  margin: 0 auto;
  text-align: left;
  margin-block-end: .2em;

  @media(max-width: 1000px){
    font-size: 1em;
  }

  ul{
    padding-inline-start: 5px;
  }

  li{
    list-style: none;
    margin-block-end: 1.2em;
  }
}
.typing{
  height: 90px;
  border-radius: 50%;

  @media(max-width: 830px){
    height: 60px;
  }
}
  
  .modal-close-button {
    padding: 6px;
    background: transparent;
    color: #080808;
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
`;

// // Projects.js Styles
export const StyledProjects = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

  width: 100%;
  display: flex;
  flex-direction: column;


.project-btns{
  max-width: 775px;
  margin-top: 50px;
  display: flex;
  user-select: none;
  flex-wrap: wrap;
  align-self: center;
  font-family: 'Josefin Slab', serif;
  align-items: flex-start;
  justify-content: space-between;

  @media(max-width: 600px){
    max-width: 330px;
    margin-top: 25px;
  }
}

.modal_project {
  user-select: none;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;





.front-flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media(max-width: 800px){
    padding: 25px;
  }
  @media(max-width: 600px){
    padding: 10px;
  }
}


.img-contain{
  display: flex;
  justify-content: center;

  @media(max-width: 800px){
    flex-direction: column;
  }
}


.description-headers{
  margin-block-start: 0em;
  font-weight: 500;
  font-size: 1.3em;
  font-family: 'Roboto', sans-serif;

  @media(max-width: 1000px){
    
  }
}

.framework-description{
  font-family: 'Roboto', sans-serif;
  width: 470px;
  padding: 30px;
  padding-top: 0px;
  font-size: 1.2em;
  text-align: justify;

  @media(max-width: 800px){
    width: 100%;
  }

  .description-text{
    margin-block-start: 0em;
    
    @media(max-width: 650px){
      font-size: .7rem;
      padding: 5px;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
  }
}

.tech-contain{
  .flex-list{
    display: flex;
  }
}

.card-ul{
  margin-block-start: 5px;
  padding-inline-start: 30px;
  display: flex;
  flex-direction: column;

  @media(max-width: 800px){
    margin-block-start: 0px;
    padding-inline-start: 0px;
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  li{
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    padding: 3px;
    margin-right: 35px;
    list-style: circle;
    color: #36475d;

    @media(max-width: 800px){
      list-style: none;
      margin-right: 12px;
    }
    @media(max-width: 600px){
      font-size: .8rem;
    }
  }
}

.card-links{
  text-align: center;
  margin-bottom: 10px;
  .link{
  text-decoration: none;
  color: #5885b6;
  padding: 7px;
  @media(max-width: 600px){
    font-size: .7rem;
  }
  }
}

.project-image{
  height: 235px;
  width: 290px;
  animation: ${fadeIn};
  animation-duration: 1s;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px black;

  @media(max-width: 600px){
    height: 170px;
    width: 215px;
  }
}

.img-withlinks{
  @media(max-width: 800px){
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
`;

//Footer.js Styles
export const StyledFooter = styled.div`
  bottom: 0px;
  color: #36475d;
  display: flex;
  height: 115px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  @media(max-width: 600px){
    height: 150px;
  }

  .social-container {
    display: flex;
    justify-content: space-around;
    width: 285px;

    @media(max-width: 600px){
      img{
        height: 35px;
      }
    }
  }

  .footer-text {
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    color: #000000;

    @media (max-width: 650px) {
      font-size: .7em;
    }
  }
`;

