"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{913:function(e,t,n){n.d(t,{$9:function(){return s},$i:function(){return c},AH:function(){return u},YS:function(){return i},nJ:function(){return o}});var r="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk1OTYzNjJlMzI0NzAyZWNjOTFjNGZlMmRiZWUyZCIsInN1YiI6IjY0ODE4NGEyZDJiMjA5MDBhZDNhZDIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2NfqXFUu6Bu9TfKlR-ML2346sf6pL6vFGjUN74YPvxg",a="https://api.themoviedb.org/3",c={method:"GET",url:"".concat(a,"/trending/movie/day"),params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}},o=function(e){return{method:"GET",url:"".concat(a,"/movie/").concat(e),params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},i=function(e){return{method:"GET",url:"".concat(a,"/movie/").concat(e,"/credits"),headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},u=function(e){return{method:"GET",url:"".concat(a,"/movie/").concat(e,"/reviews"),headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}},s=function(e){return{method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:e},headers:{accept:"application/json",Authorization:"Bearer ".concat(r)}}}},484:function(e,t,n){n.d(t,{X:function(){return o}});var r=n(689),a=n(87),c=n(184),o=function(e){var t=e.Movies,n=(0,r.TH)();return null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))}},983:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),o=n.n(c),i=n(791),u=n(243),s=n(484),h=n(913),l=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.request(h.$i);case 3:t=e.sent,n=t.data,c(n.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{children:(0,l.jsx)(s.X,{Movies:n})})})}}}]);
//# sourceMappingURL=983.2d79a06a.chunk.js.map