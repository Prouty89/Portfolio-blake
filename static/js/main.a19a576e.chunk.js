(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[0],[,,,,,function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return d})),t.d(e,"b",(function(){return c}));var a=t(1),i=t(2);function l(){var n=Object(a.a)(["\n  \n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-size: 1.5rem;\n  justify-content: flex-end;\n  align-items: center;\n\n  .form-heading {\n   \n    font-size: 1em;\n    color: black;\n    text-align: center;\n  }\n\n  .footer {\n    color: black;\n    font-size: 1em;\n    text-align: center;\n    z-index: 0;\n\n    @media(max-width: 600px){\n      font-size: .8em;\n    }\n  }\n\n  .form {\n    height: 550px;\n    justify-content: center;\n    display: flex;\n    background: #ffbb6d;\n    width: 650px;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 8px;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;\n\n    @media (max-width: 700px) {\n      height: 300px;\n      justify-content: center;\n      display: flex;\n      width: 355px;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .field {\n      margin-top: 4%;\n      box-shadow: rgba(0, 0, 0, 0.35) 0 0 4px;\n    }\n\n    .submit-btn {\n      background: #f8f8f1;\n      border: none;\n      color: #777777;\n      font-weight: normal;\n      box-shadow: 2px 2px 4px #9a9a9a;\n      font-family: 'Red Hat Display', sans-serif;\n      height: 40px;\n      font-size: 1.5rem;\n      border-radius: 2px;\n      margin-top: 4%;\n      width: 96px;\n      text-align: center;\n      display: flex;\n      align-self: center;\n      transition: width 0.6s;\n      cursor: pointer;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 1100px) {\n        height: 30px;\n        width: 76px;\n        font-size: 1.2rem;\n      }\n\n      &:hover {\n        width: 110px;\n        background: rgb(168, 197, 255);\n        color: white;\n      }\n\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    input {\n      font-family: \"Work Sans\", sans-serif;\n      width: 550px;\n      font-size: 1.2rem;\n      background: #f8f8f1;\n      height: 40px;\n      border: none;\n      border-radius: 4px;\n\n      @media (max-width: 700px) {\n        height: 30px;\n        justify-content: center;\n        display: flex;\n        width: 330px;\n        font-size: 15px;\n        flex-direction: column;\n        align-items: center;\n      }\n      input:focus {\n        outline: none;\n        border: none;\n        border-radius: 2px;\n        box-shadow: 0 0 1px black;\n      }\n      ::placeholder {\n        padding-left: 10px;\n      }\n      ::value {\n        color: red;\n      }\n    }\n  }\n"]);return l=function(){return n},n}function r(){var n=Object(a.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap');\n  font-family: 'Red Hat Display', sans-serif;\n  display: grid;\n  width: 1200px;\n  margin: 0 auto;\n  align-self: center;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 10px;\n\n  @media (max-width: 1100px) {\n    display: flex;\n    flex-wrap: wrap;\n    height: 815px;\n  }\n\n  @media (max-width: 740px) {\n    display: flex;\n    flex-wrap: wrap;\n    height: 1250px;\n  }\n\n  ul {\n    list-style: none;\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n  }\n\n  .a-link {\n    display: none;\n  }\n\n  .flippy-container {\n    border-radius: 8px;\n  }\n\n  .design-desc {\n    text-align: center;\n  }\n\n  .framework-desc {\n    text-align: center;\n  }\n\n  p {\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n\n    padding: 2%;\n  }\n\n  .card {\n    position: relative;\n\n    @media(max-width: 1100px){\n      margin: 0 auto;\n    }\n\n    .click-here{\n      position: absolute;\n      bottom: 10px;\n      right: 10px;\n      text-transform: uppercase;\n      font-size: 6em;\n      color: #ffbb6d;\n\n      &:hover{\n        color: #A8C5FF;\n        font-weight: 100;\n      }\n    }\n\n    h3{\n      background: #ffbb6d;\n      color: black;\n      font-weight: 500;\n    }\n  }\n\n  .card-links {\n    position: absolute;\n    bottom: 3%;\n    display: flex;\n    border-top: 2px solid #777777;\n    justify-content: space-between;\n    width: 90%;\n\n    .link {\n      text-decoration: none;\n      padding: 2%;\n      color: #777777;\n    }\n  }\n\n  h3 {\n    text-align: center;\n  }\n\n  h4 {\n    text-align: center;\n    font-weight: 500;\n  }\n\n  .card-one{\n    @media(max-width: 1100px){\n      \n    }\n  }\n\n  .card-two{\n    margin: 0 auto;\n  }\n\n  .card-three{\n    display: flex;\n    justify-content: flex-end;\n\n    @media(max-width: 1100px){\n\n    }\n  }\n  \n\n  .card-four {\n    \n    @media (max-width: 750px) {\n      display: none;\n    }\n  }\n\n  .card-five {\n    margin: 0 auto;\n    @media (max-width: 1100px) {\n      display: none;\n    }\n  }\n\n  .card-six {\n    display: flex;\n    justify-content: flex-end;\n    @media (max-width: 1100px) {\n      display: none;\n    }\n  }\n"]);return r=function(){return n},n}function o(){var n=Object(a.a)(['\n@import url(\'https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap\');\nfont-family: \'Red Hat Display\', sans-serif;\nscroll-behavior: smooth;\ncolor: black;\n\n.suspense-load{\n  width: 100%;\n  text-align: center;\n  margin-top: 50px;\n}\n\n\n.first-child{\n  height: 365px;\n  display: flex;\n  justify-content: center;\n  \n  @media(max-width:1250px){\n      height: 680px;\n  }\n\n  .photo-container-sm{\n    display: flex;\n    justify-content: center;\n  }\n\n  .photo-square-sm{\n    \n    width: 135px;\n    height: 135px;\n    display: flex;\n    background: #F19B38;\n    border-radius: 50%;\n    border: 4px solid #A8C5FF;\n\n    @media(min-width: 1250px){\n      display: none;\n    }\n  }\n    .blake-photo-sm{\n      width: 130px;\n      height: 130px;\n      border-radius: 50%;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      align-self: center;\n  }\n\n  .photo-square{\n    height: 150px;\n    width: 122px;\n    display: flex;\n\n\n    @media(max-width: 1250px){\n      display: none;\n    }\n  }\n\n  .photo-container{\n    \n    display: flex;\n   \n    flex-direction: column;\n    align-items: flex-start;\n    width: 300px;\n\n    @media(max-width: 1250px){\n      display: none;\n    }\n\n\n    .blake-photo{\n      width: 122px;\n      height: 145px;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      align-self: center;\n     \n  \n      @media(max-width: 800px){\n        width: 130px;\n        height: 130px; \n      }\n    }\n  }\n  \n  \n\n\n.home-wrap{\n  display: flex;\n}\n\n.home-container{\n  width: 1200px;\n  padding-top: 80px;\n  display: flex;\n\n  @media(max-width: 1250px){\n    justify-content: center;\n    padding-top: 20px;\n    flex-direction: column;\n  }\n}\n\n.hide-show{\n  display: flex;\n  justify-content: center;\n  \n  @media(max-width: 1250px){\n    height:430px;\n  }\n}\n\n\n\n  .trails-main{\n    display: flex;\n    flex-direction: column;\n    height: 350px;\n\n    width: 400px;\n    align-items: center;\n    display: flex;\n    \n\n    @media(max-width: 800px){\n      height: 240px;\n      justify-content: end;\n      margin-bottom: 0px;\n    }\n}\n\n.trails-text{\n    font-weight: 600;\n    text-align: left;\n    align-items: center;\n\n    font-size: 2rem;\n    justify-content: center;\n    width: 80%;\n    height: 60px;\n    \n    \n\n    @media(max-width:1470px){\n        margin-left: 0;\n        margin-left: 0;\n        font-size: 2.5rem;\n        width: 100%;\n        height: 70px;\n         \n    }\n\n    @media(max-width:1260px){\n        margin-left: 0;\n        margin-left: 0;\n        font-size: 2rem;\n        width: 100%;\n        height: 60px;\n       \n    }\n\n    @media(max-width:1010px){\n        margin-left: 0%;\n        font-size: 1.7rem;\n        text-align: center;\n    }\n\n    @media(max-width:800px){\n      margin-left: 0%;\n      font-size: 1.3rem;\n      text-align: center;\n      font-variant: none;\n      filter: none;\n      height: 30px;\n\n  }\n  }\n}\n\n  .social-tray {\n    \n    color: white;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    display: flex;\n    height: 75px;\n    align-self: center;\n   \n\n    @media(max-width: 700px){\n      width: 90%;\n      height: 100px;\n    }\n\n    \n\n    .social-icons {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      width: 450px;\n      justify-content: space-around;\n\n      @media(max-width: 600px){\n        flex-direction: row;\n        height: 40%;\n        width: 100%;\n      }\n\n      .svg {\n        cursor: pointer;\n\n        &:hover {\n          transform: skewX(-8deg);\n        }\n      }\n    }\n  }\n  \n}\n\n.third-child{\n    \n    background: #9BAF74;\n  \n    @media(max-width: 1200px){\n      height: 750px;\n      \n    }\n\n    @media(max-width: 750px){\n      height: 750px;\n    }\n\n    .svg-logo{\n      bottom: -2px;\n      position: absolute;\n      display: none;\n      margin-left: auto;\n      margin-right: auto;\n      left: 40px;\n      right: 0;\n\n      &:hover {\n        transform: skewX(-8deg);\n      }\n\n      @media(max-width: 1200px){\n        display: none;\n      }\n    }\n\n  \n\n    .skill-title{\n        padding-top: 35px;\n        padding-bottom: 10px;\n        font-size: 30px;\n        font-weight: bold;\n        margin-top: 1%;\n        margin-bottom: 1%;\n    }\n}\n\n.base-shell{\n  background: #2A3140;\n}\n\n.base-shell2{\n  background: #2A3140;\n}\n\n.base-container{\n    height: 105px;\n    background: #ffffff;\n    border-bottom: 20px solid #ffbb6d;\n    border-bottom-left-radius: 300px;\n    text-align: center;\n    padding-bottom: 75px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 750px){\n      height: 150px;\n    }\n\n    .base-text{\n      display: flex;\n      justify-content: center;\n      width: 90%;\n\n      @media(max-width: 600px){\n        width: 91%;\n      }\n\n      .skills-title{\n        width: 1200px;\n\n        @media(max-width: 1250px){\n          width: 600px;\n        }\n      }\n\n      h4{\n        text-decoration: underline;\n        font-weight: 500;\n        font-size: 1.3rem;\n        text-align: left;\n        margin-block-start: 0em;\n        margin-block-end: .83em;\n\n        @media(max-width: 700px){\n          text-align: center; \n        }\n      }\n    }\n\n    .baseskill-text{\n      width: 1200px;\n      font-size: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n\n      @media(max-width: 1000px){\n        font-size: 1rem;\n        width: 90%;\n        text-align: left;\n        align-self: flex-end;\n       \n      }\n    }\n}\n\n.base-container2{\n  height: 350px;\n  border-top: 20px solid #ffbb6d;\n  \n  border-top-right-radius: 300px;\n  background: white;\n  text-align: left;\n  padding-top: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n  @media(max-width: 750px){\n    height: 150px;\n  }\n\n  .base-text{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: 1200px;\n\n    @media(max-width: 600px){\n      height: 427px;\n      justify-content: flex-end;\n    }\n\n    h4{\n      text-decoration: underline;\n      margin-block-start: 0em;\n      margin-block-end: .83em;\n      font-weight: 500;\n      \n      @media(max-width: 1000px){\n        text-align: left; \n      }\n    }\n  }\n\n  .baseskill-text{\n    width: 1200px;\n    font-size: 1.1rem;\n    display: flex;\n    justify-content: center;\n  \n\n\n    @media(max-width: 1000px){\n      font-size: 1rem;\n      text-align: left;\n      align-self: center;\n      width: 100%;     \n    }\n\n    @media(max-width: 600px){\n      padding-bottom: 18px;   \n    }\n\n    .waka-chart{\n      height: 385px;\n      width: 650px;\n\n      @media(max-width: 900px){\n        width: 325px;\n        height: 225px;\n      }\n    }\n  }\n\n  .skills-title{\n    width: 1200px;\n    margin-bottom: 1%;\n    font-size: 1.2rem;\n    align-self: center;\n    text-align: left;\n    text-decoration: underline;\n    \n    \n    \n    h4{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      font-size: 1.3rem;\n      font-weight: 500;\n      text-decoration: underline;\n    }\n\n}\n}\n\n.fourth-child{\n    background: #2A3140;\n    height: 935px;\n    display: flex;\n    align-items: center;\n\n\n\n    @media(max-width: 740px){\n      height: 1300px;\n  }\n}\n\n.fifth-child{ \n    height: 800px;\n    \n\n    @media(max-width: 600px){\n      height: 650px;\n    }\n\n  \n}\n\n.nav-container{\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  background: #A8C5FF;\n  border-bottom: 2px solid #ffbb6d;\n  justify-content: center;\n  align-items: center;\n\n  .nav-list{\n    display: flex;\n    font-size: 1.2rem;\n    width: 1200px;\n    height: 30px;\n    z-index: 1;\n    align-items: center;\n    font-variant: petite-caps;\n    justify-content: space-between;\n    margin: 0;\n    padding: 0;\n    \n   \n    @media(max-width: 1250px){\n      font-size: 1rem;\n      height: 40px;\n      width: 600px;\n    }\n\n    @media(max-width: 700px){\n      font-size: .9rem;\n      height: 40px;\n      width: 90%;\n    }\n    \n    li{\n        list-style: none;\n    }\n}\n}\n\n\n        a{\n            text-decoration: none;\n            cursor: pointer;\n            color: black;\n\n            &:hover{\n              font-weight: bold;\n            }\n        }\n\n        .about-container{\n          display: flex;\n          height: 350px;\n          width: 1250px;\n        \n          @media(max-width: 1250px){\n            display: none;\n          }\n\n\n\n          .right-side{\n            display: flex;\n            flex-direction: column;\n            align-items: flex-end;\n            width: 383px;\n\n            .rows{\n              display: flex;\n              flex-direction: column;\n              text-align: left;\n              \n            }\n          }\n\n          .accordion-skills{\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            grid-template-rows: repeat(3, 1fr);\n            grid-column-gap: 0px;\n            grid-row-gap: 0px;\n            height: 400px;\n            height: 300px;\n            margin-left: 5px;\n\n            p{\n              margin-block-start: .2em;\n              margin-block-end: .2em;\n            }\n          }\n\n          \n\n          .intro-heading{\n            background: #ffbb6d;\n            -webkit-text-decoration: none;\n            text-decoration: none;\n            width: 460px;\n            color: white;\n            margin-block-start: 0;\n            font-size: 2em;\n            text-align: center;\n            height: 51px;\n          }\n          .hcard-contain{\n            width: 362px;\n\n            left_top{\n              height: 151px;\n            }\n\n            .card_text{\n              width: 365px;\n            }\n\n            ul{\n              margin-block-start: 0em;\n          \n            }\n          }\n\n          .hcard-contain2{\n            position: relative;\n            height: 325px;\n            width: 460px;\n            outline: 2px solid #febb6d;\n            \n            .left_top2{\n              p{\n                margin-left: 10px;\n              }\n            }\n          }\n\n          h3{\n            margin-block-start: .5em;\n            margin-block-end: 0em;\n            font-weight: 500;\n            text-decoration: underline;\n            font-size: 1.3em;\n          }\n\n          h5{\n            margin-block-start: 0em;\n            margin-block-end: .2em;\n            font-weight: 500;\n            padding-left: 5px;\n            font-size: 1em;\n          }\n          \n          .abpdr-small{\n            top: 165px;\n            left: 6px;\n            position: absolute;\n          }\n\n          .abpdr-small:after, .abpdr-small:before {\n            border-style:solid;\n            border-color: rgba(55,55,55,.6) transparent transparent transparent;\n            content:" ";\n            height: 0;\n            width: 0;\n            position: absolute;\n            pointer-events: none;\n            top: 161px;\n        }\n        \n        .abpdr-small:before {\n            border-top-color: #a8c5fe;\n            border-width: 76px 116px 0 116px;\n            left: 166px;\n            top: 162px;\n        }\n        .abpdr-small:after {\n          border-style: solid;\n          border-width: 76px 116px 0 116px;\n          border-color: #2a3140 transparent transparent transparent;\n          content: " ";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n          top: 162px;\n          left: -6px;\n      }\n  \n        .abpdl-small, .abpdl-small:before {\n          border-style:solid;\n          border-color: transparent transparent transparent;\n          content:" ";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n          top: 259px;\n          left: 72px;\n      }\n      \n      .abpdl-small:before {\n        border-top-color: #febb6d;\n        border-width: 76px 116px 0 116px;\n        left: -2px;\n        top: 65px;\n      }\n  \n      .abpdl-small:after {\n        border-style: solid;\n        border-width: 76px 116px 0 116px;\n        border-color: #febb6d transparent transparent transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        top: 65px;\n        left: 155px;\n    }\n        }\n\n       \n      /*\n      .\n      .\n      .\n      .\n      .\n      .\n      */\n     \n            .arrow-c2{\n\n              .rtd{\n                right: 175px !important;\n              }\n\n              .text-c2{\n\n                @media(max-width: 400px){\n                  width: 185px;\n                }\n              }\n\n              .text-c21{\n                width: 270px;\n                margin-top: -15px;\n                margin-left: 0px;\n                margin-right: 0px;\n  \n                h3{\n                  font-family: \'Red Hat Display\',sans-serif;\n                  margin-block-end: .5em;\n                  font-weight: 500;\n                  font-size: 1.3em;\n                  text-align: left;\n                  text-decoration: underline;\n                }\n\n                h5{\n                  \n                  margin-block-start: .2em;\n                  margin-block-end: 0em;\n                  font-size: 1em;\n                  text-align: left;\n                  font-weight: 500;\n                  padding-left: 3px;\n                }\n              }\n\n              .text-c22{\n                width: 375px;\n                margin-top: -15px;\n                margin-left: 0px;\n                margin-right: 0px;\n       \n                  h3{\n                    font-family: \'Red Hat Display\',sans-serif;\n                    font-weight: 500;\n                    font-size: 1.3em;\n                    margin-block-end: .5em;\n                    text-align: left;\n                    text-decoration: underline;\n                  }\n\n                  h5{\n                  \n                    margin-block-start: 0em;\n                    margin-block-end: .2em;\n                    font-size: 1em;\n                    text-align: left;\n                    font-weight: 500;\n                    padding-left: 3px;\n                  }\n              }\n          }\n\n        \n\n      .text_div {\n          width: 230px;\n          height:200px;\n          \n      }\n\n      .text_div_small {\n        width:205px;\n        height:200px;\n        \n    }\n\n      .text_container{\n        width: 225px;\n        \n        margin-top: -15px;\n        margin-left: 0px;\n        margin-right: 0px;\n       \n\n          \n\n          h3{\n            font-family: \'Red Hat Display\',sans-serif;\n            margin-block-end: .5em;\n            font-weight: 500;\n            font-size: 1.3em;\n            text-align: left;\n            text-decoration: underline;\n          }\n\n          h5{\n         \n            margin-block-start: 0em;\n            margin-block-end: .2em;\n            font-size: 1em;\n            text-align: left;\n            font-weight: 500;\n            padding-left: 3px;\n          }\n      }\n\n      .text_container_small{\n        width: 196px;\n        margin-top: -15px;\n        margin-left: 5px;\n        margin-right: 0px;\n        text-align: center;\n\n          \n\n          h3{\n            font-family: \'Red Hat Display\',sans-serif;\n            margin-block-end: .5em;\n            font-weight: 500;\n            font-size: 1.3em;\n            text-align: left;\n            text-decoration: underline;\n          }\n\n          h5{\n       \n            margin-block-start: 0em;\n            margin-block-end: .2em;\n            font-size: .9em;\n            text-align: left;\n            font-weight: 500;\n            padding-left: 3px;\n          }\n      }\n\n      .img_div {\n          width:200px;\n          height:200px;\n          position:absolute;\n          \n      }\n      .left_top_div{\n          top: 26px;\n          left: -35px;\n          \n          border-top-right-radius: 8px;\n\n          .text_container{\n            width: 280px;\n          }\n         \n      }\n\n      \n      \n      .center_bottom_div{\n          bottom:0px;\n          left:200px;\n         \n          display: flex;\n          align-items: center;\n          border-bottom-left-radius: 8px;\n          border-bottom-right-radius: 8px;\n      }\n      \n      .right_top_div{\n          top: 26px;\n          right: 21px;\n          border-top-left-radius: 8px;\n\n          .text_container{\n          width: 250px;\n        }\n      }\n      \n      .img_div{\n        width: 225px;\n      }\n\n      .left_bottom_div{\n          bottom:0px;\n          left:0px;\n          \n          background-size:200px 200px;\n      }\n      \n      .center_top_div{\n          top: 0;\n          left: 295px;\n          background-size:200px 200px;\n\n          ul{\n            margin-block-start: .2em;\n          }\n       \n\n          h3{\n            font-family: \'Red Hat Display\',sans-serif;\n            margin-block-end: .5em;\n            font-weight: 500;\n            font-size: 1.3em;\n            text-align: left;\n          }\n\n\n          h5{\n          \n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            font-size: em;\n            text-align: left;\n            font-weight: 500;\n            padding-left: 3px;\n          }\n      }\n      \n      .right_bottom_div{\n          bottom:0px;\n          right:0px;\n          background-size:200px 200px;\n      }\n\n      .accordion-headingsm{\n        display: none;\n        @media(max-width: 1250px){\n          display: inherit;\n        }\n      }\n\n      .accordion-skills-sm{\n        display: none;\n\n        @media(max-width: 1250px){\n          display: grid;\n          width: 600px;\n          padding-left: 5px;\n          grid-template-columns: repeat(5, 1fr);\n          grid-template-rows: 1fr;\n          grid-column-gap: 0px;\n          grid-row-gap: 0px;\n          width: 600px;\n          font-size: .9em;\n        }\n\n        @media (max-width: 700px){\n          width: 100%;\n        }\n\n        @media (max-width: 400px){\n          margin-left: 15px;\n        }\n    \n        .rows{\n          text-align: left;\n          @media(max-width: 600px){\n            text-align: left;\n            font-size: .8rem;\n          }\n        }\n      \n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n        }\n      }\n\n      .skills-content{\n        height: 470px;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        display: none;\n       \n        \n        @media(max-width: 1250px){\n          display: inherit;\n          bottom: 185px;\n          height: 472px;\n        }\n\n        .ac-small{\n          width: 395px;\n          height: 300px;\n          margin: 0 auto;\n          display: flex;\n          position: relative;\n        }\n\n       \n\n        .oneltd{\n          border-left: none;\n          top: 290px;\n        }\n\n        .onertd{\n          border-left: none;\n          top: 290px;\n        }\n\n        h5{\n          text-align: left;\n          font-weight: 500;\n         \n        }\n\n        .abpdr-small:after, .abpdr-small:before {\n          border-style:solid;\n          border-color: rgba(55,55,55,.6) transparent transparent transparent;\n          content:" ";\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n          top: 198px;\n      }\n      \n      .abpdr-small:before {\n          border-top-color: #a8c5fe;\n          border-width: 76px 116px 0 116px;\n          left: 166px;\n          top: 162px;\n      }\n      .abpdr-small:after {\n        border-style: solid;\n        border-width: 76px 116px 0 116px;\n        border-color: #2a3140 transparent transparent transparent;\n        content: " ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        top: 162px;\n        left: -6px;\n    }\n\n      .abpdl-small, .abpdl-small:before {\n        border-style:solid;\n        border-color: #ffffff transparent transparent transparent;\n        content:" ";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        top: 99px;\n    }\n    \n    .abpdl-small:before {\n      border-top-color: #febb6d;\n      border-width: 76px 116px 0 116px;\n      left: -2px;\n      top: 65px;\n    }\n\n    .abpdl-small:after {\n      border-style: solid;\n      border-width: 76px 116px 0 116px;\n      border-color: #febb6d transparent transparent transparent;\n      content: " ";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 65px;\n      left: 155px;\n  }\n      \n        \n      \n        .skills-title{\n            width: 1200px;\n            font-size: 1.2rem;\n            margin-top: 1%;\n            align-self: center;\n            text-align: left;\n            text-decoration: underline;\n            \n            h4{\n              margin-block-start: .33em;\n              margin-block-end: .33em;\n              font-size: 1.3rem;\n              font-weight: 500;\n              text-decoration: underline;\n            }\n      \n        }\n      \n        .location{\n          margin-block-start: 0px;\n          margin-block-end: 0px;\n        }\n      \n        .relocation{\n          margin-block-start: 0px;\n          margin-block-end: 15px;\n        }\n      \n        .skills-head {\n          font-size: 1.55em;\n          text-align: center;\n          min-width: 600px;\n          text-transform: capitalize;\n          display: grid;\n          grid-template-columns: 1fr;\n          grid-template-rows: 1fr;\n          grid-row-gap: 30px;\n      \n          @media(max-width: 1000px){\n            font-size: 1em;\n            display: flex;\n            text-align: center;\n            flex-direction: column;\n            min-width: 450px;\n          }\n          @media(max-width: 500px){\n            font-size: .7em;\n            min-width: 300px;\n          }\n      \n          h1{\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n      \n            @media(max-width: 800px){\n              margin-bottom: 25px;\n            }\n          }\n        }\n}\n']);return o=function(){return n},n}var s=i.a.div(o()),d=i.a.div(r()),c=i.a.div(l())},,,,,,function(n,e,t){n.exports=t.p+"static/media/resume.3810b387.pdf"},function(n,e,t){n.exports=t.p+"static/media/BlakeRsz.36d6afd5.jpg"},function(n,e,t){n.exports=t.p+"static/media/BpCrop.958de6c1.jpg"},,,,function(n,e,t){n.exports=t(29)},,,,,,function(n,e,t){n.exports=t.p+"static/media/Logo.f63128e0.svg"},,,,,function(n,e,t){},function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),l=t(7),r=t.n(l),o=t(5),s=t(11),d=t.n(s),c=(t(23),t(16),t(12)),m=t.n(c),p=t(13),x=t.n(p);var h=function(){return i.a.createElement("div",{className:"home-wrap"},i.a.createElement("div",{className:"home-container"},i.a.createElement("div",{className:"photo-container-sm"},i.a.createElement("div",{className:"photo-square-sm"},i.a.createElement("img",{className:"blake-photo-sm",src:m.a,alt:"profpho"}))),i.a.createElement("div",{className:"hide-show"},i.a.createElement("div",{className:"about-container"},i.a.createElement("div",{className:"hcard-contain"},i.a.createElement("div",{className:"left_top"},i.a.createElement("div",{className:"photo-container"},i.a.createElement("div",{className:"photo-square"},i.a.createElement("img",{className:"blake-photo",src:x.a,alt:"profpho"})))),i.a.createElement("div",{className:"center_top"},i.a.createElement("div",{className:"card_text"},i.a.createElement("h3",null,"Career Objectives"),i.a.createElement("h5",null,"Jr - Mid Developer"),i.a.createElement("ul",null,i.a.createElement("li",null,"Frontend"),i.a.createElement("li",null,"Backend"),i.a.createElement("li",null,"Full Stack"))),i.a.createElement("div",{className:"card_text"},i.a.createElement("h3",{classname:"no-space-top"},"Education"),i.a.createElement("h5",{className:"no-space-bott"}," Full Stack Web-Development"),i.a.createElement("h5",null,"Lambda School 19-20'"),i.a.createElement("h5",{className:"no-space"},"B.S. Nutrition ","&"," Food Sciences"),i.a.createElement("h5",null,"South Dakota State University 10-15'")))),i.a.createElement("div",{className:"hcard-contain2"},i.a.createElement("div",{className:"left_top2"},i.a.createElement("div",{className:"card_text"},i.a.createElement("h3",{className:"intro-heading"},"Welcome! I'm Blake"),i.a.createElement("p",null,"A spirited JavaScript Developer who believes in writing clean, scalable code."),i.a.createElement("p",null,"I have developed several UI, Game, and Widget applications in React, NodeJS. I have a firm grasp on the core of the language including ES6 features. I understand Asynchronous concepts, use developer tools to comfortably debug networks and manipulate the DOM."),i.a.createElement("p",null,"My interests outside of tech include reading, cooking, human connection, and everything outdoors!"))),i.a.createElement("div",{className:"right_top2"},i.a.createElement("div",{className:"card_text"})),i.a.createElement("div",{className:"arrow_box_pointdown_left abpdl-small"}),i.a.createElement("div",{className:"arrow_box_pointdown_right abpdr-small"})),i.a.createElement("div",{className:"right-side"},i.a.createElement("h3",{className:"experience-heading"},"Development Experience"),i.a.createElement("div",{className:"accordion-skills"},i.a.createElement("div",{className:"row-one rows"},i.a.createElement("p",{className:"react inds"},"ReactJS"),i.a.createElement("p",{className:"redux inds"},"Redux"),i.a.createElement("p",{className:"graphql inds"},"GraphQL"),i.a.createElement("p",{className:"gatsby inds"},"GatsbyJS")),i.a.createElement("div",{className:"row-two rows"},i.a.createElement("p",{className:"node inds"},"NodeJS"),i.a.createElement("p",{className:"express inds"},"Express.js"),i.a.createElement("p",{className:"sqlite inds"},"SQLite"),i.a.createElement("p",{className:"postgres inds"},"PostgreSQL")),i.a.createElement("div",{className:"row-three rows"},i.a.createElement("p",{className:"python inds"},"Python"),i.a.createElement("p",{className:"node inds"},"REST API"),i.a.createElement("p",{className:"graphql inds"},"Typescript"),i.a.createElement("p",{className:"sql"},"SQL")),i.a.createElement("div",{className:"row-four rows"},i.a.createElement("p",{className:"vsc inds"},"Kanban board"),i.a.createElement("p",{className:"vsc inds"},"Scrum Methods"),i.a.createElement("p",{className:"git inds"},"Git")),i.a.createElement("div",{className:"row-five rows"},i.a.createElement("p",{className:"vsc inds"},"VSCode"),i.a.createElement("p",{className:"figma inds"},"Figma"),i.a.createElement("p",{className:"jest inds"},"Jest"))))),i.a.createElement("div",{className:"skills-content"},i.a.createElement("div",{className:"arrow-container arrow-c1 ac-small"},i.a.createElement("div",{className:"left_top_div text_div_small"},i.a.createElement("div",{className:"text_container_small"},i.a.createElement("h3",null,"Education"),i.a.createElement("h5",null,"Full Stack Web-Development"),i.a.createElement("h5",{className:"no-space"},"Lambda School 19-20'"),i.a.createElement("h5",null,"B.S. Nutrition ","&"," Food Sciences"),i.a.createElement("h5",{className:"no-space"},"SDSU 10-15'"))),i.a.createElement("div",{className:"right_top_div text_div_small"},i.a.createElement("div",{className:"text_container_small"},i.a.createElement("h3",null,"Character"),i.a.createElement("h5",null,"Clear, professional verbal and written communication"),i.a.createElement("h5",null,"Patient and understanding"))),i.a.createElement("div",{className:"arrow_box_pointdown_left abpdl-small"}),i.a.createElement("div",{className:"arrow_box_pointdown_right abpdr-small"})),i.a.createElement("div",{className:"arrow-container arrow-c2 ac-small"},i.a.createElement("div",{className:"left_top_div oneltd text_div_small"},i.a.createElement("div",{className:"text_container_small text-c2"},i.a.createElement("h3",null,"Ethic"),i.a.createElement("h5",null,"Self-managed"),i.a.createElement("h5",null,"Delivers well-structured and scalable code."),i.a.createElement("h5",null,"Strives to understand a problem before devising and executing a plan"))),i.a.createElement("div",{className:"right_top_div onertd text_div_small"},i.a.createElement("div",{className:"text_container_small text-c2"},i.a.createElement("h3",null,"Interests"),i.a.createElement("h5",null,"Human connection, teamwork, life-long learning, everything outdoors! I am enamored with reading, cooking, and culture."," "))))))))},f=i.a.lazy((function(){return t.e(4).then(t.bind(null,291))})),g=i.a.lazy((function(){return Promise.all([t.e(2),t.e(5)]).then(t.bind(null,292))}));var b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("nav",{className:"nav-container"},i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"#home","data-nav-section":"home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects","data-nav-section":"projects"},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact","data-nav-section":"contact"},"Contact")),i.a.createElement("li",{className:"cv-res"},i.a.createElement("a",{href:d.a,target:"_blank",className:"cvres-btn"},"Resume")))),i.a.createElement("section",{className:"first-child",id:"home","data-section":"home"},i.a.createElement(h,null)),i.a.createElement(a.Suspense,{fallback:i.a.createElement("h1",{className:"suspense-load"}," Loading... ")},i.a.createElement("div",{className:"base-shell"},i.a.createElement("div",{className:"base-container"},i.a.createElement("div",{className:"base-text"},i.a.createElement("div",{className:"baseskill-text"},i.a.createElement("div",{className:"skills-title"},i.a.createElement("h4",{className:"accordion-headingsm"},"Development Experience")),i.a.createElement("div",{className:"accordion-skills-sm"},i.a.createElement("div",{className:"row-one rows"},i.a.createElement("p",{className:"react inds"},"ReactJS"),i.a.createElement("p",{className:"redux inds"},"Redux"),i.a.createElement("p",{className:"graphql inds"},"GraphQL Data Query")),i.a.createElement("div",{className:"row-two rows"},i.a.createElement("p",{className:"node inds"},"NodeJS"),i.a.createElement("p",{className:"express inds"},"Express.js"),i.a.createElement("p",{className:"sqlite inds"},"SQLite"),i.a.createElement("p",{className:"postgres inds"},"PostgreSQL")),i.a.createElement("div",{className:"row-three rows"},i.a.createElement("p",{className:"python inds"},"Python"),i.a.createElement("p",{className:"node inds"},"REST API"),i.a.createElement("p",{className:"graphql inds"},"Typescript"),i.a.createElement("p",{className:"sql"},"SQL")),i.a.createElement("div",{className:"row-four rows"},i.a.createElement("p",{className:"gatsby inds"},"GatsbyJS"),i.a.createElement("p",{className:"vsc inds"},"Scrum Methods"),i.a.createElement("p",{className:"git inds"},"Git")),i.a.createElement("div",{className:"row-five rows"},i.a.createElement("p",{className:"vsc inds"},"VSCode"),i.a.createElement("p",{className:"figma inds"},"Figma Design"),i.a.createElement("p",{className:"jest inds"},"Jest JavaScript Testing"))))))),i.a.createElement("div",{className:"fourth-child",id:"projects","data-section":"projects"},i.a.createElement(f,null)),i.a.createElement("div",{className:"base-shell2"},i.a.createElement("div",{className:"base-container2"},i.a.createElement("div",{className:"base-text"},i.a.createElement("div",{className:"skills-title"},i.a.createElement("h4",null)),i.a.createElement("div",{className:"baseskill-text"},i.a.createElement("a",{href:"https://wakatime.com"},i.a.createElement("img",{className:"waka-chart",src:"https://wakatime.com/share/@bprouty0821/7ba80296-8165-438a-8e74-303db6c2e97b.png",alt:"waka"})))))),i.a.createElement("div",{className:"fifth-child",id:"contact","data-section":"contact"},i.a.createElement(g,null)))))};var u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null))};t(28);r.a.render(i.a.createElement(u,null),document.getElementById("root"))}],[[17,1,3]]]);
//# sourceMappingURL=main.a19a576e.chunk.js.map