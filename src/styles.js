import styled, { keyframes } from 'styled-components';

const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

//App.js Styles

export const StyledContent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
display: flex;
justify-content: center;
margin: auto;


@media(max-width: 1100px){
  width: 100%;
  padding: 20px;
}
`


//Home.js Styles
export const StyledHome = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
padding-top: 100px;

.bg-wtc{
  background: #36475d;
  width: 1200px;
  display: flex;
  justify-content: center;
}

.welcome-text-container{
  display: flex;
  background: #f8f8f1;
  justify-content:center;
  align-content: center;
  width: 80%;
  height: 265spx;
  background-size: 266% 5.084em;
  background-position: 0 45.5%;
}

.animated-text{
  font-family: 'Quicksand', sans-serif;
  padding-left: 5px;
  font-size: 3rem;
  display: flex;
  margin-block-start: 0em;
  margin-block-end: 0em;

  @media(max-width: 1000px){
    font-size: 1.8rem;
  }
}

.social-container{
  display: flex;
  justify-content: space-around;
  width: 135px;
  padding-top: 5px;
  margin-left: 15px;
}

.pic-container{
  background: #5885b6;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;
  height: 130px;
  width: 130px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 15px;
  
  .profile-pic{
    height: 165px;
    border-radius: 50%;
  }
}

.welcome-text{
  font-family: 'Quicksand', sans-serif;
  font-size: 7rem;
  color: #36475d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-size: 80% 0.084em;
  background-position: 0 97.5%;
  margin-block-start: 0em;
  margin-block-end: 0em;

  @media(max-width: 1100px){
    background-size: 100% 0.1em;
    background-position: 0 91%;
    font-size: 4rem;
  }

  @media(max-width: 650px){
    background-size: 100% 0.1em;
    background-position: 0 91%;
    font-size: 2.6rem;
  }
}

.logos_big{
    display: flex;
    padding-bottom: 85px;
    align-items: center;
    margin-right: 15px;
    flex-direction: column;
    justify-content: center;
}

  .logo{
    height: 30px;
    width: 30px;
    margin-top: 2px;
  }

  .logo-react{
    height: 30px;
    width: 30px;
    animation: ${rotate} 4s linear infinite;
  }

.home-contents{
  flex-direction: column;
  color: #080808;
  height: 850px;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 1;
  
  .welcome-container{

    justify-content: space-between;
    @media(max-width: 1200px){
  
    }
    @media(max-width: 1100px){
     

    }
  }

  .underlined_1{
    color: #66FCF1;
  }




  }

  .modal-container{
    display: flex;
    flex-direction: column;
   
    width: 220px;
    height: 300px;
    position: relative;
    justify-content: space-evenly;

    @media(max-width: 1000px){
      width: 150px;
    }
  }

  @media(max-width: 650px){
 
   
  }
}

  .modal {
    
    width: 700px;
    height: 200px;
    color: #080808;
    padding: 15px;
    user-select: none;
    font-family: 'Open Sans', sans-serif;
    position: absolute;
    z-index: 90;
    right: -705px;
    top: 10px;
    display: flex;
    flex-direction: column;

    @media(max-width: 1000px){
     width: 300px;
     right: -370px;
    }

    .modal-title{
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    .modal-content{
      font-family: 'Open Sans', sans-serif;
      margin-block-start: .3em;
      list-style: none;
      font-size: 1.2em;
      text-align: justify;
      margin-block-end: .2em;

      @media(max-width: 1000px){
        font-size: 1em;
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
    font-size: 1.4em;
    font-family: 'Quattrocento Sans',sans-serif;
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

   

    a{
      text-decoration: underline;
      color: #5885b6;
    }
  }
}

.modal-content_contact{
  font-family: 'Quattrocento Sans',sans-serif;
  font-size: 1.4em;
  margin-block-start: .6em;
  list-style: none;
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
`

// // Projects.js Styles
export const StyledProjects = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
font-family: 'Quattrocento', serif;

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
  @media(max-width: 1000px) {
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

.project-selector{
  ul{
    display: flex;
    list-style: none;
  }
  li{
    cursor: pointer;
    padding: 10px;
  }
}

.framework-description{
  font-family: 'Open Sans', serif;
  padding-left: 25px;
  width: 416px;
  font-size: 1em;
  text-align: justify;
}

.tech-contain{
  .flex-list{
    display: flex;
  }
}



.card-ul{
  list-style: none;
  margin-block-start: 0em;
  padding-inline-start: 5px;
  width: 150px;

  li{
    font-family: 'Quattrocento', sans-serif;
    font-size: 1em;
  }
}

.card-links{
  margin-bottom: 10px;
  .link{
  text-decoration: none;
  color: #5885b6;
  padding: 7px;
  }
}

.img-contain{
  width: 450px;
  height: 375px;

  @media(max-width: 1000px){
    height: 360px;
    width: 370px;
  }
}

.project-image{
  height: 300px;
  border: 1px solid black;


  @media(max-width: 1000px){
    width: 370px;
  }
}
  
 
`;

//Footer.js Styles
export const StyledFooter = styled.div`
padding-top: 135px;
bottom: 0;
color: #080808;
height: 50px;
width: 100%;
justify-content: center;
margin: 0 auto;
display: flex; 
align-content: center;
font-family: 'Open Sans', sans-serif;

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

