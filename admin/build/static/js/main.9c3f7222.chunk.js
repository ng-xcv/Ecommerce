(this.webpackJsonplamaadmin=this.webpackJsonplamaadmin||[]).push([[0],{314:function(e,t,s){},316:function(e,t,s){},454:function(e,t,s){},474:function(e,t,s){},475:function(e,t,s){},476:function(e,t,s){},477:function(e,t,s){},480:function(e,t,s){},481:function(e,t,s){},482:function(e,t,s){},483:function(e,t,s){},484:function(e,t,s){},485:function(e,t,s){},486:function(e,t,s){},487:function(e,t,s){},490:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(26),r=s.n(a),n=(s(314),s(15)),i=s.n(n),l=s(34),d=s(32),o=s(6),j=(s(316),s(535)),u=s(567),b=s(272),m=s(282),p=s(146),h=s(539),O=s(1);function x(e){var t=e.title,s=e.data,c=e.dataKey,a=e.grid;return Object(O.jsxs)("div",{className:"chart",children:[Object(O.jsx)("h3",{className:"chartTitle",children:t}),Object(O.jsx)(j.a,{width:"100%",aspect:4,children:Object(O.jsxs)(u.a,{data:s,children:[Object(O.jsx)(b.a,{dataKey:"name",stroke:"#5550bd"}),Object(O.jsx)(m.a,{type:"monotone",dataKey:c,stroke:"#5550bd"}),Object(O.jsx)(p.a,{}),a&&Object(O.jsx)(h.a,{stroke:"#e0dfdf",strokeDasharray:"5 5"})]})})]})}s(454);var f,N,g=s(540),v=s(543),w=s(198),I=s.n(w),S="https://ecommerce-api.faytek.net/api",y=null===(f=JSON.parse(localStorage.getItem("persist:root")))||void 0===f?void 0:f.user,k=void 0!==y?null===(N=JSON.parse(y))||void 0===N?void 0:N.currentUser:null,U=k?k.accessToken:null,L=I.a.create({baseURL:S}),F=I.a.create({baseURL:S,headers:{token:"Bearer ".concat(U)}});function C(){var e,t=Object(c.useState)([]),s=Object(o.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(0),l=Object(o.a)(n,2),j=l[0],u=l[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/orders/income");case 3:t=e.sent,r(t.data),u(100*t.data[1].total/t.data[0].total-100),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{className:"featured",children:[Object(O.jsxs)("div",{className:"featuredItem",children:[Object(O.jsx)("span",{className:"featuredTitle",children:"Orders"}),Object(O.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(O.jsx)("span",{className:"featuredMoney",children:null===(e=a[1])||void 0===e?void 0:e.total.toLocaleString()})," ","FCFA",Object(O.jsxs)("span",{className:"featuredMoneyRate",children:[Math.floor(j)," %",j<0?Object(O.jsx)(g.a,{className:"featuredIcon negative"}):Object(O.jsx)(v.a,{className:"featuredIcon"})]})]}),Object(O.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]}),Object(O.jsxs)("div",{className:"featuredItem",children:[Object(O.jsx)("span",{className:"featuredTitle",children:"Sales"}),Object(O.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(O.jsx)("span",{className:"featuredMoney",children:"4 415 "})," FCFA",Object(O.jsxs)("span",{className:"featuredMoneyRate",children:["-1.4 ",Object(O.jsx)(g.a,{className:"featuredIcon negative"})]})]}),Object(O.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]}),Object(O.jsxs)("div",{className:"featuredItem",children:[Object(O.jsx)("span",{className:"featuredTitle",children:"Cost"}),Object(O.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(O.jsx)("span",{className:"featuredMoney",children:"2 225 "})," FCFA",Object(O.jsxs)("span",{className:"featuredMoneyRate",children:["+2.4 ",Object(O.jsx)(v.a,{className:"featuredIcon"})]})]}),Object(O.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]})]})}s(474),s(475);var P=s(544);function T(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/users/?new=true");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{className:"widgetSm",children:[Object(O.jsx)("span",{className:"widgetSmTitle",children:"New Join Members"}),Object(O.jsx)("ul",{className:"widgetSmList",children:s.map((function(e){return Object(O.jsxs)("li",{className:"widgetSmListItem",children:[Object(O.jsx)("img",{src:e.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",alt:"",className:"widgetSmImg"}),Object(O.jsx)("div",{className:"widgetSmUser",children:Object(O.jsx)("span",{className:"widgetSmUsername",children:e.username})}),Object(O.jsxs)("button",{className:"widgetSmButton",children:[Object(O.jsx)(P.a,{className:"widgetSmIcon"}),"Display"]})]},e._id)}))})]})}s(476);var A=s(281);function M(){var e=function(e){var t=e.type;return Object(O.jsx)("button",{className:"widgetLgButton "+t,children:t})},t=Object(c.useState)([]),s=Object(o.a)(t,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/orders");case 3:t=e.sent,r(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)("div",{className:"widgetLg",children:[Object(O.jsx)("h3",{className:"widgetLgTitle",children:"Latest transactions"}),Object(O.jsxs)("table",{className:"widgetLgTable",children:[Object(O.jsxs)("tr",{className:"widgetLgTr",children:[Object(O.jsx)("th",{className:"widgetLgTh",children:"Order"}),Object(O.jsx)("th",{className:"widgetLgTh",children:"Date"}),Object(O.jsx)("th",{className:"widgetLgTh",children:"Amount"}),Object(O.jsx)("th",{className:"widgetLgTh",children:"Status"})]}),a.map((function(t){return Object(O.jsxs)("tr",{className:"widgetLgTr",children:[Object(O.jsx)("td",{className:"widgetLgUser",children:Object(O.jsx)("span",{className:"widgetLgName",children:t.userId})}),Object(O.jsx)("td",{className:"widgetLgDate",children:Object(A.a)(t.createdAt)}),Object(O.jsxs)("td",{className:"widgetLgAmount",children:["XOF ",t.amount]}),Object(O.jsx)("td",{className:"widgetLgStatus",children:Object(O.jsx)(e,{type:t.status})})]},t._id)}))]})]})}function D(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useMemo)((function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"]}),[]);return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/users/stats");case 3:e.sent.data.map((function(e){return a((function(t){return[].concat(Object(l.a)(t),[{name:r[e._id-1],"Active User":e.total}])}))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(C,{}),Object(O.jsx)(x,{data:s,title:"User Analytics",grid:!0,dataKey:"Active User"}),Object(O.jsxs)("div",{className:"homeWidgets",children:[Object(O.jsx)(T,{}),Object(O.jsx)(M,{})]})]})}var J=s(40),B=s(20),E=(s(477),s(114)),_=s(545),R=[{id:1,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:2,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:3,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:4,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:5,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:6,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:7,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:8,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:9,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:10,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"}];function K(){var e=Object(c.useState)(R),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)([]),n=Object(o.a)(r,2),l=n[0],j=n[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.get("/users/?new=true");case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=[{field:"_id",headerName:"ID",width:90},{field:"user",headerName:"User",width:200,renderCell:function(e){return Object(O.jsxs)("div",{className:"userListUser",children:[Object(O.jsx)("img",{className:"userListImg",src:e.row.avatar,alt:""}),e.row.username]})}},{field:"email",headerName:"Email",width:200},{field:"status",headerName:"Status",width:120},{field:"transaction",headerName:"Transaction Volume",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J.b,{to:"/user/"+e.row.id,children:Object(O.jsx)("button",{className:"userListEdit",children:"Edit"})}),Object(O.jsx)(_.a,{className:"userListDelete",onClick:function(){return t=e.row.id,void a(s.filter((function(e){return e.id!==t})));var t}})]})}}];return Object(O.jsx)("div",{className:"userList",children:Object(O.jsx)(E.a,{getRowId:function(e){return e._id},rows:l,disableSelectionOnClick:!0,columns:u,pageSize:8,checkboxSelection:!0})})}var $=s(548),z=s(549),Y=s(550),G=s(551),V=s(552),W=s(553);s(480);function X(){return Object(O.jsxs)("div",{className:"user",children:[Object(O.jsxs)("div",{className:"userTitleContainer",children:[Object(O.jsx)("h1",{className:"userTitle",children:"Edit User"}),Object(O.jsx)(J.b,{to:"/newUser",children:Object(O.jsx)("button",{className:"userAddButton",children:"Create"})})]}),Object(O.jsxs)("div",{className:"userContainer",children:[Object(O.jsxs)("div",{className:"userShow",children:[Object(O.jsxs)("div",{className:"userShowTop",children:[Object(O.jsx)("img",{src:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"",className:"userShowImg"}),Object(O.jsxs)("div",{className:"userShowTopTitle",children:[Object(O.jsx)("span",{className:"userShowUsername",children:"Anna Becker"}),Object(O.jsx)("span",{className:"userShowUserTitle",children:"Software Engineer"})]})]}),Object(O.jsxs)("div",{className:"userShowBottom",children:[Object(O.jsx)("span",{className:"userShowTitle",children:"Account Details"}),Object(O.jsxs)("div",{className:"userShowInfo",children:[Object(O.jsx)($.a,{className:"userShowIcon"}),Object(O.jsx)("span",{className:"userShowInfoTitle",children:"annabeck99"})]}),Object(O.jsxs)("div",{className:"userShowInfo",children:[Object(O.jsx)(z.a,{className:"userShowIcon"}),Object(O.jsx)("span",{className:"userShowInfoTitle",children:"10.12.1999"})]}),Object(O.jsx)("span",{className:"userShowTitle",children:"Contact Details"}),Object(O.jsxs)("div",{className:"userShowInfo",children:[Object(O.jsx)(Y.a,{className:"userShowIcon"}),Object(O.jsx)("span",{className:"userShowInfoTitle",children:"+1 123 456 67"})]}),Object(O.jsxs)("div",{className:"userShowInfo",children:[Object(O.jsx)(G.a,{className:"userShowIcon"}),Object(O.jsx)("span",{className:"userShowInfoTitle",children:"annabeck99@gmail.com"})]}),Object(O.jsxs)("div",{className:"userShowInfo",children:[Object(O.jsx)(V.a,{className:"userShowIcon"}),Object(O.jsx)("span",{className:"userShowInfoTitle",children:"New York | USA"})]})]})]}),Object(O.jsxs)("div",{className:"userUpdate",children:[Object(O.jsx)("span",{className:"userUpdateTitle",children:"Edit"}),Object(O.jsxs)("form",{className:"userUpdateForm",children:[Object(O.jsxs)("div",{className:"userUpdateLeft",children:[Object(O.jsxs)("div",{className:"userUpdateItem",children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("input",{type:"text",placeholder:"annabeck99",className:"userUpdateInput"})]}),Object(O.jsxs)("div",{className:"userUpdateItem",children:[Object(O.jsx)("label",{children:"Full Name"}),Object(O.jsx)("input",{type:"text",placeholder:"Anna Becker",className:"userUpdateInput"})]}),Object(O.jsxs)("div",{className:"userUpdateItem",children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"text",placeholder:"annabeck99@gmail.com",className:"userUpdateInput"})]}),Object(O.jsxs)("div",{className:"userUpdateItem",children:[Object(O.jsx)("label",{children:"Phone"}),Object(O.jsx)("input",{type:"text",placeholder:"+1 123 456 67",className:"userUpdateInput"})]}),Object(O.jsxs)("div",{className:"userUpdateItem",children:[Object(O.jsx)("label",{children:"Address"}),Object(O.jsx)("input",{type:"text",placeholder:"New York | USA",className:"userUpdateInput"})]})]}),Object(O.jsxs)("div",{className:"userUpdateRight",children:[Object(O.jsxs)("div",{className:"userUpdateUpload",children:[Object(O.jsx)("img",{className:"userUpdateImg",src:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:""}),Object(O.jsx)("label",{htmlFor:"file",children:Object(O.jsx)(W.a,{className:"userUpdateIcon"})}),Object(O.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]}),Object(O.jsx)("button",{className:"userUpdateButton",children:"Update"})]})]})]})]})]})}s(481);function H(){return Object(O.jsxs)("div",{className:"newUser",children:[Object(O.jsx)("h1",{className:"newUserTitle",children:"New User"}),Object(O.jsxs)("form",{className:"newUserForm",children:[Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("input",{type:"text",placeholder:"john"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Full Name"}),Object(O.jsx)("input",{type:"text",placeholder:"John Smith"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"email",placeholder:"john@gmail.com"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",placeholder:"password"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Phone"}),Object(O.jsx)("input",{type:"text",placeholder:"+1 123 456 78"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Address"}),Object(O.jsx)("input",{type:"text",placeholder:"New York | USA"})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Gender"}),Object(O.jsxs)("div",{className:"newUserGender",children:[Object(O.jsx)("input",{type:"radio",name:"gender",id:"male",value:"male"}),Object(O.jsx)("label",{for:"male",children:"Male"}),Object(O.jsx)("input",{type:"radio",name:"gender",id:"female",value:"female"}),Object(O.jsx)("label",{for:"female",children:"Female"}),Object(O.jsx)("input",{type:"radio",name:"gender",id:"other",value:"other"}),Object(O.jsx)("label",{for:"other",children:"Other"})]})]}),Object(O.jsxs)("div",{className:"newUserItem",children:[Object(O.jsx)("label",{children:"Active"}),Object(O.jsxs)("select",{className:"newUserSelect",name:"active",id:"active",children:[Object(O.jsx)("option",{value:"yes",children:"Yes"}),Object(O.jsx)("option",{value:"no",children:"No"})]})]}),Object(O.jsx)("button",{className:"newUserButton",children:"Create"})]})]})}s(482);var Q=s(43),q=s(117),Z=Object(q.b)({name:"product ",initialState:{products:[],isFetching:!1,error:!1},reducers:{getProductStart:function(e){e.isFetching=!0,e.error=!1},getProductSuccess:function(e,t){e.isFetching=!1,e.products=t.payload},getProductFailure:function(e){e.isFetching=!1,e.error=!0},deleteProductStart:function(e){e.isFetching=!0,e.error=!1},deleteProductSuccess:function(e,t){e.isFetching=!1,e.products.splice(e.products.findIndex((function(e){return e._id===t.payload})),1)},deleteProductFailure:function(e){e.isFetching=!1,e.error=!0},updateProductStart:function(e){e.isFetching=!0,e.error=!1},updateProductSuccess:function(e,t){e.isFetching=!1,e.products[e.products.findIndex((function(e){return e._id===t.payload.id}))]=t.payload.product},updateProductFailure:function(e){e.isFetching=!1,e.error=!0},addProductStart:function(e){e.isFetching=!0,e.error=!1},addProductSuccess:function(e,t){e.isFetching=!1,e.products.push(t.payload)},addProductFailure:function(e){e.isFetching=!1,e.error=!0}}}),ee=Z.actions,te=ee.getProductStart,se=ee.getProductSuccess,ce=ee.getProductFailure,ae=ee.deleteProductStart,re=ee.deleteProductSuccess,ne=ee.deleteProductFailure,ie=(ee.updateProductStart,ee.updateProductSuccess,ee.updateProductFailure,ee.addProductStart),le=ee.addProductSuccess,de=ee.addProductFailure,oe=Z.reducer,je=Object(q.b)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:function(e){e.isFetching=!0},loginSuccess:function(e,t){e.isFetching=!1,e.currentUser=t.payload},loginFailure:function(e){e.isFetching=!1,e.error=!0},logout:function(e){e.currentUser=null}}}),ue=je.actions,be=ue.loginStart,me=ue.loginSuccess,pe=ue.loginFailure,he=ue.logout,Oe=je.reducer,xe=function(){var e=Object(d.a)(i.a.mark((function e(t,s){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(be()),e.prev=1,e.next=4,L.post("/auth/login",s);case 4:c=e.sent,t(me(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(pe());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}(),fe=function(){var e=Object(d.a)(i.a.mark((function e(t){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te()),e.prev=1,e.next=4,L.get("/products");case 4:s=e.sent,t(se(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(ce());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(d.a)(i.a.mark((function e(t,s){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(ae());try{s(re(t))}catch(c){s(ne())}case 2:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),ge=function(){var e=Object(d.a)(i.a.mark((function e(t,s){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(ie()),e.prev=1,console.log(t),e.next=5,F.post("/products",t);case 5:c=e.sent,s(le(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s(de());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,s){return e.apply(this,arguments)}}();function ve(){var e=Object(Q.b)(),t=Object(Q.c)((function(e){return e.product.products}));Object(c.useEffect)((function(){fe(e)}),[e]);var s=[{field:"_id",headerName:"ID",width:220},{field:"product",headerName:"Product",width:200,renderCell:function(e){return Object(O.jsxs)("div",{className:"productListItem",children:[Object(O.jsx)("img",{className:"productListImg",src:e.row.img,alt:""}),e.row.title]})}},{field:"inStock",headerName:"Stock",width:200},{field:"price",headerName:"Price",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J.b,{to:"/product/"+t.row._id,children:Object(O.jsx)("button",{className:"productListEdit",children:"Edit"})}),Object(O.jsx)(_.a,{className:"productListDelete",onClick:function(){return s=t.row._id,void Ne(s,e);var s}})]})}}];return Object(O.jsx)("div",{className:"productList",children:Object(O.jsx)(E.a,{rows:t,disableSelectionOnClick:!0,columns:s,getRowId:function(e){return e._id},pageSize:8,checkboxSelection:!0})})}s(483);function we(){var e=Object(B.g)().pathname.split("/")[2],t=Object(c.useState)([]),s=Object(o.a)(t,2),a=s[0],r=s[1],n=Object(Q.c)((function(t){return t.product.products.find((function(t){return t._id===e}))})),j=Object(c.useMemo)((function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"]}),[]);return Object(c.useEffect)((function(){(function(){var t=Object(d.a)(i.a.mark((function t(){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.get("/orders/income?pid="+e);case 3:s=t.sent,s.data.sort((function(e,t){return e._id-t._id})).map((function(e){return r((function(t){return[].concat(Object(l.a)(t),[{name:j[e._id-1],Sales:e.total}])}))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e,j]),Object(O.jsxs)("div",{className:"product",children:[Object(O.jsxs)("div",{className:"productTitleContainer",children:[Object(O.jsx)("h1",{className:"productTitle",children:"Product"}),Object(O.jsx)(J.b,{to:"/newproduct",children:Object(O.jsx)("button",{className:"productAddButton",children:"Create"})})]}),Object(O.jsxs)("div",{className:"productTop",children:[Object(O.jsx)("div",{className:"productTopLeft",children:Object(O.jsx)(x,{data:a,dataKey:"Sales",title:"Sales Performance"})}),Object(O.jsxs)("div",{className:"productTopRight",children:[Object(O.jsxs)("div",{className:"productInfoTop",children:[Object(O.jsx)("img",{src:n.img,alt:"",className:"productInfoImg"}),Object(O.jsx)("span",{className:"productName",children:n.title})]}),Object(O.jsxs)("div",{className:"productInfoBottom",children:[Object(O.jsxs)("div",{className:"productInfoItem",children:[Object(O.jsx)("span",{className:"productInfoKey",children:"id:"}),Object(O.jsx)("span",{className:"productInfoValue",children:n._id})]}),Object(O.jsxs)("div",{className:"productInfoItem",children:[Object(O.jsx)("span",{className:"productInfoKey",children:"sales:"}),Object(O.jsx)("span",{className:"productInfoValue",children:"5123"})]}),Object(O.jsxs)("div",{className:"productInfoItem",children:[Object(O.jsx)("span",{className:"productInfoKey",children:"in stock:"}),Object(O.jsx)("span",{className:"productInfoValue",children:n.inStock})]})]})]})]}),Object(O.jsx)("div",{className:"productBottom",children:Object(O.jsxs)("form",{className:"productForm",children:[Object(O.jsxs)("div",{className:"productFormLeft",children:[Object(O.jsx)("label",{children:"Product Name"}),Object(O.jsx)("input",{type:"text",placeholder:n.title}),Object(O.jsx)("label",{children:"Product Description"}),Object(O.jsx)("input",{type:"text",placeholder:n.desc}),Object(O.jsx)("label",{children:"Price"}),Object(O.jsx)("input",{type:"text",placeholder:n.price}),Object(O.jsx)("label",{children:"In Stock"}),Object(O.jsxs)("select",{name:"inStock",id:"idStock",children:[Object(O.jsx)("option",{value:"true",children:"Yes"}),Object(O.jsx)("option",{value:"false",children:"No"})]})]}),Object(O.jsxs)("div",{className:"productFormRight",children:[Object(O.jsxs)("div",{className:"productUpload",children:[Object(O.jsx)("img",{src:n.img,alt:"",className:"productUploadImg"}),Object(O.jsx)("label",{for:"file",children:Object(O.jsx)(W.a,{})}),Object(O.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]}),Object(O.jsx)("button",{className:"productButton",children:"Update"})]})]})})]})}var Ie=s(16),Se=s(144),ye=(s(484),s(145)),ke=s(274),Ue=Object(ke.a)({apiKey:"AIzaSyBLakipGafLoVRA33h6CA5fMGXb4otjKiw",authDomain:"ecommerce-mern-stack-app.firebaseapp.com",projectId:"ecommerce-mern-stack-app",storageBucket:"ecommerce-mern-stack-app.appspot.com",messagingSenderId:"595062226616",appId:"1:595062226616:web:24123a84152d16c8b03e4d"});function Le(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),n=Object(o.a)(r,2),i=n[0],l=n[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),u=j[0],b=j[1],m=Object(Q.b)(),p=Object(B.h)(),h=function(e){a((function(t){return Object(Se.a)(Object(Se.a)({},t),{},Object(Ie.a)({},e.target.name,e.target.value))}))};return Object(O.jsxs)("div",{className:"newProduct",children:[Object(O.jsx)("h1",{className:"addProductTitle",children:"New Product"}),Object(O.jsxs)("form",{className:"addProductForm",children:[Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Image"}),Object(O.jsx)("input",{type:"file",id:"file",onChange:function(e){return l(e.target.files[0])}})]}),Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{name:"title",type:"text",placeholder:"Apple Airpods",onChange:h})]}),Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Description"}),Object(O.jsx)("input",{name:"desc",type:"text",placeholder:"description...",onChange:h})]}),Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Price"}),Object(O.jsx)("input",{name:"price",type:"number",placeholder:"100",onChange:h})]}),Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Categories"}),Object(O.jsx)("input",{type:"text",name:"categories",value:u,placeholder:"jeans,skirts",onChange:function(e){b(e.target.value.split(","))}})]}),Object(O.jsxs)("div",{className:"addProductItem",children:[Object(O.jsx)("label",{children:"Stock"}),Object(O.jsxs)("select",{name:"inStock",onChange:h,children:[Object(O.jsx)("option",{value:"true",children:"Yes"}),Object(O.jsx)("option",{value:"false",children:"No"})]})]}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault();var t=(new Date).getTime()+i.name,c=Object(ye.b)(Ue),a=Object(ye.c)(c,t),r=Object(ye.d)(a,i);r.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(ye.a)(r.snapshot.ref).then((function(e){var t=Object(Se.a)(Object(Se.a)({},s),{},{img:e});ge(t,m)&&p("/products")}))}))},className:"addProductButton",children:"Create'"})]})]})}var Fe=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(o.a)(r,2),i=n[0],l=n[1],d=Object(Q.b)(),j=Object(B.h)();return Object(O.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)("input",{style:{padding:10,marginBottom:20},type:"text",placeholder:"username",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("input",{style:{padding:10,marginBottom:20},type:"password",placeholder:"password",onChange:function(e){return l(e.target.value)}}),Object(O.jsx)("button",{onClick:function(e){e.preventDefault(),xe(d,{username:s,password:i}).then(j("/"))},style:{padding:10,width:100},children:"Login"})]})},Ce=(s(485),s(554)),Pe=s(555),Te=s(556),Ae=s(557),Me=s(558),De=s(559),Je=s(560),Be=s(561),Ee=s(562),_e=s(563);function Re(){return Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsxs)("div",{className:"sidebarWrapper",children:[Object(O.jsxs)("div",{className:"sidebarMenu",children:[Object(O.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(O.jsxs)("ul",{className:"sidebarList",children:[Object(O.jsx)(J.b,{to:"/",className:"link",children:Object(O.jsxs)("li",{className:"sidebarListItem active",children:[Object(O.jsx)(Ce.a,{className:"sidebarIcon"}),"Accueil"]})}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Pe.a,{className:"sidebarIcon"}),"Analytics"]}),Object(O.jsx)(J.b,{to:"/orders",className:"link",children:Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Te.a,{className:"sidebarIcon"}),"Orders"]})})]})]}),Object(O.jsxs)("div",{className:"sidebarMenu",children:[Object(O.jsx)("h3",{className:"sidebarTitle",children:"Quick Menu"}),Object(O.jsxs)("ul",{className:"sidebarList",children:[Object(O.jsx)(J.b,{to:"/users",className:"link",children:Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)($.a,{className:"sidebarIcon"}),"Users"]})}),Object(O.jsx)(J.b,{to:"/products",className:"link",children:Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Ae.a,{className:"sidebarIcon"}),"Products"]})}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Me.a,{className:"sidebarIcon"}),"Transactions"]}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(De.a,{className:"sidebarIcon"}),"Reports"]})]})]}),Object(O.jsxs)("div",{className:"sidebarMenu",children:[Object(O.jsx)("h3",{className:"sidebarTitle",children:"Notifications"}),Object(O.jsxs)("ul",{className:"sidebarList",children:[Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(G.a,{className:"sidebarIcon"}),"Mail"]}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Je.a,{className:"sidebarIcon"}),"Feedback"]}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Be.a,{className:"sidebarIcon"}),"Messages"]})]})]}),Object(O.jsxs)("div",{className:"sidebarMenu",children:[Object(O.jsx)("h3",{className:"sidebarTitle",children:"Staff"}),Object(O.jsxs)("ul",{className:"sidebarList",children:[Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Ee.a,{className:"sidebarIcon"}),"Manage"]}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(Pe.a,{className:"sidebarIcon"}),"Analytics"]}),Object(O.jsxs)("li",{className:"sidebarListItem",children:[Object(O.jsx)(_e.a,{className:"sidebarIcon"}),"Reports"]})]})]})]})})}var Ke,$e,ze,Ye=s(174),Ge=(s(486),s(564)),Ve=s(565),We=s(175),Xe=We.a.div(Ke||(Ke=Object(Ye.a)(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]))),He=We.a.span($e||($e=Object(Ye.a)(["\n   margin-left: 10px;\n   text-transform: capitalize;\n"]))),Qe=We.a.span(ze||(ze=Object(Ye.a)(["\n   font-weight: bold;\n"])));function qe(){var e=Object(Q.c)((function(e){return e.user.currentUser})),t=Object(B.h)(),s=Object(Q.b)();return Object(O.jsx)("div",{className:"topbar",children:Object(O.jsxs)("div",{className:"topbarWrapper",children:[Object(O.jsx)("div",{className:"topLeft",children:Object(O.jsxs)(Xe,{children:[Object(O.jsx)("img",{src:e.img,alt:"",className:"topAvatar"}),Object(O.jsxs)(He,{children:["Hi, ",Object(O.jsx)(Qe,{children:e.username})]})]})}),Object(O.jsx)("div",{className:"topCenter",children:Object(O.jsx)("span",{className:"logo",children:"NG Admin"})}),Object(O.jsxs)("div",{className:"topRight",children:[Object(O.jsxs)("div",{className:"topbarIconContainer",children:[Object(O.jsx)(Ge.a,{}),Object(O.jsx)("span",{className:"topIconBadge",children:"2"})]}),Object(O.jsx)("div",{title:"Logout",className:"topbarIconContainer",children:Object(O.jsx)(Ve.a,{onClick:function(){!function(e){e(he())}(s),t("/login")}})})]})]})})}var Ze=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(qe,{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(Re,{}),Object(O.jsx)(B.b,{})]})]})};s(487);function et(){var e=Object(Q.b)(),t=Object(c.useState)(),s=Object(o.a)(t,2),a=s[0],r=s[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.get("/orders");case 3:t=e.sent,r(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var n=[{field:"_id",headerName:"ID",width:220},{field:"userId",headerName:"User ID",width:220},{field:"address",headerName:"Address",width:200},{field:"amount",headerName:"Amount",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J.b,{to:"/product/"+t.row._id,children:Object(O.jsx)("button",{className:"productListEdit",children:"Edit"})}),Object(O.jsx)(_.a,{className:"productListDelete",onClick:function(){return s=t.row._id,void Ne(s,e);var s}})]})}}];return Object(O.jsx)("div",{className:"productList",children:Object(O.jsx)(E.a,{rows:a,disableSelectionOnClick:!0,columns:n,getRowId:function(e){return e._id},pageSize:8,checkboxSelection:!0})})}var tt=function(){var e=Object(Q.c)((function(e){return e.user.currentUser})),t=e?e.isAdmin:null;return Object(O.jsx)(J.a,{children:Object(O.jsxs)(B.e,{children:[Object(O.jsx)(B.c,{path:"/login",element:t?Object(O.jsx)(B.a,{to:"/"}):Object(O.jsx)(Fe,{})}),t?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(B.c,{exact:!0,path:"/",element:Object(O.jsx)(Ze,{}),children:[Object(O.jsx)(B.c,{path:"",element:Object(O.jsx)(D,{})}),Object(O.jsx)(B.c,{path:"users",element:Object(O.jsx)(K,{})}),Object(O.jsx)(B.c,{path:"user/:userId",element:Object(O.jsx)(X,{})}),Object(O.jsx)(B.c,{path:"newUser",element:Object(O.jsx)(H,{})}),Object(O.jsx)(B.c,{path:"products",element:Object(O.jsx)(ve,{})}),Object(O.jsx)(B.c,{path:"orders",element:Object(O.jsx)(et,{})}),Object(O.jsx)(B.c,{path:"product/:productId",element:Object(O.jsx)(we,{})}),Object(O.jsx)(B.c,{path:"newproduct",element:Object(O.jsx)(Le,{})})]})}):Object(O.jsx)(B.c,{path:"",element:Object(O.jsx)(B.a,{to:"/login"})})]})})},st=s(50),ct=s(78),at=s(278),rt={key:"root",version:1,storage:s.n(at).a},nt=Object(st.b)({user:Oe,product:oe}),it=Object(ct.g)(rt,nt),lt=Object(q.a)({reducer:it,middleware:function(e){return e({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})}}),dt=Object(ct.h)(lt),ot=s(279);r.a.render(Object(O.jsx)(Q.a,{store:lt,children:Object(O.jsx)(ot.a,{loading:null,persistor:dt,children:Object(O.jsx)(tt,{})})}),document.getElementById("root"))}},[[490,1,2]]]);
//# sourceMappingURL=main.9c3f7222.chunk.js.map