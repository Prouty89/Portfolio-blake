import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
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
    text-shadow: -0.04em 0.04em lightblue;
    color: black;
  }
  100% {
    -webkit-transform: translate3d(0, -0, 0);
            transform: translate3d(0, -0, 0);
    text-shadow: -0.06em 0.06em lightblue;
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
  display: grid;
  grid-template-columns: 1fr 4fr ;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media(max-width: 1150px){
    grid-template-columns: 1fr 3fr;
  }

  .two{
    background: #f8f8f1;

    p{
      margin-block-start: 0em;
      margin-block-end: 0em;
      text-align: center;
      font-family: 'Quicksand',sans-serif;
      font-size: 1.8rem;
    }
  }
}

.bg-wtc{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media(max-width: 1150px){
    grid-template-columns: 1fr 3fr;
  }

  .col-1{
    background-size: 76px;
    border-radius: 350px;
    padding: 15px;
    display: flex;
    min-width: 300px;
    margin: 50px;
    justify-content: center;
    align-items: center;
    background-image: url("data:image/svg+xml,%3Csvg width='382' height='226' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2336475d' fill-opacity='.16'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-position: fixed;
   
    z-index: 2;
}
  }


.welcome-text-container{
  display: flex;
  flex-direction: column;
  background: #f8f8f1;
  justify-content:center;
  align-items: flex-start;
 

  @media(max-width: 830px){
    height: 265px;
  }
 
}

.animated-text{
  font-family: 'Josefin Slab', serif;
    display: flex;
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
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;
}

.welcome-text{
    font-family: 'Oswald', sans-serif;
    font-size: 6rem;
    margin-left: 15px;
    color: #36475d;
    flex-direction: column;
    margin-block-start: 0em;
    margin-block-end: 0em;
     span {
      position: relative;
      color: black;
      display: inline-block;
      flex-direction: row;
      animation:${ani1} 5s 6s alternate cubic-bezier(0.46, 0, 0.03, .5);
      transition: ease-in-out;
    }
    span:nth-last-child(1n) {
      -webkit-animation-delay: -0s;
              animation-delay: -0s;
        animation-duration: 5.5s;
  
    }
    span:nth-last-child(2n) {
      -webkit-animation-delay: -0.1666666667s;
              animation-delay: -0.1666666667s;
        animation-duration: 5.5s;
        transition: ease;
    }
    span:nth-last-child(3n) {
      -webkit-animation-delay: -0.3333333333s;
              animation-delay: -0.3333333333s;
       animation-duration: 5.5s;
       transition: ease;
    }

  @media(max-width: 830px){
    font-size: 2.6rem;
  }


  @media(max-width: 650px){
    background-size: 100% 0.1em;
    background-position: 0 91%;
    font-size: 2rem;
  }
}

  .logo-react{
    height: 30px;
    width: 30px;
    animation: ${rotate} 4s linear infinite;
    @media(max-width: 600px){
      height: 15px;
      width: 15px;
    }
  }

.home-contents{
  flex-direction: column;
  background-image: url("data:image/svg+xml,%3Csvg width='386' height='226' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2336475d' fill-opacity='0.16'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  height: 100%;
  background-size: 15px;
  border-radius: 50%;
  background-attachment: fixed;
  display: flex;
  width: 100%;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  
  .welcome-container{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    @media(max-width: 1150px){
      grid-template-columns: 1fr 3fr;
    }
    @media(max-width: 1100px){
     

    }
  }

  }

  .modal-container_projects{
    background: #f8f8f1;
    width: 100%;
    height: 550px;
    justify-content: center;
    align-items: center;
  }

  .modal-container{
    display: flex;
    flex-direction: column;
    background: #f8f8f1;
    height: 500px;
    justify-content: center;
    align-items: baseline;
  }
}

  .modal {
    align-items: center;
    height: 350px;
    padding: 45px;
    color: #080808;
    user-select: none;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    @media(max-width: 600px){
      padding: 30px;
    }
    

    .modal-title{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .modal-content{
      font-family: 'Oswald', sans-serif;
      margin-block-start: .3em;
      list-style: none;
      margin: 0 auto;
      width: 600px;
      font-size: 1.4em;
      text-align: justify;
      margin-block-end: .2em;

      @media(max-width: 1000px){
        font-size: 1em;
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
    margin: 0 auto;
    font-size: 1.2em;
    font-family: 'Oswald', sans-serif;
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
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media(max-width: 1150px){
    grid-template-columns: 1fr 3fr;
  }

.project-btns{
  margin-right: 15px;
  display: flex;
  font-family: 'Josefin Slab', serif;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;

  @media(max-width: 600px){
    margin-right: 1px;
  }
}

.modal_project {
  user-select: none;
  font-family: 'Open Sans',sans-serif;
  justify-content: start;
  height: 100%;
  align-items: start;
  display: flex;
  flex-direction: column;


.active{
  font-size: 1.7em;
  color: #5885b6;
  text-decoration: underline;
}

.inactive{
  font-size: 1.4em;
  color: #080808;
}



.front-flex{
  display: flex;
  flex-direction: column;
  padding-left: 50px;
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
  font-family: 'Open Sans', sans-serif;

  @media(max-width: 1000px){
    
  }
}

.framework-description{
  font-family: 'Oswald',sans-serif;
  width: 470px;
  font-size: 1.2em;
  text-align: justify;

  @media(max-width: 800px){
    width: 100%;
  }

  .description-text{
    
    @media(max-width: 600px){
      font-size: .8rem;
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
  margin-block-start: 20px;
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
    font-family: 'Inter', sans-serif;
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
  border-radius: 8px;
  box-shadow: 0px 0px 7px -1px black;

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
  background-color: #36475d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23f8f8f1' fill-opacity='0.11' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
  bottom: 0px;
  color: #080808;
  display: flex;
  height: 175px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column-reverse;
  align-items: center;
  font-family: "Quicksand", sans-serif;

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
    font-size: 1.8rem;
    align-items: center;
    color: #f8f8f1;

    @media (max-width: 650px) {
      font-size: 1em;
    }
  }
`;

