"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{1913:function(n,e,t){t.d(e,{$9:function(){return s},$i:function(){return a},AH:function(){return u},YS:function(){return i},nJ:function(){return c}});var r="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk1OTYzNjJlMzI0NzAyZWNjOTFjNGZlMmRiZWUyZCIsInN1YiI6IjY0ODE4NGEyZDJiMjA5MDBhZDNhZDIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2NfqXFUu6Bu9TfKlR-ML2346sf6pL6vFGjUN74YPvxg",o="https://api.themoviedb.org/3",a={method:"GET",url:"".concat(o,"/trending/movie/day"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}},c=function(n){return{method:"GET",url:"".concat(o,"/movie/").concat(n),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},i=function(n){return{method:"GET",url:"".concat(o,"/movie/").concat(n,"/credits"),headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},u=function(n){return{method:"GET",url:"".concat(o,"/movie/").concat(n,"/reviews"),headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},s=function(n){return{method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:n},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}}},5569:function(n,e,t){t.d(e,{k:function(){return o}});var r=t(184),o=function(){return(0,r.jsxs)("p",{children:["Sorry, something went wrong. ",(0,r.jsx)("br",{})," Please, try again later."]})}},5665:function(n,e,t){t.d(e,{X:function(){return s}});var r,o=t(7689),a=t(1087),c=t(168),i=t(6444).ZP.li(r||(r=(0,c.Z)(["\n  margin-bottom: 8px;\n  color: black;\n  font-size: 16px;\n  transition: transform 300ms ease;\n\n  &:hover {\n    color: #8e26bb82;\n  }\n"]))),u=t(184),s=function(n){var e=n.Movies,t=(0,o.TH)();return null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.original_title;return(0,u.jsx)(i,{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))}},1693:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,o=t(5861),a=t(9439),c=t(7757),i=t.n(c),u=t(2791),s=t(1243),h=t(5665),l=t(1913),p=t(168),f=t(6444).ZP.h1(r||(r=(0,p.Z)(["\nfont-size: 30px;\nfont-weight: 500;\nmargin-bottom: 30px;\n"]))),d=t(5569),m=t(184),v=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],c=(0,u.useState)(!1),p=(0,a.Z)(c,2),v=p[0],j=p[1];return(0,u.useEffect)((function(){(0,o.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.request(l.$i);case 3:e=n.sent,t=e.data,r(t.results),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),j(!0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{children:"Trending today"}),v&&(0,m.jsx)(d.k,{}),(0,m.jsx)("ul",{children:(0,m.jsx)(h.X,{Movies:t})})]})}}}]);
//# sourceMappingURL=693.17bb314f.chunk.js.map