"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{4126:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,c,o=t(5861),u=t(3433),s=t(9439),i=t(7757),p=t.n(i),l=t(2791),f=t(1087),v=t(7689),h=t(8407),d={movieItem:"home_movieItem__MmdJy"},g=t(8081),m=t(168),x=t(6444),b=(0,x.ZP)(f.rU)(r||(r=(0,m.Z)(["\n  color: blue;\n  text-decoration: none;\n\n  &:hover {\n    color: lightblue;\n  }\n"]))),w=x.ZP.ul(a||(a=(0,m.Z)(["\n  list-style-type: none;\n  margin-bottom: 10px;\n  font-size: 20px;\n  margin-left: 100px;\n"]))),Z=x.ZP.li(c||(c=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  padding: 5px 10px;\n"]))),y=t(184),k=function(e){var n=e.movies,t=e.location;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(w,{children:n.map((function(e){var n=e.title,r=e.id;return(0,y.jsx)(Z,{children:(0,y.jsx)(b,{to:"/movies/".concat(r),state:{from:t},children:n})},r)}))})})},j=function(){var e=(0,l.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(!0),c=(0,s.Z)(a,2),i=c[0],m=c[1],x=(0,f.lr)({page:1}),b=(0,s.Z)(x,2),w=b[0],Z=b[1],j=(0,l.useMemo)((function(){return Object.fromEntries((0,u.Z)(w))}),[w]),P=Number(j.page||1),_=(0,l.useState)(0),S=(0,s.Z)(_,2),C=S[0],F=S[1],L=(0,v.TH)();return(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,h.Df)(P);case 4:n=e.sent,r(n.results),F(n.total_pages),m(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,m(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[P]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{className:d.title,children:"Trending movies:"}),i?"Loading...":(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(k,{movies:t,location:L})}),(0,y.jsx)(g.Z,{totalPages:C,setSearchParams:Z,params:j,currentPage:Number((null===j||void 0===j?void 0:j.page)-1)||0})]})}},8081:function(e,n,t){t.d(n,{Z:function(){return f}});var r,a=t(8683),c=t(168),o=t(6444),u=t(6048),s=t.n(u),i=(0,o.ZP)(s())(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  margin: 10px 0;\n  font-size: 18px;\n  .selected {\n    color: white;\n    background-color: orange;\n  }\n\n  li {\n    list-style-type: none;\n\n    border: 1px solid orange;\n    border-radius: 7px;\n    &:hover {\n      background-color: #fff555;\n      color: #000;\n    }\n  }\n  a {\n    display: block;\n    padding: 5px 10px;\n    cursor: pointer;\n  }\n"]))),p=t(3061),l=t(184);var f=function(e){var n=e.totalPages,t=e.setSearchParams,r=e.params,c=e.currentPage;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i,{breakLabel:"...",previousLabel:(0,l.jsx)(p.u1R,{}),nextLabel:(0,l.jsx)(p.hjJ,{}),onPageChange:function(e){t((0,a.Z)((0,a.Z)({},r),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:n,renderOnZeroPageCount:null,forcePage:c})})}},8407:function(e,n,t){t.d(n,{Df:function(){return u},M1:function(){return l},TP:function(){return i},qF:function(){return d},tx:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),o=t(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function u(e){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,o.get("/trending/movie/week",{params:{page:n}});case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n),e.prev=1,e.next=4,o.get(t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/credits"),e.prev=1,e.next=4,o.get(t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(n,"/reviews"),e.prev=1,e.next=4,o.get(t);case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(n),e.prev=1,e.next=4,o.get(r,{params:{page:t}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=126.75429d72.chunk.js.map