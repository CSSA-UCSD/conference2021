(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},22:function(e,t,a){var n={"./testimg.JPG":37};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=22},37:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/testimg.18fa430a.JPG"},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),c=a.n(i),l=a(11),m=(a(15),a(1)),o=a(2),s=a(4),u=a(3),d=a.p+"static/media/Wordmark_Dark.b599f14b.svg",p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},r.a.createElement("img",{src:d,alt:"CSSA @ UCSD"})," "),r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h6",null,r.a.createElement(l.b,{to:"/schedule",className:"nav-link"},"Schedule"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h6",null,r.a.createElement(l.b,{to:"/speakers",className:"nav-link"},"Speakers"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h6",null,r.a.createElement(l.b,{to:"/",className:"nav-link"},"Register"))))))))}}]),a}(r.a.Component),h=a(5),f=a(9),E=a.n(f),v=a.p+"static/media/testimg.18fa430a.JPG",b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"day-schedule pb-5","data-aos":"fade-up"},r.a.createElement("div",{className:"day-schedule-content"},r.a.createElement("div",{className:"p-4 row container"},r.a.createElement("div",{className:"day-img col-4"},r.a.createElement("img",{src:v,alt:"test"})),r.a.createElement("div",{className:"day-info col-8"},r.a.createElement("h4",null,this.props.item.date),r.a.createElement("h2",null,this.props.item.name),r.a.createElement("p",null,this.props.item.description)))))}}]),a}(r.a.Component),k=[{id:1,name:"Day 1: Topic Name",date:"WEEKDAY | MONTH/DAY/YEAR",img:"winter2021/IntroToDataAnalytics.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:""},{id:2,name:"Day 2: Topic Name",date:"WEEKDAY | MONTH/DAY/YEAR",img:"winter2021/IntroToDataAnalytics.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:""},{id:3,name:"Day 3: Topic Name",date:"WEEKDAY | MONTH/DAY/YEAR",img:"winter2021/IntroToDataAnalytics.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:""}],y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"carousel-speaker mx-2"},r.a.createElement("div",{className:"speaker-img pb-3"},r.a.createElement("img",{src:a(22)("./".concat(this.props.item.img)).default,alt:this.props.item.name})),r.a.createElement("div",{className:"speaker-title"},r.a.createElement("h5",null,this.props.item.name),r.a.createElement("p",null,this.props.item.title)))}}]),n}(r.a.Component),g=[{id:1,name:"Alessandro Fard",img:"testimg.JPG",title:"Founder/Creative Director of CreateApe",description:""},{id:2,name:"Professor Chiba",img:"testimg.JPG",title:"Neuroscience",description:""},{id:3,name:"Shobit Varshney",img:"testimg.JPG",title:"AI Practice Lead IBM",description:""},{id:4,name:"Himanshu",img:"testimg.JPG",title:"Co-Founder/VP Design of ____",description:""},{id:5,name:"Sumedha",img:"testimg.JPG",title:"Marketing/Outreach at NASA Ames Center",description:""}],N=(a.p,a(27)),w=a.n(N),j=(a(50),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){var e=k.map((function(e){return r.a.createElement(b,{key:e.id,item:e})})),t=g.map((function(e){return r.a.createElement(y,{key:e.id,item:e})}));return r.a.createElement("div",{className:"home container"},r.a.createElement("div",{className:"row py-5"},r.a.createElement("div",{className:"home-img col-sm-6"},r.a.createElement("svg",{width:"447",height:"447",viewBox:"0 0 447 447",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M341.243 365.407C338.235 370.305 334.931 378.89 344.594 383.467C356.558 389.134 369.152 358.909 376.507 345.887",stroke:"white","stroke-width":"8.10409","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("path",{d:"M323.223 252.362C257.06 358.35 270.793 378.506 313.697 316.361C365.709 241.024 332.002 317.297 332.002 317.297",stroke:"white","stroke-width":"8.10409","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("path",{d:"M325.158 328.55C325.158 328.55 280.528 413.207 333.331 342.964C399.335 255.16 349.582 347.931 345.651 355.284",stroke:"white","stroke-width":"8.10409","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("circle",{cx:"341.133",cy:"363.582",r:"2.6716",transform:"rotate(-45 341.133 363.582)",fill:"white"}),r.a.createElement("circle",{cx:"375.811",cy:"346.231",r:"10.9011",transform:"rotate(-45 375.811 346.231)",fill:"white"}),r.a.createElement("circle",{cx:"323.137",cy:"330.814",r:"8.17581",transform:"rotate(-45 323.137 330.814)",fill:"white"}),r.a.createElement("path",{d:"M311.019 232.449C311.019 232.449 294.988 222.793 280.02 158.73C280.02 158.73 266.55 114.576 251.169 96.4007C231.749 73.4524 211.719 60.8682 194.013 54.1665",stroke:"white","stroke-width":"10.8055","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("circle",{cx:"325.794",cy:"247.222",r:"10.9011",transform:"rotate(-45 325.794 247.222)",fill:"white"}),r.a.createElement("path",{d:"M49.2226 137.874C49.2226 137.874 32.5847 196.788 96.6032 250.965C114.778 266.346 158.932 279.816 158.932 279.816C222.995 294.784 247.325 322.001 247.325 322.001L255.593 330.269",stroke:"white","stroke-width":"10.8055","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("circle",{cx:"256.415",cy:"332.011",r:"10.9011",transform:"rotate(-45 256.415 332.011)",fill:"white"}),r.a.createElement("path",{d:"M57.3662 112.403C57.3662 112.403 69.4422 75.3594 105.114 58.9518C140.786 42.5441 169.058 49.3756 169.058 49.3756",stroke:"white","stroke-width":"10.8055","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("circle",{cx:"169.061",cy:"49.3763",r:"10.9011",transform:"rotate(-45 169.061 49.3763)",fill:"white"}),r.a.createElement("path",{d:"M124.093 176.558C126.931 179.396 126.931 183.998 124.093 186.836C121.255 189.674 116.653 189.674 113.815 186.836C110.977 183.998 110.977 179.396 113.815 176.558C116.653 173.72 121.255 173.72 124.093 176.558Z",fill:"white"}),r.a.createElement("circle",{cx:"158.781",cy:"180.413",r:"7.26739",transform:"rotate(-45 158.781 180.413)",fill:"white"}),r.a.createElement("circle",{cx:"165.207",cy:"202.255",r:"7.26739",transform:"rotate(-45 165.207 202.255)",fill:"white"}),r.a.createElement("circle",{cx:"138.484",cy:"141.633",r:"7.26739",transform:"rotate(-45 138.484 141.633)",fill:"white"}),r.a.createElement("circle",{cx:"170.344",cy:"132.88",r:"7.26739",transform:"rotate(-45 170.344 132.88)",fill:"white"}),r.a.createElement("circle",{cx:"197.323",cy:"118.748",r:"7.26739",transform:"rotate(-45 197.323 118.748)",fill:"white"}),r.a.createElement("path",{d:"M234.286 217.813L234.267 184.748L215.482 165.963L203.153 165.956L172.311 135.115M234.286 217.813L239.333 222.86M234.286 217.813L225.008 217.808M239.333 222.86L262.984 246.511L300.607 263.411M239.333 222.86L202.905 222.839M202.905 222.839L193.933 213.867L171.783 191.717L163.372 183.306M202.905 222.839L184.971 222.828L168.429 206.286M198.608 120.032L225.004 146.428L225.008 164.287L225.008 217.808M225.008 217.808L214.671 217.802L193.082 196.213L193.071 176.038L170.08 153.047L152.148 155.278L139.104 142.234",stroke:"white","stroke-width":"5.40273","stroke-linecap":"round","stroke-linejoin":"round"}),r.a.createElement("path",{d:"M119.769 182.445L131.098 193.774L131.112 216.978L145.937 231.804L162.152 231.813M162.152 231.813L230.366 231.853L254.194 255.681L264.906 285.531M162.152 231.813L142.571 212.232M275.617 315.382L264.906 285.531M264.906 285.531L274.406 263.92",stroke:"white","stroke-width":"5.40273","stroke-linecap":"round","stroke-linejoin":"round"}))),r.a.createElement("div",{className:"home-title col-sm-6 "},r.a.createElement("h2",null,"The emerging applications of cognitive science in technology, healthcare, and current global issues."))),r.a.createElement("div",{className:"schedule"},r.a.createElement("h3",null,r.a.createElement(l.b,{to:"/schedule",className:"nav-link"},r.a.createElement("span",{className:"header-gradient"},"Schedule"))),e),r.a.createElement("div",{className:"speakers pb-5"},r.a.createElement("h3",null,r.a.createElement(l.b,{to:"/speakers",className:"nav-link"},r.a.createElement("span",{className:"header-gradient"},"Speakers"))),r.a.createElement("div",{className:"speakers-carousel"},r.a.createElement(w.a,{responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:2,slidesToSlide:2},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},infinite:!0,autoPlay:!0,autoPlaySpeed:2e3,centerMode:!0},t))))}}]),a}(r.a.Component)),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"day-schedule pb-5","data-aos":"fade-up"},r.a.createElement("div",{className:"day-img"}),r.a.createElement("div",{className:"day-info"},r.a.createElement("h4",null,"Day"),r.a.createElement("h2",null,"Subtitle")))}}]),a}(r.a.Component),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"day-schedule pb-5","data-aos":"fade-up"},r.a.createElement("div",{className:"day-img"}),r.a.createElement("div",{className:"day-info"}))}}]),a}(r.a.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"schedule pt-5"},r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"schedule-title header-gradient"},r.a.createElement("h1",{className:"pb-5"},"Schedule")),r.a.createElement(O,null),r.a.createElement(x,null)))}}]),a}(r.a.Component),L=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"speaker col-md-4 py-3","data-aos":"fade-up"},r.a.createElement("div",{className:"speaker-img pb-3"},r.a.createElement("img",{src:a(22)("./".concat(this.props.item.img)).default,alt:this.props.item.name})),r.a.createElement("div",{className:"speaker-title"},r.a.createElement("h5",null,this.props.item.name),r.a.createElement("p",null,this.props.item.title)))}}]),n}(r.a.Component),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){E.a.init({duration:2e3})}},{key:"render",value:function(){var e=g.map((function(e){return r.a.createElement(L,{key:e.id,item:e})}));return r.a.createElement("div",{className:"speakers"},r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"speakers-title header-gradient pt-5"},r.a.createElement("h1",{className:""},"Speakers"))),r.a.createElement("div",{className:"px-5 row"},e))}}]),a}(r.a.Component),D=function(){return r.a.createElement(h.c,null," ",r.a.createElement(h.a,{exact:!0,path:"/",component:j}),r.a.createElement(h.a,{exact:!0,path:"/schedule",component:C}),r.a.createElement(h.a,{exact:!0,path:"/speakers",component:M}))},A=[{id:1,platform:"facebook",icon:"fab fa-facebook-f fa-lg black-text mr-md-5 mr-3 fa-2x",url:"https://www.facebook.com/webraincogsci"},{id:2,platform:"instagram",icon:"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x",url:"https://www.instagram.com/cssaucsd/"},{id:3,platform:"discord",icon:"fab fa-discord fa-lg white-text mr-md-5 mr-3 fa-2x",url:"https://discord.gg/mEuaWtc"},{id:4,platform:"medium",icon:"fab fa-medium-m fa-lg white-text mr-md-5 mr-3 fa-2x",url:"https://cssa-ucsd.medium.com/"},{id:5,platform:"youtube",icon:"fab fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x",url:"https://www.youtube.com/channel/UCENdCWd59-G4e_GQlmyA5mA"},{id:6,platform:"linkedin",icon:"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x",url:"https://www.linkedin.com/company/cssa-ucsd/"},{id:7,platform:"email",icon:"fas fa-at fa-lg white-text fa-2x",url:"mailto:cssa.ucsd@gmail.com"}],S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("a",{className:"fb-ic",href:this.props.item.url},r.a.createElement("i",{className:this.props.item.icon}," "))}}]),a}(r.a.Component),T=a.p+"static/media/Wordmark_White.b2d6097a.svg",P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=A.map((function(e){return r.a.createElement(S,{key:e.id,item:e})}));return r.a.createElement("footer",{className:"page-footer font-small cyan darken-3",id:"social-media"},r.a.createElement("hr",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col py-3"},r.a.createElement("div",{className:"mb-1 d-flex justify-content-center"},e))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("span",{className:"copywrite"},"\xa9 2021 "),r.a.createElement("a",{href:"https://cssa-ucsd.org/"}," ",r.a.createElement("img",{src:T,alt:"CSSA"}))))}}]),a}(r.a.Component);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(D,null),r.a.createElement(P,null))};c.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(q,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.99a69d85.chunk.js.map