(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[0],{10:function(n,e,t){"use strict";t.d(e,"e",(function(){return u})),t.d(e,"c",(function(){return g})),t.d(e,"a",(function(){return b})),t.d(e,"d",(function(){return w})),t.d(e,"f",(function(){return y})),t.d(e,"b",(function(){return k}));var a=t(5),i=t(6),o=t(22),r=t.n(o);function l(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-size: 1.5rem;\n  justify-content: center;\n  align-items: center;\n\n  .form-heading {\n    font-weight: bold;\n    font-size: 1.2rem;\n    color: black;\n    text-align: center;\n  }\n  .trees {\n    padding: 15px;\n    animation: 5s ",' ease-in-out infinite;\n    align-self: flex-end;\n\n    @media (max-width: 1100px) {\n      display: none;\n    }\n  }\n\n  .footer{\n    position: absolute;\n    bottom: 40px;\n    color: #777777;\n    font-size: 1.2rem;\n    text-align: center;\n    z-index: 0;\n  }\n\n  .form {\n    height: 60%;\n    justify-content: center;\n    display: flex;\n    background: #ffffff;\n    width: 750px;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 8px;\n    z-index: 1;\n    box-shadow: rgba(0, 0, 0, 0.15) 0 0 6px;\n\n    @media (max-width: 1100px) {\n      height: 300px;\n      justify-content: center;\n      display: flex;\n      width: 355px;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .field {\n      margin-top: 4%;\n      box-shadow: rgba(0, 0, 0, 0.35) 0 0 4px;\n    }\n\n    .submit-btn {\n      font-family: "Work Sans", sans-serif;\n      background: #f8f8f1;\n      border: none;\n      color: #777777;\n      font-weight: normal;\n      box-shadow: 2px 2px 4px #9a9a9a;\n      font-family: "Work Sans", sans-serif;\n      height: 40px;\n      font-size: 1.5rem;\n      border-radius: 2px;\n      margin-top: 6%;\n      width: 96px;\n      text-align: center;\n      display: flex;\n      align-self: center;\n      transition: width 0.6s;\n      cursor: pointer;\n      justify-content: center;\n      align-items: center;\n\n      @media (max-width: 1100px){\n        height: 30px;\n        width: 76px;\n        font-size: 1.2rem;\n      }\n\n      &:hover {\n        width: 110px;\n        background: #76836a;\n        color: white;\n      }\n\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    input {\n      font-family: "Work Sans", sans-serif;\n      width: 550px;\n      font-size: 1.2rem;\n      background: #f8f8f1;\n      height: 40px;\n      border: none;\n      border-radius: 4px;\n\n      @media (max-width: 1100px) {\n        height: 30px;\n        justify-content: center;\n        display: flex;\n        width: 330px;\n        font-size: 15px;\n        flex-direction: column;\n        align-items: center;\n      }\n      input:focus {\n        outline: none;\n        border: none;\n        border-radius: 2px;\n        box-shadow: 0 0 1px black;\n      }\n      ::placeholder {\n        padding-left: 10px;\n      }\n      ::value {\n        color: red;\n      }\n    }\n  }\n']);return l=function(){return n},n}function c(){var n=Object(a.a)(["\n0% {\n    transform: rotate(-2deg);\n  }\n  50% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(-2deg);\n  }\n"]);return c=function(){return n},n}function s(){var n=Object(a.a)(["\n  height: 978px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media (max-width: 1350px) {\n    height: 100%;\n    display: flex;\n    min-height: 100 vh;\n    justify-content: center;\n  }\n\n  .skills-title{\n      width: 100%;\n      margin-bottom: 1%;\n      font-size: 1.2rem;\n      margin-top: 1%;\n      align-self: center;\n      text-align: center;\n      text-decoration: underline;\n      font-weight: bold;\n\n      @media(max-width: 1150px){\n        text-align: center;\n        display: none;\n        width: 100%;\n    }\n  }\n\n  .location{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n  }\n\n  .relocation{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n  }\n\n  .skills-head {\n    text-align: center;\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    font-size: 2rem;\n    padding: 1%;\n\n    @media(max-width: 1150px){\n      font-size: 1.3rem;\n    }\n  }\n\n  \n\n  .accordion-skills{\n    display: flex;\n    color: #777777;\n    justify-content: space-between;\n    width: 80%;\n    align-self: center;\n\n    @media(max-width: 1150px){\n      display: none;\n    }\n  }\n\n  \n  .skill-container {\n    height: 810px;\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @media(max-width: 1761px){\n      height: 80%;\n    }\n\n\n    .availibility{\n      display: flex;\n      flex-wrap: wrap;\n      color: #777777;\n      width: 100%;\n      justify-content: space-around;\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n\n    .good-par{\n      display: flex;\n      flex-direction: column;\n\n      @media(max-width: 1150px){\n        align-items: center;\n        width: 100%;\n      }\n\n      .par-title{\n        width: 100%;\n        margin-bottom: 2%;\n        font-size: 1.2rem;\n        margin-top: 1%;\n        align-self: center;\n        text-align: center;\n        text-decoration: underline;\n        font-weight: bold;\n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 100%;\n        }\n      }\n\n      .small{\n        margin-bottom: 1%;\n        width: 375px;\n        align-self: center;\n        text-align: center;\n        \n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n    }\n      .education{\n        margin-bottom: 1%;\n        width: 375px;\n        align-self: center;\n        color: #777777;\n        text-align: left;\n        text-align-last: auto;\n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n\n      .par-text{\n        margin-bottom: 1%;\n        width: 375px;\n        align-self: center;\n        text-align: justify;\n        color: #777777;\n        text-align-last: auto;\n\n        @media(max-width: 1150px){\n          text-align: center;\n          width: 90%;\n        }\n      }\n    }\n\n    .character{\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 2%;\n      flex-wrap: wrap;\n    }\n\n    .character-skills{\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    }\n    \n    \n    .skills-text{\n      background: #ffffff;\n      color: black;\n      padding: 2%;\n      text-align: left;\n      font-size: 1.1rem;\n      text-rendering: optimizeLegibility;\n      width: 95%;\n      display: flex;\n      flex-direction: column;\n      border-radius: 8px;\n      box-shadow: rgba(0,0,0,0.15) 0 0 6px;\n  \n      p{\n          text-align: left;\n          margin-block-start: .2em;\n          margin-block-end: .2em;\n      }\n    }\n  }\n  .base-container {\n    width: 80%;\n    border-top: 1px solid #373737;\n    border-bottom: 1px solid #373737;\n    align-self: center;\n      @media (max-width: 1150px) {\n        display: inherit;\n        height: auto;\n        width: 100%;\n        justify-content: center;\n      }\n\n    .base-text {\n      background: #ffffff;\n      color: #777777;\n      text-align: justify;\n      text-align-last: center;\n      font-size: 1.3rem;\n      color: black;\n      margin-top: 1%;\n      margin-bottom: 1%;\n      text-rendering: optimizeLegibility;\n  \n      @media (max-width: 1150px) {\n        font-size: 1.1rem;\n        width: 90%;\n        \n\n      }\n    }\n  }\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  width: 100%;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 1500px) {\n    align-items: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  @media(max-width: 1100px){\n    flex-direction: column;\n    flex-wrap: nowrap;\n    min-height: 1200px;\n    justify-content: center;\n  }\n\n  .dead-btn {\n    transform: rotate(290deg);\n    position: absolute;\n    left: 81%;\n    top: 6%;\n    height: 0px;\n    outline: none;\n    font-size: 1rem;\n    color: black;\n    width: 50px;\n    font-size: 2rem;\n    background: #ffffff;\n    border: none;\n    cursor: pointer;\n  }\n\n  ul{\n    list-style: none;\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    padding-inline-start: 0px;\n  }\n\n  .a-link {\n    visibility: hidden;\n  }\n\n  .flippy-container {\n    border-radius: 8px;\n  }\n\n  .design-desc{\n    text-align: center;\n  }\n\n  .framework-desc{\n    text-align: center;\n  }\n\n  p{\n    margin-block-start: 0px;\n    margin-block-end: 0px;\n    color: #777777;\n    padding: 2%;\n  }\n\n  .card-six{\n    visibility: hidden;\n  }\n\n\n  .card-links {\n    position: absolute;\n    bottom: 3%;\n    display: flex;\n    border-top: 2px solid #777777;\n    justify-content: space-between;\n    width: 90%;\n\n    .link {\n      text-decoration: none;\n      color: #777777;\n      padding: 2%;\n    }\n  }\n\n  h3 {\n    text-align: center;\n  }\n\n  h4 {\n    text-align: center;\n  }\n\n  .card-four {\n    @media (max-width: 1050px) {\n      display: none;\n    }\n  }\n\n  .card-five {\n    @media (max-width: 1450px) {\n      display: none;\n    }\n  }\n\n  .card-six {\n    @media (max-width: 1450px) {\n      display: none;\n    }\n  }\n"]);return d=function(){return n},n}function m(){var n=Object(a.a)(["\nfont-family: 'Work Sans', sans-serif;\ncolor: black;\n\n.first-child{\n  .bg-img {\n    width: 1980px;\n    height: 1000px;\n    overflow-x: hidden;\n    position: fixed;\n    z-index: -1;\n  }\n}\n\n.third-child{\n    background: #F8F8F1;\n \n    position: relative;\n\n\n\n    @media(max-width: 1150px){\n      height: 1350px;\n    }\n\n    .base-skills{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        @media(max-width: 1350px){\n            display:none;\n        }\n    }\n\n    .skill-title{\n        padding-top: 35px;\n        padding-bottom: 10px;\n        font-size: 30px;\n        font-weight: bold;\n        margin-top: 1%;\n        margin-bottom: 1%;\n    }\n}\n.fourth-child{\n    background: rgba(0, 0, 0, 0.5);\n    height: 100vh;\n\n    @media(max-width: 1150px){\n        height: 200vh;\n    }\n}\n\n.fifth-child{\n    background: #F8F8F1;\n    height: 100vh;\n    position: relative;\n\n    @media(max-width: 1100px){\n      min-height: 500px;\n    }\n}\n\n.nav-list{\n    display: none;\n    \n    @media(max-width: 750px){\n        display: flex;\n        font-size: 15px;\n        width: 100%;\n        height: 40px;\n        z-index: 1;\n        align-items: center;\n        justify-content: space-evenly;\n        background: #373737;\n        margin: 0;\n        padding: 0;\n        position: sticky;\n        top: 0;\n        \n        li{\n            list-style: none;\n        }\n    }\n\n    a{\n        text-decoration: none;\n        font-weight: bold;\n        color: white;\n        cursor: pointer;\n    }\n}\n"]);return m=function(){return n},n}function p(){var n=Object(a.a)(['\n  @import url("https://fonts.googleapis.com/css?family=Work+Sans&display=swap");\n  font-family: "Work Sans", sans-serif;\n\n  @media (max-width: 750px) {\n    display: none;\n  }\n\n  .name-title {\n    font-family: "Work Sans", sans-serif;\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .social-tray {\n    font-size: 22px;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 25px;\n\n    @media (max-height: 750px) {\n      position: relative;\n    }\n\n    .social-icons {\n      display: flex;\n      width: 70%;\n      justify-content: space-around;\n\n      .svg {\n        cursor: pointer;\n      }\n    }\n  }\n\n  .sidebar-list {\n    font-size: 22px;\n    margin-top: 25px;\n    padding-inline-start: 0px;\n    height: 200px;\n    list-style-type: disc;\n    list-style: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    a {\n      text-decoration: none;\n      color: white;\n      transition:  border-bottom 0.3s ease;\n\n      &:hover {\n        \n        border-bottom: 2px solid #4b67ff;\n        border-bottom-style: inset;\n      }\n    }\n  }\n']);return p=function(){return n},n}function f(){var n=Object(a.a)(["\nanimation: 2s ",";\nfont-family: 'Work Sans', sans-serif;\n\n.image{\n    background-image: url(",");\n    height: 200px;\n    width: 50%;\n    padding: 5%;\n    display: flex;\n    margin: 0 auto;\n    margin-top: 150px;\n    margin-bottom: 10px;\n    justify-content: center;\n    align-items: center;\n    background-position: top;\n    background-size: cover;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px;\n}\n\n.overlay-container{\n    display: none;\n}\n\n.content-container{\n    position: absolute;\n    width: calc(100% - 300px);\n    scroll-behavior: smooth;\n    left: initial !important;\n    overflow-x: hidden;\n\n    @media(max-width:750px){\n        width: 100%;\n    }\n\n    @media(max-height:750px){\n        overflow-y: hidden;\n    }\n    \n    .home-container{\n        \n        height: 100vh;\n        position: relative;\n\n        @media(max-width:750px){\n            width: 100%;\n            height: 100vh;\n        }\n\n        .img-title{\n            color:white;\n            position: absolute;\n            bottom: 0;\n            left: 25px;\n        }\n        \n\n        .trails-main{\n            display: flex;\n            flex-direction: column;\n            height: 80%;\n            width: 100%;\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            @media(max-width:750px){\n                \n            }\n        }\n\n        .trails-text{\n            color: #ffffff\n            display: flex;\n            align-items: center;\n            font-family: 'Work Sans', sans-serif;\n            font-size: 1.5rem;\n            justify-content: center;\n            width: 40%;\n            height: 80px;\n            \n            display: flex;\n            background: rgba(0, 0, 0, .5);\n            -moz-box-shadow: 3px 3px 5px black;\n            -webkit-box-shadow:3px 3px 5px black;\n            box-shadow:3px 3px 5px black;\n\n            @media(max-width:1700px){\n                margin-left: 0;\n                margin-left: 0;\n                \n                font-size: 1.5rem;\n                width: 70%;\n                height: 50px;\n                 \n            }\n\n            @media(max-width:1050px){\n                margin-left: 0;\n                margin-left: 0;\n                font-size: 1rem;\n                width: 90%;\n                height: 50px;\n               \n            }\n\n            @media(max-width:750px){\n                margin-left: 0%;\n                font-size: 1rem;\n            }\n        }\n    }\n\n\n\n    \n}\n\n.sidebar-container{\n    font-family: 'Work Sans', sans-serif;\n    color: white;\n    background: #373737;\n    width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.65) 2px 2px 6px !important;\n    \n \n    @media(max-width:750px){\n        display: none;\n    }\n}\n"]);return f=function(){return n},n}function x(){var n=Object(a.a)(["\nfrom { opacity: .4; }\nto   { opacity: 1; }\n"]);return x=function(){return n},n}var h=Object(i.b)(x()),u=i.a.div(f(),h,r.a),g=i.a.div(p()),b=i.a.div(m()),w=i.a.div(d()),y=i.a.div(s()),v=Object(i.b)(c()),k=i.a.div(l(),v)},16:function(n,e,t){n.exports=t.p+"static/media/resume.3810b387.pdf"},22:function(n,e,t){n.exports=t.p+"static/media/Blake.ba0fcf34.jpg"},25:function(n,e,t){n.exports=t.p+"static/media/Github.abff2237.svg"},26:function(n,e,t){n.exports=t.p+"static/media/Tweet.b1d45490.svg"},27:function(n,e,t){n.exports=t.p+"static/media/IG.7d68cb2a.svg"},28:function(n,e,t){n.exports=t.p+"static/media/Linkd.1e8f39e6.svg"},30:function(n,e,t){n.exports=t.p+"static/media/Mountains.8d2fbded.jpg"},37:function(n,e,t){n.exports=t(50)},50:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),o=t(19),r=t.n(o),l=t(20),c=t(10),s=t(25),d=t.n(s),m=t(26),p=t.n(m),f=t(27),x=t.n(f),h=t(28),u=t.n(h),g=t(9),b=t.n(g),w=t(16),y=t.n(w),v=t(4),k=t(29),E=t(33),j=t(32),z=t(11),N=t(30),O=t.n(N),S=t(12),W=["Hello! I'm Blake, a full stack developer","specializing in Javascript and Python","Take a look at my work and lets connect!"],F={mass:30,tension:1500,friction:300};var C=function(){var n=Object(a.useState)(!0),e=Object(j.a)(n,2),t=e[0],o=e[1],r=Object(z.b)(W.length,{config:F,opacity:t?1:0,y:t?0:90,height:t?30:0,from:{opacity:0,x:80,height:600},delay:1700});return i.a.createElement("div",{className:"home-container"},i.a.createElement(S.b,{className:"bg-img",src:O.a},(function(n){var e=n.imageProps,t=n.imageState,a=n.ref;return i.a.createElement("img",Object.assign({},e,{ref:a,src:t===S.a.LoadSuccess?e.src:" ",style:{opacity:S.a.LoadSuccess?"1":"0.8"}}))})),i.a.createElement("div",{className:"trails-main",onFocus:function(){return o((function(n){return!n}))}},r.map((function(n,e){var t,a=n.x,o=n.height,r=Object(E.a)(n,["x","height"]);return i.a.createElement(z.a.div,(t={className:"font",key:W[e]},Object(v.a)(t,"className","trails-text"),Object(v.a)(t,"style",Object(k.a)({},r,{transform:a.interpolate((function(n){return"translate3d(0,".concat(n,"px,0)")}))})),t),i.a.createElement(z.a.div,{style:{height:o}},W[e]))}))))},L=i.a.lazy((function(){return t.e(5).then(t.bind(null,312))})),M=i.a.lazy((function(){return t.e(4).then(t.bind(null,313))})),B=i.a.lazy((function(){return Promise.all([t.e(2),t.e(6)]).then(t.bind(null,314))}));var P=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.e,null,i.a.createElement(l.a,{className:"main-container",sidebar:i.a.createElement("b",null,i.a.createElement(c.c,null,i.a.createElement("div",{className:"image"}),i.a.createElement("div",{className:"name-title"},"Blake Prouty"),i.a.createElement("ul",{className:"sidebar-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"#home","data-nav-section":"home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#skills","data-nav-section":"skills"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects","data-nav-section":"projects"},"My Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact","data-nav-section":"contact"},"Contact Me")),i.a.createElement("li",{className:"cv-res"},i.a.createElement("a",{href:y.a,target:"_blank",className:"cvres-btn"},"Resume"))),i.a.createElement("div",{className:"social-tray"},i.a.createElement("h3",null,"Get in touch"),i.a.createElement("div",{className:"social-icons"},i.a.createElement(b.a,{rel:"noopener",className:"svg",src:x.a}),i.a.createElement(b.a,{rel:"noopener",className:"svg",src:d.a}),i.a.createElement(b.a,{rel:"noopener",className:"svg",src:p.a}),i.a.createElement(b.a,{rel:"noopener",className:"svg",src:u.a}))))),styles:{root:{overflow:"hidden"}},open:!0,docked:!1,onSetOpen:!1,pullRight:!1,contentClassName:"content-container",sidebarClassName:"sidebar-container",rootClassName:"root-container",overlayClassName:"overlay-container",children:i.a.createElement(c.a,null,i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"#home","data-nav-section":"home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#skills","data-nav-section":"skills"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#projects","data-nav-section":"projects"},"My Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact","data-nav-section":"contact"},"Contact Me")),i.a.createElement("li",{className:"cv-res"},i.a.createElement("a",{href:y.a,target:"_blank",className:"cvres-btn"},"Resume"))),i.a.createElement("section",{className:"first-child",id:"home","data-section":"home"},i.a.createElement(C,null)),i.a.createElement(a.Suspense,{fallback:i.a.createElement("h1",null," Loading... ")},i.a.createElement("div",{className:"third-child",id:"skills","data-section":"skills"},i.a.createElement(L,null)),i.a.createElement("div",{className:"fourth-child",id:"projects","data-section":"projects"},i.a.createElement(M,null)),i.a.createElement("div",{className:"fifth-child",id:"contact","data-section":"contact"},i.a.createElement(B,null))))})))};var A=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(P,null))};r.a.render(i.a.createElement(A,null),document.getElementById("root"))}},[[37,1,3]]]);
//# sourceMappingURL=main.b7995706.chunk.js.map