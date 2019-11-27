import React from "react";
import Sidebar from "react-sidebar";
import styled from "styled-components";


function Side(){
    return(
        <>
            <StyledSB>
                <Sidebar className = "main-container"
                    sidebar=
                    {<b>
                        <StyledList>
                        <div>image :(</div>        
                        <ul className= "sidebar-list">
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Work</li>
                            <li>Contact</li>
                        </ul>
                        </StyledList>
                    </b>}
                    open={true}
                    docked={true}
                    onSetOpen={true}
                    contentClassName = {"content-container"}
                    sidebarClassName = {"sidebar-container"}
                    rootClassName = {"root-container"}
                    children = {
                    <StyledContent>
                        <div className="first-child">FIRST</div>
                        <div className="second-child">second</div>
                        <div className="third-child">third</div>
                        <div className="fourth-child">fourth</div>
                        <div className="fifth-child">fifth</div>
                        
                    </StyledContent>
                    }
                    >
                  
                </Sidebar>
            </StyledSB>
        </>
    )
};

export default Side;

const StyledSB = styled.div`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');

.root-container{
    font-family: 'Open Sans', sans-serif;
    max-width: 1350px;
    margin: 0 auto;
    border-right: 1px solid grey;
}

.content-container{
    background: #fffff;
    width: calc(100% - 300px);  
}

.sidebar-container{
    font-family: 'Open Sans', sans-serif;
    color: white;
    background: #A7B3A5;
    width: 300px;
 

    @media(max-width:750px){
        visibility: hidden;
    }
}
`

const StyledList = styled.div`


.sidebar-list{
    padding-inline-start: 0px;
    height: 200px;
    list-style-type: disc;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
`

const StyledContent = styled.div`
background: black;
color: pink;

.first-child{
    height: 980px;
}

`