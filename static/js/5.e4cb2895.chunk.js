(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[5],{290:function(e,a,t){e.exports=t.p+"static/media/Github.943b5af5.svg"},291:function(e,a,t){e.exports=t.p+"static/media/Tweet.50d3e69d.svg"},292:function(e,a,t){e.exports=t.p+"static/media/IG.bef68a0a.svg"},293:function(e,a,t){e.exports=t.p+"static/media/Linkd.8feeb90a.svg"},297:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),m=t(140),l=t(294),c=t(273),o=t.n(c),r=t(8),i=t(290),p=t.n(i),d=t(291),u=t.n(d),f=t(292),h=t.n(f),g=t(293),b=t.n(g),y=t(9),E=t.n(y);var N=Object(l.c)({mapPropsToValues:function(e){return{name:e.name||"",company:e.company||"",phone:e.phone||"",email:e.email||"",message:e.message||""}},validationSchema:m.object().shape({name:m.string().max(50).required("Who do I owe the pleasure?"),company:m.string().max(70),phone:m.string().max(11),email:m.string().max(30).required("Please provide an email"),message:m.string().max(300).required("Please include a message")}),handleSubmit:function(e){o.a.post("https://formspree.io/mqkapboa",{message:e}).then((function(e){e.status="success"})).catch((function(e){e.message="fail"}))}})((function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.b,{className:"form-container"},s.a.createElement("p",{className:"form-heading"},"Contact me directly with your opportunity."),s.a.createElement(l.b,{className:"form"},s.a.createElement(l.a,{name:"name",placeholder:"Name*",type:"text",className:"name-field field"}),s.a.createElement(l.a,{name:"company",placeholder:"Company*",type:"text",className:"company-field field"}),s.a.createElement(l.a,{name:"phone",for:"phone",placeholder:"Phone",type:"phone",className:"phone-field field"}),s.a.createElement(l.a,{name:"email",placeholder:"Email*",type:"email",className:"email-field field"}),s.a.createElement(l.a,{name:"message",placeholder:"Message*",input:"textarea",type:"text",className:"message-field field"}),s.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")),s.a.createElement("div",{className:"social-tray"},s.a.createElement("div",{className:"social-icons"},s.a.createElement(E.a,{rel:"noopener",className:"svg",src:h.a}),s.a.createElement(E.a,{rel:"noopener",className:"svg",src:p.a}),s.a.createElement(E.a,{rel:"noopener",className:"svg",src:b.a}),s.a.createElement(E.a,{rel:"noopener",className:"svg",src:u.a}))),s.a.createElement("p",{className:"footer"},"Designed and Developed by Blake Prouty")))}));a.default=N}}]);
//# sourceMappingURL=5.e4cb2895.chunk.js.map