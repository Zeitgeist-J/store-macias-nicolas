(this["webpackJsonpstore-macias-nicolas"]=this["webpackJsonpstore-macias-nicolas"]||[]).push([[0],{48:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c.n(r),i=c(22),a=c.n(i),o=(c(48),c(13)),u="https://coding-challenge-api.aerolab.co",j=c(25),d=c.n(j);d.a.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk");var b=c(19),l=c(93),O=(c(70),function(e){var t=e.children;return Object(n.jsx)("div",{className:"badge row center",children:t})}),h=c.p+"static/media/aerolab-logo.40b78ac9.svg",x=c.p+"static/media/coin.1fc21bda.svg",m=(c(71),function(e){var t=e.user;return Object(n.jsxs)("div",{className:"bar-container row",children:[Object(n.jsx)("img",{src:h,alt:"kite",height:"36",width:"36"}),Object(n.jsx)("div",{className:"row",children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"bar-text center",children:t.name}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)(O,{children:[Object(n.jsx)("p",{className:"bar-text",children:t.points.toLocaleString()}),Object(n.jsx)("img",{src:x,alt:"coin",height:"24",width:"24"})]})})]}):Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(l.a,{})})})]})}),f=(c(72),function(){return Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("p",{className:"title",children:"Electronics"})})}),v=c(6),p=c.p+"static/media/buy-blue.13783e2a.svg",g=(c(73),function(e){var t=e.difference,c=e.hasEnough;return e.hasUser?c?Object(n.jsx)("img",{src:p,alt:"buy-blue",width:"42",height:"42"}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"remaining-container",children:[Object(n.jsxs)("p",{className:"amount-missing",children:["You need ",Math.abs(t).toLocaleString()]}),Object(n.jsx)("img",{src:x,alt:"coin",width:"20",height:"20"})]})}):Object(n.jsx)(l.a,{})}),N=c.p+"static/media/buy-white.3eddcc1e.svg",S=c(15),C=function(e){var t=e.number,c=e.separator,n=e.distance,r=c||",",s=n||3;return t.toString().split("").reverse().reduce((function(e,t,c,n){var i=c+1,a=i%s===0&&i<n.length;return["".concat(a?r:"").concat(t)].concat(Object(S.a)(e))}),[]).join("")},E=function(e){var t=e.number,c=e.separator,r=e.distance;if(!t||Number.isNaN(t))return Object(n.jsx)(n.Fragment,{});var s=C({number:t,separator:c,distance:r});return Object(n.jsx)(n.Fragment,{children:s})},w=c(16),I=(c(74),function(e){var t=e.cost,c=e.hasEnough,r=e.productId,s={Redeem:{text:"Redeem now",linkTo:"/redeem/".concat(r)},Coins:{text:"Get coins"}}[c?"Redeem":"Coins"];return Object(n.jsxs)("div",{className:"action-button-container",children:[Object(n.jsx)("div",{className:"img-block",children:Object(n.jsx)("img",{src:N,alt:"buy-white",width:"48",height:"48"})}),Object(n.jsx)("div",{className:"action-block",children:Object(n.jsxs)("div",{className:"value",children:[Object(n.jsx)("p",{children:Object(n.jsx)(E,{number:t})}),Object(n.jsx)("div",{className:"coin-container",children:Object(n.jsx)("img",{src:x,alt:"coin",height:"30",width:"30"})})]})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)(w.b,{to:s.linkTo,children:Object(n.jsx)("button",{className:"action-button",onClick:function(){return console.warn("click")},children:s.text})})})]})}),y=function(e){return function(t){return Object(n.jsx)(b.b.Consumer,{children:function(c){var r=c.store.getState().user;return Object(n.jsx)(e,Object(v.a)({user:r},t))}})}},k=(c(76),function(e){return function(t){return Object(n.jsx)("div",{className:"indicator-container",children:Object(n.jsx)(e,Object(v.a)({},t))})}}),T=(c(77),y(k((function(e){var t,c=e.cost,r=e.user,s=e.isHover,i=e.productId,a=(null!==(t=null===r||void 0===r?void 0:r.points)&&void 0!==t?t:0)-c,o=a>=0;return s?Object(n.jsx)(I,{cost:c,hasEnough:o,productId:i}):Object(n.jsx)(g,{hasEnough:o,hasUser:!!r,difference:a})})))),R=(c(78),function(e){var t=e.img,c=e.name,s=e.category,i=e.cost,a=e._id,u=e.avoidContainer,j=e.avoidTransition,d=Object(r.useState)(!1),b=Object(o.a)(d,2),l=b[0],O=b[1];return Object(n.jsxs)("div",{className:"product-container column center ".concat(!j&&"transition"),onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},children:[!u&&Object(n.jsx)(T,{cost:i,isHover:l,productId:a}),Object(n.jsx)("img",{className:"product-image",src:t.hdUrl,alt:"product-".concat(c),width:"230"}),Object(n.jsxs)("div",{className:"text-block column",children:[Object(n.jsx)("p",{className:"category",children:s}),Object(n.jsx)("p",{className:"name",children:c})]})]})}),U=(c(79),function(e){var t=e.products,c=void 0===t?[]:t;return Object(n.jsx)("div",{className:"product-list",children:c.map((function(e,t){return Object(n.jsx)(R,Object(v.a)({},e),"product-".concat(t))}))})}),F=c(21),J=c(41),L={user:null,products:[]},_=function(e){return{SET_USER:function(t){var c=t.user;return Object(v.a)(Object(v.a)({},e),{},{user:c})},SET_PRODUCTS:function(t){var c=t.products;return Object(v.a)(Object(v.a)({},e),{},{products:Object(S.a)(c)})},CLEAR_USER:function(){return Object(v.a)(Object(v.a)({},e),{},{user:null})}}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;console.log(t);var c=t.type,n=_(e),r=n[c];return r?r(t):e},D=Object(F.c)(B,Object(F.a)(J.a));c(80);var G=Object(b.c)(null,{getUser:function(){return function(e){var t="".concat(u,"/user/me");d.a.get(t).then((function(e){return e.data})).then((function(t){e(function(e){return{type:"SET_USER",user:e}}(t))})).catch((function(e){return console.log(e)}))}},getProducts:function(){return function(e){var t="".concat(u,"/products");d.a.get(t).then((function(e){return e.data})).then((function(t){e(function(e){return{type:"SET_PRODUCTS",products:e}}(t))})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.getUser,c=e.getProducts,s=Object(r.useState)(null),i=Object(o.a)(s,2),a=i[0],u=i[1],j=Object(r.useState)([]),d=Object(o.a)(j,2),b=d[0],l=d[1];return Object(r.useEffect)((function(){t(),c()}),[c,t]),Object(r.useEffect)((function(){return D.subscribe((function(){var e=D.getState().user,t=D.getState().products;u(e),l(t)}))}),[]),console.log(a),Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{user:a}),Object(n.jsx)(f,{}),Object(n.jsx)(U,{products:b})]})})),P=c(4),Q=c(3),M=(c(81),[{route:"/",exact:!0,Component:G},{route:"/redeem/:productId",Component:function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(null),a=Object(o.a)(i,2),u=a[0],j=a[1],d=Object(Q.g)().productId;return Object(r.useEffect)((function(){var e=D.getState(),t=e.products,c=Object(P.a)(e,["products"]),n=t.find((function(e){return e._id=d}));j(c.user),s(n)}),[d]),c?(console.log(c),Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{user:u}),Object(n.jsxs)("div",{className:"redem-container",children:[Object(n.jsx)("div",{className:"product-description",children:Object(n.jsxs)("div",{className:"card-description",children:[Object(n.jsx)(R,Object(v.a)(Object(v.a)({},c),{},{avoidContainer:!0,avoidTransition:!0})),Object(n.jsxs)("div",{className:"redeem-information",children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Redeem ",c.name]}),Object(n.jsxs)("p",{children:["You're about to spend ",C({number:c.cost})," in this product"]})]}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("h5",{children:"Do you want to continue?"}),Object(n.jsx)("button",{children:"Yes"}),Object(n.jsx)("button",{children:"No  "})]})]})]})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("button",{className:"return-button",children:"Go back"})})]})]})):Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(l.a,{})})}},{route:"/history",Component:function(){return Object(n.jsx)("h1",{children:"history"})}},{route:"/coins",Component:function(){return Object(n.jsx)("h1",{children:"coins"})}}]),Y=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q.b,{exact:!0,path:"/store-macias-nicolas",children:Object(n.jsx)(Q.a,{to:"/"})}),Object(n.jsx)(Q.b,{exact:!0,path:"/**",children:Object(n.jsx)(Q.a,{to:"/"})})]})},z=function(){return Object(n.jsxs)(Q.d,{children:[M.map((function(e,t){var c=e.route,r=e.exact,s=e.Component;return Object(n.jsx)(Q.b,{exact:!!r,path:c,children:Object(n.jsx)(s,{})},t)})),Object(n.jsx)(Y,{})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,94)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b.a,{store:D,children:Object(n.jsx)(w.a,{children:Object(n.jsx)(z,{})})})}),document.getElementById("root")),A()}},[[82,1,2]]]);
//# sourceMappingURL=main.7d3b2687.chunk.js.map