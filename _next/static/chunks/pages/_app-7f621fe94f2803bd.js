(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2522)}])},1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},2522:function(f,b,a){"use strict";function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a.r(b),a.d(b,{default:function(){return p}});var h=a(5893);a(906);var i=a(7568),c=a(4051),j=a.n(c),d=a(1664),k=a.n(d),e=a(7911),l=a.n(e),m=a(7294),n=function(a){var b,c=(b=(0,i.Z)(j().mark(function b(){var c;return j().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!a.loggedIn){b.next=4;break}null===(c=window.arweaveWallet)|| void 0===c||c.disconnect(),a.setAddress(""),b.next=11;break;case 4:if(void 0!=window.arweaveWallet){b.next=8;break}alert("Arconnect not installed. Go to https://arconnnect.io to get started."),b.next=11;break;case 8:return b.next=10,window.arweaveWallet.connect(["ACCESS_ADDRESS","SIGN_TRANSACTION"]);case 10:window.arweaveWallet.getActiveAddress().then(function(b){a.setAddress(b)}).catch(function(a){console.log(a)});case 11:case"end":return b.stop()}},b)})),function(){return b.apply(this,arguments)});return(0,m.useEffect)(function(){setTimeout(function(){var b;null===(b=window.arweaveWallet)|| void 0===b||b.getActiveAddress().then(function(b){b&&a.setAddress(b)}).catch(function(){a.setAddress("")})},0)}),(0,h.jsx)("div",{className:l().login_text,onClick:c,children:a.loggedIn?"Logout":"Login"})},o=function(){var a=(0,m.useState)(""),b=a[0],c=a[1];return(0,h.jsxs)("nav",{className:l().nav_cont,children:[(0,h.jsx)(k(),{href:"/",children:(0,h.jsx)("h1",{className:l().title_link,children:"3cards"})}),(0,h.jsxs)("div",{className:l().nav_right,children:[(0,h.jsx)(k(),{href:"/sets",children:(0,h.jsx)("p",{children:"Find Sets"})}),function(){if(""!==b)return(0,h.jsx)(k(),{href:{pathname:"/sets",query:{owner:b}},children:(0,h.jsx)("p",{children:"My Sets"})})}(),(0,h.jsx)(k(),{href:"/create",children:(0,h.jsx)("p",{children:"Create Set"})}),(0,h.jsx)(n,{loggedIn:Boolean(b),setAddress:c})]})]})},p=function(a){var b=a.Component,c=a.pageProps;return(0,h.jsxs)("div",{children:[(0,h.jsx)(o,{}),(0,h.jsx)(b,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){g(d,a,c[a])})}return d}({},c))]})}},7911:function(a){a.exports={nav_cont:"Nav_nav_cont__ATXUg",title_link:"Nav_title_link__x_aST",nav_right:"Nav_nav_right__0XlU_",login_text:"Nav_login_text__YBgOy"}},906:function(){},1664:function(a,c,b){a.exports=b(8418)},7568:function(c,a,b){"use strict";function d(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(f,g){var h=a.apply(b,c);function e(a){d(h,f,g,e,i,"next",a)}function i(a){d(h,f,g,e,i,"throw",a)}e(void 0)})}}b.d(a,{Z:function(){return e}})}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(387)}),_N_E=a.O()}])