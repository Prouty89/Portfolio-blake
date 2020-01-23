import styled from 'styled-components';





// Sidebar.js component container styles
export const StyledContent = styled.div`
@import url('https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap');
font-family: 'Red Hat Display', sans-serif;
scroll-behavior: smooth;
color: black;

.suspense-load{
  width: 100%;
  text-align: center;
  margin-top: 50px;
}


.first-child{
  height: 365px;
  display: flex;
  justify-content: center;
  
  @media(max-width:1250px){
      height: 650px;
  }

  .photo-container-sm{
    display: flex;
    justify-content: center;
  }

  .photo-square-sm{
    
    width: 137px;
    height: 137px;
    display: flex;
    background: #A8C5FF;
    border-radius: 50%;
    border: 2px solid #F19B38 ;

    @media(min-width: 1250px){
      display: none;
    }
  }
    .blake-photo-sm{
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-self: center;
  }

  .photo-square{
    height: 150px;
    width: 122px;
    display: flex;


    @media(max-width: 1250px){
      display: none;
    }
  }

  .photo-container{
    
    display: flex;
   
    flex-direction: column;
    align-items: flex-start;
    width: 300px;

    @media(max-width: 1250px){
      display: none;
    }


    .blake-photo{
      width: 122px;
      height: 145px;
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
  
  


.home-wrap{
  display: flex;
}

.home-container{
  width: 1200px;
  padding-top: 80px;
  display: flex;

  @media(max-width: 1250px){
    justify-content: center;
    padding-top: 20px;
    flex-direction: column;
  }
}

.hide-show{
  display: flex;
  justify-content: center;
  
  @media(max-width: 1250px){
    height:400px;
  }
}



  .trails-main{
    display: flex;
    flex-direction: column;
    height: 350px;

    width: 400px;
    align-items: center;
    display: flex;
    

    @media(max-width: 800px){
      height: 240px;
      justify-content: end;
      margin-bottom: 0px;
    }
}

.trails-text{
    font-weight: 600;
    text-align: left;
    align-items: center;

    font-size: 2rem;
    justify-content: center;
    width: 80%;
    height: 60px;
    
    

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
   

    @media(max-width: 700px){
      width: 90%;
      height: 100px;
    }

    

    .social-icons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 450px;
      justify-content: space-around;

      @media(max-width: 600px){
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
  
}

.third-child{
    
    background: #9BAF74;
  
    @media(max-width: 1200px){
      height: 750px;
      
    }

    @media(max-width: 750px){
      height: 750px;
    }

    .svg-logo{
      bottom: -2px;
      position: absolute;
      display: none;
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
  background: #2A3140;
}

.base-shell2{
  background: #2A3140;
}

.base-container{
    height: 105px;
    background: #ffffff;
    border-bottom: 20px solid #ffbb6d;
    border-bottom-left-radius: 300px;
    text-align: center;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 750px){
      height: 80px;
    }

    .base-text{
      display: flex;
      justify-content: center;
      width: 90%;

      @media(max-width: 600px){
        width: 91%;
      }

      .skills-title{
        width: 1200px;

        @media(max-width: 1250px){
          width: 390px;
        }

        @media(max-width: 500px){
          padding-left: 65px;
        }
      }

      h4{
        text-decoration: underline;
        font-weight: 500;
        font-size: 1.3rem;
        text-align: left;
        margin-block-start: 0em;
        margin-block-end: .83em;

        
      }
    }

    .baseskill-text{
      width: 1200px;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media(max-width: 1000px){
        font-size: 1rem;
        width: 90%;
        text-align: left;
        align-self: flex-end;
       
      }
    }
}

.base-container2{
  height: 350px;
  border-top: 20px solid #ffbb6d;
  
  border-top-right-radius: 300px;
  background: white;
  text-align: left;
  padding-top: 75px;
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
    width: 1200px;

    @media(max-width: 600px){
      height: 427px;
      justify-content: flex-end;
    }

    h4{
      text-decoration: underline;
      margin-block-start: 0em;
      margin-block-end: .83em;
      font-weight: 500;
      
      @media(max-width: 1000px){
        text-align: left; 
      }
    }
  }

  .baseskill-text{
    width: 1200px;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  


    @media(max-width: 1000px){
      font-size: 1rem;
      text-align: left;
      align-self: center;
      width: 100%;     
    }

    @media(max-width: 600px){
      padding-bottom: 18px;   
    }

    .waka-chart{
      height: 385px;
      width: 650px;

      @media(max-width: 900px){
        width: 325px;
        height: 225px;
      }
    }
  }

  .skills-title{
    width: 1200px;
    margin-bottom: 1%;
    font-size: 1.2rem;
    align-self: center;
    text-align: left;
    text-decoration: underline;
    
    
    
    h4{
      margin-block-start: 0em;
      margin-block-end: 0em;
      font-size: 1.3rem;
      font-weight: 500;
      text-decoration: underline;
    }

}
}

.fourth-child{
    background: #2A3140;
    height: 935px;
    display: flex;
    align-items: center;



    @media(max-width: 740px){
      height: 1300px;
  }
}

.fifth-child{ 
    height: 800px;
    

    @media(max-width: 600px){
      height: 650px;
    }

  
}

.nav-container{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  display: flex;
  background: #A8C5FF;
  border-bottom: 2px solid #ffbb6d;
  justify-content: center;
  align-items: center;

  .nav-list{
    display: flex;
    font-size: 1.2rem;
    width: 1200px;
    height: 30px;
    z-index: 1;
    align-items: center;
    font-variant: petite-caps;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    
   
    @media(max-width: 1250px){
      font-size: 1rem;
      height: 40px;
      width: 600px;
    }

    @media(max-width: 700px){
      font-size: .9rem;
      height: 40px;
      width: 90%;
    }
    
    li{
        list-style: none;
    }
}
}


        a{
            text-decoration: none;
            cursor: pointer;
            color: black;

            &:hover{
              font-weight: bold;
            }
        }

        .about-container{
          display: flex;
          height: 350px;
          width: 1250px;
        
          @media(max-width: 1250px){
            display: none;
          }



          .right-side{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            width: 383px;

            .rows{
              display: flex;
              flex-direction: column;
              text-align: left;
              
            }
          }

          .accordion-skills{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            height: 400px;
            height: 300px;
            margin-left: 5px;

            p{
              margin-block-start: .2em;
              margin-block-end: .2em;
            }
          }

          

          .intro-heading{
            background: #ffbb6d;
            -webkit-text-decoration: none;
            text-decoration: none;
            width: 460px;
            color: white;
            margin-block-start: 0;
            font-size: 2em;
            text-align: center;
            height: 51px;
          }
          .hcard-contain{
            width: 362px;

            left_top{
              height: 151px;
            }

            .card_text{
              width: 365px;
            }

            ul{
              margin-block-start: 0em;
          
            }
          }

          .hcard-contain2{
            position: relative;
            height: 325px;
            width: 460px;
            outline: 2px solid #febb6d;
            
            .left_top2{
              p{
                margin-left: 10px;
              }
            }
          }

          h3{
            margin-block-start: .5em;
            margin-block-end: 0em;
            font-weight: 500;
            text-decoration: underline;
            font-size: 1.3em;
          }

          h5{
            margin-block-start: 0em;
            margin-block-end: .2em;
            font-weight: 500;
            padding-left: 5px;
            font-size: 1em;
          }
          
          .abpdr-small{
            top: 165px;
            left: 6px;
            position: absolute;
          }

          .abpdr-small:after, .abpdr-small:before {
            border-style:solid;
            border-color: rgba(55,55,55,.6) transparent transparent transparent;
            content:" ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            top: 161px;
        }
        
        .abpdr-small:before {
            border-top-color: #a8c5fe;
            border-width: 76px 116px 0 116px;
            left: 166px;
            top: 162px;
        }
        .abpdr-small:after {
          border-style: solid;
          border-width: 76px 116px 0 116px;
          border-color: #2a3140 transparent transparent transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top: 162px;
          left: -6px;
      }
  
        .abpdl-small, .abpdl-small:before {
          border-style:solid;
          border-color: transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top: 259px;
          left: 72px;
      }
      
      .abpdl-small:before {
        border-top-color: #febb6d;
        border-width: 76px 116px 0 116px;
        left: -2px;
        top: 65px;
      }
  
      .abpdl-small:after {
        border-style: solid;
        border-width: 76px 116px 0 116px;
        border-color: #febb6d transparent transparent transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        top: 65px;
        left: 155px;
    }
        }

       
      /*
      .
      .
      .
      .
      .
      .
      */
     
            .arrow-c2{

              .rtd{
                right: 175px !important;
              }

              .text-c2{

                @media(max-width: 400px){
                  width: 185px;
                }
              }

              .text-c21{
                width: 270px;
                margin-top: -15px;
                margin-left: 0px;
                margin-right: 0px;
  
                h3{
                  font-family: 'Red Hat Display',sans-serif;
                  margin-block-end: .5em;
                  font-weight: 500;
                  font-size: 1.3em;
                  text-align: left;
                  text-decoration: underline;
                }

                h5{
                  
                  margin-block-start: .2em;
                  margin-block-end: 0em;
                  font-size: 1em;
                  text-align: left;
                  font-weight: 500;
                  padding-left: 3px;
                }
              }

              .text-c22{
                width: 375px;
                margin-top: -15px;
                margin-left: 0px;
                margin-right: 0px;
       
                  h3{
                    font-family: 'Red Hat Display',sans-serif;
                    font-weight: 500;
                    font-size: 1.3em;
                    margin-block-end: .5em;
                    text-align: left;
                    text-decoration: underline;
                  }

                  h5{
                  
                    margin-block-start: 0em;
                    margin-block-end: .2em;
                    font-size: 1em;
                    text-align: left;
                    font-weight: 500;
                    padding-left: 3px;
                  }
              }
          }

        

      .text_div {
          width: 230px;
          height:200px;
          
      }

      .text_div_small {
        width:205px;
        height:200px;
        
    }

      .text_container{
        width: 225px;
        
        margin-top: -15px;
        margin-left: 0px;
        margin-right: 0px;
       

          

          h3{
            font-family: 'Red Hat Display',sans-serif;
            margin-block-end: .5em;
            font-weight: 500;
            font-size: 1.3em;
            text-align: left;
            text-decoration: underline;
          }

          h5{
         
            margin-block-start: 0em;
            margin-block-end: .2em;
            font-size: 1em;
            text-align: left;
            font-weight: 500;
            padding-left: 3px;
          }
      }

      .text_container_small{
        width: 196px;
        margin-top: -15px;
        margin-left: 5px;
        margin-right: 0px;
        text-align: center;

          

          h3{
            font-family: 'Red Hat Display',sans-serif;
            margin-block-end: .5em;
            font-weight: 500;
            font-size: 1.3em;
            text-align: left;
            text-decoration: underline;
          }

          h5{
       
            margin-block-start: 0em;
            margin-block-end: .2em;
            font-size: .9em;
            text-align: left;
            font-weight: 500;
            padding-left: 3px;

            @media(max-width: 600px){
              font-size: .7em;
            }
          }
      }

      .img_div {
          width:200px;
          height:200px;
          position:absolute;
          
      }
      .left_top_div{
          top: 26px;
          left: -35px;
          
          border-top-right-radius: 8px;

          .text_container{
            width: 280px;
          }
         
      }

      
      
      .center_bottom_div{
          bottom:0px;
          left:200px;
         
          display: flex;
          align-items: center;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
      }
      
      .right_top_div{
          top: 26px;
          right: 21px;
          border-top-left-radius: 8px;

          .text_container{
          width: 250px;
        }
      }
      
      .img_div{
        width: 225px;
      }

      .left_bottom_div{
          bottom:0px;
          left:0px;
          
          background-size:200px 200px;
      }
      
      .center_top_div{
          top: 0;
          left: 295px;
          background-size:200px 200px;

          ul{
            margin-block-start: .2em;
          }
       

          h3{
            font-family: 'Red Hat Display',sans-serif;
            margin-block-end: .5em;
            font-weight: 500;
            font-size: 1.3em;
            text-align: left;
          }


          h5{
          
            margin-block-start: 0em;
            margin-block-end: 0em;
            font-size: em;
            text-align: left;
            font-weight: 500;
            padding-left: 3px;
          }
      }
      
      .right_bottom_div{
          bottom:0px;
          right:0px;
          background-size:200px 200px;
      }

      .accordion-headingsm{
        display: none;
        @media(max-width: 1250px){
          display: inherit;
        }
      }

      .accordion-skills-sm{
        display: none;

        @media(max-width: 1250px){
          display: grid;
          width: 600px;
          padding-left: 5px;
          grid-template-columns: repeat( 3, 1fr);
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          width: 380px;
          font-size: .9em;
        }

        @media (max-width: 700px){
          width: 380px;
        }

        @media (max-width: 500px){
          padding-left: 80px;
        }
    
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
        height: 470px;
        display: flex;
        align-items: center;
        flex-direction: column;
        display: none;
       
        
        @media(max-width: 1250px){
          display: inherit;
          bottom: 185px;
          height: 450px;
        }

        .ac-small{
          width: 395px;
          height: 300px;
          margin: 0 auto;
          display: flex;
          position: relative;
        }

       

        .oneltd{
          border-left: none;
          top: 290px;
        }

        .onertd{
          border-left: none;
          top: 290px;
        }

        h5{
          text-align: left;
          font-weight: 500;
         
        }

        .abpdr-small:after, .abpdr-small:before {
          border-style:solid;
          border-color: rgba(55,55,55,.6) transparent transparent transparent;
          content:" ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          top: 198px;
      }
      
      .abpdr-small:before {
          border-top-color: #a8c5fe;
          border-width: 76px 116px 0 116px;
          left: 166px;
          top: 138px;
      }
      .abpdr-small:after {
        border-style: solid;
        border-width: 76px 116px 0 116px;
        border-color: #2a3140 transparent transparent transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        top: 138px;
        left: -6px;
    }

      .abpdl-small, .abpdl-small:before {
        border-style:solid;
        border-color: #ffffff transparent transparent transparent;
        content:" ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        top: 75px;;
    }
    
    .abpdl-small:before {
      border-top-color: #febb6d;
      border-width: 76px 116px 0 116px;
      left: -2px;
      top: 65px;
    }

    .abpdl-small:after {
      border-style: solid;
      border-width: 76px 116px 0 116px;
      border-color: #febb6d transparent transparent transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      top: 65px;
      left: 155px;
  }
      
        
      
        .skills-title{
            width: 1200px;
            font-size: 1.2rem;
            margin-top: 1%;
            align-self: center;
            text-align: left;
            text-decoration: underline;
            
            h4{
              margin-block-start: .33em;
              margin-block-end: .33em;
              font-size: 1.3rem;
              font-weight: 500;
              text-decoration: underline;
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
  @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap');
  font-family: 'Red Hat Display', sans-serif;
  display: grid;
  width: 1200px;
  margin: 0 auto;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 10px;

  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    height: 815px;
  }

  @media (max-width: 740px) {
    display: flex;
    flex-wrap: wrap;
    height: 1250px;
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
      color: #ffbb6d;

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
      background: #ffbb6d;
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
  }

  h4 {
    text-align: center;
    font-weight: 500;
  }

  .card-one{
    @media(max-width: 1100px){
      
    }
  }

  .card-two{
    margin: 0 auto;
  }

  .card-three{
    display: flex;
    justify-content: flex-end;

    @media(max-width: 1100px){

    }
  }
  

  .card-four {
    
    @media (max-width: 750px) {
      display: none;
    }
  }

  .card-five {
    margin: 0 auto;
    @media (max-width: 1100px) {
      display: none;
    }
  }

  .card-six {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;

// Contact.js Styles
export const StyledForm = styled.div`
  
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1.5rem;
  justify-content: flex-end;
  align-items: center;

  .form-heading {
   
    font-size: 1em;
    color: black;
    text-align: center;
  }

  .footer {
    color: black;
    font-size: 1em;
    text-align: center;
    z-index: 0;

    @media(max-width: 600px){
      font-size: .8em;
    }
  }

  .form {
    height: 550px;
    justify-content: center;
    display: flex;
    background: #ffbb6d;
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
        background: rgb(168, 197, 255);
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

