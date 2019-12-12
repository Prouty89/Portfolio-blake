(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[4],{151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Flippy",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"FrontSide",{enumerable:!0,get:function(){return o.FrontSide}}),Object.defineProperty(t,"BackSide",{enumerable:!0,get:function(){return o.BackSide}}),t.default=void 0;var n,r=(n=a(152))&&n.__esModule?n:{default:n},o=a(155);var l=r.default;t.default=l},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(153));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){d(e,t,a[t])}))}return e}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a(154);var m=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=u(t).call(this,e),a=!r||"object"!==l(r)&&"function"!==typeof r?f(n):r,d(f(a),"toggle",(function(){a.setState({isFlipped:!a.state.isFlipped})})),d(f(a),"handleFooterDotClick",(function(e,t){a.setState({isFlipped:0===e})})),d(f(a),"handleHoverOn",(function(e){a.setState({isFlipped:!0}),a.props.onMouseEnter(e)})),d(f(a),"handleTouchStart",(function(e){a.setState({isFlipped:!0,isTouchDevice:!0}),a.props.onTouchStart(e)})),d(f(a),"handleTouchEnd",(function(e){a.setState({isFlipped:!1}),a.props.onTouchEnd(e)})),d(f(a),"handleHoverOff",(function(e){a.setState({isFlipped:!1}),a.props.onMouseLeave(e)})),a.state={isFlipped:!1,isTouchDevice:!1},a}var a,o,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),a=t,m=[{key:"getDerivedStateFromProps",value:function(e,t){return c({},t,{isFlipped:"boolean"===typeof e.isFlipped?e.isFlipped:t.isFlipped})}}],(o=[{key:"render",value:function(){var e=this.props,t=e.children,a=e.style,o=e.flipDirection,l=e.flipOnHover,s=e.flipOnClick,u=this.state,f=u.isFlipped,p=u.activeCardIndex,d=u.isTouchDevice,m=l?{onMouseEnter:this.handleHoverOn,onMouseLeave:this.handleHoverOff,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd}:s?{onClick:this.toggle}:{};return n.default.createElement("div",i({className:"flippy-container",style:c({},a)},m),n.default.createElement("div",{className:"flippy-cardContainer-wrapper ".concat(o)},n.default.createElement("div",{className:"flippy-cardContainer ".concat(f?"isActive":""," ").concat(d?"istouchdevice":"")},t),this.props.showNavigation&&n.default.createElement(r.default,{onDotClick:this.handleFooterDotClick,activeCardIndex:p,cards:this.props.children})))}}])&&s(a.prototype,o),m&&s(a,m),t}(n.default.Component);t.default=m,m.defaultProps={showNavigation:!1,flipDirection:"horizontal",flipOnHover:!1,flipOnClick:!0,usePrettyStyle:!0,onMouseEnter:function(){},onMouseLeave:function(){},onTouchStart:function(){},onTouchEnd:function(){},onClick:function(){}}},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(0))&&n.__esModule?n:{default:n};t.default=function(e){var t=e.cards,a=e.activeCardIndex,n=e.onDotClick;return r.default.createElement("div",{className:"flippy-footer"},t.map((function(e,t){return r.default.createElement("span",{key:"flippyFooterItem".concat(t),className:"flippy-footer-item".concat(a===t?" isActive":""),onClick:n.bind(null,t)},"*")})))}},154:function(e,t,a){},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BackSide=t.FrontSide=void 0;var n,r=(n=a(0))&&n.__esModule?n:{default:n};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){c(e,t,a[t])}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,a=e.cardType,n=e.style,o=e.elementType,l=e.animationDuration,c=s(e,["className","cardType","style","elementType","animationDuration"]);return r.default.createElement(o||"div",i({className:"flippy-card flippy-".concat(a," ").concat(t||"")},c,{style:i({},n||{},{transitionDuration:"".concat(l/1e3,"s")})}),this.props.children)}}])&&u(a.prototype,n),o&&u(a,o),t}(r.default.Component);t.FrontSide=function(e){e.isFlipped;var t=e.style,a=e.animationDuration,n=s(e,["isFlipped","style","animationDuration"]);return r.default.createElement(m,o({},n,{style:i({},t||{}),animationDuration:a,cardType:"front"}))};t.BackSide=function(e){e.isFlipped;var t=e.style,a=s(e,["isFlipped","style"]);return r.default.createElement(m,o({},a,{style:i({},t||{}),cardType:"back"}))},m.defaultProps={animationDuration:600}},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(151),l=a.n(o),i=a(5);t.default=function(){return r.a.createElement(i.f,{className:"card-container"},r.a.createElement("div",{className:"card-one"},r.a.createElement("a",{rel:"noopener",className:"a-link",target:"_blank",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Riders for Life"),r.a.createElement("h4",null,"User Interface, Backend Application, SMS Messaging Utility"),r.a.createElement("div",{className:"proj-desc"},"An 8 week co-op prototype application built for the non-profit organization Safe Mothers, Safe Babies. My primary focus included the development of a dashboard utility to process CRUD operations of individual Driver, Mother, and Admin user types stored in our database. Frontline SMS messaging platform was configured to our database, allowed for request/response messaging correspondence."),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener",href:"https://youtu.be/KM4jNYUOg7Y"},"Demo"),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener",href:"https://github.com/Lambda-School-Labs/safe-mothers-be"},"BE Codebase"),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener",href:"https://github.com/Lambda-School-Labs/safe-mothers-fe"},"FE Codebase")),r.a.createElement("button",{className:"dead-btn"},"More detail!")),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("div",{className:"back-container"},r.a.createElement("h3",null,"Tech Stack"),r.a.createElement("h4",null,"Built Using:"),r.a.createElement("div",{className:"framework-desc"},r.a.createElement("ul",null,r.a.createElement("li",null,"React-Redux"),r.a.createElement("li",null,"Frontline SMS"),r.a.createElement("li",null,"Open Data Kit"),r.a.createElement("li",null,"Node-Express-PostgreSQL"))),r.a.createElement("h4",null,"Design:"),r.a.createElement("div",{className:"design-desc"},r.a.createElement("ul",null,r.a.createElement("li",null,"Grommet"),r.a.createElement("li",null,"Styled Components"),r.a.createElement("li",null,"PricelineLabs Design System"))),r.a.createElement("div",{className:"card-links project-type"},r.a.createElement("p",null,"School Project")))))),r.a.createElement("div",{className:"card-two"},r.a.createElement("a",{className:"a-link",target:"_blank",rel:"noopener",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Tetris"),r.a.createElement("h4",null,"Game design, React Single Page Application"),r.a.createElement("div",{className:"proj-desc"},"All the game mechanics you know from classic tetris brought to you by React. My first real independent deep dive into the power of hooks, and introduction to algorithms. I fell in love with Styled Components throughout this build and thoroughly enjoyed sharing it with family and friends."),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener",href:"https://github.com/Prouty89/TetrisReact"},"Codebase"),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener",href:"https://tetrisreact-54w8sfs49.now.sh/"},"Play it!"))),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("div",{className:"back-container"},r.a.createElement("h3",null,"Tech Stack"),r.a.createElement("h4",null,"Framework:"),r.a.createElement("div",{className:"framework-desc"},"React"),r.a.createElement("h4",null,"Design:"),r.a.createElement("div",{className:"design-desc"},"Styled Components")),r.a.createElement("div",{className:"card-links project-type"},r.a.createElement("p",null,"Personal Project"))))),r.a.createElement("div",{className:"card-three"},r.a.createElement("a",{rel:"noopener",className:"a-link",target:"_blank",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Expat Journal"),r.a.createElement("h4",null,"Social Media Application Concept, User Interface"),r.a.createElement("div",{className:"proj-desc"},"5 day sprint incorporating CRUD operations for Users and Social Media Posts. I had a very pleasurable experience being in the center of a marketing team and a backend developer which led to fluid develoment of our end-product. Solid communication and a desire to pair program increase your chances of success in limited duration sprints."),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://github.com/bw-expat-journal/Front-End"},"Codebase"),r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://expat-journal-ui.netlify.com/"},"Visit Application"))),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Tech Stack"),r.a.createElement("h4",null,"Framework:"),r.a.createElement("div",{className:"framework-desc"},"React"),r.a.createElement("h4",null,"Design:"),r.a.createElement("div",{className:"design-desc"},"Styled Components"),r.a.createElement("div",{className:"card-links project-type"},r.a.createElement("p",null,"School Project"))))),r.a.createElement("div",{className:"card-four"},r.a.createElement("a",{rel:"noopener",className:"a-link",target:"_blank",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Movie Trivia"),r.a.createElement("h4",null,"Open Database, React Single Page Application"),r.a.createElement("div",{className:"proj-desc"},"Open API's are a fantastic way to push forth your next hobby application. I'd like to re-build and refactor this application to use my own database, a more modern approach to state management. This was meant to be quick, fun, and expand my comfort level with AJAX fetching."),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://github.com/Prouty89/Movie-Trivia"},"Codebase"),r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://www.github.com"},"Play it!"))),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("div",{className:"framework-desc"},r.a.createElement("h3",null,"Tech Stack"),r.a.createElement("h4",null,"Framework:"),r.a.createElement("div",{className:"design-desc"},"React"),r.a.createElement("h4",null,"Design:"),"Styled Components"),r.a.createElement("div",{className:"card-links project-type"},r.a.createElement("p",null,"Personal Project"))))),r.a.createElement("div",{className:"card-five"},r.a.createElement("a",{rel:"noopener",className:"a-link",target:"_blank",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Dark Mode"),r.a.createElement("h4",null,"Using Custom Hooks to implement Dark Mode functionality"),r.a.createElement("div",{className:"proj-desc"},'Implementing "dark-mode" on your modern web application allows for easier viewing of the information your user enjoy, it\'s a feature people have come to expect. This application uses custom hooks to pass a key into local storage and a callback to access whether it exists in local storage in order to toggle styles on and off. The mock application is a Crypto tracker that fetches data from an open API.'),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://github.com/Prouty89/dark-mode"},"Codebase"),r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://dark-mode-kappa-peach.now.sh/"},"Visit Application"))),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Tech Stack"),r.a.createElement("h4",null,"Framework:"),r.a.createElement("div",{className:"framework-desc"},"React"),r.a.createElement("h4",null,"Design:"),r.a.createElement("div",{className:"design-desc"},"SASS"),r.a.createElement("div",{className:"card-links project-type"},r.a.createElement("p",null,"School Project"))))),r.a.createElement("div",{className:"card-six"},r.a.createElement("a",{rel:"noopener",className:"a-link",target:"_blank",href:"https://thisisadummylink.com"},"Demo Link"),r.a.createElement(l.a,{classname:"flip-card",flipOnClick:!0,flipDirection:"horizontal",style:{width:"360px",height:"400px"}},r.a.createElement(o.FrontSide,{className:"front",style:{backgroundColor:"#ffffff",borderRadius:"8px"}},r.a.createElement("h3",null,"Riders for Life"),r.a.createElement("h4",null,"Co-op prototype application for a non-profit organization"),r.a.createElement("div",{className:"card-links"},r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://www.youtube.com"},"Demo"),r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://www.github.com"},"BE Codebase"),r.a.createElement("a",{rel:"noopener",className:"link",target:"_blank",href:"https://www.github.com"},"FE Codebase"))),r.a.createElement(o.BackSide,{style:{backgroundColor:"#ffffff",borderRadius:"8px"}},"ROCKS"))))}}}]);
//# sourceMappingURL=4.d79d25d7.chunk.js.map