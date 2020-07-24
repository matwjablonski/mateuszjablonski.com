(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l});var r=n(6),a=n(3),o=n(2);function c(){var t=Object(r.a)(["\n  display: flex;\n"]);return c=function(){return t},t}function i(){var t=Object(r.a)(["\n  display: inline-block;\n  font-size: 23px;\n  font-family: ",";\n  margin-top: 45px;\n  padding-bottom: 15px;\n  position: relative;\n  white-space: nowrap;\n\n  &::before {\n    background: ",";\n    border-radius: 50%;\n    bottom: -2px;\n    content: '';\n    display: block;\n    height: 6px;\n    position: absolute;\n    width: 6px;\n  }\n\n  &::after {\n    background: linear-gradient(to right, ",", transparent);\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 1px;\n    position: absolute;\n    width: 100%;\n  }\n"]);return i=function(){return t},t}var u=a.d.h2(i(),Object(o.p)("mainFont"),Object(o.p)("darkGrey"),Object(o.p)("darkGrey")),l=a.d.div(c())},146:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(145);e.a=function(t){return a.a.createElement(o.a,null,t.text)}},147:function(t,e,n){"use strict";var r=n(0),a=n.n(r),o=n(16),c=n(9),i=n(6),u=n(3),l=n(2),s=n(42);function m(){var t=Object(i.a)(["\n  color: ",";\n  padding: 0.5em 1em;\n  min-width: 200px;\n"]);return m=function(){return t},t}function p(){var t=Object(i.a)(["\n  border-bottom: 1px solid ",";\n  display: block;\n  min-width: 200px;\n  opacity: 1;\n"]);return p=function(){return t},t}function d(){var t=Object(i.a)(["\n  background: ",";\n  margin-top: 45px;\n"]);return d=function(){return t},t}var f=u.d.div(d(),Object(l.p)("black")),b=Object(u.d)(s.a)(p(),Object(l.p)("black")),A=u.d.div(m(),Object(l.p)("white"));e.a=function(){var t=Object(r.useContext)(o.a).user,e=Object(c.c)().t,n=function(t){var e=[{name:"ADMIN.NAV.GENERAL",type:["mentor","coursant","reader"]},{name:"ADMIN.NAV.DASHBOARD",link:"/admin",type:["mentor","coursant","reader"]},{name:"ADMIN.NAV.POSTS",type:["mentor","coursant","reader"]},{name:"ADMIN.NAV.ALL_POSTS",link:"/admin/posts",type:["mentor","coursant"]},{name:"ADMIN.NAV.FAVOURITE_POSTS",link:"/admin/posts/favourites",type:["mentor","coursant","reader"]},{name:"ADMIN.NAV.ADD_NEW_POST",link:"/admin/posts/new",type:["mentor"]},{name:"ADMIN.NAV.COURSANTS",type:["mentor"]},{name:"ADMIN.NAV.COURSANTS_LIST",link:"/admin/users/coursants",type:["mentor"]},{name:"ADMIN.NAV.ADD_NEW_COURSANT",link:"/admin/coursants/new",type:["mentor"]},{name:"ADMIN.NAV.MY_COURSE",type:["coursant"]},{name:"ADMIN.NAV.MY_MEETINGS",link:"/panel/moje-spotkania",type:["coursant"]},{name:"ADMIN.NAV.USERS",type:["mentor"]},{name:"ADMIN.NAV.USERS_LIST",link:"/admin/users",type:["mentor"]},{name:"ADMIN.NAV.GLOSSARY",type:["mentor"]},{name:"ADMIN.NAV.NEW_GLOSSARY",link:"/admin/glossary/new",type:["mentor"]},{name:"ADMIN.NAV.SETTINGS",type:["mentor","coursant","reader"]},{name:"ADMIN.NAV.MY_ACCOUNT",link:"/admin/settings/my-account",type:["mentor","coursant","reader"]}];switch(t){case"mentor":return e.filter(function(t){return-1!==t.type.indexOf("mentor")});case"coursant":return e.filter(function(t){return-1!==t.type.indexOf("coursant")});case"reader":default:return e.filter(function(t){return-1!==t.type.indexOf("reader")})}}(t.userType);return a.a.createElement(f,null,n.map(function(t,n){return t.link?a.a.createElement(b,{key:"userSidebarLink".concat(n),to:t.link,activeStyle:{opacity:.5},exact:!0},e(t.name)):a.a.createElement(A,{key:"userSidebarSeparator".concat(n)},e(t.name))}))}},152:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return u});var r=n(6),a=n(3);function o(){var t=Object(r.a)(["\n  font-weight: 700;\n  margin-right: 10px;\n"]);return o=function(){return t},t}function c(){var t=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 5px;\n"]);return c=function(){return t},t}var i=a.d.div(c()),u=a.d.div(o())},242:function(t,e,n){},250:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(9),c=n(2),i=n(146),u=n(147),l=n(55),s=n(16),m=n(20),p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var d=50,f=50;function b(t){var e=t.className,n=t.counterClockwise,r=t.dashRatio,o=t.pathRadius,c=t.strokeWidth,i=t.style;return a.a.createElement("path",{className:e,style:Object.assign({},i,h({pathRadius:o,dashRatio:r,counterClockwise:n})),d:A({pathRadius:o,counterClockwise:n}),strokeWidth:c,fillOpacity:0})}function A(t){var e=t.pathRadius,n=t.counterClockwise?1:0;return"\n      M "+d+","+f+"\n      m 0,-"+e+"\n      a "+e+","+e+" "+n+" 1 1 0,"+2*e+"\n      a "+e+","+e+" "+n+" 1 1 0,-"+2*e+"\n    "}function h(t){var e=t.counterClockwise,n=t.dashRatio,r=t.pathRadius,a=2*Math.PI*r,o=(1-n)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(e?-o:o)+"px"}}var O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return function(t,e){function n(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var t=this.props,e=t.value,n=t.minValue,r=t.maxValue;return(Math.min(Math.max(e,n),r)-n)/(r-n)},e.prototype.render=function(){var t=this.props,e=t.circleRatio,n=t.className,a=t.classes,o=t.counterClockwise,c=t.styles,i=t.strokeWidth,u=t.text,l=this.getPathRadius(),s=this.getPathRatio();return Object(r.createElement)("svg",{className:a.root+" "+n,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?Object(r.createElement)("circle",{className:a.background,style:c.background,cx:d,cy:f,r:50}):null,Object(r.createElement)(b,{className:a.trail,counterClockwise:o,dashRatio:e,pathRadius:l,strokeWidth:i,style:c.trail}),Object(r.createElement)(b,{className:a.path,counterClockwise:o,dashRatio:s*e,pathRadius:l,strokeWidth:i,style:c.path}),u?Object(r.createElement)("text",{className:a.text,style:c.text,x:d,y:f},u):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(r.Component);function k(t){var e=t.rotation,n=t.strokeLinecap,r=t.textColor,a=t.textSize,o=t.pathColor,c=t.pathTransition,i=t.pathTransitionDuration,u=t.trailColor,l=t.backgroundColor,s=null==e?void 0:"rotate("+e+"turn)",m=null==e?void 0:"center center";return{root:{},path:g({stroke:o,strokeLinecap:n,transform:s,transformOrigin:m,transition:c,transitionDuration:null==i?void 0:i+"s"}),trail:g({stroke:u,strokeLinecap:n,transform:s,transformOrigin:m}),text:g({fill:r,fontSize:a}),background:g({fill:l})}}function g(t){return Object.keys(t).forEach(function(e){null==t[e]&&delete t[e]}),t}n(242);var y=n(12),N=n(152),E=n(26),D=function(t){var e=t.course,n=Object(o.c)().t,i=Object(r.useState)(null),u=Object(m.a)(i,2),l=u[0],s=u[1];Object(r.useEffect)(function(){Object(y.a)().get("course/id/".concat(e)).then(function(t){return s(t.data)})},[e]),console.log(l);var p=l&&l.meetings&&l.meetings.contracted?l.meetings.contracted:0,d=l&&l.meetings?l.meetings.completed.length:0,f=d/p;return a.a.createElement(a.a.Fragment,null,l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(c.n,null,a.a.createElement(c.b,null,a.a.createElement(E.a,null,n("ADMIN.DASHBOARD.YOUR_COURSE")),a.a.createElement(N.b,null,a.a.createElement(N.a,null,n("ADMIN.DASHBOARD.ACTIVE_COURSE")),l.title),a.a.createElement(N.b,null,a.a.createElement(N.a,null,n("ADMIN.DASHBOARD.MEETINGS_IN")),d,"/",p)),a.a.createElement(c.b,{xs:12,md:3},a.a.createElement(O,{value:f,maxValue:1,text:"".concat(100*f,"%"),styles:k({trailColor:"#eee",pathColor:"rgba(255, 20, 43, ".concat(f,")"),textColor:"rgba(255, 20, 43, ".concat(0===f?.1:f,")")})}))),a.a.createElement(c.n,null,a.a.createElement(c.b,null,a.a.createElement(E.a,null,n("ADMIN.DASHBOARD.ACTIVE_MODULE")))),a.a.createElement(c.n,null,a.a.createElement(c.b,null,a.a.createElement(E.a,null,n("ADMIN.DASHBOARD.HOMEWORK")))),a.a.createElement(c.n,null,a.a.createElement(c.b,null,a.a.createElement(E.a,null,n("ADMIN.DASHBOARD.LAST_GLOSSARY"))))))},S=n(37);e.default=function(){var t=Object(o.c)().t,e=Object(r.useContext)(s.a).user;return a.a.createElement(c.d,null,a.a.createElement(l.a,{type:"page",title:t("ADMIN.DASHBOARD.TITLE")}),a.a.createElement(c.n,null,a.a.createElement(c.b,{xs:"auto"},a.a.createElement(u.a,null)),a.a.createElement(c.b,null,a.a.createElement(i.a,{text:t("ADMIN.DASHBOARD.TITLE")}),a.a.createElement(S.b,null,t("ADMIN.DASHBOARD.DESCRIPTION")),e&&function(){switch(e.userType){case"mentor":return"mentor";case"coursant":return a.a.createElement(D,{course:e.course});case"reader":default:return null}}())))}}}]);
//# sourceMappingURL=8.1ca1fff5.chunk.js.map