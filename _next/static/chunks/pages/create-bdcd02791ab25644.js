(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{7532:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return r(6810)}])},6810:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r(7568);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r(4051),o=r.n(s),l=r(5893),c=r(9008),u=r.n(c),_=r(1163),d=r.n(_),p=r(7386),m=r.n(p),h=r(7294),f=r(8650),x=r.n(f),v=function(e){return(0,l.jsxs)("div",{className:x().term,children:[(0,l.jsxs)("div",{className:x().term_header,children:[(0,l.jsx)("div",{children:e.id+1}),(0,l.jsxs)("div",{className:x().term_ops,children:[(0,l.jsx)("div",{onClick:function(){return e.incTermPos(e.id)},title:"Move term down",children:"\u2193"}),(0,l.jsx)("div",{onClick:function(){return e.decTermPos(e.id)},title:"Move term up",children:"\u2191"}),(0,l.jsx)("div",{onClick:function(){return e.deleteTerm(e.id)},title:"Delete term",children:"X"})]})]}),(0,l.jsxs)("div",{className:x().term_input,children:[(0,l.jsxs)("div",{className:x().term_input_half,children:[(0,l.jsx)("textarea",{placeholder:"Term",className:x().text_area,value:e.termPair[0],onChange:function(t){e.setTermValue(e.id,t.target.value),t.target.style.height="1px",t.target.style.height=t.target.scrollHeight+"px"}}),(0,l.jsx)("p",{children:"Term"})]}),(0,l.jsxs)("div",{className:x().term_input_half,children:[(0,l.jsx)("textarea",{placeholder:"Definition",className:x().text_area,value:e.termPair[1],onChange:function(t){e.setDefValue(e.id,t.target.value),t.target.style.height="1px",t.target.style.height=t.target.scrollHeight+"px"}}),(0,l.jsx)("p",{children:"Definition"})]})]})]})},g=r(8949),j=r.n(g),b=function(e){var t=(0,h.useState)(""),r=t[0],n=t[1],a=(0,h.useState)("\t"),i=a[0],s=a[1],o=(0,h.useState)("\n"),c=o[0],u=o[1];return(0,l.jsx)("div",{className:j().background,children:(0,l.jsxs)("div",{className:j().floater,children:[(0,l.jsx)("div",{className:j().close_button,onClick:e.closeImport,children:"X"}),(0,l.jsx)("h3",{children:"Import"}),(0,l.jsx)("textarea",{className:j().text_area,placeholder:"Input",onChange:function(e){return n(e.target.value)}}),(0,l.jsxs)("div",{className:j().seperators_group,children:[(0,l.jsxs)("div",{className:j().seperators_item,children:[(0,l.jsx)("label",{children:"Term and Definition Seperator:"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"text",placeholder:"\\t",className:j().seperator_input,onChange:function(e){return s(e.target.value)}})]}),(0,l.jsxs)("div",{className:j().seperators_item,children:[(0,l.jsx)("label",{children:"Cards Seperator:"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"text",placeholder:"\\n",className:j().seperator_input,onChange:function(e){return u(e.target.value)}})]})]}),(0,l.jsx)("div",{className:j().import_button,onClick:function(){var t=r.split(c),n=[];t.forEach((function(e){n.push(e.split(i))})),e.setTerms(n),e.closeImport()},children:"Import"})]})})},C=r(5399),N=r.n(C),T=function(){var e=m().init({}),t=(0,h.useState)(""),r=t[0],a=t[1],s=(0,h.useState)([["",""],["",""]]),c=s[0],_=s[1],p=(0,h.useState)(!1),f=p[0],x=p[1],g=function(){var t=(0,n.Z)(o().mark((function t(){var n,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==r){t.next=3;break}return alert("Please give your set a title"),t.abrupt("return");case 3:return n=c.filter((function(e){return""!==e[0]&&""!==e[1]})),console.log(JSON.stringify(n)),t.next=7,e.createTransaction({data:JSON.stringify(n)});case 7:return(a=t.sent).addTag("App-Name","3cards"),a.addTag("Title",r),a.addTag("Content-Type","application/json"),a.addTag("Version","0.0.2"),t.prev=12,t.next=15,window.arweaveWallet.dispatch(a);case 15:i=t.sent,d().push({pathname:"/set",query:{tx_id:i.id}}),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(12),console.log(t.t0),alert("Could not publish set. Are you logged in?");case 23:case"end":return t.stop()}}),t,null,[[12,19]])})));return function(){return t.apply(this,arguments)}}(),j=function(e){_((function(t){return i(t.slice(0,e)).concat(i(t.slice(e+1)))}))},C=function(e,t){var r=i(c);r[e][0]=t,_(r)},T=function(e,t){var r=i(c);r[e][1]=t,_(r)},y=function(e,t){var r,n=i(c);r=[n[t],n[e]],n[e]=r[0],n[t]=r[1],_(n)},I=function(e){e<c.length-1&&y(e,e+1)},k=function(e){e>0&&y(e,e-1)};return(0,l.jsxs)("div",{className:N().container,children:[(0,l.jsxs)(u(),{children:[(0,l.jsx)("title",{children:"Create Set - 3cards"}),(0,l.jsx)("meta",{name:"description",content:"Create a flash card set with 3cards"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{className:N().main,children:[(0,l.jsx)("h3",{children:"Create Set"}),(0,l.jsx)("div",{className:N().import_button,onClick:function(){return x(!0)},children:"Import"}),f?(0,l.jsx)(b,{closeImport:function(){return x(!1)},setTerms:_}):null,(0,l.jsxs)("div",{className:N().title_group,children:[(0,l.jsx)("input",{className:N().title_input,type:"text",placeholder:"Title",value:r,onChange:function(e){return a(e.target.value)}}),(0,l.jsx)("p",{children:"Title"})]}),(0,l.jsxs)("div",{className:N().terms,children:[c.map((function(e,t){return(0,l.jsx)(v,{id:t,termPair:c[t],setTermValue:C,setDefValue:T,deleteTerm:j,incTermPos:I,decTermPos:k},t)})),(0,l.jsx)("div",{className:N().addItem,tabIndex:0,onClick:function(){_((function(e){return i(e).concat([["",""]])}))},children:(0,l.jsx)("p",{children:"Add item +"})}),(0,l.jsx)("div",{className:N().publish_button,onClick:g,children:"Publish"})]})]})]})}},5399:function(e){e.exports={container:"Create_container___ggYn",main:"Create_main__RCqeV",title_group:"Create_title_group__1DAWZ",title_input:"Create_title_input__YVpVY",import_button:"Create_import_button__NJuai",terms:"Create_terms__8ve4n",addItem:"Create_addItem__xL3hK",publish_button:"Create_publish_button__iTGRI"}},8650:function(e){e.exports={term:"CreateTerm_term__BtLor",term_header:"CreateTerm_term_header__uV0bH",term_ops:"CreateTerm_term_ops__N1w_C",term_input:"CreateTerm_term_input__aMeQU",term_input_half:"CreateTerm_term_input_half__Pb_TO",text_area:"CreateTerm_text_area__bTP7u"}},8949:function(e){e.exports={background:"ImportFloater_background__b_5Vc",floater:"ImportFloater_floater__2P3C_",close_button:"ImportFloater_close_button__5S_pb",text_area:"ImportFloater_text_area__mW2Ud",seperators_group:"ImportFloater_seperators_group__L28MW",seperators_item:"ImportFloater_seperators_item___lefW",seperator_input:"ImportFloater_seperator_input__Eyy3H",import_button:"ImportFloater_import_button__Uxl9k"}},9008:function(e,t,r){e.exports=r(5443)},1163:function(e,t,r){e.exports=r(387)}},function(e){e.O(0,[797,774,888,179],(function(){return t=7532,e(e.s=t);var t}));var t=e.O();_N_E=t}]);