"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[392],{6392:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),u=r(7689),i=r(2791),o=r(8407),p="cast_listImg__tVnM6",l="cast_list__bULim",f="cast_listItem__Km70l",h="cast_listName__6beV9",v="cast_listCharacter__oFnba",m="cast_listWrap__U34ca",d="cast_error__hduCn",_=r(4377),w=r(184),g=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],g=(0,i.useState)(!0),x=(0,a.Z)(g,2),b=x[0],k=x[1],y=(0,u.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,k(!0),t.next=4,(0,o.M1)(y);case 4:e=t.sent,r=e.cast,c(r),k(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,k(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[y]),(0,w.jsx)(w.Fragment,{children:b?"Loading...":r&&r.length>0?(0,w.jsx)("div",{className:m,children:(0,w.jsx)("ul",{className:l,children:r.map((function(t){var e=t.name,r=t.character,n=t.profile_path,a=t.id;return(0,w.jsxs)("li",{className:f,children:[n?(0,w.jsx)("img",{className:p,alt:e,src:"https://image.tmdb.org/t/p/w92".concat(n)}):(0,w.jsx)("img",{className:p,alt:e,src:_}),(0,w.jsx)("p",{className:h,children:e}),(0,w.jsx)("p",{className:v,children:r})]},a)}))})}):(0,w.jsx)("p",{className:d,children:"No data found"})})}},8407:function(t,e,r){r.d(e,{Df:function(){return u},M1:function(){return l},TP:function(){return o},qF:function(){return m},tx:function(){return h}});var n=r(5861),a=r(7757),c=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function u(t){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,s.get("/trending/movie/week",{params:{page:e}});case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,s.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t,e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,s.get(n,{params:{page:r}});case 4:return a=t.sent,t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}},4377:function(t,e,r){t.exports=r.p+"static/media/user.efaf9afac6fc8840b389.jpg"}}]);
//# sourceMappingURL=392.af9f27cc.chunk.js.map