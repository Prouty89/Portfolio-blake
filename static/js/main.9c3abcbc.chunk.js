(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"c",(function(){return h})),t.d(e,"d",(function(){return u})),t.d(e,"b",(function(){return b}));var a=t(5),i=t(6),r=t(16),l=t.n(r),o=t(17),s=t.n(o),d=t(18),c=t.n(d);function m(){var n=Object(a.a)(['\n  font-family: "Raleway", sans-serif;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-size: 1.5rem;\n  justify-content: center;\n  align-items: center;\n\n  .form-heading {\n    font-weight: bold;\n    font-size: 1.2rem;\n    color: black;\n    text-align: center;\n  }\n  \n\n  .footer{\n    position: absolute;\n    bottom: 40px;\n    font-size: 1.2rem;\n    text-align: center;\n    z-index: 0;\n  }\n\n  .form {\n    height: 60%;\n    justify-content: center;\n    display: flex;\n    background: #ffffff;\n    width: 750px;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 8px;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;\n\n    @media (max-width: 1100px) {\n      height: 300px;\n      justify-content: center;\n      display: flex;\n      width: 355px;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .field {\n      margin-top: 4%;\n      box-shadow: rgba(0, 0, 0, 0.35) 0 0 4px;\n    }\n\n    .submit-btn {\n      font-family: "Work Sans", sans-serif;\n      background: #f8f8f1;\n      border: none;\n      color: #777777;\n      font-weight: normal;\n      box-shadow: 2px 2px 4px #9a9a9a;\n      font-family: "Work Sans", sans-serif;\n      height: 40px;\n      font-size: 1.5rem;\n      border-radius: 2px;\n      margin-top: 6%;\n      width: 96px;\n      text-align: center;\n      display: flex;\n      align-self: center;\n      transition: width 0.6s;\n      cursor: pointer;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 1100px){\n        height: 30px;\n        width: 76px;\n        font-size: 1.2rem;\n      }\n\n      &:hover {\n        width: 110px;\n        background: #76836a;\n        color: white;\n      }\n\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    input {\n      font-family: "Work Sans", sans-serif;\n      width: 550px;\n      font-size: 1.2rem;\n      background: #f8f8f1;\n      height: 40px;\n      border: none;\n      border-radius: 4px;\n\n      @media (max-width: 1100px) {\n        height: 30px;\n        justify-content: center;\n        display: flex;\n        width: 330px;\n        font-size: 15px;\n        flex-direction: column;\n        align-items: center;\n      }\n      input:focus {\n        outline: none;\n        border: none;\n        border-radius: 2px;\n        box-shadow: 0 0 1px black;\n      }\n      ::placeholder {\n        padding-left: 10px;\n      }\n      ::value {\n        color: red;\n      }\n    }\n  }\n']);return m=function(){return n},n}function p(){var n=Object(a.a)(['\n  height: 875px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  \n\n  @media (max-width: 750px) {\n    height: 100%;\n    display: flex;\n    min-height: 100 vh;\n    padding-top: 75px;\n    justify-content: flex-start;\n  }\n\n  .skills-title{\n      width: 100%;\n      margin-bottom: 1%;\n      font-size: 1.2rem;\n      margin-top: 1%;\n      align-self: center;\n      text-align: center;\n      text-decoration: underline;\n      font-weight: bold;\n\n      @media(max-width: 1150px){\n        text-align: center;\n        display: none;\n        width: 100%;\n    }\n  }\n\n  .location{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n  }\n\n  .relocation{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n  }\n\n  .skills-head {\n    font-size: 1.55em;\n    text-align: left;\n    text-transform: capitalize;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    grid-column-gap: 100px;\n    grid-row-gap: 100px;\n\n    @media(max-width: 800px){\n      font-size: 1em;\n      display: flex;\n      text-align: center;\n      flex-direction: column;\n    }\n    @media(max-width: 500px){\n      font-size: .7em;\n    }\n\n    h1{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n\n      @media(max-width: 800px){\n        margin-bottom: 25px;\n      }\n    }\n  }\n\n  \n\n  .accordion-skills{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 1fr;\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n\n    @media(max-width: 1150px){\n      display: none;\n    }\n  }\n\n  \n  .skill-container {\n    font-family: "Raleway", sans-serif;\n    height: 850px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 1761px){\n      height: 80%;\n    }\n\n\n    .availibility{\n      display: flex;\n      flex-wrap: wrap;\n      width: 100%;\n      justify-content: space-around;\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n\n    .good-par{\n      display: flex;\n      flex-direction: column;\n\n      @media(max-width: 1150px){\n        align-items: center;\n        width: 100%;\n      }\n\n      .par-title{\n        width: 100%;\n        margin-bottom: 2%;\n        font-size: 1.2rem;\n        margin-top: 1%;\n        \n        text-align: left;\n        text-decoration: underline;\n        font-weight: bold;\n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 100%;\n        }\n      }\n\n      .small{\n        margin-bottom: 1%;\n        width: 225px;\n        align-self: center;\n        text-align: center;\n        \n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n    }\n      .education{\n        margin-bottom: 1%;\n        width: 255px;\n        align-self: left;\n        text-align: left;\n       \n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n\n      .par-text{\n        margin-bottom: 1%;\n        width: 255px;\n      \n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n    }\n\n    .character{\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-template-rows: 1fr;\n      grid-column-gap: 15px;\n      grid-row-gap: 0px;\n\n      @media(max-width: 800px){\n        display: flex;\n        flex-direction: column;\n      }\n    }\n\n    .additional-info{\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-template-rows: 1fr;\n      grid-column-gap: 15px;\n      grid-row-gap: 5px;\n\n      @media(max-width: 800px){\n        display: flex;\n        flex-direction: column;\n      }\n    }\n\n    .character-skills{\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n    \n    \n    .skills-text{\n      background: #f8f8f1;\n      color: black;\n      padding: 2%;\n      text-align: left;\n      font-size: 1.1rem;\n      text-rendering: optimizeLegibility;\n      width: 90%;\n      display: flex;\n      \n      border-radius: 8px;\n      box-shadow: rgba(0,0,0,0.15) 0 0 6px;\n\n      @media(max-width: 500px){\n        width: 90%;\n        flex-direction: column;\n      }\n  \n      p{\n          text-align: left;\n          margin-block-start: .2em;\n          margin-block-end: .2em;\n      }\n    }\n  }\n']);return p=function(){return n},n}function f(){var n=Object(a.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\n  font-family: \"Raleway\", sans-serif;\n  display: grid;\n  width: 100%;\n  align-self: center;\n  margin-top: 25px;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 5px;\n  grid-row-gap: 0px;\n\n  @media(max-width: 1150px){\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n\n  .dead-btn {\n    transform: rotate(290deg);\n    position: absolute;\n    left: 81%;\n    top: 6%;\n    height: 0px;\n    outline: none;\n    font-size: 1rem;\n    color: black;\n    width: 50px;\n    font-size: 2rem;\n    background: #ffffff;\n    border: none;\n    cursor: pointer;\n  }\n\n  ul{\n    list-style: none;\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n  }\n\n  .a-link {\n    visibility: hidden;\n  }\n\n  .flippy-container {\n    border-radius: 8px;\n  }\n\n  .design-desc{\n    text-align: center;\n  }\n\n  .framework-desc{\n    text-align: center;\n  }\n\n  p{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    \n    padding: 2%;\n  }\n\n  .card{\n    margin: 0 auto;\n  }\n\n  .card-six{\n    visibility: hidden;\n  }\n\n\n  .card-links {\n    position: absolute;\n    bottom: 3%;\n    display: flex;\n    \n    border-top: 2px solid #777777;\n    justify-content: space-between;\n    width: 90%;\n\n    .link {\n      text-decoration: none;\n      padding: 2%;\n      color: #777777;\n    }\n  }\n\n  h3 {\n    text-align: center;\n  }\n\n  h4 {\n    text-align: center;\n  }\n\n  .card-four {\n    @media (max-width: 1050px) {\n      display: none;\n    }\n  }\n\n  .card-five {\n    @media (max-width: 1450px) {\n      display: none;\n    }\n  }\n\n  .card-six {\n    @media (max-width: 1450px) {\n      display: none;\n    }\n  }\n"]);return f=function(){return n},n}function x(){var n=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\nscroll-behavior: smooth;\ncolor: black;\n\n.first-child{\n  .blake-photo{\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    margin: 0 auto;\n    display: flex;\n    align-self: center;\n   \n\n    @media(max-width: 800px){\n      width: 130px;\n      height: 130px; \n    }\n  }\n  \n  height: 700px;\n\n  @media(max-width:750px){\n      height: 475px;\n  }\n\n.home-container{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 1fr;\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n\n  @media(max-width: 800px){\n    display: flex;\n    flex-direction: column-reverse;\n  }\n}\n\n  .trails-main{\n    margin-bottom: 100px;\n    display: flex;\n    flex-direction: column;\n    height: 700px;\n    background: rgba(55, 55, 55, .6);\n    width: 100%;\n    align-items: center;\n    display: flex;\n    justify-content: center;\n\n    @media(max-width: 800px){\n      height: 290px;\n      justify-content: end;\n      margin-bottom: 0px;\n    }\n}\n\n.trails-text{\n    color: #ffffff;\n    font-weight: 600;\n    text-align: left;\n    align-items: center;\n    font-family: \"Raleway\", sans-serif;\n    font-size: 2rem;\n    justify-content: center;\n    width: 100%;\n    height: 80px;\n    \n\n    @media(max-width:1700px){\n        margin-left: 0;\n        margin-left: 0;\n        \n        font-size: 1.5rem;\n        width: 100%;\n        height: 70px;\n         \n    }\n\n    @media(max-width:1050px){\n        margin-left: 0;\n        margin-left: 0;\n        font-size: 1rem;\n        width: 100%;\n        height: 60px;\n       \n    }\n\n    @media(max-width:800px){\n        margin-left: 0%;\n        font-size: 1rem;\n        text-align: center;\n    }\n  }\n}\n\n  .social-tray {\n  \n    display: flex;\n    background: rgba(55, 55, 55, .6);\n    color: white;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n\n    @media(max-width: 800px){\n      width: 100%;\n      height: 55px;\n    }\n\n    \n\n    .social-icons {\n      display: flex;\n      flex-direction: column;\n      height: 50%;\n      justify-content: space-around;\n\n      @media(max-width: 800px){\n        flex-direction: row;\n        height: 40%;\n        width: 100%;\n      }\n\n      .svg {\n        cursor: pointer;\n      }\n    }\n  }\n  .bg-img {\n    width: 100%;\n    height: 750px;\n    overflow-x: hidden;\n    position: fixed;\n    z-index: -1;\n\n    @media(max-width: 800px){\n      width: 800px;\n    }\n  }\n}\n\n.third-child{\n    position: relative;\n    background-image: url(",');\n    @media(max-width: 1150px){\n      height: 1000px;\n    }\n\n  \n\n    .skill-title{\n        padding-top: 35px;\n        padding-bottom: 10px;\n        font-size: 30px;\n        font-weight: bold;\n        margin-top: 1%;\n        margin-bottom: 1%;\n    }\n}\n\n.base-container{\n  height: 80px;\n    background: #f8f8f1;\n    text-align: center;\n    padding: 2%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top: 2px solid #373737;\n    border-bottom: 2px solid #373737;\n\n    @media(max-width: 750px){\n      height: 150px;\n    }\n\n    .base-text{\n      display: flex;\n      justify-content: center;\n    }\n\n    .baseskill-text{\n      width: 75%;\n      font-size: 1.3rem;\n      font-family: "Raleway", sans-serif;\n\n      @media(max-width: 1000px){\n        font-size: 1rem;\n        width: 100%;\n       \n      }\n    }\n}\n\n.fourth-child{\n    background-image: url(',");\n    background-size: cover;\n    height: 935px;\n    display: flex;\n    align-items: center;\n\n    @media(max-width: 735px){\n        height: 170vh;\n    }\n\n    @media(max-width: 535px){\n      height: 200vh;\n  }\n}\n\n.fifth-child{\n    background-image: url(",');\n    background-size: cover;\n    height: 100vh;\n    position: relative;\n\n    @media(max-width: 1100px){\n      min-height: 500px;\n    }\n}\n\n.nav-list{\n        display: flex;\n        font-size: 1.2rem;\n        width: 100%;\n        height: 60px;\n        z-index: 1;\n        align-items: center;\n        background: black;\n        outline: 2px solid white;\n        font-family: "Raleway", sans-serif;\n        justify-content: space-evenly;\n        margin: 0;\n        padding: 0; \n        position: sticky;\n        top: 0;\n       \n        @media(max-width: 1150px){\n          font-size: .8rem;\n          height: 60px;\n        }\n        \n        li{\n            list-style: none;\n        }\n    }\n        a{\n            text-decoration: none;\n            font-weight: bold;\n            color: white;\n            cursor: pointer;\n        }\n}\n']);return x=function(){return n},n}var g=i.a.div(x(),l.a,c.a,s.a),h=i.a.div(f()),u=i.a.div(p()),b=i.a.div(m())},,,function(n,e,t){n.exports=t.p+"static/media/Ocean.1c382cff.jpg"},function(n,e,t){n.exports=t.p+"static/media/Fruit1.f5b5fdaf.jpg"},function(n,e,t){n.exports=t.p+"static/media/second1.9e0e8f65.jpg"},,,function(n,e,t){n.exports=t.p+"static/media/resume.3810b387.pdf"},,function(n,e,t){n.exports=t.p+"static/media/Palm.0deeb85d.jpg"},function(n,e,t){n.exports=t.p+"static/media/Github.abff2237.svg"},function(n,e,t){n.exports=t.p+"static/media/Tweet.b1d45490.svg"},function(n,e,t){n.exports=t.p+"static/media/IG.7d68cb2a.svg"},function(n,e,t){n.exports=t.p+"static/media/Linkd.1e8f39e6.svg"},function(n,e,t){n.exports=t.p+"static/media/BlakeP.0632bb05.jpg"},,,,,,,function(n,e,t){n.exports=t(49)},,,,,,,,,,,,,function(n,e,t){},function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(15),l=t.n(r),o=t(13),s=t(21),d=t.n(s),c=t(3),m=t(22),p=t(31),f=t(30),x=t(8),g=t(23),h=t.n(g),u=t(24),b=t.n(u),w=t(25),y=t.n(w),v=t(26),k=t.n(v),E=t(27),j=t.n(E),z=t(7),N=t.n(z),O=t(28),S=t.n(O),I=t(9),R=["Hello! I'm Blake, a full stack developer","working primarily in Javascript and Python","Take a look at my work and lets connect!"],J={mass:140,tension:2e3,friction:800};var P=function(){var n=Object(a.useState)(!0),e=Object(f.a)(n,2),t=e[0],r=e[1],l=Object(x.b)(R.length,{config:J,opacity:t?.9:.3,y:t?0:30,height:t?30:0,from:{opacity:0,x:80,height:600},delay:1300});return i.a.createElement("div",{className:"home-wrap"},i.a.createElement(I.b,{className:"bg-img",src:h.a,alt:"headimg"},(function(n){var e=n.imageProps,t=n.imageState,a=n.ref;return i.a.createElement("img",Object.assign({},e,{ref:a,src:t===I.a.LoadSuccess?e.src:" ",style:{opacity:I.a.LoadSuccess?"1":"0.8"}}))})),i.a.createElement("div",{className:"home-container"},i.a.createElement("div",{className:"social-tray"},i.a.createElement("div",{className:"social-icons"},i.a.createElement(N.a,{rel:"noopener",className:"svg",src:k.a}),i.a.createElement(N.a,{rel:"noopener",className:"svg",src:b.a}),i.a.createElement(N.a,{rel:"noopener",className:"svg",src:y.a}),i.a.createElement(N.a,{rel:"noopener",className:"svg",src:j.a}))),i.a.createElement("div",{className:"trails-main",onFocus:function(){return r((function(n){return!n}))}},l.map((function(n,e){var t,a=n.x,r=n.height,l=Object(p.a)(n,["x","height"]);return i.a.createElement(x.a.div,(t={className:"font",key:R[e]},Object(c.a)(t,"className","trails-text"),Object(c.a)(t,"style",Object(m.a)({},l,{transform:a.interpolate((function(n){return"translate3d(0,".concat(n,"px,0)")}))})),t),i.a.createElement(x.a.div,{style:{height:r}},R[e]))}))),i.a.createElement("img",{className:"blake-photo",src:S.a,alt:"profpho"})))},L=i.a.lazy((function(){return t.e(6).then(t.bind(null,307))})),F=i.a.lazy((function(){return t.e(4).then(t.bind(null,308))})),W=i.a.lazy((function(){return Promise.all([t.e(2),t.e(5)]).then(t.bind(null,309))}));var A=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,i.a.createElement("section",{className:"first-child",id:"home","data-section":"home"},i.a.createElement(P,null)),i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"#home","data-nav-section":"home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#skills","data-nav-section":"skills"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects","data-nav-section":"projects"},"My Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact","data-nav-section":"contact"},"Contact Me")),i.a.createElement("li",{className:"cv-res"},i.a.createElement("a",{href:d.a,target:"_blank",className:"cvres-btn"},"Resume"))),i.a.createElement(a.Suspense,{fallback:i.a.createElement("h1",null," Loading... ")},i.a.createElement("div",{className:"third-child",id:"skills","data-section":"skills"},i.a.createElement(L,null)),i.a.createElement("div",{className:"base-container"},i.a.createElement("div",{className:"base-text"},i.a.createElement("div",{className:"baseskill-text"},"I have a firm grasp on the core of Javascript, including ES6 features. I Utilize developer tools to comfortably manipulate the DOM, and the network panel to debug requests. I've built several UIs, widgets, and game applications using the ReactJS framework. For backend applications I use NodeJS to develop server-side and networking applications."))),i.a.createElement("div",{className:"fourth-child",id:"projects","data-section":"projects"},i.a.createElement(F,null)),i.a.createElement("div",{className:"base-container"},i.a.createElement("div",{className:"base-text"},i.a.createElement("div",{className:"baseskill-text"},"I am always interested in introducing new skills into my arsenal. At present I am dedicated to furthering my understanding in JavaScript, Computer Science, and Python but am interested in learning C# and Kotlin in the near future."))),i.a.createElement("div",{className:"fifth-child",id:"contact","data-section":"contact"},i.a.createElement(W,null)))))};var B=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(A,null))};t(48);l.a.render(i.a.createElement(B,null),document.getElementById("root"))}],[[35,1,3]]]);
//# sourceMappingURL=main.9c3abcbc.chunk.js.map