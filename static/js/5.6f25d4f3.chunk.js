(this["webpackJsonpblake-portfolio"]=this["webpackJsonpblake-portfolio"]||[]).push([[5],{290:function(e,a,t){e.exports=t.p+"static/media/Github.943b5af5.svg"},291:function(e,a,t){e.exports=t.p+"static/media/Tweet.50d3e69d.svg"},292:function(e,a,t){e.exports=t.p+"static/media/IG.bef68a0a.svg"},293:function(e,a,t){e.exports=t.p+"static/media/Linkd.8feeb90a.svg"},297:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(0),l=t.n(s),m=t(140),o=t(294),c=t(273),r=t.n(c),i=t(7),p=t(290),f=t.n(p),d=t(291),u=t.n(d),b=t(292),h=t.n(b),g=t(293),E=t.n(g),N=t(9),v=t.n(N);var y=Object(o.c)({mapPropsToValues:function(e){return{name:e.name||"",company:e.company||"",phone:e.phone||"",email:e.email||"",message:e.message||""}},validationSchema:m.object().shape({name:m.string().max(50).required("Who do I owe the pleasure?"),company:m.string().max(70),phone:m.string().max(11),email:m.string().max(30).required("Please provide an email"),message:m.string().max(300).required("Please include a message")}),handleSubmit:function(e){r.a.post("https://formspree.io/mqkapboa",{message:e}).then((function(e){e.status="success"})).catch((function(e){e.message="fail"}))}})((function(){var e;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{className:"form-container"},l.a.createElement("p",{className:"form-heading"},"Let's Work Together"),l.a.createElement(o.b,{className:"form"},l.a.createElement(o.a,{label:!0,for:"name",name:"name",placeholder:"Name*",type:"text",className:"name-field field"}),l.a.createElement(o.a,{label:!0,for:"company",name:"company",placeholder:"Company*",type:"text",className:"company-field field"}),l.a.createElement(o.a,(e={label:!0,for:"phone",name:"phone"},Object(n.a)(e,"for","phone"),Object(n.a)(e,"placeholder","Phone"),Object(n.a)(e,"type","phone"),Object(n.a)(e,"className","phone-field field"),e)),l.a.createElement(o.a,{label:!0,for:"email",name:"email",placeholder:"Email*",type:"email",className:"email-field field"}),l.a.createElement(o.a,{label:!0,for:"message",name:"message",placeholder:"Message*",input:"textarea",type:"text",className:"message-field field"}),l.a.createElement("button",{type:"submit",className:"submit-btn"},"Submit")),l.a.createElement("div",{className:"social-tray"},l.a.createElement("div",{className:"social-icons"},l.a.createElement(v.a,{rel:"noopener",className:"svg",src:h.a}),l.a.createElement(v.a,{rel:"noopener",className:"svg",src:f.a}),l.a.createElement(v.a,{rel:"noopener",className:"svg",src:E.a}),l.a.createElement(v.a,{rel:"noopener",className:"svg",src:u.a}))),l.a.createElement("p",{className:"footer"},"Designed and Developed by Blake Prouty")))}));a.default=y}}]);
//# sourceMappingURL=5.6f25d4f3.chunk.js.map