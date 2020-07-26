(this.webpackJsonpbwd=this.webpackJsonpbwd||[]).push([[9],{563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PayPalButton=void 0;var a=o(n(0)),r=o(n(9)),c=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,d(t).call(this,e))).state={isSdkReady:!1},n}var n,c,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){"undefined"!==typeof window&&void 0!==window&&void 0===window.paypal?this.addPaypalSdk():"undefined"!==typeof window&&void 0!==window&&void 0!==window.paypal&&this.props.onButtonReady&&this.props.onButtonReady()}},{key:"createOrder",value:function(e,t){var n=this.props,a=n.currency,r=n.options,c=n.amount,o=n.shippingPreference;return t.order.create({purchase_units:[{amount:{currency_code:a||(r&&r.currency?r.currency:"USD"),value:c.toString()}}],application_context:{shipping_preference:o}})}},{key:"onApprove",value:function(e,t){var n=this;return t.order.capture().then((function(t){if(n.props.onSuccess)return n.props.onSuccess(t,e)})).catch((function(e){if(n.props.catchError)return n.props.catchError(e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.amount,c=t.onSuccess,o=t.createOrder,i=t.createSubscription,l=t.onApprove,s=t.style;if(!this.state.isSdkReady&&("undefined"===typeof window||void 0===window.paypal))return null;var d=window.paypal.Buttons.driver("react",{React:a.default,ReactDOM:r.default}),f=n&&!o?function(t,n){return e.createOrder(t,n)}:function(e,t){return o(e,t)};return a.default.createElement(d,u({},this.props,{createOrder:i?void 0:f,createSubscription:i,onApprove:c?function(t,n){return e.onApprove(t,n)}:function(e,t){return l(e,t)},style:s}))}},{key:"addPaypalSdk",value:function(){var e=this,t=this.props,n=t.options,a=t.onButtonReady,r=[];Object.keys(n).forEach((function(e){var t=e.split(/(?=[A-Z])/).join("-").toLowerCase();r.push("".concat(t,"=").concat(n[e]))}));var c=document.createElement("script");c.type="text/javascript",c.src="https://www.paypal.com/sdk/js?".concat(r.join("&")),c.async=!0,c.onload=function(){e.setState({isSdkReady:!0}),a&&a()},c.onerror=function(){throw new Error("Paypal SDK could not be loaded.")},document.body.appendChild(c)}}])&&l(n.prototype,c),o&&l(n,o),t}(a.default.Component);t.PayPalButton=m,p(m,"propTypes",{amount:c.default.oneOfType([c.default.number,c.default.string]),currency:c.default.oneOfType([c.default.number,c.default.string]),shippingPreference:c.default.string,onSuccess:c.default.func,catchError:c.default.func,onError:c.default.func,createOrder:c.default.func,createSubscription:c.default.func,onApprove:c.default.func,style:c.default.object,options:c.default.shape({clientId:c.default.string,merchantId:c.default.string,currency:c.default.oneOfType([c.default.number,c.default.string]),intent:c.default.string,commit:c.default.oneOfType([c.default.bool,c.default.string]),vault:c.default.oneOfType([c.default.bool,c.default.string]),component:c.default.string,disableFunding:c.default.string,disableCard:c.default.string,integrationDate:c.default.string,locale:c.default.string,buyerCountry:c.default.string,debug:c.default.oneOfType([c.default.bool,c.default.string])}),onButtonReady:c.default.func}),p(m,"defaultProps",{style:{},options:{clientId:"sb",currency:"USD"},shippingPreference:"GET_FROM_FILE"})},592:function(e,t,n){"use strict";n.r(t),n.d(t,"Cart",(function(){return w}));var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(31),u=n(72),l=n(22),s=n(563),d=n(26),f=n.n(d),p=n(11),m=n(89),v=n(51),h=n(30),y=n(20),b=function(e){var t=e.course,n=e.removeCartItemHandler;return r.a.createElement("div",{class:"course-in-cart",key:t._id},r.a.createElement(y.b,{to:"/detail/".concat(t._id)},r.a.createElement("div",{class:"course-image"},r.a.createElement("img",{src:t.pic,alt:"",style:{width:130,height:73}}))),r.a.createElement("div",{class:"course-info"},r.a.createElement(y.b,{to:"/detail/".concat(t._id),class:"item"},t.title),r.a.createElement(y.b,{to:"/partner",class:"author-name"},t.university)),r.a.createElement("div",{class:"course-remove"},r.a.createElement("a",{onClick:function(){n(t._id)}},"B\u1ecf kh\u1ecfi gi\u1ecf h\xe0ng"),r.a.createElement(y.b,{to:"/detail/".concat(t._id)},"\u0110i \u0111\u1ebfn kh\xf3a h\u1ecdc")),r.a.createElement("div",{class:"course-price"},r.a.createElement("span",null,"".concat(t.price," vn\u0111")),r.a.createElement("i",{style:{marginLeft:7},class:"fas fa-tag"})))},g=function(){var e=Object(p.e)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Kh\xf4ng c\xf3 kho\xe1 h\u1ecdc n\xe0o trong gi\u1ecf"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"list-empty"},r.a.createElement("img",{src:"/Images/empty-cart.png",alt:"",style:{width:126,height:120,marginBottom:30}}),r.a.createElement("p",null,"Gi\u1ecf h\xe0ng \u0111ang tr\u1ed1ng,ti\u1ebfp t\u1ee5c mua s\u1eafm \u0111\u1ec3 t\xecm \u0111\u01b0\u1ee3c kho\xe1 h\u1ecdc \u01b0ng \xfd n\xe0o"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.push("/home")}},"Ti\u1ebfp t\u1ee5c mua s\u1eafm")))))},E=function(){var e=Object(l.c)((function(e){return e.userStatus.userInfo&&e.userStatus.userInfo._id})),t=Object(l.c)((function(e){return e.userStatus.userInfo&&e.userStatus.userInfo.cart})),n=Object(v.useFirestore)(),c=Object(a.useState)([]),d=Object(u.a)(c,2),y=d[0],E=d[1],w=Object(p.e)(),O=Object(l.b)();Object(a.useEffect)((function(){return j(),function(){}}),[t]);var j=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h.a,"/api/user/cart"),{withCredentials:!0});case 2:t=e.sent,n=t.data,E(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){O(Object(m.f)(e));var t=y.filter((function(t){return t._id!==e}));E(t)},S=function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("".concat(h.a,"/api/user/buy"),{courses:y.map((function(e){return e._id}))});case 2:return w.push("/home"),t.next=5,n.collection("noticfications").add({userId:e,title:"Mua h\xe0ng",description:"b\u1ea1n \u0111\xe3 mua ".concat(y.length," kho\xe1 h\u1ecdc. H\xe3y \u0111\u1ebfn h\u1ecdc ngay n\xe0o"),Date:n.FieldValue.serverTimestamp(),seen:!1});case 5:O(Object(m.b)());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(null===y||void 0===y?void 0:y.length)>0?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"C\xf3 ",y.length," kho\xe1 h\u1ecdc trong gi\u1ecf"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"left"},y.map((function(e){return r.a.createElement(b,{course:e,removeCartItemHandler:N})})))),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"price-text"},r.a.createElement("div",{className:"total"},"T\u1ed5ng h\xf3a \u0111\u01a1n:"),r.a.createElement("div",{className:"price-large"},(null===y||void 0===y?void 0:y.length)?y.reduce((function(e,t){return e+t.price}),0):0," ","VND"),r.a.createElement("div",{className:"space"}),r.a.createElement(s.PayPalButton,{amount:(null===y||void 0===y?void 0:y.length)?y.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return e+t.price}),0):0,onSuccess:S})))))):r.a.createElement(g,null)},w=function(){var e=Object(l.c)((function(e){return e.userStatus.auth})),t=Object(p.e)();return Object(a.useEffect)((function(){return e||t.push("/"),function(){}}),[e]),r.a.createElement("div",{className:"content",style:{minHeight:800}},r.a.createElement("div",{className:"cart-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(y.b,{to:"/home"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Gi\u1ecf h\xe0ng")),r.a.createElement("h1",null,"Th\u1ebb mua s\u1eafm"))))),r.a.createElement("div",{className:"space"},r.a.createElement("div",{className:"space-item"})),r.a.createElement(E,null))};t.default=w}}]);
//# sourceMappingURL=9.5e5b5684.chunk.js.map