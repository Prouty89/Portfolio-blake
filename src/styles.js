import styled from 'styled-components';

//App.js Styles

export const StyledContent = styled.div`
width: 1250px;
margin: 0 auto;
`


//Home.js Styles
export const StyledHome = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Quattrocento&family=Sigmar+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quattrocento&family=Quattrocento+Sans&family=Sigmar+One&display=swap');
height: 590px;

@media(max-width: 650px){
  height: 400px;
}

.home-contents{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #080808;
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
      font-family: 'Quattrocento', serif;
      font-size: 8rem;
      color: #36475d;
      background-image: linear-gradient(120deg, #d6e5e5 0%, #5885b6 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.2em;
      background-position: 0 91%;
      margin-block-start: 0em;
      margin-block-end: 0em;
      @media(max-width: 650px){
        font-size: 2.5rem;
      }
    }
    .animated-text{
      font-family: 'Quattrocento Sans', serif;
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
    padding-left: 27px;
    height: 127px;
    opacity: .5;
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
    border-right: 5px solid #36475d;
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

  


  @media(max-width: 650px){
    color: #c6e8f2;
    font-size: 1.2em;
  }
}

  .modal {
    width: 550px;
    height: 200px;
    color: #080808;
    padding: 15px;
    user-select: none;
    font-family: 'Quattrocento Sans', sans-serif;
    position: absolute;
    z-index: 90;
    right: -675px;
    top: -7px;
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
      margin-block-start: .3em;
      list-style: none;
      font-size: 1.4em;
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
    font-size: 1.4em;
    font-family: 'Quattrocento Sans',sans-serif;
    text-align: left;
    margin-block-end: .2em;

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
  margin-block-start: .6em;
  list-style: none;
  text-align: left;
  margin-block-end: .2em;

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
  color: #5885b6;
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
  padding-left: 35px;
}

.card-ul{
  list-style: none;
}

.project-image{
  width: 510px;
}
  
 
`;

//Footer.js Styles
export const StyledFooter = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
color: #080808;
height: 50px;
width: 1200px;
justify-content: center;
margin: 0 auto;
display: flex; 
align-content: center;
font-family: 'Quattrocento', serif;

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

