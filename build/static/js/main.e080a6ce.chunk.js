(this.webpackJsonpbwd=this.webpackJsonpbwd||[]).push([[1],{273:function(e,t,a){e.exports=a(487)},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(267);a.n(n).a.config();var r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).nodeApiLink||"https://vietcourse.herokuapp.com"},487:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=a(21),l=a(10),i=function(){var e=Object(l.e)();return Object(n.useEffect)((function(){return e.listen((function(){window.scrollTo(0,0)}))}),[e]),null},u=a(513),m=a(514),d=a(517),f=a(19),p=a(174),b=a(523),E=a(515),h=a(51),v=a(508),y=a(512),O=function(e){var t=e.data,a=t.title,n=t.description;return r.a.createElement(v.a,{button:!0},r.a.createElement(y.a,{primary:a,secondary:n}))},N=function(){var e=Object(s.c)((function(e){return e.userStatus})),t=e.userInfo&&e.userInfo._id,a=Object(h.useFirestore)();Object(h.useFirestoreConnect)((function(){return[{collection:"noticfications",where:[["userId","==",t]],queryParams:["orderByChild=Date"]}]}));var c=Object(s.c)((function(e){var t=e.firestore.ordered;return t.noticfications&&Object.values(t.noticfications)})),o=c&&c.reduce((function(e,t){return t.seen?e:e+1}),0),l=Object(n.useState)(null),i=Object(p.a)(l,2),d=i[0],f=i[1],v=Boolean(d);return r.a.createElement("div",null,r.a.createElement(u.a,{"aria-label":"noticfication",onClick:function(e){f(e.currentTarget)}},r.a.createElement(m.a,{badgeContent:o,color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(E.a,null))),r.a.createElement(b.a,{open:v,anchorEl:d,onClose:function(){f(null),a.collection("noticfications").where("seen","==",!1).get().then((function(e){var t=a.batch();e.docs.forEach((function(e){t.update(e.ref,{seen:!0})})),t.commit()}))},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c&&c.map((function(e){return r.a.createElement(O,{data:e})}))))},g=function(e){var t=Object(s.c)((function(e){return e.userStatus}));return r.a.createElement("header",{className:"".concat(e.addStyle," w-100")},r.a.createElement("div",{className:" d-flex justify-content-be align-content-center align-items-center header mx-auto p-2"},r.a.createElement(f.b,{to:"/",className:"logo"},"VietCourses"),r.a.createElement("div",{className:"dropdown subject-dropdown"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown"},"Danh m\u1ee5c"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Nghi\xean c\u1ee9u khoa h\u1ecdc"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"C\xf4ng ngh\u1ec7 th\xf4ng tin"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Thi\u1ebft k\u1ebf \u0111\u1ed3 h\u1ecda"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Marketing-Truy\u1ec1n th\xf4ng"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Kinh doanh"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Ngo\u1ea1i ng\u1eef"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"\xc2m nh\u1ea1c"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Khoa h\u1ecdc d\u1eef li\u1ec7u"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Khoa h\u1ecdc m\xe1y t\xednh"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"S\u1ee9c kh\u1ecfe"))),r.a.createElement("form",{className:"seach-form d-inline-flex align-content-center"},r.a.createElement("input",{type:"text",name:"",placeholder:"T\xecm ki\u1ebfm..."}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))),t.userInfo?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(f.b,{to:"/cart"},r.a.createElement(u.a,{"aria-label":"cart"},r.a.createElement(m.a,{badgeContent:t.userInfo.cart.length,color:"secondary",anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(d.a,null))))):""))},w=a(28),j=a.n(w),S=a(88),k=a(524);function x(){var e=Object(s.c)((function(e){return e.userStatus.userInfo})),t=Object(s.b)();return Object(n.useEffect)((function(){var e=document.getElementById("userName"),t=document.querySelector("#userName span");if(e&&t)for(;t.style.width>e.style.width;)t.style.width=parseInt(t.style.width)-1+"px";return function(){}}),[]),r.a.createElement("nav",{className:"user-nav position-fixed h-100"},r.a.createElement("div",{className:"bg-gradient"},r.a.createElement("div",{className:"navbar d-flex flex-column p-0"},r.a.createElement("div",null,r.a.createElement("div",{className:"userbrief"},r.a.createElement(k.a,{style:{width:70,height:70},src:e.userPic}),r.a.createElement("div",{className:"user-name",id:"userName"},r.a.createElement("span",null,e.name)))),r.a.createElement("div",{className:"nav-n-form"},r.a.createElement("div",{className:""},r.a.createElement("ul",{className:"navbar-nav d-flex flex-column navbar-expand"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),r.a.createElement("span",{className:"link-text"},"Home"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{to:"/inprogress",className:"nav-link"},r.a.createElement("i",{className:"fas fa-book"}),r.a.createElement("span",{className:"link-text"},"My course"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{to:"/completed",className:"nav-link"},r.a.createElement("i",{className:"fas fa-history"}),r.a.createElement("span",{className:"link-text"},"Completed"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{onClick:function(){t(Object(S.e)())},className:"nav-link"},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",{className:"link-text"},"Log out")))))))),r.a.createElement("div",{className:"myshadow"}))}var _=a(91),I=a.n(_);function R(){return Object(n.useEffect)((function(){return I()(document).scroll((function(){var e=I()(this).scrollTop(),t=I()("#secondary-seach");e>72?t.css("opacity",1):t.css("opacity",0)})),function(){}}),[]),r.a.createElement("nav",{className:"guest-nav"},r.a.createElement("div",{className:"bg-gradient "},r.a.createElement("div",{className:"navbar d-flex justify-content-between mx-auto p-0 "},r.a.createElement("div",{className:"nav-n-form"},r.a.createElement("div",{className:"d-flex flex-row justify-content-between"},r.a.createElement("ul",{className:"navbar-nav navbar-expand"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(f.b,{to:"/",className:"nav-link"},"Trang ch\u1ee7")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(f.b,{to:"/partner",className:"nav-link"},"C\xe1c b\xean h\u1ee3p t\xe1c"))),r.a.createElement("form",{className:"seach-form align-content-center mx-3",id:"secondary-seach"},r.a.createElement("input",{type:"text",name:"",placeholder:"T\xecm ki\u1ebfm..."}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))))),r.a.createElement("div",{className:"d-flex justify-content-around btn-grp"},r.a.createElement("button",{className:"flex-fill button btn-blue",id:"login"},"\u0110\u0103ng nh\u1eadp"),r.a.createElement("button",{className:"flex-fill button btn-outline",id:"signup"},"\u0110\u0103ng k\xfd")))),r.a.createElement("div",{className:"myshadow"}))}var C=a(518),T=a(519),U=a(520),z=function(e){var t=e.children,a=e.window,n=Object(C.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(3),right:e.spacing(3)}}}))(),c=Object(T.a)({target:a?a():void 0,disableHysteresis:!0,threshold:300});return r.a.createElement("div",null,r.a.createElement(U.a,{in:c},r.a.createElement("div",{onClick:function(e){var t=document.querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t)))},D=a(521),L=a(522),P=a(268),G=a.n(P),A=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,567))})),J=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,586))})),K=Object(n.lazy)((function(){return a.e(13).then(a.bind(null,578))})),B=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,585))})),F=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,579))})),V=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,580))})),X=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,581))})),q=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,582))})),H=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,583))}));j.a.defaults.withCredentials=!0;var Q=function(e){var t=Object(s.c)((function(e){return e.userStatus})).auth,a=Object(s.b)();return Object(n.useEffect)((function(){return a(Object(S.b)()),function(){}}),[]),r.a.createElement("div",null,r.a.createElement(D.a,{style:{position:"absolute"},id:"back-to-top-anchor"}),t?r.a.createElement(g,{addStyle:"position-sticky sticky-top"}):r.a.createElement(g,{addStyle:""}),t?r.a.createElement(x,null):r.a.createElement(R,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(l.a,{exact:!0,path:"/",component:B}),r.a.createElement(l.a,{path:"/home",component:A}),r.a.createElement(l.a,{path:"/detail/:id",component:J}),r.a.createElement(l.a,{path:"/partner",component:K}),r.a.createElement(l.a,{path:"/linhvuc",component:F}),r.a.createElement(l.a,{path:"/cart",component:q}),r.a.createElement(l.a,{path:"/completed",component:V}),r.a.createElement(l.a,{path:"/inprogress",component:X}),r.a.createElement(H,null)),r.a.createElement(i,null),r.a.createElement(z,e,r.a.createElement(L.a,{color:"secondary",size:"medium","aria-label":"scroll back to top"},r.a.createElement(G.a,null))))},M=a(17),W=a(41),Z=a(5),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{auth:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.a:return{isLogged:!1};case Z.d:case Z.j:case Z.g:return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case Z.e:case Z.k:return Object(M.a)(Object(M.a)({},e),{},{auth:!0,loading:!1,userInfo:t.payload});case Z.c:case Z.i:return{auth:!1,loading:!1,error:t.payload};case Z.h:case Z.f:return{auth:!1};case Z.b:return Object(M.a)(Object(M.a)({},e),{},{userInfo:Object(M.a)(Object(M.a)({},e.userInfo),{},{cart:t.payload})});default:return e}},$=a(66),ee=a(120),te=a.n(ee);a(482),a(485);te.a.initializeApp({apiKey:"AIzaSyDAPCrU4-RmwsVyr6kB5PPkJrqZbr_9--E",authDomain:"vietcourse-1737b.firebaseapp.com",databaseURL:"https://vietcourse-1737b.firebaseio.com",projectId:"vietcourse-1737b",storageBucket:"vietcourse-1737b.appspot.com",messagingSenderId:"670782110772",appId:"1:670782110772:web:c2c5cafe0a5ba3104b1e61",measurementId:"G-Q37XK59JD8"}),te.a.firestore();var ae=te.a,ne=Object(W.c)({userStatus:Y,firestore:$.firestoreReducer,firebase:h.firebaseReducer}),re=a(269),ce=a(39),oe=a.n(ce).a.getJSON("userInfo")||null,se=oe?{userStatus:{auth:!0,userInfo:Object(M.a)({},oe)}}:{userStatus:{auth:!1}},le=Object(W.e)(ne,se,Object(W.d)(Object(W.a)(re.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ie={firebase:ae,config:{userProfile:"user"},dispatch:le.dispatch,createFirestoreInstance:$.createFirestoreInstance};o.a.render(r.a.createElement(s.a,{store:le},r.a.createElement(h.ReactReduxFirebaseProvider,ie,r.a.createElement(f.a,null,r.a.createElement(Q,null)))),document.getElementById("root"))},5:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"j",(function(){return s})),a.d(t,"k",(function(){return l})),a.d(t,"i",(function(){return i})),a.d(t,"g",(function(){return u})),a.d(t,"h",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return f}));var n="LOGOUT",r="USER_LOGIN_REQUEST",c="USER_LOGIN_SUCCESS",o="USER_LOGIN_ERROR",s="USER_SIGNUP_REQUEST",l="USER_SIGNUP_SUCCESS",i="USER_SIGNUP_ERROR",u="USER_LOGOUT_REQUEST",m="USER_LOGOUT_SUCCESS",d="USER_LOGOUT_ERROR",f="USER_ADD_CART_ITEM"},88:function(e,t,a){"use strict";a.d(t,"g",(function(){return p})),a.d(t,"h",(function(){return v})),a.d(t,"b",(function(){return h})),a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return E})),a.d(t,"e",(function(){return y})),a.d(t,"a",(function(){return O})),a.d(t,"f",(function(){return N}));var n=a(16),r=a.n(n),c=a(17),o=a(37),s=a(28),l=a.n(s),i=a(39),u=a.n(i),m=a(5),d=a(66),f=a(38),p=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:m.d,payload:{userName:e,password:t}}),a.prev=1,a.next=4,l.a.post("".concat(f.a,"/api/user/auth/local"),{userName:e,password:t},{withCredentials:!0});case 4:o=a.sent,s=o.data,console.log(s),n({type:m.e,payload:Object(c.a)({},s)}),u.a.set("userInfo",JSON.stringify(s)),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),n({type:m.c,payload:a.t0}),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:m.d}),t.next=4,l.a.post("".concat(f.a,"/api/user/auth/google"),{access_token:e});case 4:n=t.sent,o=n.data,a({type:m.e,payload:Object(c.a)({},o)}),u.a.set("userInfo",JSON.stringify(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:m.c,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:m.d}),t.next=4,l.a.post("".concat(f.a,"/api/user/auth/facebook"),{access_token:e});case 4:n=t.sent,o=n.data,a({type:m.e,payload:Object(c.a)({},o)}),u.a.set("userInfo",JSON.stringify(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:m.c,payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m.d}),e.next=4,l.a.get("".concat(f.a,"/api/user/info"));case 4:a=e.sent,n=a.data,t({type:m.e,payload:Object(c.a)({},n)}),u.a.set("userInfo",JSON.stringify(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:m.c,payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},v=function(e,t,a){return function(){var n=Object(o.a)(r.a.mark((function n(o){var s,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o({type:m.j,payload:{name:e,userName:t,password:a}}),n.prev=1,n.next=4,l.a.post("".concat(f.a,"/api/user/signup"),{name:e,userName:t,password:a},{withCredentials:!0});case 4:s=n.sent,i=s.data,console.log(typeof i),o({type:m.k,payload:Object(c.a)({},i)}),u.a.set("userInfo",JSON.stringify(i)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),o({type:m.i,payload:n.t0}),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},y=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m.g}),e.next=4,l.a.get("".concat(f.a,"/api/user/logout"));case 4:t({type:m.h}),u.a.remove("userInfo"),t({type:d.actionTypes.CLEAR_DATA}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:m.f,payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("".concat(f.a,"/api/user/addcart"),{courseId:e},{withCredentials:!0});case 3:n=t.sent,c=n.data,a({type:m.b,payload:c}),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("".concat(f.a,"/api/user/removecart"),{courseId:e},{withCredentials:!0});case 2:n=t.sent,c=n.data,console.log(c),a({type:m.b,payload:c});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[273,2,3]]]);
//# sourceMappingURL=main.e080a6ce.chunk.js.map