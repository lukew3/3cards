(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{7532:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return c(8194)}])},8194:function(i,b,a){"use strict";a.r(b),a.d(b,{default:function(){return v}});var j=a(7568);function k(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function l(a){return function(a){if(Array.isArray(a))return k(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,c){if(a){if("string"==typeof a)return k(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return k(a,c)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(4051),m=a.n(c),n=a(5893),d=a(9008),o=a.n(d),e=a(1163),p=a.n(e),f=a(7386),q=a.n(f),r=a(7294),g=a(1658),s=a.n(g),t=function(a){return(0,n.jsxs)("div",{className:s().term,children:[(0,n.jsxs)("div",{className:s().term_header,children:[(0,n.jsx)("div",{children:a.id+1}),(0,n.jsxs)("div",{className:s().term_ops,children:[(0,n.jsx)("div",{onClick:function(){return a.incTermPos(a.id)},children:"\u2193"}),(0,n.jsx)("div",{onClick:function(){return a.decTermPos(a.id)},children:"\u2191"}),(0,n.jsx)("div",{onClick:function(){return a.deleteTerm(a.id)},children:"X"})]})]}),(0,n.jsxs)("div",{className:s().term_input,children:[(0,n.jsx)("input",{type:"text",placeholder:"Term",onChange:function(b){return a.setTermValue(a.id,b.target.value)},value:a.termPair[0]}),(0,n.jsx)("input",{type:"text",placeholder:"Definition",onChange:function(b){return a.setDefValue(a.id,b.target.value)},value:a.termPair[1]})]})]})},h=a(5399),u=a.n(h),v=function(){var c,g=q().init({}),a=(0,r.useState)(""),d=a[0],h=a[1],b=(0,r.useState)([["",""],["",""]]),e=b[0],i=b[1],f=(c=(0,j.Z)(m().mark(function a(){var b,c;return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=e.filter(function(a){return""!==a[0]&&""!==a[1]}),console.log(JSON.stringify(b)),a.next=4,g.createTransaction({data:JSON.stringify(b)});case 4:return(c=a.sent).addTag("App-Name","3cards"),c.addTag("Title",d),c.addTag("Content-Type","application/json"),c.addTag("Version","0.0.2"),a.next=11,g.transactions.sign(c);case 11:return a.next=13,g.transactions.post(c);case 13:console.log(c.id),p().push({pathname:"/set"});case 15:case"end":return a.stop()}},a)})),function(){return c.apply(this,arguments)}),k=function(a){i(function(b){return l(b.slice(0,a)).concat(l(b.slice(a+1)))})},s=function(b,c){var a=l(e);a[b][0]=c,i(a)},v=function(b,c){var a=l(e);a[b][1]=c,i(a)},w=function(b,c){var a=l(e),d=a[b];a[b]=a[c],a[c]=d,i(a)},x=function(a){a<e.length-1&&w(a,a+1)},y=function(a){a>0&&w(a,a-1)};return(0,n.jsxs)("div",{className:u().container,children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Create Set - 3cards"}),(0,n.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:u().main,children:[(0,n.jsx)("h3",{children:"Create Set"}),(0,n.jsx)("input",{className:u().title_input,type:"text",placeholder:"Title",value:d,onChange:function(a){return h(a.target.value)}}),(0,n.jsxs)("div",{className:u().terms,children:[e.map(function(b,a){return(0,n.jsx)(t,{id:a,termPair:e[a],setTermValue:s,setDefValue:v,deleteTerm:k,incTermPos:x,decTermPos:y},a)}),(0,n.jsx)("div",{className:u().addItem,tabIndex:0,onClick:function(){i(function(a){return l(a).concat([["",""]])})},children:(0,n.jsx)("p",{children:"Add item +"})}),(0,n.jsx)("div",{className:u().publish_button,onClick:f,children:"Publish"})]})]})]})}},5399:function(a){a.exports={container:"Create_container___ggYn",main:"Create_main__RCqeV",title_input:"Create_title_input__YVpVY",terms:"Create_terms__8ve4n",addItem:"Create_addItem__xL3hK",publish_button:"Create_publish_button__iTGRI"}},1658:function(a){a.exports={term:"Term_term__66Hxs",term_header:"Term_term_header__u0vGY",term_ops:"Term_term_ops__UOErV",term_input:"Term_term_input__cKNXt"}}},function(a){a.O(0,[468,774,888,179],function(){var b;return a(a.s=7532)}),_N_E=a.O()}])