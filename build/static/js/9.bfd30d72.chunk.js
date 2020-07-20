(this.webpackJsonpbwd=this.webpackJsonpbwd||[]).push([[9],{554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PayPalButton=void 0;var r=o(n(0)),a=o(n(8)),c=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,d(t).call(this,e))).state={isSdkReady:!1},n}var n,c,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(c=[{key:"componentDidMount",value:function(){"undefined"!==typeof window&&void 0!==window&&void 0===window.paypal?this.addPaypalSdk():"undefined"!==typeof window&&void 0!==window&&void 0!==window.paypal&&this.props.onButtonReady&&this.props.onButtonReady()}},{key:"createOrder",value:function(e,t){var n=this.props,r=n.currency,a=n.options,c=n.amount,o=n.shippingPreference;return t.order.create({purchase_units:[{amount:{currency_code:r||(a&&a.currency?a.currency:"USD"),value:c.toString()}}],application_context:{shipping_preference:o}})}},{key:"onApprove",value:function(e,t){var n=this;return t.order.capture().then((function(t){if(n.props.onSuccess)return n.props.onSuccess(t,e)})).catch((function(e){if(n.props.catchError)return n.props.catchError(e)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.amount,c=t.onSuccess,o=t.createOrder,i=t.createSubscription,l=t.onApprove,s=t.style;if(!this.state.isSdkReady&&("undefined"===typeof window||void 0===window.paypal))return null;var d=window.paypal.Buttons.driver("react",{React:r.default,ReactDOM:a.default}),f=n&&!o?function(t,n){return e.createOrder(t,n)}:function(e,t){return o(e,t)};return r.default.createElement(d,u({},this.props,{createOrder:i?void 0:f,createSubscription:i,onApprove:c?function(t,n){return e.onApprove(t,n)}:function(e,t){return l(e,t)},style:s}))}},{key:"addPaypalSdk",value:function(){var e=this,t=this.props,n=t.options,r=t.onButtonReady,a=[];Object.keys(n).forEach((function(e){var t=e.split(/(?=[A-Z])/).join("-").toLowerCase();a.push("".concat(t,"=").concat(n[e]))}));var c=document.createElement("script");c.type="text/javascript",c.src="https://www.paypal.com/sdk/js?".concat(a.join("&")),c.async=!0,c.onload=function(){e.setState({isSdkReady:!0}),r&&r()},c.onerror=function(){throw new Error("Paypal SDK could not be loaded.")},document.body.appendChild(c)}}])&&l(n.prototype,c),o&&l(n,o),t}(r.default.Component);t.PayPalButton=m,p(m,"propTypes",{amount:c.default.oneOfType([c.default.number,c.default.string]),currency:c.default.oneOfType([c.default.number,c.default.string]),shippingPreference:c.default.string,onSuccess:c.default.func,catchError:c.default.func,onError:c.default.func,createOrder:c.default.func,createSubscription:c.default.func,onApprove:c.default.func,style:c.default.object,options:c.default.shape({clientId:c.default.string,merchantId:c.default.string,currency:c.default.oneOfType([c.default.number,c.default.string]),intent:c.default.string,commit:c.default.oneOfType([c.default.bool,c.default.string]),vault:c.default.oneOfType([c.default.bool,c.default.string]),component:c.default.string,disableFunding:c.default.string,disableCard:c.default.string,integrationDate:c.default.string,locale:c.default.string,buyerCountry:c.default.string,debug:c.default.oneOfType([c.default.bool,c.default.string])}),onButtonReady:c.default.func}),p(m,"defaultProps",{style:{},options:{clientId:"sb",currency:"USD"},shippingPreference:"GET_FROM_FILE"})},579:function(e,t,n){"use strict";n.r(t),n.d(t,"Cart",(function(){return b}));var r=n(16),a=n.n(r),c=n(37),o=n(174),i=n(0),u=n.n(i),l=n(21),s=n(554),d=n(28),f=n.n(d),p=n(10),m=n(19),y=n(87),v=n(51),h=n(38),b=function(){var e=Object(l.c)((function(e){return e.userStatus.userInfo&&e.userStatus.userInfo._id})),t=Object(v.useFirestore)(),n=Object(i.useState)([]),r=Object(o.a)(n,2),d=r[0],b=r[1],g=Object(p.e)(),E=Object(l.b)();Object(i.useEffect)((function(){return w(),function(){}}),[]);var w=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h.a,"/api/user/cart"),{withCredentials:!0});case 2:t=e.sent,n=t.data,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var n=Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.post("".concat(h.a,"/api/user/buy"),{courses:d.map((function(e){return e._id}))});case 2:return g.push("/home"),n.next=5,t.collection("noticfications").add({userId:e,title:"Mua h\xe0ng",description:"b\u1ea1n \u0111\xe3 mua ".concat(d.length," kho\xe1 h\u1ecdc. H\xe3y \u0111\u1ebfn h\u1ecdc ngay n\xe0o"),Date:t.FieldValue.serverTimestamp(),seen:!1});case 5:E(Object(y.b)());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u.a.createElement("div",{class:"content",style:{minHeight:800}},u.a.createElement("div",{class:"cart-header"},u.a.createElement("div",{class:"container"},u.a.createElement("div",{class:"header-bar"},u.a.createElement("div",null,u.a.createElement("ol",{class:"breadcrumb"},u.a.createElement("li",{class:"breadcrumb-item"},u.a.createElement("a",{href:"#"},u.a.createElement("i",{class:"fas fa-home"}))),u.a.createElement("li",{class:"breadcrumb-item active","aria-current":"page"},"Gi\u1ecf h\xe0ng")),u.a.createElement("h1",null,"Th\u1ebb mua s\u1eafm"))))),u.a.createElement("div",null,u.a.createElement("div",{class:"space"},u.a.createElement("div",{class:"space-item"})),u.a.createElement("div",{class:"container"},u.a.createElement("div",{class:"row"},u.a.createElement("div",{class:"col-12"},u.a.createElement("h3",null,"C\xf3 ",d.length," kho\xe1 h\u1ecdc trong gi\u1ecf"))),u.a.createElement("div",{class:"row"},u.a.createElement("div",{class:"col-8"},u.a.createElement("div",{class:"left"},d.map((function(e){return u.a.createElement("div",{class:"course-in-cart",key:e._id},u.a.createElement(m.b,{to:"/detail/".concat(e._id)},u.a.createElement("div",{class:"course-image"},u.a.createElement("img",{src:e.pic,alt:"",style:{width:130,height:73}}))),u.a.createElement("div",{class:"course-info"},u.a.createElement(m.b,{to:"/detail/".concat(e._id),class:"item"},e.title),u.a.createElement(m.b,{to:"/partner",class:"author-name"},e.university)),u.a.createElement("div",{class:"course-remove"},u.a.createElement("a",{onClick:function(){!function(e){E(Object(y.f)(e));var t=d.filter((function(t){return t._id!==e}));b(t)}(e._id)}},"B\u1ecf kh\u1ecfi gi\u1ecf h\xe0ng"),u.a.createElement(m.b,{to:"/detail/".concat(e._id)},"\u0110i \u0111\u1ebfn kh\xf3a h\u1ecdc")))})))),u.a.createElement("div",{class:"col-4"},u.a.createElement("div",{class:"right"},u.a.createElement("div",{class:"price-text"},u.a.createElement("div",{class:"total"},"T\u1ed5ng h\xf3a \u0111\u01a1n:"),u.a.createElement("div",{class:"price-large"},(null===d||void 0===d?void 0:d.length)?d.reduce((function(e,t){return e+t.price}),0):0," ","VND"),u.a.createElement("div",{class:"space"}),u.a.createElement(s.PayPalButton,{amount:(null===d||void 0===d?void 0:d.length)?d.reduce((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return e+t.price}),0):0,onSuccess:O}))))))))};t.default=b}}]);
//# sourceMappingURL=9.bfd30d72.chunk.js.map