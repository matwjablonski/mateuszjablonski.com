(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(n,t,e){"use strict";e.d(t,"a",function(){return u}),e.d(t,"b",function(){return l});var r=e(6),a=e(3),o=e(2);function i(){var n=Object(r.a)(["\n  display: flex;\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  display: inline-block;\n  font-size: 23px;\n  font-family: ",";\n  margin-top: 45px;\n  padding-bottom: 15px;\n  position: relative;\n  white-space: nowrap;\n\n  &::before {\n    background: ",";\n    border-radius: 50%;\n    bottom: -2px;\n    content: '';\n    display: block;\n    height: 6px;\n    position: absolute;\n    width: 6px;\n  }\n\n  &::after {\n    background: linear-gradient(to right, ",", transparent);\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 1px;\n    position: absolute;\n    width: 100%;\n  }\n"]);return c=function(){return n},n}var u=a.d.h2(c(),Object(o.p)("mainFont"),Object(o.p)("darkGrey"),Object(o.p)("darkGrey")),l=a.d.div(i())},146:function(n,t,e){"use strict";var r=e(0),a=e.n(r),o=e(145);t.a=function(n){return a.a.createElement(o.a,null,n.text)}},151:function(n,t,e){"use strict";var r=e(6),a=e(0),o=e.n(a),i=e(54),c=e(3),u=e(149),l=e(37),p=e(2);function d(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 4em 0;\n  text-align: center;\n\n  svg {\n    color: ",";\n    margin-bottom: 30px;\n  }\n"]);return d=function(){return n},n}var f=c.d.div(d(),Object(p.p)("darkGrey"));t.a=function(n){var t=n.text;return o.a.createElement(f,null,o.a.createElement(i.a,{icon:u.e,size:"10x"}),o.a.createElement(l.b,null,t))}},162:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return a});var r=function(n){return window.btoa(unescape(encodeURIComponent(n)))},a=function(n){return decodeURIComponent(escape(window.atob(n)))}},249:function(n,t,e){"use strict";e.r(t);var r=e(20),a=e(0),o=e.n(a),i=e(2),c=e(9),u=e(12),l=e(55),p=e(151),d=e(146),f=e(162),b=e(6),s=e(3);function m(){var n=Object(b.a)(["\n  font-family: ",";\n  font-size: 1em;\n  margin-top: 0.5em;\n"]);return m=function(){return n},n}function g(){var n=Object(b.a)(["\n  color: ",";\n  display: block;\n"]);return g=function(){return n},n}function x(){var n=Object(b.a)(["\n  display: inline-block;\n  font-size: 18px;\n  font-family: ",";\n  margin-top: 0;\n  padding-bottom: 15px;\n  position: relative;\n\n  &::before {\n    background: ",";\n    border-radius: 50%;\n    bottom: -2px;\n    content: '';\n    display: block;\n    height: 6px;\n    position: absolute;\n    width: 6px;\n  }\n\n  &::after {\n    background: linear-gradient(to right, ",", transparent);\n    bottom: 0;\n    content: '';\n    display: block;\n    height: 1px;\n    position: absolute;\n    width: 100%;\n  }\n"]);return x=function(){return n},n}function y(){var n=Object(b.a)(["\n  align-items: center;\n  background: ",";\n  color: ",";\n  display: flex;\n  height: 40px;\n  justify-content: center;\n  margin-right: 10px;\n  margin-top: 5px;\n  text-transform: uppercase;\n  width: 40px;\n"]);return y=function(){return n},n}function O(){var n=Object(b.a)(["\n  display: flex;\n"]);return O=function(){return n},n}function h(){var n=Object(b.a)(["\n  padding: 10px 0;\n  margin: 0 auto 10px;\n  max-width: 100%;\n  width: 750px;\n\n  &:not(:last-of-type) {\n    border-bottom: 1px solid ",";\n  }\n"]);return h=function(){return n},n}var j=s.d.div(h(),Object(i.p)("lighterGrey")),v=s.d.div(O()),k=s.d.div(y(),Object(i.p)("primary"),Object(i.p)("white")),w=s.d.h3(x(),Object(i.p)("mainFont"),Object(i.p)("darkGrey"),Object(i.p)("darkGrey")),E=s.d.small(g(),Object(i.p)("darkGrey")),G=s.d.p(m(),Object(i.p)("mainFont")),I=function(n){var t=n.def;return console.log(t),o.a.createElement(j,null,o.a.createElement(v,null,o.a.createElement(k,null,t.entry.slice(0,1)),o.a.createElement(w,null,t.entry,o.a.createElement(E,null,t.fullName))),o.a.createElement(G,null,Object(f.a)(t.description)))};t.default=function(){var n=Object(a.useState)([]),t=Object(r.a)(n,2),e=t[0],f=t[1],b=Object(c.c)().t;return Object(a.useEffect)(function(){Object(u.a)().get("glossary").then(function(n){return n.data.data.sort(function(n,t){return n.entry>t.entry?1:n.entry<t.entry?-1:0})}).then(function(n){return f(n)})},[]),o.a.createElement(i.d,null,o.a.createElement(l.a,null),o.a.createElement(d.a,{text:b("PAGES.GLOSSARY.TITLE")}),e.length?e.map(function(n){return o.a.createElement(I,{key:n.id,def:n})}):o.a.createElement(p.a,{text:b("NOTIFICATIONS.POSTS_LOADING")}))}}}]);
//# sourceMappingURL=13.b62b6751.chunk.js.map