(this.webpackJsonpbwd=this.webpackJsonpbwd||[]).push([[14],{594:function(e,a,n){"use strict";n.r(a),n.d(a,"LoginPopup",(function(){return k}));var t=n(0),c=n.n(t),l=n(83),o=n(40),i=n(169),s=n(531),r=n.n(s),u=n(532),p=n.n(u),m="893158145715-o5ao56bgfu2ol8gido4t4gn71tlecevn.apps.googleusercontent.com",d=n(502),g=n(590),f=function(e){var a=Object(t.useState)(""),n=Object(l.a)(a,2),s=n[0],u=n[1],f=Object(t.useState)(""),h=Object(l.a)(f,2),b=h[0],v=h[1],E=Object(t.useState)(""),k=Object(l.a)(E,2),N=k[0],C=k[1],j=Object(t.useState)(""),O=Object(l.a)(j,2),y=O[0],S=O[1],w=Object(o.c)((function(e){return e.userStatus})),T=(w.loading,w.error,Object(o.b)()),I=function(e){console.log(e),T(Object(i.d)(e.accessToken))},x=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}))();return c.a.createElement("form",{action:"#",className:x.root,onSubmit:function(e){return function(e){e.preventDefault(),N!==y||T(Object(i.h)(s,b,N))}(e)}},c.a.createElement("h1",null,"\u0110\u0103ng k\xfd"),c.a.createElement("div",{className:"social-container"},c.a.createElement(r.a,{clientId:m,render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-google-plus-g"}))},buttonText:"",onSuccess:I,onFailure:I,cookiePolicy:"single_host_origin"}),c.a.createElement(p.a,{appId:"300653421124122",fields:"name,email,picture",render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-facebook-f"}))},textButton:"",callback:function(e){console.log(e),T(Object(i.c)(e.accessToken))}}),c.a.createElement("span",{href:"#",className:"social"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))),c.a.createElement("span",null,"Ho\u1eb7c d\xf9ng email \u0111\u1ec3 \u0111\u0103ng k\xfd t\xe0i kho\u1ea3n"),c.a.createElement("input",{type:"text",name:"name",value:s,onChange:function(e){return u(e.target.value)},placeholder:""}),c.a.createElement(g.a,{label:"T\xean \u0111\u0103ng nh\u1eadp",onChange:function(e){v(e.target.value)},value:b,fullWidth:!0,size:"small"}),c.a.createElement(g.a,{label:"M\u1eadt kh\u1ea9u",onChange:function(e){C(e.target.value)},value:N,type:"password",fullWidth:!0}),c.a.createElement(g.a,{label:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",onChange:function(e){S(e.target.value)},value:y,type:"rePassword",fullWidth:!0}),c.a.createElement("button",null,"\u0110\u0103ng k\xfd"))},h=function(e){var a=Object(t.useState)(""),n=Object(l.a)(a,2),s=n[0],u=n[1],f=Object(t.useState)(""),h=Object(l.a)(f,2),b=h[0],v=h[1],E=Object(o.c)((function(e){return e.userStatus})),k=(E.loading,E.error,Object(o.b)()),N=function(e){k(Object(i.d)(e.accessToken))},C=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}))();return c.a.createElement("form",{className:C.root,onSubmit:function(e){return function(e){e.preventDefault(),k(Object(i.g)(s,b))}(e)}},c.a.createElement("h1",null,"\u0110\u0103ng nh\u1eadp"),c.a.createElement("div",{className:"social-container"},c.a.createElement(r.a,{clientId:m,render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-google-plus-g"}))},buttonText:"",onSuccess:N,onFailure:N,cookiePolicy:"single_host_origin"}),c.a.createElement(p.a,{appId:"300653421124122",fields:"name,email,picture",render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-facebook-f"}))},textButton:"",callback:function(e){k(Object(i.c)(e.accessToken))}}),c.a.createElement("span",{href:"#",className:"social"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))),c.a.createElement("span",null,"Ho\u1eb7c s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n hi\u1ec7n t\u1ea1i"),c.a.createElement(g.a,{label:"T\xean t\xe0i kho\u1ea3n",onChange:function(e){u(e.target.value)},value:s,fullWidth:!0,size:"small"}),c.a.createElement(g.a,{label:"M\u1eadt kh\u1ea9u",onChange:function(e){v(e.target.value)},value:b,type:"password",fullWidth:!0}),c.a.createElement("span",null,"Qu\xean m\u1eadt kh\u1ea9u ?"),c.a.createElement("button",{type:"submit"},"\u0110\u0103ng nh\u1eadp"))},b=n(520),v=n.n(b),E=void 0,k=function(e){return Object(t.useEffect)((function(){return v()("#LoginPopup").ready((function(){var e=document.getElementById("popup-signUp"),a=document.getElementById("popup-logIn"),n=document.getElementById("popup-container");a&&e.addEventListener("click",(function(){n.classList.add("right-panel-active")})),e&&a.addEventListener("click",(function(){n.classList.remove("right-panel-active")}));var t=function(){v()(".popup").css("transform","scale(1)"),v()(".main").addClass("blur")};v()("#login").click((function(e){v()(".popup-container").hasClass("right-panel-active")&&v()(".popup-container").removeClass("right-panel-active"),t()})),v()(document).on("click","#login2",(function(){v()(".popup-container").hasClass("right-panel-active")&&v()(".popup-container").removeClass("right-panel-active"),t()})),v()("#signup").on("click",(function(){v()(".popup-container").hasClass("right-panel-active")||v()(".popup-container").addClass("right-panel-active"),t()})),v()(document).on("click","#signup2",(function(){v()(".popup-container").hasClass("right-panel-active")||v()(".popup-container").addClass("right-panel-active"),t()})),v()("#signup2").on("click",(function(){v()(".popup-container").hasClass("right-panel-active")||v()(".popup-container").addClass("right-panel-active"),t()})),v()("#close-popup").on("click",(function(){v()(".popup").css("transform","scale(0)"),v()(".main").removeClass("blur")})),v()(".overlay").css("width",v()(".popup-container").css("width")),v()(".overlay").on("resize",(function(){E.css("width",v()(".popup-container").css("width"))}))})),function(){}}),[]),c.a.createElement("div",{className:"popup",id:"LoginPopup"},c.a.createElement("div",{className:"popup-container",id:"popup-container"},c.a.createElement("button",{id:"close-popup"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"signup-form form-container col-12 col-lg-7"},c.a.createElement(f,null)),c.a.createElement("div",{className:"signin-form form-container col-12 col-lg-7"},c.a.createElement(h,null)),c.a.createElement("div",{className:"overlay-container d-none d-lg-block"},c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"overlay-panel overlay-left"},c.a.createElement("h1",null,"Ch\xe0o m\u1eebng tr\u1edf l\u1ea1i!"),c.a.createElement("p",null,"\u0110\u1ec3 k\u1ebft n\u1ed1i v\u1edbi ch\xfang t\xf4i, xin vui l\xf2ng \u0111\u0103ng nh\u1eadp v\u1edbi th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a b\u1ea1n"),c.a.createElement("button",{className:"ghost",id:"popup-logIn"},"\u0110\u0103ng nh\u1eadp")),c.a.createElement("div",{className:"overlay-panel overlay-right"},c.a.createElement("h1",null,"Xin ch\xe0o!"),c.a.createElement("p",null,"Nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin c\xe1 nh\xe2n v\xe0 b\u1eaft \u0111\u1ea7u h\xe0nh tr\xecnh m\u1edbi n\xe0o"),c.a.createElement("button",{className:"ghost",id:"popup-signUp"},"\u0110\u0103ng k\xfd"))))))};a.default=k}}]);
//# sourceMappingURL=14.fb8e41ab.chunk.js.map