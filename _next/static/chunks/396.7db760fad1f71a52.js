(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{8660:function(d,e,b){var a,c,f=b(3454);c=a||(a={}),function(e){var a="object"==typeof b.g?b.g:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),d=f(c);function f(a,b){return function(c,d){"function"!=typeof a[c]&&Object.defineProperty(a,c,{configurable:!0,writable:!0,value:d}),b&&b(c,d)}}void 0===a.Reflect?a.Reflect=c:d=f(a.Reflect,d),e(d)}(function(a){var h=Object.prototype.hasOwnProperty,c="function"==typeof Symbol,i=c&& void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",j=c&& void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",d="function"==typeof Object.create,e=({__proto__:[]})instanceof Array,g=!d&&!e,k={create:d?function(){return O(Object.create(null))}:e?function(){return O({__proto__:null})}:function(){return O({})},has:g?function(a,b){return h.call(a,b)}:function(a,b){return b in a},get:g?function(a,b){return h.call(a,b)?a[b]:void 0}:function(a,b){return a[b]}},l=Object.getPrototypeOf(Function),b="object"==typeof f&&f.env&&"true"===f.env.REFLECT_METADATA_USE_MAP_POLYFILL,m=b||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var a={},b=[],c=function(){function a(a,b,c){this._index=0,this._keys=a,this._values=b,this._selector=c}return a.prototype["@@iterator"]=function(){return this},a.prototype[j]=function(){return this},a.prototype.next=function(){var a=this._index;if(a>=0&&a<this._keys.length){var c=this._selector(this._keys[a],this._values[a]);return a+1>=this._keys.length?(this._index=-1,this._keys=b,this._values=b):this._index++,{value:c,done:!1}}return{value:void 0,done:!0}},a.prototype.throw=function(a){throw this._index>=0&&(this._index=-1,this._keys=b,this._values=b),a},a.prototype.return=function(a){return this._index>=0&&(this._index=-1,this._keys=b,this._values=b),{value:a,done:!0}},a}();return function(){function b(){this._keys=[],this._values=[],this._cacheKey=a,this._cacheIndex=-2}return Object.defineProperty(b.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),b.prototype.has=function(a){return this._find(a,!1)>=0},b.prototype.get=function(b){var a=this._find(b,!1);return a>=0?this._values[a]:void 0},b.prototype.set=function(a,b){var c=this._find(a,!0);return this._values[c]=b,this},b.prototype.delete=function(c){var d=this._find(c,!1);if(d>=0){for(var e=this._keys.length,b=d+1;b<e;b++)this._keys[b-1]=this._keys[b],this._values[b-1]=this._values[b];return this._keys.length--,this._values.length--,c===this._cacheKey&&(this._cacheKey=a,this._cacheIndex=-2),!0}return!1},b.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=a,this._cacheIndex=-2},b.prototype.keys=function(){return new c(this._keys,this._values,d)},b.prototype.values=function(){return new c(this._keys,this._values,e)},b.prototype.entries=function(){return new c(this._keys,this._values,f)},b.prototype["@@iterator"]=function(){return this.entries()},b.prototype[j]=function(){return this.entries()},b.prototype._find=function(a,b){return this._cacheKey!==a&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=a)),this._cacheIndex<0&&b&&(this._cacheIndex=this._keys.length,this._keys.push(a),this._values.push(void 0)),this._cacheIndex},b}();function d(a,b){return a}function e(b,a){return a}function f(a,b){return[a,b]}}():Map,n=b||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function a(){this._map=new m}return Object.defineProperty(a.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),a.prototype.has=function(a){return this._map.has(a)},a.prototype.add=function(a){return this._map.set(a,a),this},a.prototype.delete=function(a){return this._map.delete(a)},a.prototype.clear=function(){this._map.clear()},a.prototype.keys=function(){return this._map.keys()},a.prototype.values=function(){return this._map.values()},a.prototype.entries=function(){return this._map.entries()},a.prototype["@@iterator"]=function(){return this.keys()},a.prototype[j]=function(){return this.keys()},a}():Set,o=new(b||"function"!=typeof WeakMap?function(){var a=k.create(),b=c();return function(){function a(){this._key=c()}return a.prototype.has=function(b){var a=d(b,!1);return void 0!==a&&k.has(a,this._key)},a.prototype.get=function(b){var a=d(b,!1);return void 0!==a?k.get(a,this._key):void 0},a.prototype.set=function(a,b){return d(a,!0)[this._key]=b,this},a.prototype.delete=function(b){var a=d(b,!1);return void 0!==a&&delete a[this._key]},a.prototype.clear=function(){this._key=c()},a}();function c(){var b;do b="@@WeakMap@@"+f();while(k.has(a,b))return a[b]=!0,b}function d(a,c){if(!h.call(a,b)){if(!c)return;Object.defineProperty(a,b,{value:k.create()})}return a[b]}function e(b,c){for(var a=0;a<c;++a)b[a]=255*Math.random()|0;return b}function f(){var a,c=(a=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(a)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(a)):e(new Uint8Array(a),a):(0,e(Array(a),a)));c[6]=79&c[6]|64,c[8]=191&c[8]|128;for(var d="",b=0;b<16;++b){var f=c[b];(4===b||6===b||8===b)&&(d+="-"),f<16&&(d+="0"),d+=f.toString(16).toLowerCase()}return d}}():WeakMap);function p(d,b){for(var c=d.length-1;c>=0;--c){var a=(0,d[c])(b);if(!A(a)&&!B(a)){if(!G(a))throw TypeError();b=a}}return b}function q(d,e,f,b){for(var c=d.length-1;c>=0;--c){var a=(0,d[c])(e,f,b);if(!A(a)&&!B(a)){if(!C(a))throw TypeError();b=a}}return b}function r(c,d,e){var a=o.get(c);if(A(a)){if(!e)return;a=new m,o.set(c,a)}var b=a.get(d);if(A(b)){if(!e)return;b=new m,a.set(d,b)}return b}function s(a,b,c){if(t(a,b,c))return!0;var d=N(b);return!B(d)&&s(a,d,c)}function t(c,d,e){var a,b=r(d,e,!1);return!A(b)&&(a=b.has(c),!!a)}function u(a,b,c){if(t(a,b,c))return v(a,b,c);var d=N(b);if(!B(d))return u(a,d,c)}function v(b,c,d){var a=r(c,d,!1);if(!A(a))return a.get(b)}function w(a,b,c,d){r(c,d,!0).set(a,b)}function x(i,j){var b=y(i,j),k=N(i);if(null===k)return b;var d=x(k,j);if(d.length<=0)return b;if(b.length<=0)return d;for(var c=new n,e=[],f=0,l=b;f<l.length;f++){var a=l[f],g=c.has(a);g||(c.add(a),e.push(a))}for(var h=0,m=d;h<m.length;h++){var a=m[h],g=c.has(a);g||(c.add(a),e.push(a))}return e}function y(f,g){var a=[],c=r(f,g,!1);if(A(c))return a;for(var d=J(c.keys()),b=0;;){var e=L(d);if(!e)return a.length=b,a;var h=K(e);try{a[b]=h}catch(i){try{M(d)}finally{throw i}}b++}}function z(a){if(null===a)return 1;switch(typeof a){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===a?1:6;default:return 6}}function A(a){return void 0===a}function B(a){return null===a}function C(a){return"object"==typeof a?null!==a:"function"==typeof a}a("decorate",function(b,c,d,a){if(A(d)){if(!E(b)||!G(c))throw TypeError();return p(b,c)}if(!E(b)||!C(c)|| !C(a)&&!A(a)&&!B(a))throw TypeError();return B(a)&&(a=void 0),d=D(d),q(b,c,d,a)}),a("metadata",function(a,b){return function(d,c){if(!C(d)|| !A(c)&&!H(c))throw TypeError();w(a,b,d,c)}}),a("defineMetadata",function(c,d,b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),w(c,d,b,a)}),a("hasMetadata",function(c,b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),s(c,b,a)}),a("hasOwnMetadata",function(c,b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),t(c,b,a)}),a("getMetadata",function(c,b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),u(c,b,a)}),a("getOwnMetadata",function(c,b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),v(c,b,a)}),a("getMetadataKeys",function(b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),x(b,a)}),a("getOwnMetadataKeys",function(b,a){if(!C(b))throw TypeError();return A(a)||(a=D(a)),y(b,a)}),a("deleteMetadata",function(e,b,a){if(!C(b))throw TypeError();A(a)||(a=D(a));var c=r(b,a,!1);if(A(c)||!c.delete(e))return!1;if(c.size>0)return!0;var d=o.get(b);return d.delete(a),d.size>0||(o.delete(b),!0)});function D(b){var c,d,a=function(a,c){switch(z(a)){case 0:case 1:case 2:case 3:case 4:case 5:return a}var b=3===c?"string":5===c?"number":"default",d=I(a,i);if(void 0!==d){var e=d.call(a,b);if(C(e))throw TypeError();return e}return function g(b,f){if("string"===f){var d=b.toString;if(F(d)){var a=d.call(b);if(!C(a))return a}var c=b.valueOf;if(F(c)){var a=c.call(b);if(!C(a))return a}}else{var c=b.valueOf;if(F(c)){var a=c.call(b);if(!C(a))return a}var e=b.toString;if(F(e)){var a=e.call(b);if(!C(a))return a}}throw TypeError()}(a,"default"===b?"number":b)}(b,3);return"symbol"==typeof(d=a)?a:""+(c=a)}function E(a){return Array.isArray?Array.isArray(a):a instanceof Object?a instanceof Array:"[object Array]"===Object.prototype.toString.call(a)}function F(a){return"function"==typeof a}function G(a){return"function"==typeof a}function H(a){switch(z(a)){case 3:case 4:return!0;default:return!1}}function I(b,c){var a=b[c];if(null!=a){if(!F(a))throw TypeError();return a}}function J(a){var b=I(a,j);if(!F(b))throw TypeError();var c=b.call(a);if(!C(c))throw TypeError();return c}function K(a){return a.value}function L(b){var a=b.next();return!a.done&&a}function M(a){var b=a.return;b&&b.call(a)}function N(a){var b=Object.getPrototypeOf(a);if("function"!=typeof a||a===l||b!==l)return b;var e=a.prototype,c=e&&Object.getPrototypeOf(e);if(null==c||c===Object.prototype)return b;var d=c.constructor;return"function"!=typeof d||d===a?b:d}function O(a){return a.__=void 0,delete a.__,a}})},1291:function(e,h,i){let j;function k(a){if("function"!=typeof a)throw Error("This module should not be used in runtime. Instead, use a transformer during compilation.")}let l=Symbol("assertions");class f extends Error{constructor(a,b){super(function(a,c,d){if(void 0===a)return"validation error";let b=function(c,d){let a=d;for(let b of c.slice(1))a=a[b.startsWith("[")?parseInt(b.replace("[","").replace("]","")):b];return a}(c,d);try{return a+", found: "+i(9539).inspect(b)}catch(e){}try{return a+", found: "+JSON.stringify(b)}catch(f){}return a}(a.message,a.path,b)),this.name="TypeGuardError",this.path=a.path,this.reason=a.reason,this.input=b}}function a(b,a=j){k(a);let c=a(b);return null===c}function b(a,b=j){k(b);let c=b(a);if(null===c)return a;throw new f(c,a)}function c(b=j){return k(b),c=>a(c,b)}function d(a=j){return k(a),c=>b(c,a)}function g(a){j=a}e.exports={is:a,assertType:b,createIs:c,createAssertType:d,equals:a,createEquals:c,assertEquals:b,createAssertEquals:d,AssertType:function(a,b={}){return i(8660),function(c,d,f){let e=Reflect.getOwnMetadata(l,c,d)||[];Reflect.getOwnMetadata("design:returntype",c,d)===Promise?e[f]={assertion:a,options:Object.assign({async:!0},b)}:e[f]={assertion:a,options:b},Reflect.defineMetadata(l,e,c,d)}},ValidateClass:function(a=f){return i(8660),function(b){for(let c of Object.getOwnPropertyNames(b.prototype)){let d=Reflect.getOwnMetadata(l,b.prototype,c);if(d){let e=b.prototype[c];b.prototype[c]=function(...c){for(let b=0;b<d.length;b++){if(!d[b])continue;let f=d[b].assertion(c[b]);if(null!==f){let g=new a(f,c[b]);if(d[b].options.async)return Promise.reject(g);throw g}}return e.apply(this,c)}}}}},TypeGuardError:f,setDefaultGetErrorObject:g}},9396:function(f,d,a){"use strict";a.d(d,{Z:function(){return r}});var e,g=a(7825),h=a(1291),i=function(b,c,a,d){return new(a||(a=Promise))(function(f,g){function h(a){try{e(d.next(a))}catch(b){g(b)}}function i(a){try{e(d.throw(a))}catch(b){g(b)}}function e(b){var c;b.done?f(b.value):((c=b.value)instanceof a?c:new a(function(a){a(c)})).then(h,i)}e((d=d.apply(b,c||[])).next())})},j=function(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]]);return d};class b{constructor(){var a;this.mittInstance={all:a=a||new Map,on:function(b,c){var d=a.get(b);d?d.push(c):a.set(b,[c])},off:function(c,d){var b=a.get(c);b&&(d?b.splice(b.indexOf(d)>>>0,1):a.set(c,[]))},emit:function(c,d){var b=a.get(c);b&&b.slice().map(function(a){a(d)}),(b=a.get("*"))&&b.slice().map(function(a){a(c,d)})}}}emit(a,b){this.mittInstance.emit(a,b)}on(a,b){this.mittInstance.on(a,b)}off(a,b){this.mittInstance.off(a,b)}once(a,b){return new Promise(d=>{let c=e=>{this.off(a,c),d(e),b&&b(e)};this.on(a,c)})}}class k extends b{constructor(c,a){super(),this._iframe={},this._showIframe=!1,this._popup={},this._usePopup=!0,this._requirePopup=!1,this._keepPopup=!1,this._promiseController=new class{constructor(){this._promiseController=[]}newMessagePromise(b,a){b.id=this._promiseController.length;let c=new Promise((a,b)=>this._promiseController.push({resolve:a,reject:b}));return(null==a?void 0:a.timeout)&&setTimeout(()=>this._promiseController[b.id].reject("timeout"),a.timeout),c}processResponse(c){let{id:a,result:d,error:b}=c;if(null!=a){if("number"!=typeof a&&"string"!=typeof a||"string"==typeof a&&isNaN(parseInt(a)))throw"error";if(!this._promiseController[+a])throw"received result to nonexistent request";return null!=b?this._promiseController[+a].reject(b):this._promiseController[+a].resolve(d),!0}}},this._pending=[],this.listener=a=>{var d,e,i,f,j,g;if(a.source!==this._popup.window&&a.source!==(null===(d=this._iframe)|| void 0===d?void 0:d.window)||a.origin!==(null===(e=this._url)|| void 0===e?void 0:e.origin)||"object"!=typeof a.data)return;let{method:b,params:c,id:l,result:n,error:o,session:m}=a.data;if(console.info(`WalletConnector:${a.source===this._popup.window?"popup":"iframe"}`,a.data),null!=l&&(this._pending=this._pending.filter(a=>a!=l)),this._promiseController.processResponse(a.data)||"string"!=typeof b)return;if("ready"===b){a.source===this._popup.window&&(null===(f=(i=this._popup).resolve)|| void 0===f||f.call(i)),a.source===this._iframe.window&&(null===(g=(j=this._iframe).resolve)|| void 0===g||g.call(j));return}if("change"===b)return;if("showIframe"===b){if("boolean"!=typeof c)return;this.showIframe=c}if("usePopup"===b){if("boolean"!=typeof c)return;this.setUsePopup(c)}if("keepPopup"===b){if("boolean"!=typeof c)return;this.setRequirePopup(c)}let k={method:b,params:c,session:m};if(!(0,h.is)(k,a=>{function b(a){return"string"!=typeof a?{}:null}function c(a){return void 0!==a?{}:null}function d(a){return"number"!=typeof a?{}:null}return function(a){if("object"!=typeof a||null===a||Array.isArray(a)||!("method"in a))return{};var e=b(a.method);if(e)return e;if(!("params"in a))return{};var e=(a.params,null);if(e)return e;if("session"in a){var e=function(a){for(let e of[c,b,d])if(!e(a))return null;return{}}(a.session);if(e)return e}return null}(a)}))return console.warn("dropped");this.emit("message",k)},this._iframeParentNode=null==a?void 0:a.iframeParentNode,this._url=c;let b={origin:window.location.origin,session:Math.random().toString().slice(2)};(null==a?void 0:a.name)&&(b.name=a.name),(null==a?void 0:a.logo)&&(b.logo=a.logo),this._url.hash=new URLSearchParams(b).toString(),window.addEventListener("message",this.listener)}get url(){var a;return null===(a=this._url)|| void 0===a?void 0:a.origin}get showIframe(){return this._showIframe}set showIframe(a){if(a!==this._showIframe)this._showIframe=a,this.deliverMessage({method:"showIframe",params:a}),this.emit("builtin",{showIframe:a}),this._iframeNode&&(this._iframeParentNode||(this._iframeNode.style.opacity=a?"1":"0",a?this._iframeNode.style.removeProperty("pointer-events"):this._iframeNode.style.pointerEvents="none",a?this._iframeNode.style.removeProperty("touch-action"):this._iframeNode.style.touchAction="none",a?this._iframeNode.style.zIndex="1000000":this._iframeNode.style.zIndex="-1000000",a?this._iframeNode.style.transition="opacity 0.2s ease":this._iframeNode.style.transition="opacity 0.2s ease, z-index 0s linear 0.2s"))}get usePopup(){return this._usePopup}setUsePopup(a){a!==this._usePopup&&(this._usePopup=a,this.emit("builtin",{usePopup:a}))}get requirePopup(){return this._requirePopup}setRequirePopup(a){a!==this._requirePopup&&(this._requirePopup=a,this.emit("builtin",{requirePopup:a}))}get keepPopup(){return this._keepPopup}set keepPopup(a){this._keepPopup=a,this.emit("builtin",{keepPopup:a}),a||this.closePopup(),a&&this.openPopup(!0)}destructor(a){this.closeIframe(),this.closePopup(!0),window.removeEventListener("message",this.listener)}postMessage(a,b){let c=this._promiseController.newMessagePromise(a,b).finally(()=>this.completeRequest());return this.deliverMessage(a),c}openIframe(){if(this._iframeEl)return;this._iframeNode=document.createElement("div"),this._iframeEl=document.createElement("iframe"),this._iframeEl.src=this._url.toString(),this._iframeEl.allow="usb; camera; payment; web-share",this._iframeEl.style.border="none",this._iframeParentNode||(this._iframeEl.width="400",this._iframeEl.height="600",this._iframeEl.style.borderRadius="8px",this._iframeEl.style.maxWidth="100%",this._iframeEl.style.maxHeight="100%",this._iframeNode.style.position="fixed",this._iframeNode.style.inset="0",this._iframeNode.style.display="flex",this._iframeNode.style.alignItems="center",this._iframeNode.style.justifyContent="center",this._iframeNode.style.background="#00000088",this._iframeNode.style.opacity="0",this._iframeNode.style.pointerEvents="none",this._iframeNode.style.touchAction="none",this._iframeNode.style.zIndex="-1000000",this._iframeNode.style.transition="opacity 0.2s ease, z-index 0s linear 0.2s"),this._iframeNode.appendChild(this._iframeEl);let b=new Promise((a,b)=>this._iframe={resolve:a,reject:b});this._iframe.promise=b;let a=()=>{var a;this._iframeParentNode?this._iframeParentNode.appendChild(this._iframeNode):document.body.appendChild(this._iframeNode),this._iframe.window=null===(a=this._iframeEl)|| void 0===a?void 0:a.contentWindow};"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)}closeIframe(){var a,b,d,c;null===(a=this._iframeEl)|| void 0===a||a.setAttribute("src","about:blank"),null===(b=this._iframeNode)|| void 0===b||b.remove(),this._iframeNode=void 0,this._iframeEl=void 0,null===(c=(d=this._iframe).reject)|| void 0===c||c.call(d),this._iframe={}}openPopup(a){if(this._popup.window&&!this._popup.window.closed){this._popup.window.focus();return}if(!this.usePopup&&!a)return;window.name="parent";let c=window.open(this._url.toString(),"_blank","location,resizable,scrollbars,width=400,height=600"),b=new Promise((a,b)=>this._popup={window:c,resolve:a,reject:b});this._popup.promise=b;let d=setInterval(()=>{(!this._popup.window||this._popup.window.closed)&&(this.keepPopup&&(this.keepPopup=!1),clearInterval(d))},200)}closePopup(d){var a,c,b;this._popup.window&&(null===(a=this._popup.window)|| void 0===a||!a.closed)&&(!this.keepPopup&&!this.requirePopup||d)&&(this._popup.window.location.href="about:blank",this._popup.window.close(),null===(b=(c=this._popup).reject)|| void 0===b||b.call(c),this._popup={})}completeRequest(){setTimeout(()=>{!this._pending.length&&(this.closePopup(),this.showIframe=!1)},100)}deliverMessage(c,e){var a,b;if(!this._url)throw"Missing URL";console.info("WalletConnector:post",c);let d=Object.assign(Object.assign({},c),{jsonrpc:"2.0"});null!=d.id&&this._pending.push(d.id),this.openIframe(),this._iframe.promise=null===(a=this._iframe.promise)|| void 0===a?void 0:a.then(()=>{var a;return null===(a=this._iframe.window)|| void 0===a?void 0:a.postMessage(d,this._url.origin,(null==e?void 0:e.transfer)?[d]:void 0)}).catch(()=>{}),this.openPopup(),this._popup.promise=null===(b=this._popup.promise)|| void 0===b?void 0:b.then(()=>{var a;return null===(a=this._popup.window)|| void 0===a?void 0:a.postMessage(d,this._url.origin,(null==e?void 0:e.transfer)?[d]:void 0)}).catch(()=>{})}}let l,m=[],n={},o={};function p(){for(let b of m)for(let a in b.namespaces)(!n[a]||n[a]===b)&&window[a]!==b.namespaces[a]&&(o[a]=window[a],window[a]=b.namespaces[a],n[a]=b);window.clearInterval(l),m.length&&(l=setInterval(()=>p(),1e4))}var q=function(b,c,a,d){return new(a||(a=Promise))(function(f,g){function h(a){try{e(d.next(a))}catch(b){g(b)}}function i(a){try{e(d.throw(a))}catch(b){g(b)}}function e(b){var c;b.done?f(b.value):((c=b.value)instanceof a?c:new a(function(a){a(c)})).then(h,i)}e((d=d.apply(b,c||[])).next())})};class c extends b{constructor(b,a){super(),this._session=0,this._listener=d=>{let{method:b,params:c,session:a}=d;if((null==a||this._session==a)&&(a||!this._session)){if("connect"===b){if(!(0,h.is)(c,a=>{var b;return"string"!=typeof(b=a)?{}:null}))return;this.setAddress(c)}"disconnect"===b&&this.disconnectEvent(!1)}},this._appInfo=b,this._emitterPassthrough=b=>{let a=Object.entries(b)[0];this.emit(a[0],a[1])},this.on("connect",()=>{var a;return a=this,void(a.namespaces&&(m.find(b=>b===a)||m.push(a),p()))}),this.on("disconnect",()=>(function(b){if(!m.find(a=>a===b))return p();for(let a in m.splice(m.indexOf(b),1),b.namespaces)n[a]===b&&(window[a]=o[a],delete o[a],delete n[a]);p()})(this)),a&&this.setUrl(a)}get address(){return this._address}setAddress(a){(!a||a!==this.address)&&(this._address=a,null!=a?this.emit("connect",a):this.emit("disconnect",a),this.emit("change",a))}get connected(){return null!=this._address}get url(){var a;return null===(a=this._bridge)|| void 0===a?void 0:a.url}get showIframe(){var a;return(null===(a=this._bridge)|| void 0===a?void 0:a.showIframe)||!1}get usePopup(){var a;return(null===(a=this._bridge)|| void 0===a?void 0:a.usePopup)||!1}get requirePopup(){var a;return(null===(a=this._bridge)|| void 0===a?void 0:a.requirePopup)||!1}get keepPopup(){var a;return(null===(a=this._bridge)|| void 0===a?void 0:a.keepPopup)||!1}set keepPopup(a){this._bridge&&(this._bridge.keepPopup=a)}setUrl(h){var f,d;if(!window){console.error("Window context missing. If you are using a server side rendering framework, make sure that the connector is excluded. If you want to use the connector outside the browser, use the node version of the module instead");return}let a=this._bridge,b="object"==typeof(d=h)?d:(d.includes("://")||(d="https://"+d),new URL(d));if(this._url=b,(null===(f=this._bridge)|| void 0===f?void 0:f.url)!==b.origin){if(this.disconnect(),c._bridges[b.origin]){this._bridge=c._bridges[b.origin].bridge;let g=c._bridges[b.origin].sessions;for(let e=0;e<=g.length;e++)if(0>g.indexOf(e)){this._session=e;break}}else this._bridge=new k(b,this._appInfo),c._bridges[b.origin]={bridge:this._bridge,sessions:[]};c._bridges[b.origin].sessions.push(this._session),this._bridge.on("message",this._listener),this._bridge.on("builtin",this._emitterPassthrough),this._bridge.showIframe!==(null==a?void 0:a.showIframe)&&this.emit("showIframe",this._bridge.showIframe),this._bridge.usePopup!==(null==a?void 0:a.usePopup)&&this.emit("usePopup",this._bridge.usePopup),this._bridge.requirePopup!==(null==a?void 0:a.requirePopup)&&this.emit("requirePopup",this._bridge.requirePopup),this._bridge.keepPopup!==(null==a?void 0:a.keepPopup)&&this.emit("keepPopup",this._bridge.keepPopup)}}connect(a){return q(this,void 0,void 0,function*(){!this._bridge&&this._url&&this.setUrl(this._url);let b=new Promise((a,b)=>{this.once("change",c=>c?a(c):b())}).finally(()=>{var a;return null===(a=this._bridge)|| void 0===a?void 0:a.completeRequest()});return this._bridge.deliverMessage({method:"connect",params:a}),b})}disconnect(a){return q(this,void 0,void 0,function*(){return this.disconnectEvent(!0,a)})}disconnectEvent(a,b){return q(this,void 0,void 0,function*(){if(!this._bridge)return;let d=this._bridge,f=this._session,e=d.url;if(this.setAddress(void 0),this._bridge=void 0,this._session=0,a)try{yield d.postMessage({method:"disconnect",params:[b],session:f})}catch(g){console.warn("disconnect request failed")}d.off("message",this._listener),d.off("builtin",this._emitterPassthrough),c._bridges[e].sessions=c._bridges[e].sessions.filter(a=>a!=f),setTimeout(()=>{!c._bridges[e].sessions.length&&(c._bridges[e].bridge.destructor(),delete c._bridges[e])},100)})}postMessage(a,b,c){return new Promise((e,d)=>{if(!this._bridge)return d("URL missing");this.once("disconnect",d),this._bridge.postMessage({method:a,params:b,session:this._session,protocol:null==c?void 0:c.protocol,version:null==c?void 0:c.version},c).then(e).catch(d)})}}c._bridges={};let r=(e=c,class extends e{constructor(...a){super(...a),this.namespaces={arweaveWallet:{walletName:"ArConnect",connect:()=>this.address||this.connect(),disconnect:()=>this.disconnect(),getActiveAddress:()=>this.address,getActivePublicKey:()=>this.getPublicKey(),getAllAddresses(){throw"not implemented"},getWalletNames(){throw"not implemented"},sign:(a,b)=>this.signTransaction(a,b),dispatch:(a,b)=>this.dispatch(a,b),encrypt(){throw"not implemented"},decrypt:(a,b)=>this.decrypt(a,b),getPermissions:()=>["ACCESS_ADDRESS","ACCESS_PUBLIC_KEY","ACCESS_ALL_ADDRESSES","SIGN_TRANSACTION","ENCRYPT","DECRYPT","SIGNATURE","ACCESS_ARWEAVE_CONFIG","DISPATCH",],getArweaveConfig:()=>this.getArweaveConfig()}}}postMessage(a,b,c){return super.postMessage(a,b,Object.assign(Object.assign({},c),{protocol:"arweave",version:"1.0.0"}))}getPublicKey(){return i(this,void 0,void 0,function*(){let a=yield this.postMessage("getPublicKey");if(!(0,h.is)(a,a=>{var b;return"string"!=typeof(b=a)?{}:null}))throw"TypeError";return a})}getArweaveConfig(){return i(this,void 0,void 0,function*(){let a=yield this.postMessage("getArweaveConfig");if(!(0,h.is)(a,a=>{function b(a){return void 0!==a?{}:null}function c(a){return"string"!=typeof a?{}:null}function d(a){for(let d of[b,c])if(!d(a))return null;return{}}function e(a){return"number"!=typeof a?{}:null}function f(a){return!1!==a?{}:null}function g(a){return!0!==a?{}:null}function h(h){if("object"!=typeof h||null===h||Array.isArray(h))return{};if("protocol"in h){var a=d(h.protocol);if(a)return a}if("host"in h){var a=d(h.host);if(a)return a}if("port"in h){var a=function(a){for(let d of[b,c,e])if(!d(a))return null;return{}}(h.port);if(a)return a}if("timeout"in h){var a=function(a){for(let c of[b,e])if(!c(a))return null;return{}}(h.timeout);if(a)return a}if("logging"in h){var a=function(a){for(let c of[b,f,g])if(!c(a))return null;return{}}(h.logging);if(a)return a}return null}function i(a){if("object"!=typeof a||null===a||Array.isArray(a))return{};if("logger"in a){var b=(a.logger,null);if(b)return b}return null}return function(b){for(let c of[h,i]){var a=c(b);if(a)return a}return null}(a)}))throw"TypeError";return delete a.logger,a})}signTransaction(a,b){var c;return i(this,void 0,void 0,function*(){let{data:f,chunks:i}=a,e=j(a,["data","chunks"]),d=yield this.postMessage("signTransaction",[e,b]);if(!(0,h.is)(d,a=>{function b(a){return"string"!=typeof a?{}:null}function c(a){return void 0!==a?{}:null}function d(a){return null!==a?{}:null}function e(a){for(let e of[c,d,b])if(!e(a))return null;return{}}function f(a){if("object"!=typeof a||null===a||Array.isArray(a)||!("name"in a))return{};var c=b(a.name);if(c)return c;if(!("value"in a))return{};var c=b(a.value);return c?c:null}function g(a){if(!Array.isArray(a))return{};for(let b=0;b<a.length;b++){var c=f(a[b]);if(c)return c}return null}return function(f){if("object"!=typeof f||null===f||Array.isArray(f)||!("id"in f))return{};var a=b(f.id);if(a)return a;if("owner"in f){var a=e(f.owner);if(a)return a}if("tags"in f){var a=function(a){for(let b of[c,d,g])if(!b(a))return null;return{}}(f.tags);if(a)return a}if(!("signature"in f))return{};var a=b(f.signature);if(a)return a;if("reward"in f){var a=e(f.reward);if(a)return a}return null}(a)}))throw"TypeError";return a.setSignature({id:d.id,owner:d.owner||a.owner,tags:null===(c=d.tags)|| void 0===c?void 0:c.map(a=>new g.Tag(a.name,a.value,!0)),signature:d.signature,reward:d.reward||void 0}),a})}dispatch(a,b){return i(this,void 0,void 0,function*(){let c=yield this.postMessage("dispatch",[a,b],{transfer:!0});if(!(0,h.is)(c,a=>{function b(a){return"BASE"!==a?{}:null}function c(a){return"BUNDLED"!==a?{}:null}return function(a){if("object"!=typeof a||null===a||Array.isArray(a))return{};if("id"in a){var e,d="string"!=typeof(e=a.id)?{}:null;if(d)return d}if("type"in a){var d=function(a){for(let d of[b,c])if(!d(a))return null;return{}}(a.type);if(d)return d}return null}(a)}))throw"TypeError";return c})}decrypt(a,b){return i(this,void 0,void 0,function*(){let c=yield this.postMessage("decrypt",[a,b]);if(!ArrayBuffer.isView(c))throw"TypeError";let d=a.constructor;return new d(c.buffer)})}})}}])