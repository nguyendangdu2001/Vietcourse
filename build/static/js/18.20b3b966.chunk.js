(this.webpackJsonpbwd=this.webpackJsonpbwd||[]).push([[18],{559:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={googleClientId:"893158145715-o5ao56bgfu2ol8gido4t4gn71tlecevn.apps.googleusercontent.com",googleClientSecretKey:"2D49mNZ5bKmjliF3brHlS2if"}},649:function(e,a,t){"use strict";t.r(a),t.d(a,"LoginPopup",(function(){return j}));var n=t(0),c=t.n(n),l=t(90),o=t(49),i=t(181),r=t(575),s=t.n(r),u=t(576),p=t.n(u),m=t(559),d=t(537),g=t(646),f=t(536),b=t(546),h=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],u=Object(n.useState)(""),h=Object(l.a)(u,2),E=h[0],v=h[1],k=Object(n.useState)(""),N=Object(l.a)(k,2),j=N[0],C=N[1],O=Object(n.useState)(""),y=Object(l.a)(O,2),S=y[0],I=y[1],w=Object(o.c)((function(e){return e.userStatus})),T=(w.loading,w.error,Object(o.b)()),_=Object(f.a)("translation",{useSuspense:!1}).t,x=function(e){T(Object(i.b)("/api/user/auth/google",{access_token:e.accessToken}))},L=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}))();return c.a.createElement("form",{action:"#",className:L.root,onSubmit:function(e){return function(e){e.preventDefault(),j!==S||T(Object(i.g)(t,E,j))}(e)}},c.a.createElement("h1",null,c.a.createElement(b.a,{t:_},"\u0110\u0103ng k\xfd")),c.a.createElement("div",{className:"social-container"},c.a.createElement(s.a,{clientId:m.a.googleClientId,render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-google-plus-g"}))},buttonText:"",onSuccess:x,onFailure:x,cookiePolicy:"single_host_origin"}),c.a.createElement(p.a,{appId:"300653421124122",fields:"name,email,picture",render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-facebook-f"}))},textButton:"",callback:function(e){T(Object(i.b)("/api/user/auth/facebook",{access_token:e.accessToken}))}}),c.a.createElement("span",{href:"#",className:"social"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))),c.a.createElement("span",null,c.a.createElement(b.a,{t:_},"Ho\u1eb7c d\xf9ng email \u0111\u1ec3 \u0111\u0103ng k\xfd t\xe0i kho\u1ea3n")),c.a.createElement(g.a,{label:_("T\xean"),value:t,onChange:function(e){return r(e.target.value)},fullWidth:!0}),c.a.createElement(g.a,{label:_("T\xean \u0111\u0103ng nh\u1eadp"),onChange:function(e){v(e.target.value)},value:E,fullWidth:!0}),c.a.createElement(g.a,{label:_("M\u1eadt kh\u1ea9u"),onChange:function(e){C(e.target.value)},value:j,type:"password",fullWidth:!0}),c.a.createElement(g.a,{label:_("Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"),onChange:function(e){I(e.target.value)},value:S,type:"password",fullWidth:!0}),c.a.createElement("button",null,c.a.createElement(b.a,{t:_},"\u0110\u0103ng k\xfd")))},E=function(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),r=t[0],u=t[1],h=Object(n.useState)(""),E=Object(l.a)(h,2),v=E[0],k=E[1],N=Object(o.c)((function(e){return e.userStatus})),j=(N.loading,N.error,Object(o.b)()),C=Object(f.a)("translation",{useSuspense:!1}).t,O=function(e){j(Object(i.b)("/api/user/auth/google",{access_token:e.accessToken}))},y=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}))();return c.a.createElement("form",{className:y.root,onSubmit:function(e){return function(e){e.preventDefault(),j(Object(i.f)(r,v))}(e)}},c.a.createElement("h1",null,c.a.createElement(b.a,{t:C},"\u0110\u0103ng nh\u1eadp")),c.a.createElement("div",{className:"social-container"},c.a.createElement(s.a,{clientId:m.a.googleClientId,render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-google-plus-g"}))},buttonText:"",onSuccess:O,onFailure:O,cookiePolicy:"single_host_origin"}),c.a.createElement(p.a,{appId:"300653421124122",fields:"name,email,picture",render:function(e){return c.a.createElement("span",{className:"social",onClick:e.onClick,disabled:e.disabled},c.a.createElement("i",{className:"fab fa-facebook-f"}))},textButton:"",callback:function(e){j(Object(i.b)("/api/user/auth/facebook",{access_token:e.accessToken}))}}),c.a.createElement("span",{href:"#",className:"social"},c.a.createElement("i",{className:"fab fa-linkedin-in"}))),c.a.createElement("span",null,c.a.createElement(b.a,{t:C},"Ho\u1eb7c s\u1eed d\u1ee5ng t\xe0i kho\u1ea3n hi\u1ec7n t\u1ea1i")),c.a.createElement(g.a,{label:C("T\xean t\xe0i kho\u1ea3n"),onChange:function(e){u(e.target.value)},value:r,fullWidth:!0,size:"small"}),c.a.createElement(g.a,{label:C("M\u1eadt kh\u1ea9u"),onChange:function(e){k(e.target.value)},value:v,type:"password",fullWidth:!0}),c.a.createElement("span",null,c.a.createElement(b.a,{t:C},"Qu\xean m\u1eadt kh\u1ea9u")," ?"),c.a.createElement("button",{type:"submit"},c.a.createElement(b.a,{t:C},"\u0110\u0103ng nh\u1eadp")))},v=t(557),k=t.n(v),N=void 0,j=function(e){var a=Object(f.a)("translation",{useSuspense:!1}).t;return Object(n.useEffect)((function(){return k()("#LoginPopup").ready((function(){var e=document.getElementById("popup-signUp"),a=document.getElementById("popup-logIn"),t=document.getElementById("popup-container");a&&e.addEventListener("click",(function(){t.classList.add("right-panel-active")})),e&&a.addEventListener("click",(function(){t.classList.remove("right-panel-active")}));var n=function(){k()(".popup").css("transform","scale(1)"),k()(".main").addClass("blur")};k()("#login").click((function(e){k()(".popup-container").hasClass("right-panel-active")&&k()(".popup-container").removeClass("right-panel-active"),n()})),k()(document).on("click","#login2",(function(){k()(".popup-container").hasClass("right-panel-active")&&k()(".popup-container").removeClass("right-panel-active"),n()})),k()("#signup").on("click",(function(){k()(".popup-container").hasClass("right-panel-active")||k()(".popup-container").addClass("right-panel-active"),n()})),k()(document).on("click","#signup2",(function(){k()(".popup-container").hasClass("right-panel-active")||k()(".popup-container").addClass("right-panel-active"),n()})),k()("#close-popup").on("click",(function(){k()(".popup").css("transform","scale(0)"),k()(".main").removeClass("blur")})),k()(".overlay").css("width",k()(".popup-container").css("width")),k()(".overlay").on("resize",(function(){N.css("width",k()(".popup-container").css("width"))}))})),function(){k()("#login").unbind(),k()("#signup").unbind(),k()("#close-popup").unbind()}}),[]),c.a.createElement("div",{className:"popup",id:"LoginPopup"},c.a.createElement("div",{className:"popup-container",id:"popup-container"},c.a.createElement("button",{id:"close-popup"},c.a.createElement("i",{className:"fas fa-times"})),c.a.createElement("div",{className:"signup-form form-container col-12 col-lg-7"},c.a.createElement(h,null)),c.a.createElement("div",{className:"signin-form form-container col-12 col-lg-7"},c.a.createElement(E,null)),c.a.createElement("div",{className:"overlay-container d-none d-lg-block"},c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"overlay-panel overlay-left"},c.a.createElement("h1",null,c.a.createElement(b.a,{t:a},"Ch\xe0o m\u1eebng tr\u1edf l\u1ea1i!")),c.a.createElement("p",null,c.a.createElement(b.a,{t:a},"\u0110\u1ec3 k\u1ebft n\u1ed1i v\u1edbi ch\xfang t\xf4i, xin vui l\xf2ng \u0111\u0103ng nh\u1eadp v\u1edbi th\xf4ng tin c\xe1 nh\xe2n c\u1ee7a b\u1ea1n")),c.a.createElement("button",{className:"ghost",id:"popup-logIn"},c.a.createElement(b.a,{t:a},"\u0110\u0103ng nh\u1eadp"))),c.a.createElement("div",{className:"overlay-panel overlay-right"},c.a.createElement("h1",null,c.a.createElement(b.a,{t:a},"Xin ch\xe0o!")),c.a.createElement("p",null,c.a.createElement(b.a,{t:a},"Nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin c\xe1 nh\xe2n v\xe0 b\u1eaft \u0111\u1ea7u h\xe0nh tr\xecnh m\u1edbi n\xe0o")),c.a.createElement("button",{className:"ghost",id:"popup-signUp"},c.a.createElement(b.a,{t:a},"\u0110\u0103ng k\xfd")))))))};a.default=j}}]);
//# sourceMappingURL=18.20b3b966.chunk.js.map