(this["webpackJsonpstore-macias-nicolas"]=this["webpackJsonpstore-macias-nicolas"]||[]).push([[0],{38:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){},64:function(t,e,c){},65:function(t,e,c){},66:function(t,e,c){},67:function(t,e,c){},68:function(t,e,c){},69:function(t,e,c){"use strict";c.r(e);var n=c(2),r=c(0),s=c.n(r),i=c(15),a=c.n(i),o=(c(38),c(14)),u="https://coding-challenge-api.aerolab.co",j=c(17),l=c.n(j);l.a.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk");var d=c(8),b=c(80),O=(c(61),function(t){var e=t.children;return Object(n.jsx)("div",{className:"badge row center",children:e})}),h=c.p+"static/media/aerolab-logo.0a8fb170.svg",f=c.p+"static/media/coin.b8bc711d.svg",m=(c(62),function(t){var e=t.user;return Object(n.jsxs)("div",{className:"bar-container row",children:[Object(n.jsx)("img",{src:h,alt:"kite",height:"36",width:"36"}),Object(n.jsx)("div",{className:"row",children:e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"bar-text center",children:e.name}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)(O,{children:[Object(n.jsx)("p",{className:"bar-text",children:e.points.toLocaleString()}),Object(n.jsx)("img",{src:f,alt:"coin",height:"24",width:"24"})]})})]}):Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(b.a,{})})})]})}),g=(c(63),function(){return Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("p",{className:"title",children:"Electronics"})})}),x=c(4),v=function(t){return function(e){return Object(n.jsx)(d.b.Consumer,{children:function(c){var r=c.store.getState().user;return Object(n.jsx)(t,Object(x.a)({user:r},e))}})}},p=(c(64),function(t){return function(e){return Object(n.jsx)("div",{className:"indicator-container",children:Object(n.jsx)(t,Object(x.a)({},e))})}}),N=c.p+"static/media/buy-blue.c5c4f01c.svg",S=(c(65),v(p((function(t){var e,c=t.cost,r=t.user,s=(null!==(e=null===r||void 0===r?void 0:r.points)&&void 0!==e?e:0)-c;return r?s>=0?Object(n.jsx)("img",{src:N,alt:"buy-blue",width:"42",height:"42"}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"remaining-container",children:[Object(n.jsxs)("p",{className:"amount-missing",children:["You need ",Math.abs(s).toLocaleString()]}),Object(n.jsx)("img",{src:f,alt:"coin",width:"20",height:"20"})]})}):Object(n.jsx)(b.a,{})})))),E=(c(66),function(t){var e=t.img,c=t.name,r=t.category,s=t.cost;return Object(n.jsxs)("div",{className:"product-container column center",children:[Object(n.jsx)(S,{cost:s}),Object(n.jsx)("img",{className:"product-image",src:e.hdUrl,alt:"product-".concat(c),width:"230"}),Object(n.jsxs)("div",{className:"text-block column",children:[Object(n.jsx)("p",{className:"category",children:r}),Object(n.jsx)("p",{className:"name",children:c})]})]})}),I=(c(67),function(t){var e=t.products;return Object(n.jsx)("div",{className:"product-list",children:e.map((function(t,e){return Object(n.jsx)(E,Object(x.a)({},t),"product-".concat(e))}))})}),w=c(13),y=c(30),T=c(9),U={user:null,products:[]},C=function(t){return{SET_USER:function(e){var c=e.user;return Object(x.a)(Object(x.a)({},t),{},{user:c})},SET_PRODUCTS:function(e){var c=e.products;return Object(x.a)(Object(x.a)({},t),{},{products:Object(T.a)(c)})},CLEAR_USER:function(){return Object(x.a)(Object(x.a)({},t),{},{user:null})}}},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;console.log(e);var c=e.type,n=C(t),r=n[c];return r?r(e):t},R=Object(w.c)(k,Object(w.a)(y.a));c(68);var J=Object(d.c)(null,{getUser:function(){return function(t){var e="".concat(u,"/user/me");l.a.get(e).then((function(t){return t.data})).then((function(e){t(function(t){return{type:"SET_USER",user:t}}(e))})).catch((function(t){return console.log(t)}))}},getProducts:function(){return function(t){var e="".concat(u,"/products");l.a.get(e).then((function(t){return t.data})).then((function(e){t(function(t){return{type:"SET_PRODUCTS",products:t}}(e))})).catch((function(t){return console.log(t)}))}}})((function(t){var e=t.getUser,c=t.getProducts,s=Object(r.useState)(null),i=Object(o.a)(s,2),a=i[0],u=i[1],j=Object(r.useState)([]),l=Object(o.a)(j,2),d=l[0],b=l[1];return Object(r.useEffect)((function(){e(),c()}),[c,e]),Object(r.useEffect)((function(){return R.subscribe((function(){var t=R.getState().user,e=R.getState().products;u(t),b(e)}))}),[]),console.log(a),Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{user:a}),Object(n.jsx)(g,{}),Object(n.jsx)(I,{products:d})]})})),B=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,81)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),n(t),r(t),s(t),i(t)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d.a,{store:R,children:Object(n.jsx)(J,{})})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.55a55238.chunk.js.map